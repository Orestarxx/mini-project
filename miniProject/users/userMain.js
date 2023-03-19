let usersUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(usersUrl)
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            let userHolder = document.getElementById('userHolder');

            let refI = document.createElement('a');
            refI.href = `../usersDetails/detailsUserIndex.html?data=${JSON.stringify(user)}`
            refI.target = '_blank';
            userHolder.append(refI)

            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            refI.append(userDiv);

            let h5User = document.createElement('h5');
            h5User.innerHTML = `<span class="textColor">${user.id} - ${user.name}</span>`;
            userDiv.append(h5User);
        }
    })