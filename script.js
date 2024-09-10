document.addEventListener('DOMContentLoaded', () => {
    const sala = document.querySelector('.sala');
    const numFileiras = 8; // Total de fileiras
    const numLugaresPorFileira = [1, 7, 7, 7, 7, 7, 7, 7]; // Lugares por fileira

    // Verifique se o contêiner está presente
    if (!sala) {
        console.error('Contêiner .sala não encontrado');
        return;
    }

    // Verifique se a lista numLugaresPorFileira tem o comprimento correto
    if (numLugaresPorFileira.length !== numFileiras) {
        console.error('O comprimento de numLugaresPorFileira não corresponde ao número de fileiras');
        return;
    }

    // Criar a estrutura de lugares
    numLugaresPorFileira.forEach((numLugares, i) => {
        console.log(`Criando fileira ${i + 1} com ${numLugares} lugares`);

        for (let j = 0; j < numLugares; j++) {
            const lugar = document.createElement('div');
            lugar.className = 'lugar';
            lugar.dataset.index = `${i}-${j}`;
            lugar.style.gridColumn = j + 1; // Coluna baseada no índice j
            lugar.style.gridRow = i + 1; // Fileira baseada no índice i

            lugar.addEventListener('click', () => {
                lugar.classList.toggle('selecionado');
                salvarSelecao();
            });

            sala.appendChild(lugar);
        }
    });

    function salvarSelecao() {
        const lugaresSelecionados = [...document.querySelectorAll('.lugar.selecionado')]
            .map(lugar => lugar.dataset.index);
        console.log('Lugares selecionados:', lugaresSelecionados);
        // Aqui você pode adicionar o código para salvar a informação, por exemplo, enviar para um servidor
    }
});
