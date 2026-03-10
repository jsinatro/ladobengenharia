document.addEventListener('DOMContentLoaded', () => {
    console.log("Lado B Engenharia: Scripts carregados com sucesso.");

    // 1. Configuração do WhatsApp
    const numeroWhatsApp = "5511996495465"; // INSIRA SEU NÚMERO AQUI (DDD + NÚMERO)
    const linksWhatsapp = document.querySelectorAll('.whatsapp-link');

    linksWhatsapp.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Pega a mensagem personalizada do atributo data-msg no HTML
            let mensagem = link.getAttribute('data-msg');
            let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    });

    // 2. Menu Mobile (Hambúrguer)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animação simples do ícone (opcional)
        hamburger.classList.toggle('toggle');
    });

    // Fecha o menu mobile ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
