  // Encontre todos os links do menu
  const menuLinks = document.querySelectorAll('.navbar-nav a');
    
  // Adicione um ouvinte de eventos para cada link do menu
  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Encontre o elemento "navbar-collapse" e remova a classe "show"
          const menuCollapse = document.querySelector('.navbar-collapse');
          menuCollapse.classList.remove('show');
      });
  });