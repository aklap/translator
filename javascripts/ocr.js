var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var img = new Image();
img.src = '/public/photos/test.png';

img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    var converted = OCRAD(img);
    document.getElementById('new-text').innerHTML = converted;
};


