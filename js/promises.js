"use Strict";

(() => {
    const userSearch = name => {
        let gitHubApi = `https://api.github.com/users/${name}/events/public`;
        fetch(gitHubApi, {headers: {'Authorization': GitHubKey}})
            .then(response => response.json())
            .then(data => {
                const latestEntry = data.filter(event => event.type === "PushEvent");
                console.log(`${name} most recent entry was on: ${latestEntry[0].created_at}.`);
            })
            .catch(error => console.log(error));
    }

    userSearch('IsaacRamirez108')
})();

