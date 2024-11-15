const players = [
    { number: 0, name: "Dariq Whitehead", position: "Guard-Forward", img: "./assets/img/players/dariq.png" },
    { number: 1, name: "Ziaire Williams", position: "Forward", img: "./assets/img/players/ziaire.png" },
    { number: 2, name: "Cameron Johnson", position: "Forward", img: "./assets/img/players/cam.png" },
    { number: 7, name: "Shake Milton", position: "Guard", img: "./assets/img/players/shake.png" },
    { number: 8, name: "Cui Yongxi", position: "Forward", img: "./assets/img/players/cui.png" },
    { number: 9, name: "Trendon Watford", position: "Guard-Forward", img: "./assets/img/players/watford.png" },
    { number: 10, name: "Ben Simmons", position: "Guard-Forward", img: "./assets/img/players/ben.png" },
    { number: 13, name: "Tyrese Martin", position: "Forward", img: "./assets/img/players/tyrese.png" },
    { number: 16, name: "Jaylen Martin", position: "Guard", img: "./assets/img/players/jaylen.png" },
    { number: 17, name: "Dennis Schröder", position: "Guard", img: "./assets/img/players/dennis.png" },
    { number: 20, name: "Day'Ron Sharpe", position: "Center", img: "./assets/img/players/sharpe.png" },
    { number: 21, name: "Noah Clowney", position: "Forward-Center", img: "./assets/img/players/clowney.png" },
    { number: 22, name: "Jalen Wilson", position: "Forward", img: "./assets/img/players/jalen.png" },
    { number: 24, name: "Cam Thomas", position: "Guard", img: "./assets/img/players/cam_thomas.png" },
    { number: 28, name: "Dorian Finney-Smith", position: "Forward", img: "./assets/img/players/dfs.png" },
    { number: 33, name: "Nic Claxton", position: "Center", img: "./assets/img/players/claxton.png" },
    { number: 44, name: "Bojan Bogdanović", position: "Forward", img: "./assets/img/players/bojan.png" },
    { number: 45, name: "Keon Johnson", position: "Guard", img: "./assets/img/players/keon.png" },
  ];
  
  const container = document.getElementById('players-container');
  
  players.forEach(player => {
    const playerCard = document.createElement('article');
    playerCard.classList.add('time__conteudo__container__player-card');
    
    playerCard.innerHTML = `
      <div class="time__conteudo__container__player-card__number">${player.number}</div>
      <img src="${player.img}" alt="${player.name}">
      <section class="time__conteudo__container__player-card__info">
        <span class="time__conteudo__container__player-card__jersey-number">${player.number}</span>
        <span class="time__conteudo__container__player-card__name">${player.name.split(' ')[0]} <strong>${player.name.split(' ')[1]}</strong></span>
        <span class="time__conteudo__container__player-card__position">${player.position}</span>
      </section>
    `;
    
    container.appendChild(playerCard);
  });