const videoBox = document.querySelector('.video');
const nowTime = document.querySelector('.now-time');
const timeRange = document.querySelector('.time-range');
const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');
const volumeRange = document.querySelector('.volume-range');
const volumeLevel = document.querySelector('.volume-level');

// console.dir(videoBox);

playButton.addEventListener('click', () => {
    videoBox.play();
});
pauseButton.addEventListener('click', () => {
    videoBox.pause();
})
console.log(videoBox.duration);
console.log(videoBox.currentTime);

videoBox.addEventListener('timeupdate', () => {
    const min = Math.floor(videoBox.currentTime / 60);
    const sec = Math.floor(videoBox.currentTime % 60);
    // console.log(min);
    // console.log(sec);
    nowTime.innerHTML = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    timeRange.value = videoBox.currentTime / videoBox.duration * 100;
})

timeRange.addEventListener('input', () => {
    videoBox.currentTime = timeRange.value / 100 * videoBox.duration;
})

volumeRange.addEventListener('input', () => {
    const volume = volumeRange.value;
    videoBox.volume = volume;
    volumeLevel.innerHTML = Math.round(volume * 10);
})