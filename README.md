# 🏥 Medical AI-Verified Consultation Website

This is a full-stack web application that allows patients to:
- Submit medical queries.
- Instantly receive an **AI-generated preliminary response**.
- Later receive a **verified response from a doctor**.
- Book **appointments** with doctors.
- View all updates by refreshing the page (real-time sync to be added in the future).

> 🔧 **Note:** Database integration is **not yet implemented**. Current data is stored in-memory and resets on server restart.

---

## 🚀 Features

- 🤖 AI-generated initial response to user queries.
- 👨‍⚕️ Doctors can view pending queries and verify or update AI responses.
- 👥 Patients can book appointments with doctors.
- 🔄 Refresh-based updates for responses and statuses.

---

## 📦 Technologies Used

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **AI Response:** Placeholder function (replaceable with real model or API)
- **Templating/Views:** Static HTML + dynamic rendering logic (optional)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/medical-ai-consultation.git
cd medical-ai-consultation
```
2. Install Dependencies
```bash
npm install
3. Start the Server
```
```bash
nodemon server.js
```
You should see:
```bash
Server running on http://localhost:3000
```
4. Open in Your Browser
Visit: http://localhost:3000

``` 📁 Project Structure
medical-ai-consultation/
├── public/
│   ├── index.html          # Patient interface
│   ├── doctor.html         # Doctor dashboard
│   ├── style.css
│   └── script.js
├── server.js               # Express backend server
├── package.json
└── README.md
```
⚠️ Known Limitations
❌ No persistent database — all data resets on server restart.

📡 No real-time updates yet (refresh needed to fetch latest doctor responses).

🧠 Future Plans
Integrate MongoDB/PostgreSQL for persistent storage.

Add authentication (JWT or session-based).

Enable real-time updates with WebSockets or polling.

Improve UI/UX for both doctors and patients.

📬 Contributions
Pull requests are welcome! Feel free to fork and submit improvements or bug fixes. For major changes, open an issue first to discuss what you'd like to change.

📄 License
MIT License

Made with ❤️ for improving doctor-patient interactions using AI.







