const type = 2
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const input = document.querySelector('button');

const rminValue = document.querySelector('#rmin');
const rmaxValue = document.querySelector('#rmax');
const gminValue = document.querySelector('#gmin');
const maxValue = document.querySelector('#max');
const bminValue = document.querySelector('#bmin');
const bmaxValue = document.querySelector('#bmax');

function switchType(num) {
    type = num;
}

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            try {
                video.src = window.URL.createObjectURL(localMediaStream);
            } catch (e) {
                video.srcObject = localMediaStream;
            }
            video.play();
        })
        .catch(err => {
            console.error(`OH NO!!!`, err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        switch (type) {
            case 1:
                pixels = redEffect(pixels);
                break;
            case 2:
                pixels = rgbSplit(pixels);
                break;
            case 3:
                pixels = greenScreen(pixels);
                break;
        }
        ctx.clearRect(0, 0, width, height);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTiem = 0;
    // snap.play();

    const data = canvas.toDataURL('image.jpeg');
    const link = document.createElement('a');

    link.href = data;
    link.setAttribute('download', 'photo');
    link.innerHTML = `<img src="${data}" alt="photo" />`;
    strip.insertBefore(link, strip.firstChild);
    // var x = event.target;
    // console.log(x)
    // debugger
    console.count('???')

}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200;
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }
    return pixels;
}

function rgbSplit(pixels) {

    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 112] = pixels.data[i + 0];
        pixels.data[i - 212] = pixels.data[i + 1];
        pixels.data[i - 332] = pixels.data[i + 2];
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];
        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}


getVideo();
video.addEventListener('canplay', paintToCanvas)