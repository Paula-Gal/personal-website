const light = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    light.style.background = `
    radial-gradient(
      circle at ${x}% ${y}%,
      rgba(100, 200, 255, 0.25),
      transparent 60%
    )
  `;
});
