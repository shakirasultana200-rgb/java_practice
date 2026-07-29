const user = {
    name: "Shakira",
    city: "Sylhet"
};

const jsonData = JSON.stringify(user);

const newUser = JSON.parse(jsonData);

console.log(newUser.name);