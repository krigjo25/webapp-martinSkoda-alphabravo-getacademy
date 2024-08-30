function changeImage(state) {
    var imageElement = document.getElementById('animal-image');
    if (state == 'clean') {
        imageElement.src = "lib/img/koala.png";
    } else if (state == 'lib/img/koala_sad.png') {
        imageElement.src = "";
    } else if (state == 'lib/img/koala_dirty.png') {
        imageElement.src = "";
    }
}