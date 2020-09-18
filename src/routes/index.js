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
    
    const localData = JSON.parse(localStorage.getItem("localData"));
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
            const dataToBeRemoved = localData.indexOf(this.dataset.id)
            localData.splice(dataToBeRemoved,1)
            localStorage.setItem("localData",JSON.stringify(localData))
            console.log(localStorage.getItem("localData").length)
            if(localStorage.getItem("localData").length === 2) alert("Ya no hay más elementos")
        })
    }

    let editButtons = document.getElementsByClassName("button-edit");
    for (let editButton of editButtons) {
        editButton.addEventListener("click", function () {
            const id = document.getElementById(`idCell${this.dataset.id}`).innerText;
            const firstName = document.getElementById(`firstNameCell${this.dataset.id}`).innerText;
            const lastName = document.getElementById(`lastNameCell${this.dataset.id}`).innerText;
            const book = document.getElementById(`bookCell${this.dataset.id}`).innerText;
            document.getElementById("idInput").value = id;
            document.getElementById("tituloInput").value = book;
            document.getElementById("nombreInput").value = firstName;
            document.getElementById("apellidoInput").value = lastName;
            openModal(`Editar: ${book}`,()=>{
                let bookEdited = getFormBook();
                const dataToBeRemoved = localData.findIndex(i => i.book === book);
                console.log(dataToBeRemoved)
                localData.splice(dataToBeRemoved,1)
                localData.push(bookEdited)
                localStorage.setItem("localData",JSON.stringify(localData))
                closeModal();
                window.location.reload();

            })
        })
    }


    const addButton = document.getElementById("addButton")
    addButton.addEventListener('click',()=>{
    openModal("Nuevo Libro", ()=>{
        let newBook = getFormBook();
        console.log(newBook);
        insertBook(newBook);
        closeModal()
    });

    })

    const insertBook = (book)=>{
        localData.push(book);
        console.log(localData);
        localStorage.setItem("localData",JSON.stringify(localData))
        window.location.reload();
    }


    const getFormBook = () =>{
        const bookId = document.getElementById("idInput").value;
        const bookTitulo = document.getElementById("tituloInput").value;
        const bookNombre = document.getElementById("nombreInput").value;
        const bookApellido = document.getElementById("apellidoInput").value;
        let newBook = {"id": parseInt(bookId),
        "first_name": bookNombre,
        "last_name": bookApellido,
        "book": bookTitulo }
        return newBook;
    }
    const closeModal = () =>{
        let formBook = getFormBook();
        let modal = document.getElementById("modal");
        document.getElementById("idInput").value = '';
        document.getElementById("tituloInput").value = '';
        document.getElementById("nombreInput").value = '';
        document.getElementById("apellidoInput").value = '';
        modal.style.display = "none"
        return formBook;
    }
    const openModal = (title,cb) => {
        document.getElementById("formTitle").innerText = title;
        let modal = document.getElementById("modal");
        modal.style.display = "flex"
        const formButton = document.getElementById("addButtonForm");
        formButton.addEventListener('click', cb)
    }

}

export default router;