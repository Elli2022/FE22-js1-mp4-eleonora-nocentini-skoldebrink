
const helpAnimation = {
  targets: '#divContainer h1',
  scale: [
    
    {value: 1, easing: 'easeOutInQuad', duration: 5000},
    
  ],

  //tiden mellan varje animation
  delay: anime.stagger(200, {grid: [14, 14], from: 'center'}),
  // borderRadius: '70%',

  //tar tillbaka animationen till ursprungsläget
  direction: 'alternate',
  translateX: 250,
  scale: 1.2,
  rotate: '1turn',

  //den ska loopa när man trycker på play
  loop: true,

  //den ska inte auto-playa för vi ska kunna styra den med kontrollen.
  autoplay: false,

}


const help = anime(helpAnimation);
help.play();


// Lägger till tre knappar för att kontrollera animationen
// 1.En för play
// 2.En för paus
// 3.En för stop 

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

//play behöver inga argument och det är därför som jag kan lägga in den direkt som en callback-funktion. Den skickas med som en metod.
playBtn.addEventListener('click', help.play);
pauseBtn.addEventListener('click', help.pause);


//funktion anropas när den klick-detektas för stop-knappem
stopBtn.addEventListener('click', function () {
  
  help.restart();
  help.pause();
  
});



