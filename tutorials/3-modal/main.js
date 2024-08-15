/**get modal */
let modal = document.getElementById('the_modal');

/**get content */
let modalImg = document.getElementById('img');
let modelCap = document.getElementById('caption');

//get ordinary img
let img = document.getElementById('the-img');

//function to get modal 
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  modelCap.innerHTML = this.alt
}


//close btn function
let close =document.getElementsByClassName('close')[0];

//function close

close.onclick = function () {
  modal.style.display = 'none';
}


//close with esc btn

document.onkeydown =function (event) {
  if(event.keyCode=="27"){
    modal.style.display = 'none';
  }
}