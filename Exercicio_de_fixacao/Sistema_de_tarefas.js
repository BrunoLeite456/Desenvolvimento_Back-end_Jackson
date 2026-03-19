const vetor = []

function adicionar(tafera) {
    let id = 0;
    for (let opt of vetor) {
        if (id < opt.id) {
            id = opt.id;
        }
    }
    vetor.push({ id: id + 1, nome: tarefa })
}

function remover(id) {
    const hasId = vetor.some(it => it.id === id)

    if (hasId) {
        vetor = vetor.filter(it => it.id === id)
    } else {
        console.log("Não existe o id informado")
    }
}

function listar() {
    for (let opt of vetor) {
        console.log(opt)
    }
}

adicionar("dormir");
adicionar("comer");
listar();
remover(1);
listar();
adicionar("beber");
listar();