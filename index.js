let openBtn = document.getElementById('openbtn')
let contBox = document.getElementById('container')
let closeBtn = document.getElementById('close')

openBtn.addEventListener('click',function(){
  contBox.style.display = "block";
})

closeBtn.addEventListener('click',function(){
  contBox.style.display = "none";
})

window.addEventListener('click',function(e){
  if(e.target=== contBox){
    contBox.style.display = "none";
  }
});