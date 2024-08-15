function openDiv() {
  let overlay = document.getElementById('myDiv');
  overlay.style.transform= "scale(1)";

}

function closed() {
  let overlay = document.getElementById('myDiv');
  overlay.style.transform= "scale(0)";
}