let btn1=document.getElementsByClassName('btn');
let btn2=document.getElementsByClassName('btn1');
let headphone1=document.getElementById('img1');
let headphone2=document.getElementById('img2');
let black= document.getElementById('black');
let white=document.getElementById('white');
let products=document.getElementById('products');
let contacts=document.getElementById('contacts');
let scrollbtn =document.getElementById('scroll');
let close =document.getElementById('close');
let menu =document.querySelector('.menu');


function changetoblack() {
  headphone1.src ='11.png';
   
    headphone2.src ='22.png';
    headphone2.style.height=' 900px';
    headphone2.style.width='503px';
   
    headphone2.style.top='150px';
    headphone2.style.left='1050px';
  
}
  
  function changetowhite() {
    headphone1.src ='1.png';
     
      headphone2.src ='2.png';
    }
    
    function productpage()
{
  window.location.href = 'products.html';
}
onscroll=() =>{
  if(scrollY >= 400){
    scrollbtn.style.display='block';
  } else{
    scrollbtn.style.display='none';
  }
}
scrollbtn.onclick=() =>{scroll({
   top:0,
   left:0,
   behavior:"smooth"
   
})}
  black.onclick = changetoblack;
  white.onclick = changetowhite;
  products.onclick=productpage;
  onload=function(){
    menu.classList.add('hide');
  }
  contacts.onclick=()=>{
    menu.classList.remove('hide');
    contacts.classList.add('hide');
      close.classList.remove('hide');
  
  }
  
  close.onclick=()=>{
    menu.classList.add('hide');
      close.classList.add('hide');
      contacts.classList.remove('hide');
  }
  
 

