let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Ingeníera Civil con  interés en el área de Hidráulica.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
