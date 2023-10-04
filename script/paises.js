/* function consultaPaises (pais){
const pesquisa = fetch(`https://restcountries.com/v3.1/all`)
.then(promessa =>promessa.json())

.then((resultado) => {
    if(resultado.erro ){
        alert(`País não encontrado!`)
    }else{
        console.log(resultado)
    }
})
.catch(erro =>{

})
.finally(() =>{

})
}
consultaPaises() */


//declarando a funçao

async function fetchAPI() {

    try {
        const requisicao = await fetch('https://restcountries.com/v3.1/all')
        const requisicaoConvertida = await requisicao.json()

        console.log(requisicaoConvertida)
        //retornando o array
        const arrayPaises = requisicaoConvertida
        return arrayPaises
    } catch (erro) {
        console.log(erro)
    }
}
//fetchAPI()

async function renderizaPaises() {
    const arrayPaises = await fetchAPI()
    const cardPais = arrayPaises.map(iten => {
        return `
        <div class = "card">
            <img src="${iten.flags.png}" alt="Bandeira do país">
          <div class ="card-texto">
            <h2>${iten.name.common}</h2>
            <div>
                 <h4>População: ${iten.population}</h4>
                 <h4>Capital: ${iten.capital}</h4>
                 <h4>Região: ${iten.region}</h4>
            </div>
          </div>
        </div>
        `
    })
    const container = document.getElementById('container')
    container.innerHTML = cardPais.join('')//join tira as virgulas da lista

}
renderizaPaises()