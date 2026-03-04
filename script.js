



// 1. Seleciona o espaço onde o texto vai entrar
const projetos = document.getElementById('conteudo-projetos');

// 2. Busca o arquivo README.md localmente
fetch('README.md')
    .then(resposta => resposta.text()) // Pega o texto do arquivo
    .then(textoMarkdown => {
        // 3. Converte o Markdown para HTML e injeta na página
        projetos.innerHTML = marked.parse(textoMarkdown);
    })
    .catch(erro => {
        // Caso o arquivo não seja encontrado
        projetos.innerHTML = '<p>Erro ao carregar os projetos.</p>';
        console.error('Erro:', erro);
    });