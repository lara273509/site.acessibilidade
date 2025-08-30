// Lara Alves dos Santos 2E 15/08/2025
// Navegação mobile
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Controle de tema claro/escuro
const themeToggle = document.getElementById("theme-toggle");
let currentTheme = "dark"; // tema padrão

if (themeToggle) {
  // Carregar tema salvo
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.innerHTML = "☀️ Tema";
    currentTheme = "light";
  }

  themeToggle.addEventListener("click", () => {
    if (currentTheme === "dark") {
      document.body.classList.add("light-theme");
      themeToggle.innerHTML = "☀️ Tema";
      currentTheme = "light";
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      themeToggle.innerHTML = "🌙 Tema";
      currentTheme = "dark";
      localStorage.setItem("theme", "dark");
    }
  });
}

// Controle de tamanho da fonte
const fontSizeToggle = document.getElementById("font-size-toggle");
const fontSizes = ["font-small", "font-normal", "font-large", "font-extra-large", "font-huge"];
const fontLabels = ["A- Pequena", "A Normal", "A+ Grande", "A++ Muito Grande", "A+++ Enorme"];
let currentFontIndex = 1; // normal por padrão

if (fontSizeToggle) {
  // Carregar tamanho salvo
  const savedFontSize = localStorage.getItem("fontSize") || "1";
  currentFontIndex = parseInt(savedFontSize);
  document.body.classList.add(fontSizes[currentFontIndex]);
  fontSizeToggle.textContent = fontLabels[currentFontIndex];

  fontSizeToggle.addEventListener("click", () => {
    // Remove classe atual
    document.body.classList.remove(fontSizes[currentFontIndex]);
    
    // Avança para próximo tamanho
    currentFontIndex = (currentFontIndex + 1) % fontSizes.length;
    
    // Aplica nova classe
    document.body.classList.add(fontSizes[currentFontIndex]);
    fontSizeToggle.textContent = fontLabels[currentFontIndex];
    
    // Salva preferência
    localStorage.setItem("fontSize", currentFontIndex.toString());
  });
}



// Voltar ao topo
const btnTopo = document.getElementById("voltar-topo");
if (btnTopo) {
  btnTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Suaviza foco visível ao usar teclado
let byKeyboard = false;
window.addEventListener("keydown", () => { byKeyboard = true; }, { capture: true });
window.addEventListener("mousedown", () => { byKeyboard = false; }, { capture: true });
document.addEventListener("focusin", (e) => {
  if (byKeyboard) e.target.classList.add("keyboard-focus");
});
document.addEventListener("focusout", (e) => {
  e.target.classList.remove("keyboard-focus");
});

// Formulário demonstrativo
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada (modo demonstração). Obrigado!");
    form.reset();
  });
}

// Descrição das imagens ao passar o mouse
const imageDescriptions = [
  { src: "./images/1000160008.jpg", description: "Thalles Roberto com guitarra e óculos, cantando com intensidade" },
  { src: "./images/1000160013.jpg", description: "Capa do álbum Na Sala do Pai" },
  { src: "./images/1000160012.jpg", description: "Capa do álbum Uma História Escrita pelo Dedo de Deus" },
  { src: "./images/1000160014.jpg", description: "Capa do álbum Sejam Cheios do Espírito Santo" },
  { src: "./images/1000160015.jpg", description: "Capa do álbum As Canções que Canto pra Ela" },
];

const images = document.querySelectorAll("img");
const descriptionBox = document.createElement("div");
descriptionBox.style.cssText = "position: absolute; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 5px; border-radius: 3px; display: none; z-index: 1000;";
document.body.appendChild(descriptionBox);

images.forEach(image => {
  image.addEventListener("mouseover", (e) => {
    const desc = imageDescriptions.find(item => image.src.includes(item.src.split("/").pop()));
    if (desc) {
      descriptionBox.textContent = desc.description;
      descriptionBox.style.display = "block";
      descriptionBox.style.left = `${e.pageX + 10}px`;
      descriptionBox.style.top = `${e.pageY + 10}px`;
    }
  });

  image.addEventListener("mouseout", () => {
    descriptionBox.style.display = "none";
  });

  image.addEventListener("mousemove", (e) => {
    if (descriptionBox.style.display === "block") {
      descriptionBox.style.left = `${e.pageX + 10}px`;
      descriptionBox.style.top = `${e.pageY + 10}px`;
    }
  });
});


