// === Gemini API ===
const API_KEY = "AIzaSyDbexKSvW-QBriahJIa8VNpJhdQp8m8JHU"
const API_URL =  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY;

// === Navbar ===
const navbar = document.querySelector("#nav-btn");
const navbarMenu = document.querySelector(".sidebar");

navbar.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
});

// === Chatroom ===
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

const sendMessage = (message) => {
    if (!message.trim()) return;

    const section = document.createElement("section");
    section.classList.add("pr-16", "pt-5", "justify-items-end", "items-end");

    const div = document.createElement("div");
    div.classList.add("user-input-container", "max-w-80", "bg-success", "px-8", "py-2", "rounded-3xl");

    const p = document.createElement("p");
    p.classList.add("user-input-message");
    p.textContent = message;

    div.appendChild(p);
    section.appendChild(div);
    chatBody.appendChild(section);

    section.scrollIntoView({ behavior: "smooth" });

    userInput.value = "";
};

document.getElementById("sendBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userInput");
    if (userInput && userInput.value.trim()) {
        let message = userInput.value;
        sendMessage(message);
        generateResponse(message);
    }
});

const fetchGeminiResponse = async (prompt) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gemini-pro",
            contents: [{
                parts: [{ text: prompt }]
            }],
            generationConfig: {
                temperature: 0.7
            }
        }),
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
        }

        try {
            const data = await response.json();
            console.log(data);
            return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa memberikan jawaban.";
        } catch (error) {
            console.error("Error parsing response:", error);
            return "Error parsing response";
        }
    } catch (error) {
        console.error("Error fetching response:", error);
        return `Error fetching response: ${error.message}`;
    }
};


const generateResponse = async (prompt) => {
    if (!chatBody) return;

    const section = document.createElement("section");
    section.classList.add("px-20", "pt-5");

    const div = document.createElement("div");
    div.classList.add("response-container", "flex", "flex-row", "gap-2");

    const span = document.createElement("span");
    span.classList.add("bg-primary", "w-10", "h-10", "rounded-full", "text-center", "flex", "items-center", "justify-center");
    span.innerHTML = '<i class="fa-solid fa-robot"></i>';

    const loading = document.createElement("span");
    loading.classList.add("loading", "loading-ring", "loading-xl");

    div.appendChild(span);
    div.appendChild(loading);
    section.appendChild(div);
    chatBody.appendChild(section);

    section.scrollIntoView({ behavior: "smooth" });

    const responseText = await fetchGeminiResponse(prompt);
    await new Promise((resolve) => setTimeout(resolve, 500)); // efek loading 1 detik
    
    div.removeChild(loading);
    
    const p = document.createElement("p");
    p.classList.add("response-message", "max-w-120", "bg-primary", "px-8", "py-2", "rounded-3xl");
    p.textContent = responseText;
    div.appendChild(p);
    
    section.scrollIntoView({ behavior: "smooth" });

};

// === Input ===
const inputComponentText = document.querySelector(".input-component-textarea");
const inputComponentBtn = document.querySelector(".input-component-button");
const inputComponentRadio = document.querySelector(".input-component-radio");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    inputComponentRadio.classList.remove("hidden");    

    // Sementara Pake timer tapi nanti bakal diapus kalo quiz MBTI nya udh selesai
    setTimeout(() => { 
        inputComponentRadio.classList.add("hidden");  
        inputArea.classList.remove("flex-wrap");
        inputComponentText.classList.remove("hidden");
        inputComponentBtn.classList.remove("hidden");
    }, 3000);
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let message = userInput.value;
        sendMessage(message);
        generateResponse(message);
    }
});