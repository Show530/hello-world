function sayConsole() {
  console.log("Hello, World!");
}

function sayPopup() {
  alert("Hello, World!");
}

function sayBrowser() {
  var p= document.getElementById("browser");
  p.innerHTML= "Hello, World!";
}

function sayStranger() {
  var name= prompt("What's your Name?");
  p= document.getElementById("stranger");
  p.innerHTML= "Hello, " + name + "!";
}
