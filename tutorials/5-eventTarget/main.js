let result = document.getElementById('result');


document.body.addEventListener('click',function (event) {
    result.innerHTML = event.target.tagName;
})