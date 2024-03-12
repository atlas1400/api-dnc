const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segunto = document.getElementById('segunto')

const lancamento = "17 oct 2024"

function countdown(){
   const datalance = new Date(lancamento)
   const hoje = new Date()

   const segtotal = (datalance - hoje)/1000;

   const finaldias = Math.floor(segtotal / 60 /60 / 24);
   const finalhoras = Math.floor(segtotal / 60 /60 ) % 24;
   const finalminutos = Math.floor(segtotal / 60 ) % 60;
   const finalsegundo = Math.floor(segtotal) % 60;

    dia.innerHTML = finaldias
    hora.innerHTML = formatotempo(finalhoras)
    minuto.innerHTML = formatotempo(finalminutos)
    segunto.innerHTML = formatotempo(finalsegundo)
}

function formatotempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}


countdown();
setInterval(countdown, 1000)