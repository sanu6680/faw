

let p1=document.getElementById('p1');
let p2=document.getElementById('p2');
var i=0;
    var sumrxr='';

let val0 =document.getElementById('p0');
let val1=document.getElementById('p1').style.backgroundColor;
let val2=document.getElementById('p1').style.backgroundColor;
function clickme(){
    p1.style.backgroundColor=val1;
    p2.style.backgroundColor=val2;
    var pra1=0;
    var pra2=0;
    i=i+1;
    p1.textContent = Math.floor(Math.random()*10);
    pra1=p1.textContent;
    p2.textContent = Math.floor(Math.random()*10);
    pra2=p2.textContent;
val0.textContent=i;


if(pra1==pra2){
    p1.style.backgroundColor='red';
    p2.style.backgroundColor='red';
    p1.textContent=pra1+' '+'Pragraph NO 1';
    p2.textContent=pra2+' '+'Pragraph NO 2';
    let txtar=document.getElementById('txtarea1');
   if (pra1==6 && pra2==6 && i==6){
    sumrxr.textContent='';
     sumrxr=i+' '+pra1+' '+pra2+ '\n' +' '+'رقم مشئوم ' + sumrxr ;
     txtar.textContent=sumrxr;

   }
   sumrxr=i+' '+pra1+' '+pra2+ '\n' +' '+ 'رقم طبيعي'  + sumrxr ;
   txtar.textContent=sumrxr;
i=0;
}
}

