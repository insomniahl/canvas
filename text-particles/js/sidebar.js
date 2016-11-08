/**
 * Created by insomniahl on 2016/11/8.
 */
var btn = document.getElementById("btn");
var control = document.getElementById("control");

btn.addEventListener('click', function (e) {
    //toggle 有则算了,无则加上
    control.classList.toggle('slide');
}, false);

var ball = document.getElementById('ball');
var rect = document.getElementById('rect');

function chose(particleName) {
    particleName.addEventListener('click', function (e) {
        this.style.backgroundColor = "orange";
        (particleName == ball ? rect : ball).style.backgroundColor = "rgba(0,0,0,0)";
        type = (type === "ball") ? "rect" : "ball";
        change();
    }, false);
}

chose(ball);
chose(rect);