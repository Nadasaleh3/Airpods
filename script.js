let btn1=document.getElementsByClassName('btn');
let btn2=document.getElementsByClassName('btn1');
let headphone1=document.getElementById('img1');
let headphone2=document.getElementById('img2');
let black= document.getElementById('black');
let white=document.getElementById('white');

function changetoblack() {
  headphone1.src ='11.png';
   
    headphone2.src ='22.png';
    headphone2.style.height='1745px';
    headphone2.style.width='1700px';
   
    headphone2.style.top='-250px';
    headphone2.style.left='550px';
  }
  // function changetowhite() {
  //   headphone1.src ='1.png';
     
  //     headphone2.src ='2.png';
  //   }
    
  
  black.onclick = changetoblack;
  // white.onclick = changetowhite;

