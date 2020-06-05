const first = document.querySelector(".first");
const third = document.querySelector(".third");
const iframe = document.querySelector("iframe");
const runbtn = document.querySelector("#run-btn");
const darkbtn = document.querySelector("#dark-btn");
const livebtn = document.querySelector("#live-btn");
const defaultbtn = document.querySelector("#default-btn");


runbtn.addEventListener("click", () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});



darkbtn.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");

});


defaultbtn.addEventListener('click', () => {
    document.getElementById('editor').style.display = 'initial';
    document.getElementById('liveEditor').style.display = 'none';
    document.getElementById('run-span').innerHTML = 'Run';
})


livebtn.addEventListener('click', () => {
    document.getElementById('editor').style.display = 'none'
    document.getElementById('liveEditor').style.display = 'initial'
    document.getElementById('run-span').innerHTML = 'Live'
    third.addEventListener('keyup', () => {
        var html = third.textContent;
        iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    })
})

// first.addEventListener('keyup', () => {
//     var html = first.textContent;
//     iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// })


// first.addEventListener("paste", function (e) {
//     e.preventDefault();
//     var text = e.clipboardData.getData("text/plain");
//     document.execCommand("insertText", false, text);
// });

