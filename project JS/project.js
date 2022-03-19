let usersContainer = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(value => {
    for (let userItem of value) {
        let userContainer = document.createElement('div');
        userContainer.classList.add('user');
        let anhor = document.createElement('a');
        anhor.innerText = `${userItem.id} - ${userItem.name}`;
        anhor.href = `./userDetails.html?data=${JSON.stringify(userItem)}`;
        userContainer.appendChild(anhor);
        usersContainer.appendChild(userContainer);
    }
});