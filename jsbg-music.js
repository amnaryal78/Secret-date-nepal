// Romantic Background Music Logic
const bgAudio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-ambient-112222.mp3');
bgAudio.loop = true;
bgAudio.volume = 0.4;

export function initMusicToggle() {
    const musicCheck = document.getElementById('music-toggle');
    const musicInfo = document.getElementById('music-info-box');

    if (musicCheck) {
        musicCheck.addEventListener('change', (e) => {
            if (e.target.checked) {
                bgAudio.play().catch(() => alert("Click page first to play music!"));
                musicInfo.classList.add('playing');
            } else {
                bgAudio.pause();
                musicInfo.classList.remove('playing');
            }
        });
    }
}