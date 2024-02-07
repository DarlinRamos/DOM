function handleClickBox1() {
    alert('Has hecho clic en la primera caja');
}

function handleMouseOverBox1() {
    document.getElementById('box1').style.backgroundColor = 'lightcoral';
}

function handleMouseOutBox1() {
    document.getElementById('box1').style.backgroundColor = 'lightblue';
}

function handleFocusBox1() {
    document.getElementById('box1').style.border = '2px solid red';
}

function handleBlurBox1() {
    document.getElementById('box1').style.border = 'none';
}

function handleClickBox2() {
    alert('¡Alerta personalizada para la segunda caja!\nHaz hecho clic en la segunda caja');
}

function handleMouseOverBox2() {
    document.getElementById('box2').style.backgroundColor = 'lightgreen';
}

function handleMouseOutBox2() {
    document.getElementById('box2').style.backgroundColor = 'lightblue';
}

function handleFocusBox2() {
    document.getElementById('box2').style.border = '2px solid green';
}

function handleBlurBox2() {
    document.getElementById('box2').style.border = 'none';
}

function handleClickBox3() {
    const box3 = document.getElementById('box3');
    box3.style.display = 'none';
}

function handleMouseOverBox3() {
    document.getElementById('box3').style.backgroundColor = 'lightpink';
}

function handleMouseOutBox3() {
    document.getElementById('box3').style.backgroundColor = 'lightblue';
}

function handleFocusBox3() {
    document.getElementById('box3').style.border = '2px solid pink';
}

function handleBlurBox3() {
    document.getElementById('box3').style.border = 'none';
}
document.getElementById('box1').addEventListener('click', handleClickBox1);
document.getElementById('box1').addEventListener('mouseover', handleMouseOverBox1);
document.getElementById('box1').addEventListener('mouseout', handleMouseOutBox1);
document.getElementById('box1').addEventListener('focus', handleFocusBox1);
document.getElementById('box1').addEventListener('blur', handleBlurBox1);

document.getElementById('box2').addEventListener('click', handleClickBox2);
document.getElementById('box2').addEventListener('mouseover', handleMouseOverBox2);
document.getElementById('box2').addEventListener('mouseout', handleMouseOutBox2);
document.getElementById('box2').addEventListener('focus', handleFocusBox2);
document.getElementById('box2').addEventListener('blur', handleBlurBox2);

document.getElementById('box3').addEventListener('click', handleClickBox3);
document.getElementById('box3').addEventListener('mouseover', handleMouseOverBox3);
document.getElementById('box3').addEventListener('mouseout', handleMouseOutBox3);
document.getElementById('box3').addEventListener('focus', handleFocusBox3);
document.getElementById('box3').addEventListener('blur', handleBlurBox3);