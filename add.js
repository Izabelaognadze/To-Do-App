import { searchBarList } from "./dom.js";
export function add(value, id) {
    const li = document.createElement('li');
    const addRadio = document.createElement('input');
    const addName = document.createElement('span');
    const addDelete = document.createElement('img');
    const addHr = document.createElement('hr');

    addRadio.setAttribute('type', 'radio');
    addRadio.classList.add('radioBtn')
    addName.textContent = value;
    addName.classList.add('name');
    addDelete.setAttribute('src', 'trash-svgrepo-com.svg');
    addDelete.classList.add('delete')
    addHr.setAttribute('id', 'hr');

    li.appendChild(addRadio);
    li.appendChild(addName);
    li.appendChild(addDelete);
    li.setAttribute('data-id', id);//axali kodi
    searchBarList.appendChild(li);
    searchBarList.appendChild(addHr);
}
