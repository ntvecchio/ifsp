document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'block';
}, false);

// Para fechar o menu dropdown ao clicar fora dele
window.addEventListener('click', function(e) {
    if (!document.querySelector('.navbar').contains(e.target)) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});


document.querySelectorAll('.login-button').forEach(button => {
    button.addEventListener('click', function(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripples = document.createElement('span');
      ripples.classList.add('ripple');
      ripples.style.left = `${x}px`;
      ripples.style.top = `${y}px`;
      this.appendChild(ripples);
  
      setTimeout(() => {
        ripples.remove();
      }, 600); // coincide com a duração da animação
    });
  });
  
  





