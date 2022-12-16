 "use strict";
(() => {

    function getGithubUsernames() {
        let userInput = prompt("Enter Username:")
        //const getUserCommit= `/users/${username}/events/public`;
        const getUserCommit = (username) => {
            fetch(`http://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubToken}`}})
                .then(response => response.json())
        }


    }
    console.log(getGithubUsernames)
})();






