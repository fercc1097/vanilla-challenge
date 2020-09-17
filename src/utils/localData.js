function localData() {
    let functionData = '';
    return {
        printSomething: () => console.log("printed something"),
        loadData: (externalData) => {
            functionData = externalData;
            if (functionData !== '') return 'data loaded succesfully'
        },
        getData: () => functionData,
        deleteData: (id) => {
            const index = functionData.indexOf(id);
            if (index > -1) {
                functionData.splice(index, 4);
                console.log(`item: ${id} deleted succesfully`)
            }
        }
    }
}

export default localData;