function selectGameType(type) {
  if (confirm(`You have selected ${type} chess playing mode.`) == true) {
    let x = type;
    switch (x) {
      case 'Standart':
        window.location.href = 'standart.html';
        break;
      case 'Blitz':
        window.location.href = 'blitz.html';
        break;
      case 'Bullet':
        window.location.href = 'bullet.html';
        break;
    }
  }
}

function selectPageType(type) {
  if (confirm(`Are you sure you want to quit? If you quit, current game will be lost.`) == true) {
    let x = type;
    switch (x) {
      case 'Quit':
        window.location.href = 'game-selection.html';
        break;
    }
  }
}

