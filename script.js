function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

const emojiLayer = document.getElementById('emoji-layer');
const chipLayer = document.getElementById('chip-layer');

// Example emoji list: [emoji, x index, y index]
const emojis = [
  ["🍎", 0, 0],
  ["🍎", 0, 1],
  ["🍎", 0, 2],
  ["💡", 1, 0],
  ["💡", 2, 0],
  ["💡", 3, 0],
  ["💡", 4, 0],
  ["💡", 5, 0],
  ["💡", 6, 0],
  ["💡", 7, 0],
  ["💡", 8, 0],
  ["💡", 9, 0],
  ["💡", 10, 0],
  ["💡", 11, 0],
  ["🎲", 8, 10],
  ["🎲", 2, 3],
  ["🎲", 2, 4],
  ["🎲", 2, 5],
  ["🎲", 2, 6],
  ["🎲", 2, 7],
  ["🎲", 2, 8]
];

emojis.forEach(([emoji, x, y]) => {
  const el = document.createElement('div');
  el.className = 'emoji';
  el.textContent = emoji;
  el.style.left = `${x * 48 + 35}px`; // 42px = left margin
  el.style.top = `${y * 48 + 28}px`;  // 30px = top margin

  el.addEventListener('click', () => {
    placeChip(x, y);
  });

  emojiLayer.appendChild(el);
});

let chipsPlaced = 0;
const MAX_CHIPS = 3;

function placeChip(x, y) {
  if (chipsPlaced >= MAX_CHIPS) return;

  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.style.left = `${x * 48 + 38 + 12}px`;
  chip.style.top = `${y * 48 + 28 + 12}px`;


  // Make draggable
  chip.draggable = true;
  chip.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text/plain", null); // for Firefox
    chip.classList.add('dragging');
  });
  chip.addEventListener('dragend', (e) => {
    chip.classList.remove('dragging');
    const rect = chipLayer.getBoundingClientRect();
    chip.style.left = `${e.clientX - rect.left - 10}px`;
    chip.style.top = `${e.clientY - rect.top - 10}px`;
  });

  chipLayer.appendChild(chip);
  chipsPlaced++;
}
