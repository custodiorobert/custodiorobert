const messages = document.getElementById("messages");

// Welcome message
window.onload = () => {
  typeBotMessage(
    "Hi! 👋 I'm AI chatbot. Use the buttons or type a question."
  );
};

// Send message (from input or buttons)
function sendMessage(text = null) {
  const input = document.getElementById("userInput");
  const userMessage = text || input.value;

  if (!userMessage) return;

  addUserMessage(userMessage);
  input.value = "";

  const reply = getBotReply(userMessage.toLowerCase());
  typeBotMessage(reply);
}

// User message
function addUserMessage(text) {
  messages.innerHTML += `<div class="user">${text}</div>`;
  messages.scrollTop = messages.scrollHeight;
}

// Typing animation for bot
function typeBotMessage(text) {
  let index = 0;
  const botDiv = document.createElement("div");
  botDiv.className = "bot";
  messages.appendChild(botDiv);

  const typing = setInterval(() => {
    botDiv.innerHTML += text.charAt(index);
    index++;

    if (index === text.length) {
      clearInterval(typing);
    }

    messages.scrollTop = messages.scrollHeight;
  }, 30);
}

// Bot logic
function getBotReply(userText) {

  if (userText.includes("name")) {
    return "I'm an AI chatbot created by custodio robert.";
  }

  if (userText.includes("skills")) {
    return "I work with HTML, CSS, JavaScript, and enjoy building interactive web applications.";
  }

  if (userText.includes("project")) {
    return "I've built a personal portfolio website, this chatbot, and several JavaScript projects.";
  }

  if (userText.includes("experience")) {
    return "I'm a motivated developer focused on learning and building real-world projects.";
  }

  if (userText.includes("contact") || userText.includes("email")) {
    return "You can contact me at custodiorobert79@gmail.com or 09690484074";
  }

  if (userText.includes("github")) {
    return "You can find my GitHub here: https://custodiorobert.github.com";
  }

  if (userText.includes("hi") || userText.includes("hello")) {
    return "Hello! 😊 Feel free to ask about my skills or projects.";
  }

  if (userText.includes("bye")) {
    return "Thanks for visiting my portfolio! 👋";
  }

 return "I'm not sure about that yet 🙂 Please use the buttons below or ask about my Name, Skills, Projects, Contact, or GitHub.";
}
