import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { marked } from "marked";
import path from "path";
import {fileURLToPath } from "url";
import axios from "axios";
import OpenAI from "openai";
import  dotenv  from "dotenv";
import session from "express-session";
import { get } from "http";

dotenv.config();
console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});
const { Pool } = pg;
const port = 3000;
const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "MedPlatform",
    password: "HareKrishnaHareKrishna123!",
    port: 5432
    });
pool.connect().then(() => console.log('Connected to the database'))
.catch((err)=> console.error("Error in connecting to the database :",err));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const API_URL = "https://api-inference.huggingface.co/models/google/gemma-3-27b-it";
const API_KEY = "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";
app.use(
    session({
      secret: "HareKrishnaHareKrishna123!",          
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,  // 2 hours
      },
    })
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"views")));

async function getResponseFor (userQuery)
{
    if (!userQuery) {
            throw new Error("Invalid user querry. Please provide a valid string.");
        }
    try {
        //console.log({ inputs: userQuery });
        //const response = await axios.post(API_URL, { inputs: userQuery }, { headers: {Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json',},});
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content:userQuery}],
        });
        const result = completion.choices[0].message.content;
        if (Array.isArray(result) && result[0].generated_text)
        {
            return result[0].generated_text
        }
        else 
        {
            throw new Error("Unexpected API response format.");
        }
    } catch (error)
    {
        console.error(`Error fetching api response: ${error.message}`);
        return(`Error: ${error.message}`);
    }
    
}

async function getQuerriesOf (patientId)
{
    const result = await pool.query("SELECT (userquery, airesponse, verification) from patient_queries WHERE patientid = $1",patientId);
    return(result.rows);
}
async function getQueries () {
    const result = await pool.query("SELECT userquery, airesponse FROM patient_queries WHERE doctorverified = false");
    console.log(result);
    return(result);
}
app.get("/patient_dashboard", async (req,res) => {
    res.render("patirnt_Dashboard");
});
app.get("/doctorLogin", async (req,res) => {
    res.render("doctor_login");
});
app.get("/status_Tracker", async (req,res) => {
    res.render("statusTracker");
});
// app.get("/status_Tracker", async (req,res) => {
//     res.render("statusTracker");
// });
app.get("/appointment_maker", async (req,res) => {
    res.render("match_maker");
});
app.get("/symptom_describer", async (req,res) => {
    res.render("symptom_describer");
});
app.post("/responseWnidow", async (req,res) => {
    const userAsked = req.body.userQuery;
    if (!userAsked) {
        return res.status(400).json({ error: "Review text is required" });
    }
    try {
        console.log("User query:",userAsked)
        const aiResponse = await getResponseFor (userAsked);
        console.log(aiResponse);
        await pool.query('INSERT INTO patient_queries (userquery, airesponse) VALUES ($1, $2)', [userAsked, aiResponse]);
        console.log("Data logged successfully");
        res.json({ redirect: `/responseWindow?userAsked=${encodeURIComponent(userAsked)}&aiResponse=${encodeURIComponent(aiResponse)}`});
    } catch (error)
    {
        console.error('Error:',error.message);
        res.status(500).send('Something went wrong.');
    }
});
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(`Email : ${email}, Password: ${password}`);
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required." });
    }
  
    try {
    //   const query = "SELECT doctorid, doctorname, password FROM doctors WHERE doctorid = $1";
      const result = await pool.query("SELECT doctorid, doctorname, doctoremail, password FROM doctors WHERE doctoremail = $1",[email]);
      console.log (result.rows);  
      if (result.rows.length === 0 || result.rows[0].password !== password) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // Set user session
      req.session.userId = result.rows[0].doctorid;
      req.session.save((err) => {
        if (err) {
          console.error("Session save error:", err);
          return res.status(500).json({ message: "Failed to save session." });
        }
        console.log("User session saved:", req.session.userId);
      return res.json({ message: "Login successful" });
      });
      
    } catch (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Internal server error." });
    }
  });
app.get("/doctor_dashboard", async (req,res) => {
    if(!req.session.userId) {
        return res.status(401).send("Unauthorized access. Please log in.");   
    }
    const doctorId = req.session.email;
    const response = await pool.query("UPDATE doctors set doctor_status = true WHERE doctorid = $1", [doctorId]);
    res.render('doctor_dashboard');
});
app.get("/responseWindow", (req,res) => {
    const { userAsked, aiResponse } = req.query;
    const formattedResponse = marked.parse(aiResponse);
    res.render('responseWindow',{ userAsked, formattedResponse});
});
app.get("/queryAddresalPage", async (req,res) => {
    const query = await getQueries();
    console.log(query.rows);
    res.render("queryAddressalPlatform",{queries: query.rows});
});
app.post("/submitDoctorQuery", async (req,res) => {
    const { response, queryId } = req.body;
    const doctorId = req.session.userId;
    console.log("Doctor ID:", doctorId);
    console.log("Doctor's response:", response);
    console.log("Query:", queryId);
    if (!response) {
        return res.status(400).json({ error: "Doctor's response is required." });
    }
    try {
        await pool.query("UPDATE patient_queries SET doctorverified = true, doctorid = $1, doctorresponse = $2 WHERE querryid = $3",[doctorId,response,queryId]);
        console.log("Doctor's response logged successfully.");
        return res.status(200).json({ message: "Query resolved successfully." });
    } catch (error) {
        console.error("Error logging doctor's response:", error.message);
        res.status(500).json({ error: "Failed to log doctor's response." });
    }
});
app.get("/doctorLogout", (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Session destruction error:", err);
            return res.status(500).json({ message: "Failed to log out." });
        }
        res.redirect("/doctorLogin");
    });
});
app.get("/", async (req,res) => {
    res.render("role");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });