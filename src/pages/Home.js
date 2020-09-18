import getData from "../utils/getData";
import helper from "../utils/crudHelper";

const bookHelper = helper();

const Home = async () => {
    let books = []

  if(localStorage.getItem("localData").length > 2){
    books = JSON.parse(localStorage.getItem("localData"));
}else{
      books = await getData();
      localStorage.setItem("localData", JSON.stringify(books));
  }
  
  const view = `
    <h1>Libros</h1>
    <section class="table">
        <div class="table--title">
            <p>
                ID
            </p>
        </div>
        <div class="table--title">
            <p>
                Nombre
            </p>
        </div>
        <div class="table--title">
            <p>
                Apellido
            </p>
        </div>
        <div class="table--title">
            <p>
                Titulo
            </p>
        </div>
        <div class="table--title">
            <p>
                Editar
            </p>
        </div>
        <div class="table--title">
            <p>
                Borrar
            </p>
        </div>

        ${books
          .map(
            (book) => `
        <div id="idCell${book.id}" class="table--content">
            <p id="id${book.id}">
                ${book.id}
            </p>
        </div>
        <div id="firstNameCell${book.id}" class="table--content">
            <p id="firstName${book.id}">
                ${book.first_name} 
            </p>
        </div>
        <div id="lastNameCell${book.id}" class="table--content">
            <p id="lastName${book.id}">
                ${book.last_name}
            </p>
        </div>
        <div id="bookCell${book.id}" class="table--content">
            <p id="book${book.id}">
                ${book.book}
            </p>
        </div>
        <div id="editCell${book.id}" class="table--content table--button">
            <i id="edit${book.id}" onClick="" class="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div data-id=${book.id} id="deleteCell${book.id}" class="table--content table--button button-delete">
        <i id="delete${book.id}" class="fa fa-trash-o" aria-hidden="true"></i>        </div>
        `
          )
          .join("")}
    </section>

    
    `;
  return view;
};
export default Home;

// <div class="Characters">
//     ${characters.results.map(character => `
//         <article class="Characters-item">
//             <a href="#/${character.id}">
//                 <img src="${character.image}" alt="name">
//                 <h2>${character.name}</h2>
//             </a>
//         </article>
//     `).join('')}

// </div>
