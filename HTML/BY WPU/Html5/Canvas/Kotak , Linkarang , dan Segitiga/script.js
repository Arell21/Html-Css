// Menyiapkan Ccanvas
const mycanvas = document.querySelector('#mycanvas');

// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan Context
const c = mycanvas.getContext('2d');

//manipuulasi Canvas

// membuat Rectangle (Kotak)
c.fillStyle = 'Pink'; // mengubah warna 
c.strokeStyle = '#999'; // memberikan border
c.linewidth = '5'; // Tembal Border

c.rect(50, 50 , 300 ,300);
// x , y  , Widht , height

c.fill(); // memanggil warna
c.stroke(); // memanggil border

//Membuat Lingkaran 

c.fillStyle = 'Green'; // mengubah warna 
c.strokeStyle = '#999'; // memberikan border

c.beginPath();

c.arc(550, 200 , 150 , 0 , 2*Math.PI);
c.fill();
c.stroke()


//Membuat Path (Segitiga)

c.fillStyle='Blue';
c.beginPath();

c.moveTo(900, 50);
c.lineTo(1050,350);
c.lineTo(750 , 350);
c.lineTo(900, 50);

c.fill();
c.stroke();


