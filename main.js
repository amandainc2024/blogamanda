function nav(h,e) {
 document.querySelector('nav .items').style.height = h+'vh';
 if (h == 45) {
  e.setAttribute('onclick','nav(0,this)')
 }
 else{
  e.setAttribute('onclick','nav(45,this)')

 }
}
function c(th){
 var ans = th.querySelector('.answer');
 var anss = document.querySelectorAll('.faq .answer');
 
 for(i=0; i<anss.length;i++){
  anss[i].classList.add('none')
 }
 
 if(ans.classList.contains('none')){
  ans.classList.remove('none')
  
 }
 else{
  ans.classList.add('none')
 }
 
}