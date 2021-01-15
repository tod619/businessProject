// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar') 

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End Navbar

// Start video player
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar') 

const playPause = () => {

    if(video.paused) {
        video.play()
        btn.className = 'fas fa-pause-circle'
        video.style.opacity = '0.7'
    } else {

        video.pause()
        btn.className = 'fas fa-play-circle'
        video.style.opacity = '0.3'
    }
    
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    // console.log(video.currentTime, video.duration)
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'fas fa-play-circle'
        video.style.opacity = '0.3'
        bar.style.width = '0'
    }
    
})
// End video player