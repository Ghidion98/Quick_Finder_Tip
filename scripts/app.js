const onButton = document.getElementById('on');
const offButton = document.getElementById('off');
const bulbImage = document.getElementById('myImage');

onButton.addEventListener('click', () => {
  bulbImage.src = 'assets/images/onn.gif';
});

offButton.addEventListener('click', () => {
  bulbImage.src = 'assets/images/off.gif';
});
