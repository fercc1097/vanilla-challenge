import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': Home,
    '/:id': Character,
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    let deleteButtons = document.getElementsByClassName("button-delete");
    for (let deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", function () {
            const id = document.getElementById(`idCell${this.dataset.id}`);
            const firstName = document.getElementById(`firstNameCell${this.dataset.id}`);
            const lastName = document.getElementById(`lastNameCell${this.dataset.id}`);
            const book = document.getElementById(`bookCell${this.dataset.id}`);
            const edit = document.getElementById(`editCell${this.dataset.id}`);
            const deleteCell = document.getElementById(`deleteCell${this.dataset.id}`);
            id.remove();
            firstName.remove();
            lastName.remove();
            book.remove();
            edit.remove();
            deleteCell.remove();
        })
    }

    console.log('Hello world')
}

export default router;