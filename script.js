/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsList = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = sendInput.value;
        const newItem = document.createElement('p');

        newItem.classList.add('items');
        newItem.textContent = itemText;

        if (itemText != '') {
            itemsList.append(newItem);
        }

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })

        sendInput.value = '';
    }
});