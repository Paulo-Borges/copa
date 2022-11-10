function carregar() {
    var msg = document.getElementById("msg")
    var msg2 = document.getElementById("msg2")
    var data = new Date()
    var dia = today.toDateString()
    var hora = data.toLocaleTimeString('pt-br', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    })
    msg.innerHTML = `Agora são ${hora}.`
    msg2.innerHTML = `Hj é ${dia}.`
    if (hora >= 15 && hora < 17) {
    
        document.body.style.background = 'green';
    
       
    } else if (hora >= 17 && hora < 24) {
    
        
        document.body.style.background = '#121214';

    } else {
        
        
        document.body.style.background = 'yellow';
    }

}
