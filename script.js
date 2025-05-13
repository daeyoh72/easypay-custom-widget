document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffffff, #004990)`;
});

