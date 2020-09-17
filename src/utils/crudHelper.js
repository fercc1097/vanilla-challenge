function helper() {
    return {
        deleteBook(id) {
            const idCell = document.getElementById(`idCell${id}`);
            console.log(id)
            idCell.remove();
        }
    }
}
export default helper;