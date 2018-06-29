//////////////////////
//		 Player		//
//////////////////////

const $player = document.querySelector('.player')
const $video = $player.querySelector('video')
const $seekBar = $player.querySelector('.seek-bar')
const $fillBar = $seekBar.querySelector('.fill-bar')

// ----------------seekBarTIME----------------------------------

$seekBar.addEventListener('mousedown', (event) => {
    // prevent default event
    event.preventDefault()

    // update current video Time
    const ratio = (event.clientX) / $seekBar.offsetWidth
    const videoTime = ratio * $video.duration

    $video.currentTime = videoTime


})


$video.addEventListener('timeupdate', () => {
    const ratio = $video.currentTime / $video.duration
    $fillBar.style.transform = `scaleX(${ratio})`;

})

$video.addEventListener('mousedown', (event) => {

    event.preventDefault()
    if ($video.paused) {
        $video.play()


    } else {
        $video.pause()
    }
})
