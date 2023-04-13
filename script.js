var container = document.querySelector('#container');
var panorama = new
    PANOLENS.ImagePanorama('notre_dame.jpg');
var panorama2 = new
    PANOLENS.ImagePanorama('museum.jpg');
var panorama3 = new
    PANOLENS.ImagePanorama('santorini.png');
var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
infospot.addHoverText('Go to Panorama 2');
infospot.addEventListener('click', function(){
    onButtonClick(panorama2);
});
panorama.add(infospot);

var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot2.position.set(0, -1000, -5000);
infospot2.addHoverText('Go to Panorama 3');
infospot2.addEventListener('click', function(){
    onButtonClick(panorama3);
});
panorama2.add(infospot2);

var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot3.position.set(0, 0, -5000);
infospot3.addHoverText('Go to Panorama 1');
infospot3.addEventListener('click', function(){
    onButtonClick(panorama);
});
panorama3.add(infospot3);


var bar = document.querySelector('#bar');

function onProgressUpdate(event) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add('hide');
        setTimeout(function () {
            bar.style.width = 0;
        }, 1000);
    }
}
function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}
panorama.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);