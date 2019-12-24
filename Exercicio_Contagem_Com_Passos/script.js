function contar(){
    let start = document.getElementById ('start')
    let finish = window.document.getElementById('finish')
    let passos = window.document.querySelector ('input#passos')
    let result = window.document.getElementById('cont')

    if (start.value.length == 0 || finish.value.length == 0 || passos.value.length == 0){
        window.alert('[ERROR] Falta de parametro')
    }else{
        let inicio = Number(start.value)
        let fim = Number(finish.value)
        let ca = Number(passos.value)

        if (inicio < fim){
           for (let c = inicio; c <= fim; c += ca)
            result.innerHTML += (` ${c} \u{27A1}`)

        }else{
            for (let c = inicio; c >= fim; c -= ca){
            result.innerHTML += (`${c} \u{27A1}`)
            }   
        }
        result.innerHTML +=(`\u{1f3c1}`)
    }
}

