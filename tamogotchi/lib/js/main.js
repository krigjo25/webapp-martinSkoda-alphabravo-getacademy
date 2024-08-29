
// @Nico
function changeImage(state) {
    var imageElement = document.getElementById('animal-image');
    if (state === 'clean') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277551598268059699/koala.png?ex=66cd9424&is=66cc42a4&hm=9d95ecf18731ae52bcd5afd73ffbf0ed09e965d9c167d4522b279f20cecbe736&";
    } else if (state === 'sad') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277552562907906058/koala_sad.png?ex=66cd950a&is=66cc438a&hm=a68312392996198a176aa1d3e11d6e79c72088c9f04b523ebe030f849e815d6f&";
    } else if (state === 'dirty') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277553091897589841/koala_dirty.png?ex=66cd9588&is=66cc4408&hm=5fd2fd2eed884d419690aca9108f8740568a3618444900e9a66ac6926b42bfff&";
    } else if (state === 'Happy') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277554115182071833/koala_happy.png?ex=66cf90bc&is=66ce3f3c&hm=fb544fe2485bc51a839c0bae8925353a87990e7f4bf0ca36953e0d7b791fc92e&"
    }
}