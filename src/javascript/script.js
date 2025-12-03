// --- 1. Função para adicionar eventos de drag em um card ---
function addDragEvents(card) {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
}

// --- 2. Aplica drag nos cards que já existem no HTML ---
document.querySelectorAll('.kanban-card').forEach(addDragEvents);

// --- 3. Eventos das colunas (onde solta o card) ---
document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        column.classList.add('cards-hover');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('cards-hover');
    });

    column.addEventListener('drop', e => {
        e.preventDefault();
        column.classList.remove('cards-hover');

        const draggingCard = document.querySelector('.kanban-card.dragging');
        if (!draggingCard) return; // se não tiver card arrastando, não faz nada

        column.appendChild(draggingCard);
    });
});

// --- 4. Botão de adicionar card (+) ---
document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
        // coluna onde o botão foi clicado
        const column = button.closest('.kanban-column');
        const cardsContainer = column.querySelector('.kanban-cards');

        const titulo = prompt('Descrição da tarefa:');
        if (!titulo) return; // cancelou ou deixou vazio

        // cria o card novo
        const newCard = document.createElement('div');
        newCard.classList.add('kanban-card');
        newCard.setAttribute('draggable', 'true');

        newCard.innerHTML = `
            <div class="badge low">
                <span>Nova tarefa</span>
            </div>
            <p>${titulo}</p>
            <div class="card-infos">
                <div class="card-icons">
                    <p><i class="fa-regular fa-comment"></i> 0</p>
                    <p><i class="fa-solid fa-paperclip"></i> 0</p>
                </div>
                <div class="user">
                    <img src="src/images/pedrohenrique1.png" alt="Avatar">
                </div>
            </div>
        `;

        // adiciona na coluna
        cardsContainer.appendChild(newCard);

        // deixa o card novo arrastável
        addDragEvents(newCard);
    });
});
// --- 1. Função para adicionar eventos de drag em um card ---
function addDragEvents(card) {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
}

// --- 2. Aplica drag nos cards que já existem no HTML ---
document.querySelectorAll('.kanban-card').forEach(addDragEvents);

// --- 3. Eventos das colunas (onde solta o card) ---
document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        column.classList.add('cards-hover');
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('cards-hover');
    });

    column.addEventListener('drop', e => {
        e.preventDefault();
        column.classList.remove('cards-hover');

        const draggingCard = document.querySelector('.kanban-card.dragging');
        if (!draggingCard) return; // se não tiver card arrastando, não faz nada

        column.appendChild(draggingCard);
    });
});

// --- 4. Botão de adicionar card (+) ---
document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
        // coluna onde o botão foi clicado
        const column = button.closest('.kanban-column');
        const cardsContainer = column.querySelector('.kanban-cards');

        const titulo = prompt('Descrição da tarefa:');
        if (!titulo) return; // cancelou ou deixou vazio

        // cria o card novo
        const newCard = document.createElement('div');
        newCard.classList.add('kanban-card');
        newCard.setAttribute('draggable', 'true');

        newCard.innerHTML = `
            <div class="badge low">
                <span>Nova tarefa</span>
            </div>
            <p>${titulo}</p>
            <div class="card-infos">
                <div class="card-icons">
                    <p><i class="fa-regular fa-comment"></i> 0</p>
                    <p><i class="fa-solid fa-paperclip"></i> 0</p>
                </div>
                <div class="user">
                    <img src="src/images/pedrohenrique1.png" alt="Avatar">
                </div>
            </div>
        `;

        // adiciona na coluna
        cardsContainer.appendChild(newCard);

        // deixa o card novo arrastável
        addDragEvents(newCard);
    });
});
