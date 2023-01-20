const mySong = document.getElementById('mySong');
const icon = document.getElementById('icon');

icon.addEventListener('click', function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = './SoundWebpage_img/pause.png'
    } else {
        mySong.pause();
        icon.src = './SoundWebpage_img/play.png'
    }
})