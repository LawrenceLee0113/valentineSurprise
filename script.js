const pieces = document.querySelectorAll('.puzzle-piece');
const zones = document.querySelectorAll('.dropzone');

pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

zones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    draggableElement.classList.remove('hide');
}
