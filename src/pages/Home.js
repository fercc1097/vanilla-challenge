import getData from '../utils/getData';

const Home = async () => {
    const books = await getData();
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
                Acciones
            </p>
        </div>

        ${books.map(book => `
        <div class="table--content">
            <p>
                ${book.id}
            </p>
        </div>
        <div class="table--content">
            <p>
                ${book.first_name} 
            </p>
        </div>
        <div class="table--content">
            <p>
                ${book.last_name}
            </p>
        </div>
        <div class="table--content">
            <p>
                ${book.book}
            </p>
        </div>
        <div class="table--content table--button">
            <i class="fa fa-pencil" aria-hidden="true"></i>
        </div>
        `).join('')}
    </section>

    
    `;
    return view;
}
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