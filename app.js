import { add } from './add.js';
import { searchBarList, searchBar, addBtn, event, line } from './dom.js';
const input = document.getElementById('add_bar');

searchBarList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentNode;
        const line = li.nextElementSibling;
        searchBarList.removeChild(li);
        searchBarList.removeChild(line);
    }
});

searchBar.addEventListener('keyup', function (e) {
    const toker = e.target.value.toLowerCase();
    const tasksList = searchBarList.getElementsByTagName('li');
    Array.from(tasksList).forEach(function (task) {
        const title = task.children[1].textContent;
        if (title.toLowerCase().indexOf(toker) != -1) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    })
})

addBtn.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addBtn.querySelector('input[type="text"]').value;
    add(value);
    input.value = '';
});

event.forEach(e => {
    const date = new Date(e.dataset.date);
    console.log(date);
})
