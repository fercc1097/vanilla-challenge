const API = "https://my.api.mockaroo.com/books.json?key=8feed230";

const getData = async () => {
    const apiURL = API;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error){
        console.log('Fetch Error',error)
    }
}

export default getData;