fetch('./json/players.json')
  .then(response => response.json())
  .then(players => {
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
  });
