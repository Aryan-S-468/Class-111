Webcam.set({
    width:10,
    height:240,
    image_format : 'png',
    png_quality:90,

    constraints: {
        facingMode: "environment"
    }
});
  camera = document.getElementById("camera");

Webcam.attach('#camera');