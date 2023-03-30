/** ATRIBUIÇÃO VIA DESESTRUTURAÇÃO */

let pessoa = {
    nome: "Caio Maqueise",
    email: "caio.pinheiro@gmail.com"
}

/* 
let nome = pessoa.nome
let email = pessoa.email 
*/
let { nome, email } = pessoa
console.log(nome, email)

let nomes = ["Caio", "João"]

let [pesoa1, pessoa2] = nomes

function useState() {
    let state = ""
    function setState() {}
    return [state, setState]
}
const [name, setName] = useState()
