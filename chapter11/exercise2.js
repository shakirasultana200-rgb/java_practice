function parseData(text) {

    try {

        const data = JSON.parse(text);
        return data;

    } catch (error) {

        return "Invalid JSON data.";

    }

}

console.log(parseData('{"name":"Shakira"}'));
console.log(parseData("{invalid json"));