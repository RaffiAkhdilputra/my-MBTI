# 🧠 my-MBTI

A simple and interactive MBTI (Myers-Briggs Type Indicator) personality quiz web application. Users answer a series of questions, and the app determines their MBTI type (e.g., INFP, ESTJ) based on their choices.

🌐 **Live Demo:** [https://my-mbti.vercel.app](https://my-mbti.vercel.app)
📦 **Repository:** [https://github.com/RaffiAkhdilputra/my-MBTI](https://github.com/RaffiAkhdilputra/my-MBTI)

---

## ✨ Features

* 📝 Interactive MBTI quiz
* 🔍 Real-time scoring based on user answers
* 📱 Responsive UI (mobile + desktop)
* 🧩 Easily customizable questions and scoring logic
* 🚀 Deploy-ready (works flawlessly on Vercel)

---

## 📂 Project Structure

```
my-MBTI/
├── src/
│   ├── components/      # UI Components 
│   ├── pages/           # Main quiz pages, results, home
│   ├── data/            # Question data + MBTI definitions
│   ├── styles/          # Styling / CSS files
│   └── utils/           # Scoring logic & helpers
├── public/              # Static assets
├── package.json
└── README.md
```

> Note: Adjust slightly if your actual structure differs.

---

## 🚀 Getting Started

### **1. Clone the Repo**

```bash
git clone https://github.com/RaffiAkhdilputra/my-MBTI
cd my-MBTI
```

### **2. Install Dependencies**

```bash
npm install
# or
yarn install
```

### **3. Run Development Server**

```bash
npm run dev
# or
yarn dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the app.

### **4. Build for Production**

```bash
npm run build
npm start
```

---

## 🧩 Customization

### **Modify Questions**

Edit:

```
src/data/questions.js
```

Format suggestion:

```js
{
  question: "You gain energy by...",
  options: [
    { text: "Being around people", type: "E" },
    { text: "Being alone", type: "I" }
  ]
}
```

### **Adjust Scoring Logic**

Edit:

```
src/utils/scoring.js
```

You can change:

* dimension weight
* tie-breaker rules
* type determination steps

### **Change UI Theme**

Modify files inside:

```
src/styles/
```

---

## 🧰 Tech Stack

* Framework: **React / Next.js** (based on your project setup)
* Styling: **CSS / styled-components / TailwindCSS** (match your repo)
* Deployment: **Vercel**
* Version Control: **Git + GitHub**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes
4. Create a Pull Request

Make sure your code is clean and documented.

---

## 📬 Contact

**Raffi Akhdilputra**
GitHub: [https://github.com/RaffiAkhdilputra](https://github.com/RaffiAkhdilputra)

## 👥 Collaborator

**Hilma Zahra Qorina**
Github: 
