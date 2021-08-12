const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
  $video.play()
  $play.hidden = true; //esta oculto = si
  $pause.hidden = false;
  console.log('Le diste click al botón de play')
}

function handlePause() {
  $video.pause()
  $pause.hidden = true;
  $play.hidden = false;
  console.log('Le diste click al botón de pausa')
}

$backward.addEventListener('click',handleBackward)

function handleBackward() {
  $video.currentTime -= 10
  console.log('para atrás 10 segundos')
}

$forward.addEventListener('click',handleForward)

function handleForward() {
  $video.currentTime += 10 //currentTime -> especifica el tiempo de reproducción actual en segundos
  console.log('para adelante 10 segundos', $video.currentTime)
}



const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded) /* cargamos los metadatos */
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration) /* ya podemos acceder a la duracion */
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}