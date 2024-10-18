document.addEventListener("DOMContentLoaded",function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/MarioFelipe14')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nameElement.innertText = json.name;
        usernameElement.innertText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innertText = json.following;
        followersElement.innertText = json.followers;
        repos.innertText = json.public_repos;
        linkElement.href = json.html_url;
    })

    
});