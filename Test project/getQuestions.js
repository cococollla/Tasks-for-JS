function testInit() {
    fetch("http://localhost:8089/api/Test/TestInit", {
        method: "GET",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            alert(error);
        });
}