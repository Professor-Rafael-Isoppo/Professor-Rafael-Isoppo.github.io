// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Formulário de Contato
document
  .querySelector(".contato-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    // Simulação de envio (em produção, conectar com backend)
    alert(
      `Obrigado, ${nome}! Sua mensagem foi recebida. Responderemos em breve para ${email}.`
    );

    // Limpar formulário
    this.reset();
  });

// Animação de entrada dos elementos ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Elementos para observar
document
  .querySelectorAll(".video-card, .valor-item, .upcoming-item, .stat-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Efeito parallax suave no hero
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-visual");

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Adicionar partículas matemáticas dinâmicas
function createMathParticle() {
  const symbols = [
    "∫",
    "∑",
    "π",
    "∞",
    "∂",
    "√",
    "Δ",
    "θ",
    "λ",
    "Ω",
    "α",
    "β",
    "γ",
    "∇",
  ];
  const colors = ["blue", "purple", "pink"];
  const particle = document.createElement("span");
  particle.className = `math-particle ${colors[Math.floor(Math.random() * colors.length)]}`;
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = Math.random() * 10 + 10 + "s";
  particle.style.fontSize = Math.random() * 2 + 1 + "rem";
  particle.style.opacity = Math.random() * 0.05 + 0.02;

  document.querySelector(".math-background").appendChild(particle);

  // Remover após animação
  setTimeout(() => {
    particle.remove();
  }, 20000);
}

// Criar partículas periodicamente
setInterval(createMathParticle, 3000);

// Highlight da navegação baseado na seção atual
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Easter egg: Konami code para mostrar equações especiais
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    showEasterEgg();
  }
});

function showEasterEgg() {
  const equations = [
    "e^(iπ) + 1 = 0 (Identidade de Euler)",
    "∫₋∞^∞ e^(-x²) dx = √π (Integral Gaussiana)",
    "ζ(s) = Σ₁^∞ 1/n^s (Função Zeta de Riemann)",
    "∇×(∇×F) = ∇(∇·F) - ∇²F (Identidade Vetorial)",
  ];

  const equation = equations[Math.floor(Math.random() * equations.length)];
  alert("🎓 Easter Egg Matemático!\n\n" + equation);
}

// Console log matemático
console.log(
  "%c∫ Bem-vindo à Animática! ∫",
  "font-size: 20px; color: #6366f1; font-weight: bold;"
);
console.log(
  "%clim(conhecimento → ∞) = sucesso",
  "font-size: 14px; color: #8b5cf6; font-style: italic;"
);