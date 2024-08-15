let allImg = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let i = 0;
let slideShow = function () {
  document.slideShow.src = allImg[i];
  if (i < allImg.length-1) {
    i++;
  }else{
    i=0;
  }
  setTimeout('slideShow()',2000);
};

slideShow();
