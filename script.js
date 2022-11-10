function createGame(player1, hour, player2) {
    return `
    <ul>
      <li>
          <img src="icon=${player1}.svg" alt="">
          <strong>${hour}</strong>
          <img src="icon=${player2}.svg" alt="">
      </li>
     </ul>
    
    `
}


function createCard(date, day, game) {
    return `
    <div class="card">
  <h2> ${date} <span> ${day} </span></h2>
    ${game}
  </div>
    `

}



document.querySelector('#App').innerHTML = `
<header>
  <img src="./logo.svg" alt="logo-nlw">
  <h1>calendário</h1>
</header>


<main id="cards">
  ${createCard("24/11", "quinta",
  createGame("brazil", "16:00", "england")
  )}
  ${createCard("27/11", "sabado",
  createGame("argentina", "17:00", "france")
  
  
  )}
  ${createCard("02/12", "sexta",
  createGame("germany", "15:30", "italy")
  
  
  )}
  

  
</main>


`


