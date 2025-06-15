let currentPlayer = 'Red';

document.getElementById('dice').addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').innerText = roll;
  currentPlayer = currentPlayer === 'Red' ? 'Blue' : 'Red';
  document.getElementById('turn').innerText = `Player ${currentPlayer}'s Turn`;
});