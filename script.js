const portfolioItems = [
    {
        title: "Project One",
        description: "A reflective web app with chrome animations.",
        image: "https://via.placeholder.com/400x300?text=Project+1",
        height: "h-96",
    },
    {
        title: "Project Two",
        description: "Shiny dashboard with chrome effects.",
        image: "https://via.placeholder.com/400x400?text=Project+2",
        height: "h-112",
    },
    {
        title: "Project Three",
        description: "Futuristic portfolio with metallic aesthetics.",
        image: "https://via.placeholder.com/400x250?text=Project+3",
        height: "h-80",
    },
    {
        title: "Project Four",
        description: "E-commerce platform with chrome UI.",
        image: "https://via.placeholder.com/400x350?text=Project+4",
        height: "h-88",
    },
];

function createPortfolioItem(item) {
    const card = document.createElement("div");
    card.className = `chrome rounded-lg p-6 mb-6 break-inside-avoid ${item.height} hover:scale-105 transition-transform duration-300`;
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-3/5 object-cover rounded-t-lg">
        <h3 class="text-2xl font-bold text-white mt-4">${item.title}</h3>
        <p class="text-white mt-2">${item.description}</p>
        <button class="glossy-btn text-white px-4 py-2 mt-4 rounded-full">View Project</button>
    `;
    return card;
}

function loadPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    grid.innerHTML = "";
    portfolioItems.forEach((item) => {
        const card = createPortfolioItem(item);
        grid.appendChild(card);
    });
}

function createChatMessage(message) {
    const chatContainer = document.getElementById("chat-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message";
    messageDiv.innerHTML = `<span class="font-bold">Unknown:</span> ${message}`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to bottom
}

function handleChat() {
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-message");

    sendButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            createChatMessage(message);
            chatInput.value = ""; // Clear input
        }
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const message = chatInput.value.trim();
            if (message) {
                createChatMessage(message);
                chatInput.value = ""; // Clear input
            }
        }
    });
}

function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");

    document.querySelectorAll("nav button").forEach((btn) => {
        btn.classList.remove("tab-active");
    });
    document.getElementById(`tab-${tabId}`).classList.add("tab-active");

    if (tabId === "projects") {
        loadPortfolio();
    }
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("open");
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    return true;
}

function handleContactForm() {
    const submitBtn = document.getElementById("submit-contact");
    submitBtn.addEventListener("click", () => {
        if (validateForm()) {
            alert("Message sent successfully! (Simulated)");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadPortfolio();
    handleContactForm();
    handleChat();
    document.getElementById("open-sidebar").addEventListener("click", openSidebar);
    document.getElementById("close-sidebar").addEventListener("click", closeSidebar);
    document.getElementById("tab-projects").addEventListener("click", () => showTab("projects"));
    document.getElementById("tab-skills").addEventListener("click", () => showTab("skills"));
    document.getElementById("tab-games").addEventListener("click", () => showTab("games"));
    document.getElementById("tab-chat").addEventListener("click", () => showTab("chat"));
});