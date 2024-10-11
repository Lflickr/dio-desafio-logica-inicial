function classificar(){
    let nomeHeroi = document.getElementById('nome').value
    let qtdXp = document.getElementById('xp').value
    let nivel 
    let res = document.getElementById('res')

    if(qtdXp <= 1000)
        nivel = "Ferro"
    else if(qtdXp <= 2000)
        nivel = "Bronze"
    else if(qtdXp <= 5000)
        nivel = "Prata"
    else if(qtdXp <= 7000)
        nivel = "Ouro"
    else if(qtdXp <= 8000)
        nivel = "Platina"
    else if(qtdXp <= 9000)
        nivel = "Ascendente"
    else if(qtdXp <= 10000)
        nivel = "Imortal"
    else    
        nivel = "Radiante"

    res.innerHTML = `O Heroi de nome ${nomeHeroi} está no nível de ${nivel}`
}

