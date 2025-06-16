 // Menyiapkan Ccanvas
const mycanvas = document.querySelector('#mycanvas');

// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan Context
const c = mycanvas.getContext('2d');

 //Membuat Lingkaran 
let x = 300;
let y = 200 ;
let speedX = 5;
let speedY = 5;
let radius = 150;
 function draw() {

     window.requestAnimationFrame(draw);
     c.clearRect(0, 0, innerWidth , innerHeight);
     
     c.fillStyle = 'Green'; // mengubah warna 
    //  c.strokeStyle = '#999'; // memberikan border
     
     c.beginPath();
     
     c.arc(x, y , radius , 0 , 2*Math.PI);
     c.fill();
     c.stroke();

     if (x + radius > innerWidth || x - radius < 0) {
        speedX = -speedX;
     }

     if (y + radius > innerHeight || y - radius < 0) {
        speedY = -speedY;
     }

     x += speedX; 
     y += speedY;
    }

    draw();