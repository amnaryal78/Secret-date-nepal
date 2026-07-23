// Smart AI Love Assistant Responses
const aiReplies = [
    "Compliment their smile or kindness! It creates instant warmth. ✨",
    "Active listening is the key to a romantic bond. 💖",
    "Send a sweet voice message or invite them for a Secret Ludo game! 🎲",
    "Respect their boundaries—true love blossoms with patience. 🕊️"
];

export function initAiAssistant() {
    const btn = document.getElementById('ai-send-btn');
    const input = document.getElementById('ai-input-text');
    const box = document.getElementById('ai-chat-box');

    if (btn && input && box) {
        btn.addEventListener('click', () => {
            const query = input.value.trim();
            if (!query) return;

            const userMsg = document.createElement('div');
            userMsg.style.color = '#ff3366'; userMsg.style.marginBottom = '4px';
            userMsg.innerText = `You: ${query}`;
            box.appendChild(userMsg);

            input.value = '';
            box.scrollTop = box.scrollHeight;

            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.style.color = '#00e5ff'; aiMsg.style.marginBottom = '8px';
                const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
                aiMsg.innerText = `AI 🤖: ${randomReply}`;
                box.appendChild(aiMsg);
                box.scrollTop = box.scrollHeight;
            }, 600);
        });
    }
}
