const coracao = document.getElementById("coracao")

coracao.addEventListener('click',()=>{
   if(coracao.style.fill == "red"){
    coracao.style.fill = 'white'
   }else{
    coracao.style.fill = 'red'
   }
})