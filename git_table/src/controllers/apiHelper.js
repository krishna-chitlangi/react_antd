export const getRepos = (user) => {

    return fetch(`https://api.github.com/users/${user}/repos`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const getStars = (user) => {

    return fetch(`https://api.github.com/users/${user}/starred`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};