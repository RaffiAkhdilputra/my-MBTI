// import { GoogleGenerativeAI } from "../../node_modules/@google/generative-ai";

// GEMINI API
// const API_KEY = "AIzaSyDbexKSvW-QBriahJIa8VNpJhdQp8m8JHU";
// const genAI = new google.generativeAI.GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const chat = model.startChat({
//     model: "gemini-2.0-flash",
// });

// console.log("Chat initialized with model:", chat.model);

// NAVBAR
const navbar = document.querySelector("#nav-btn");
const navbarMenu = document.querySelector(".sidebar");

navbar.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
});

const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

const sendMessage = (message) => {
    if (!message.trim()) return;

    const section = document.createElement("section");
    section.classList.add("pr-16", "pt-5", "justify-items-end", "items-end");

    const div = document.createElement("div");
    div.classList.add("user-input-container", "max-w-80", "bg-black", "px-8", "py-2", "rounded-3xl");

    const p = document.createElement("p");
    p.classList.add("user-input-message");
    p.textContent = message;

    div.appendChild(p);
    section.appendChild(div);
    chatBody.appendChild(section);

    section.scrollIntoView({ behavior: "smooth" });

    userInput.value = "";
};

async function fetchGeminiResponse(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
        return result.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa memberikan jawaban.";
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Terjadi kesalahan saat mengambil data dari Gemini API.";
    }
}

const generateResponse = async (prompt) => {
    if (!chatBody) return;

    const section = document.createElement("section");
    section.classList.add("px-20", "pt-5");

    const div = document.createElement("div");
    div.classList.add("response-container", "flex", "flex-row", "gap-2");

    const span = document.createElement("span");
    span.classList.add("bg-black", "w-10", "h-10", "rounded-full", "text-center", "flex", "items-center", "justify-center");
    span.innerHTML = '<i class="fa-solid fa-robot"></i>';

    const loading = document.createElement("span");
    loading.classList.add("loading", "loading-ring", "loading-xl");

    div.appendChild(span);
    div.appendChild(loading);
    section.appendChild(div);
    chatBody.appendChild(section);

    
    const responseText = await fetchGeminiResponse(prompt);
    
    div.removeChild(loading);
    
    const p = document.createElement("p");
    p.classList.add("response-message", "max-w-80", "bg-black", "px-8", "py-2", "rounded-3xl");
    p.textContent = responseText;
    div.appendChild(p);
    
    section.scrollIntoView({ behavior: "smooth" });
};

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let message = userInput.value;
        sendMessage(message);
        generateResponse(message);
    }
});

document.getElementById("sendBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userInput");
    if (userInput && userInput.value.trim()) {
        let message = userInput.value;
        sendMessage(message);
        generateResponse(message);
    }
});