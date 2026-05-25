// Inicialização dos ícones do Lucide
document.addEventListener("DOMContentLoaded", () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Configura a lógica do Quiz se o elemento existir na página
    initQuiz();
    
    // Configura a lógica do Formulário se o elemento existir na página
    initContactForm();
});

// Lógica Funcional do Quiz
function initQuiz() {
    const options = document.querySelectorAll('.quiz-option');
    const resultDiv = document.getElementById('quiz-result');
    
    if (options.length === 0) return;

    options.forEach(button => {
        button.addEventListener('click', () => {
            // Desabilita todas as opções após um clique
            options.forEach(btn => btn.disabled = true);
            
            const isCorrect = button.getAttribute('data-correct') === 'true';
            
            if (isCorrect) {
                button.classList.add('correct');
                resultDiv.innerHTML = "🎉 Resposta Correta! Os drones otimizam o monitoramento do campo.";
                resultDiv.style.color = "#4ade80";
            } else {
                button.classList.add('wrong');
                resultDiv.innerHTML = "❌ Ops! A resposta certa era a B (Drones agrícolas).";
                resultDiv.style.color = "#f87171";
            }
        });
    });
}

// Lógica de Envio do Formulário de Contato
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successDiv = document.getElementById('form-success');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar
        
        // Simulação de envio com sucesso para o usuário
        successDiv.textContent = "✓ Mensagem enviada com sucesso! Obrigado pelo contato.";
        form.reset(); // Limpa os campos preenchidos
        
        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            successDiv.textContent = "";
        }, 5000);
    });
}
