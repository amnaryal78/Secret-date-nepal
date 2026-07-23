// Secret Date Countdown System
export function initDateCounter() {
    const counterEl = document.getElementById('secret-days-count');
    if (counterEl) {
        let daysLeft = localStorage.getItem('sdn_date_days') || 5;
        counterEl.innerText = `${daysLeft} Days`;
    }
}