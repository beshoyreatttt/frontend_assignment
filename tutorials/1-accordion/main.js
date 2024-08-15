let accord = document.querySelectorAll('.accord');
accord.forEach(function (index) {
    index.addEventListener('click',function () {
        index.classList.toggle('active');
        let desc = this.nextElementSibling;
        if (desc.style.maxHeight) {
            desc.style.maxHeight = null;
        }else{
            desc.style.maxHeight = desc.scrollHeight +'px';
        }
    })
})