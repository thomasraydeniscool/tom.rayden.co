var funTexts = [
  { text: "Hello World!", animation: "flash" },
  { text: "Look behind you...", animation: "glitch" },
  { text: "Beep boop", animation: "type" },
  { text: "Catch me if you can", animation: "racecar" },
  { text: "Don't mind me", animation: "zoom" },
  { text: "Welcome to my realm", animation: "rainbow" },
  { text: "Im not feeling so good...", animation: "bounce-and-shake" }
];

function randomItem(arr) {
  var index = Math.floor(Math.random() * Math.floor(arr.length));
  return arr[index];
}

function applyClass(elm, c) {
  elm.classList.remove(c);
  elm.classList.add(c);
}

window.addEventListener("load", function() {
  var funTextElm = document.getElementById("fun-text");

  var { text, animation } = randomItem(funTexts);

  funTextElm.innerHTML = text;

  // Needed for glitch animation
  funTextElm.setAttribute("data-text", text);

  applyClass(funTextElm, animation);
});
