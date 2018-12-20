const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body');
  let i = 0;
  body.addEventListener('keydown', function(event){
    const key = event.key;
    if (key === codes[i]){
      i++;
      if (i === codes.length){
        alert("Yay!");
      }
    }
    else {
      i = 0;
    }
  });
}
