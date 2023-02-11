// Autoplay videos with id video1, video2, video3, video4 once they are loaded

var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');

video1.addEventListener('loadeddata', function() {
    video1.play();
})

video2.addEventListener('loadeddata', function() {
    video2.play();
})

video3.addEventListener('loadeddata', function() {
    video3.play();
})

video4.addEventListener('loadeddata', function() {
    video4.play();
})


