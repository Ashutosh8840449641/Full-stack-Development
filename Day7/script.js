async function fetchdata() {
    try {
        let response=await fetch("https://api.github.com/user?per_page=10");
        let data = await response.json();
        // console.log(data);
        data.forEach((element) => {
            console.log('Node Id ${element.node_id} Login ${element.login}');
        });
    } catch (error) {
        console.log(error);

    }
}