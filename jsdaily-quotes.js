// Auto Daily Love Quotes
const quotes = [
    "Love grows where trust lives. ❤️",
    "In a world of noise, you are my sweet silence. 🌹",
    "Respect is the highest form of romantic expression. 🕊️",
    "Distance means nothing when someone means everything. 🌙",
    "A secret connection is built on pure sincerity. 💖"
];

export function renderDailyQuote() {
    const quoteEl = document.getElementById('daily-quote-text');
    if (quoteEl) {
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const todayQuote = quotes[dayOfYear % quotes.length];
        quoteEl.innerText = todayQuote;
    }
}