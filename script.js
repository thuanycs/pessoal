const giftBox = document.getElementById("giftBox");
const message = document.getElementById("msg-inicial");
let hoverCount = 0;

function moveBoxRandomly() {
  const container = document.getElementById("tela-inicial");
  const maxX = container.offsetWidth - 160;
  const maxY = container.offsetHeight - 160;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  giftBox.style.left = `${randomX}px`;
  giftBox.style.top = `${randomY}px`;
}

giftBox.addEventListener("mouseenter", () => {
  hoverCount++;
  if (hoverCount < 4) {
    moveBoxRandomly();
    message.innerText = `Tentativa ${hoverCount}... Ainda não, guapa! Tente novamente.`;
  } else if (hoverCount === 4) {
    message.innerText = "Agora sim, pode abrir o seu presente!";
  }
});

giftBox.addEventListener("click", () => {
  if (hoverCount >= 4) {
    document.getElementById("tela-inicial").classList.remove("ativa");
    document.getElementById("tela-conteudo").classList.add("ativa");
  } else {
    message.innerText = "Ops! Ainda não 😆";
  }
});

// Modal da carta
const modal = document.getElementById("modalCarta");
const btnLer = document.getElementById("lerCarta");
const btnFechar = document.getElementById("fecharModal");
const envelope = document.getElementById("envelopeCarta");

btnLer.addEventListener("click", () => {
  modal.style.display = "flex";
  setTimeout(() => {
    envelope.classList.add("aberta");
  }, 300);
});

btnFechar.addEventListener("click", () => {
  envelope.classList.remove("aberta");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    envelope.classList.remove("aberta");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});

// Seções
function mostrarSeção(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Buquê de flores
function abrirFlores() {
  const modalFlores = document.getElementById('modalFlores');
  const bouquetContainer = document.getElementById('bouquet-container');
  bouquetContainer.innerHTML = ''; // Limpar o conteúdo anterior

  const positions = [
    { x: 74, y: 27 },
    { x: 44, y: 55 },
    { x: 74, y: 55 },
    { x: 104, y: 55 },
    { x: 32, y: 92 },
    { x: 63, y: 92 },
    { x: 90, y: 92 },
    { x: 119, y: 92 },
    { x: 30, y: 130 },
    { x: 59, y: 130 },
    { x: 89, y: 130 },
    { x: 119, y: 130 },
    
  ];

  positions.forEach((pos, index) => {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${pos.x}px`;
    flower.style.top = `${pos.y}px`;

    const flowerSVG = `
      <svg viewBox="0 0 64 128" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="50" width="4" height="60" fill="#228B22" rx="2" />
          <circle cx="32" cy="32" r="6" fill="#FFD700" />
          <circle cx="32" cy="16" r="10" fill="#FF69B4" />
          <circle cx="32" cy="48" r="10" fill="#FF69B4" />
          <circle cx="16" cy="32" r="10" fill="#FF69B4" />
          <circle cx="48" cy="32" r="10" fill="#FF69B4" />
          <circle cx="22" cy="22" r="10" fill="#FFB6C1" />
          <circle cx="42" cy="22" r="10" fill="#FFB6C1" />
          <circle cx="22" cy="42" r="10" fill="#FFB6C1" />
          <circle cx="42" cy="42" r="10" fill="#FFB6C1" />
        </svg>`;

    flower.innerHTML = flowerSVG;
    bouquetContainer.appendChild(flower);

    setTimeout(() => {
      flower.classList.add('show');
    }, index * 300);
  });

  modalFlores.style.display = 'flex';
}

function fecharFlores() {
  document.getElementById('modalFlores').style.display = 'none';
}

//Gatinho

function abrirGatinho() {
  document.getElementById("modalGatinho").style.display = "flex";
}

function fecharGatinho() {
  document.getElementById("modalGatinho").style.display = "none";
}

//Familia

function abrirCasa() {
  document.getElementById("modalCasa").style.display = "flex";
}

function fecharCasa() {
  document.getElementById("modalCasa").style.display = "none";
}

//Surpresa

function abrirSurpresa() {
  document.getElementById("modalSurpresa").style.display = "flex";
}

function fecharSurpresa() {
  document.getElementById("modalSurpresa").style.display = "none";
}

// Corações caindo
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💖';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);