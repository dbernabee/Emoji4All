function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

const emojiLayer = document.getElementById('emoji-layer');
const chipLayer = document.getElementById('chip-layer');

// Example emoji list: [emoji, x index, y index]
const emojis = [
  ["⭐", 0, 0],
  ["🌠", 0, 1],
  ["🚀", 0, 2],
  ["✈️", 0, 3],
  ["🎶", 0, 4],
  ["👽", 0, 5],
  ["👻", 0, 6],
  ["👑", 0, 7],
  ["🎉", 0, 8],
  ["💍", 0, 9],
  ["🎃", 0, 10],
  ["🧧", 0, 11],
  ["🙂", 1, 0],
  ["🙃", 2, 0],
  ["🪰", 3, 0],
  ["🦟", 4, 0],
  ["🦋", 5, 0],
  ["🍓", 6, 0],
  ["🫐", 7, 0],
  ["🍇", 8, 0],
  ["🍒", 9, 0],
  ["🍦", 10, 0],
  ["🍰", 11, 0],
  ["🌙", 1, 1],
  ["🌃", 1, 2],
  ["🎹", 1, 3],  
  ["🎸", 1, 4],
  ["📞", 1, 5],
  ["🧟", 1, 6],
  ["🧛", 1, 7],
  ["🎊", 1, 8],
  ["🎯", 1, 9],
  ["🎄", 1, 10],
  ["🎏", 1, 11],
  ["😀", 2, 1],
  ["🌱", 2, 2],
  ["🌲", 2, 3],
  ["🎻", 2, 4],
  ["📱", 2, 5],
  ["📸", 2, 6],
  ["🔮", 2, 7],
  ["🎱", 2, 8],
  ["🏆", 2, 9],
  ["🏅", 2, 10],
  ["⌚", 2, 11],
  ["😃", 3, 1],
  ["😄", 3, 2],
  ["🌳", 3, 3],
  ["🌴", 3, 4],
  ["🌈", 3, 5],
  ["🎨", 3, 6],
  ["🖼️", 3, 7],
  ["🏂", 3, 8],
  ["💡", 3, 9],
  ["⏰", 3, 10],
  ["⌛", 3, 11],
  ["🦉", 4, 1],
  ["😁", 4, 2],
  ["😊", 4, 3],
  ["🌺", 4, 4],
  ["💐", 4, 5],
  ["🏖️", 4, 6],
  ["🏄", 4, 7],
  ["⚽", 4, 8],
  ["🧠", 4, 9],
  ["📍", 4, 10],
  ["🚓", 4, 11],
  ["🦜", 5, 1],
  ["🦚", 5, 2],
  ["😉", 5, 3],
  ["😍", 5, 4],
  ["🌎", 5, 5],
  ["🌊", 5, 6],
  ["🌧️", 5, 7],
  ["🏃", 5, 8],
  ["💖", 5, 9],
  ["💘", 5, 10],
  ["🚑", 5, 11],
  ["🦄", 6, 1],
  ["🐉", 6, 2],
  ["🦂", 6, 3],
  ["🥰", 6, 4],
  ["🥹", 6, 5],
  ["🥲", 6, 6],
  ["🌩️", 6, 7],
  ["💧", 6, 8],
  ["💔", 6, 9],
  ["💪", 6, 10],
  ["🏋", 6, 11],
  ["🍲", 7, 1],
  ["🐴", 7, 2],
  ["🐐", 7, 3],
  ["🦈", 7, 4],
  ["😭", 7, 5],
  ["😂", 7, 6],
  ["😢", 7, 7],
  ["❄️", 7, 8],
  ["🧊", 7, 9],
  ["🥊", 7, 10],
  ["🤼", 7, 11],
  ["🍜", 8, 1],
  ["🍝", 8, 2],
  ["🐏", 8, 3],
  ["🐬", 8, 4],
  ["🐳", 8, 5],
  ["🤣", 8, 6],
  ["😔", 8, 7],
  ["😠", 8, 8],
  ["🌞", 8, 9],
  ["🌤️", 8, 10],
  ["🤺", 8, 11],
  ["🍎", 9, 1],
  ["🍅", 9, 2],
  ["🌯", 9, 3],
  ["🌭", 9, 4],
  ["🐯", 9, 5],
  ["🦁", 9, 6],
  ["🦊", 9, 7],
  ["🤬", 9, 8],
  ["😡", 9, 9],
  ["🏜️", 9, 10],
  ["🌵", 9, 11],
  ["🍧", 10, 1],
  ["🍨", 10, 2],
  ["🥗", 10, 3],
  ["🥙", 10, 4],
  ["🍔", 10, 5],
  ["🐮", 10, 6],
  ["🐔", 10, 7],
  ["🐣", 10, 8],
  ["😤", 10, 9],
  ["🤧", 10, 10],
  ["🔥", 10, 11],
  ["🎂", 11, 1],
  ["🧁", 11, 2],
  ["🥪", 11, 3],
  ["🌮", 11, 4],
  ["🍕", 11, 5],
  ["🍟", 11, 6],
  ["🐷", 11, 7],
  ["🐀", 11, 8],
  ["🪳", 11, 9],
  ["🤢", 11, 10],
  ["🤮", 11, 11]
];

emojis.forEach(([emoji, x, y]) => {
  const el = document.createElement('div');
  el.className = 'emoji';
  el.textContent = emoji;
  el.style.left = `${x * 43 + 35}px`; // 42px = left margin
  el.style.top = `${y * 43 + 28}px`;  // 30px = top margin

  el.addEventListener('click', () => {
    placeChip(x, y);
  });

  emojiLayer.appendChild(el);
});

const chipColors = ['#D99CA5', '#EDCB9C', '#EFEFA8', '#C2E0AE', '#8FC2DF', '#A19AD1'];
const chipsPerColor = 3;
let chipsPlaced = 0;

function createChip(color, initialX, initialY) {
  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.style.backgroundColor = color;
  chip.style.left = `${initialX}px`;
  chip.style.top = `${initialY}px`;
  chip.style.position = 'absolute';

  // Make draggable
  chip.draggable = true;
  chip.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text/plain", null);
    chip.classList.add('dragging');
  });
  chip.addEventListener('dragend', (e) => {
    chip.classList.remove('dragging');
    const rect = chipLayer.getBoundingClientRect();
    chip.style.left = `${e.clientX - rect.left - 10}px`;
    chip.style.top = `${e.clientY - rect.top - 10}px`;
  });

  chipLayer.appendChild(chip);
}

function spawnAllChips() {
  chipLayer.innerHTML = ''; // Clear existing chips

  let startX = 5;  // Starting position for chips
  let startY = 10;
  const spacingY = 30;

  chipColors.forEach((color, colorIndex) => {
    for (let i = 0; i < chipsPerColor; i++) {
      // Position chips stacked vertically per color
      let posX = startX + colorIndex * 30; 
      let posY = startY + i * spacingY;
      createChip(color, posX, posY);
      chipsPlaced++;
    }
  });
}

spawnAllChips();
