

async function getUser() {
    const requestURL = `https://reqres.in/api/users/1`;


    const options = {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    };



    const response = await fetch(requestURL, options);

        const data = await response.json();
        document.body.innerHTML= `<p>Haettu käyttäjä: ${`data`};</p>`
}


getUser();

async function CreateUser() {
    const url = `https://reqres.in/api/users/`;

    const user = {
        name: `Maija Hemi`

    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(user)};

    const response = await fetch(url, options);
    const data = await response.json();
    document.body.innerHTML =`
        <h2> (${data});</h2>`
}

CreateUser();





async function error() {
    const url = `https://reqres.in/api/users/23`;
    try {
        console.log(error);
        const response = await fetch(url);

        if (!response.ok) {
            console.error(response);
        }
        const data = await response.json();
        console.log(`error`);
    } catch (error) {
        console.error(error);
    }
}
error();

async function fetchData(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        console.error(response);
    }
    return await response.json();
}
async function getTest() {
    try {
        const user = {
            name: 'John Doe',
            job: 'Developer'
        };
        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const userData = await fetchData(url, options);
        console.log(userData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
    const userData = await fetchData(url, options)
    document.write(userData);

}
getTest();