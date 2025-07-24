function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

const emojiLayer = document.getElementById("emoji-layer");
const chipLayer = document.getElementById("chip-layer");

const gridSize = 12;
const tileSize = 48;
let chipsPlaced = 0;
const maxChips = 3;

// Define emojis and their positions manually (row, col)
const emojiData = [
  { emoji: "🍎", row: 0, col: 0 },
  { emoji: "🐬", row: 1, col: 2 },
  { emoji: "🌟", row: 3, col: 4 },
  { emoji: "🦊", row: 5, col: 7 },
  { emoji: "🔮", row: 7, col: 9 },
  { emoji: "🌿", row: 10, col: 11 }
];

// Add emojis to the board
emojiData.forEach(({ emoji, row, col }) => {
  const emojiEl = document.createElement("div");
  emojiEl.classList.add("emoji");
  emojiEl.textContent = emoji;

  emojiEl.style.left = `${col * tileSize + 10}px`; // +10px to center nicely
  emojiEl.style.top = `${row * tileSize + 10}px`;

  emojiEl.addEventListener("click", () => {
    if (chipsPlaced < maxChips) {
      placeChip(col * tileSize + 10, row * tileSize + 10);
      chipsPlaced++;
    }
  });

  emojiLayer.appendChild(emojiEl);
});

// Function to place a chip on the board
function placeChip(x, y) {
  const chip = document.createElement("div");
  chip.classList.add("chip");
  chip.style.left = `${x}px`;
  chip.style.top = `${y}px`;

  chipLayer.appendChild(chip);

  makeDraggable(chip);
}

// Make chips draggable
function makeDraggable(el) {
  let offsetX, offsetY;

  el.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;

    function onMouseMove(event) {
      let newX = event.clientX - offsetX;
      let newY = event.clientY - offsetY;

      // Keep chips inside the board boundaries
      const maxX = tileSize * gridSize - el.offsetWidth;
      const maxY = tileSize * gridSize - el.offsetHeight;

      if (newX < 0) newX = 0;
      else if (newX > maxX) newX = maxX;

      if (newY < 0) newY = 0;
      else if (newY > maxY) newY = maxY;

      el.style.left = `${newX}px`;
      el.style.top = `${newY}px`;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  el.ondragstart = () => false;
}
