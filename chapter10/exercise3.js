async function loadPosts() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const posts = await response.json();

        for (let i = 0; i < 5; i++) {
            console.log(posts[i].title);
        }

    } catch (error) {
        console.log("Failed to load posts.");
    }

}

loadPosts();