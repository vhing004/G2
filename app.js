var learnMore = document.querySelectorAll('.item-btn')
var close = document.querySelector('.head ion-icon')
var popUp = document.querySelector('.pop-up')
 learnMore.forEach((btn, index) =>{
  btn.addEventListener('click', function(){
    popUp.classList.add('show')
  })
 })
 close.addEventListener("click", function(){
  popUp.classList.remove('show');
 })