
# 🧠 AI Resume Analyzer || RESHUNT

The **AI Resume Analyzer** is an intelligent web app that evaluates your resume against a job description, job title, and company name to provide a score and AI-powered suggestions for improvement — all in real time.

---

## 🚀 Features

- 📄 Upload Resume (PDF format)
- 🏢 Enter Company Name, Job Title & Job Description manually
- 🤖 AI-powered feedback using smart prompts
- 📊 Resume score based on:
  - Keyword matching
  - Formatting
  - Experience relevance
- 🧠 Resume parsing with `pdfjs-dist`
- 🔐 User authentication with `puter.js`
- 🧰 Pure client-side rendering (React + Zustand)
- 📎 Future Plans:
  - Upload job description PDF
  - Real-time feedback from LinkedIn job posts via Chrome extension
  - Automated scraping of job descriptions

---

## 🛠 Tech Stack

| Technology        | Description                           |
|-------------------|---------------------------------------|
| **React 19**      | Frontend library                      |
| **Zustand**       | Lightweight state management          |
| **Tailwind CSS**  | Styling framework                     |
| **Puter.js**      | Auth & API handling abstraction       |
| **pdfjs-dist**    | PDF resume parsing                    |
| **Vite**          | Development bundler                   |
| **TypeScript**    | Type safety                           |
| **React Router v7**| Routing with build/start support     |

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhi352003/Resume-Analyzer.git
   cd resume-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Serve production build**
   ```bash
   npm start
   ```

---

## 📁 Folder Structure

```
resume-analyzer/
├── public/
├── app/
│   ├── components/
│   ├── lib/
│   ├── routes/
│   ├── store/           
│   ├── utils/           
│   └── root.tsx
|
|__types
|__ constants
├── tailwind.config.js
├── package.json
└── vite.config.ts
```

---

## 🔐 Authentication

User login and session management is handled by `puter.js`, offering built-in methods for:
- Sign In / Sign Out
- Session checks
- Secure API interactions

---

## 📌 Future Features

- [ ] Upload job description PDF and auto-analyze
- [ ] LinkedIn Chrome extension to scrape job descriptions
- [ ] Real-time feedback for LinkedIn job pages
- [ ] Export feedback as PDF
- [ ] Multi-resume comparison and history tracking






