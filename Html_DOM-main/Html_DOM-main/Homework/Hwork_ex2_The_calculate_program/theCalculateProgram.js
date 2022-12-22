
//tạo sự kiện cho các tác vụ click vào toán hạng
function num9 () {
    let display = document.getElementById("result");
        display.innerHTML += 9;
}

function num8 () {
    let display = document.getElementById("result");
        display.innerHTML += 8;
}

function num7 () {
    let display = document.getElementById("result");
        display.innerHTML += 7;
}

function num6 () {
    let display = document.getElementById("result");
        display.innerHTML += 6;
}

function num5 () {
    let display = document.getElementById("result");
        display.innerHTML += 5;
}

function num4 () {
    let display = document.getElementById("result");
        display.innerHTML += 4;
}

function num3 () {
    let display = document.getElementById("result");
        display.innerHTML += 3;
}

function num2 () {
    let display = document.getElementById("result");
        display.innerHTML += 2;
}

function num1 () {
    let display = document.getElementById("result");
        display.innerHTML += 1;
}

function num0 () {
    let display = document.getElementById("result");
        display.innerHTML += 0;
}

function numdot () {
    let display = document.getElementById("result");
        display.innerHTML += ".";
}

function openParentheses () {
    let display = document.getElementById("result");
        display.innerHTML += "(";
}

function closeParentheses () {
    let display = document.getElementById("result");
        display.innerHTML += ")";
}

// Tạo sự kiện cho các tác vụ click chuột vào toán tử

function opeMulti() {
    let display = document.getElementById("result");
        display.innerHTML += "*";
}

function opeDivi() {
    let display = document.getElementById("result");
        display.innerHTML += "/";
}

function opeAdd() {
    let display = document.getElementById("result");
        display.innerHTML += "+";
}

function opeSub() {
    let display = document.getElementById("result");
        display.innerHTML += "-";
}

function opeEqua () {
    let display = document.getElementById("result");
    let res = display.innerHTML;
    display.innerHTML = eval(res);
}

function numAC () {
    let display = document.getElementById("result");
        display.innerHTML = " ";
}

function numDEL () {
    let display = document.getElementById("result");
    let res = display.innerHTML;
        display.innerHTML = res.substring(0, res.length-1);
}