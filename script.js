const videoElement = document.getElementById('video');
const buttom = document.getElementById('button');

//async func, prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error Here
        
    }
}

button.addEventListener('click', async() => {
    // Disable the button when we click on it
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

//On Load
selectMediaStream();