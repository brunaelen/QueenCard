/*document.addEventListener('DOMContentLoaded', function() {
    // Código específico para a página de autenticação
    if (document.body.classList.contains('pagina-autenticacao')) {
        const titulo = document.querySelector('.title-with-image h1');
        if (titulo) {
            titulo.classList.add('titulo-estilizado');
        }

        const botaoEntrar = document.querySelector('button[type="submit"]');
        if (botaoEntrar) {
            botaoEntrar.addEventListener('click', function(event) {
                const usuario = document.getElementById('funcionario').value.trim();
                const codigo = document.getElementById('codigo').value.trim();

                if (!usuario || !codigo) {
                    event.preventDefault();
                    alert('Por favor, preencha todos os campos.');
                }
            });
        }
    }

    //Código específico para outra página (por exemplo, a página de atualizações)
    if (document.body.classList.contains('pagina-atualizacao')) {
         //Adicione a lógica específica para a página de atualizações aqui
         //Exemplo: manipulação de DOM, validação de formulários, etc.
    }

     //Adicione mais condições conforme necessário para outras páginas
});*/

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a página é de autenticação
    if (document.body.classList.contains('pagina-autenticacao')) {
        // Código específico para a página de autenticação
        const titulo = document.querySelector('.title-with-image h1');
        const botaoEntrar = document.querySelector('button[type="submit"]');

        if (titulo) {
            titulo.classList.add('titulo-estilizado');
        }

        if (botaoEntrar) {
            botaoEntrar.addEventListener('click', function(event) {
                const usuario = document.getElementById('usuario').value.trim();
                const codigo = document.getElementById('senha').value.trim();

                if (!usuario || !codigo) {
                    event.preventDefault();
                    alert('Por favor, preencha todos os campos.');
                }
            });
        }
    }
});
