alert (`Bom dia!!`)
function resposta() {
    let agora = new Date()
    let diaSem = agora.getDay()
    let res = window.document.querySelector('div#resp')
    switch (diaSem) {
        case 0: {
            res.innerHTML = `Domingo`
        }
            break

        case 1: {
            res.innerHTML = `Segunda`
        }
            break

        case 2: {
            res.innerHTML = `Terça`
        }
            break

        case 3: {
            res.innerHTML = `Quarta`
        }
            break

        case 4: {
            res.innerHTML = `Quinta`
        }
            break

        case 5: {
            res.innerHTML = `Sexta`
        }
            break

        case 6: {
            res.innerHTML = `Sabado`
        }
            break  
    }
}