// let users = JSON.parse(localStorage.users)

// function printAllLocalStorage() {
//     // Перевірка, чи є щось у localStorage
//     if (localStorage.length === 0) {
//         console.log("localStorage порожній");
//         return;
//     }

//     // Прохід по всіх елементах localStorage
//     for (let index = 0; index < users.length; index++) {
//         console.log(users[index])

//     }
// }

// printAllLocalStorage();

document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.users)


    if (localStorage.length === 0) {
        console.log("localStorage порожній");
        return;
    }


    for (let index = 0; index < users.length; index++) {


        const containerDiv = document.createElement('div');
        containerDiv.className = 'conteiner d-flex align-items-center justify-content-center';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card p-3';
        cardDiv.id = 'user-profile';

        const img = document.createElement('img');
        img.id = 'profile-pic';
        img.src = users[index].image;
        img.alt = 'Profile Picture';
        img.className = 'card-img';
        img.style.minWidth = '375px';
        img.style.maxWidth = '375px';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title m-2 mb-3';
        cardTitle.textContent = 'Профіль користувача';

        const emailP = document.createElement('p');
        emailP.className = 'card-text';
        emailP.innerHTML = `Email: <span id="profile-email">${users[index].email}</span>`;

        const surnameP = document.createElement('p');
        surnameP.className = 'card-text';
        surnameP.innerHTML = `Прізвище: <span id="profile-surname">${users[index].lastName}</span>`;

        const nameP = document.createElement('p');
        nameP.className = 'card-text';
        nameP.innerHTML = `Ім'я: <span id="profile-name">${users[index].name}</span>`;

        const phoneP = document.createElement('p');
        phoneP.className = 'card-text';
        phoneP.innerHTML = `Телефон: <span id="profile-phone">${users[index].phone}</span>`;

        const deleteButton = document.createElement('button');
        deleteButton.className = "btn btn-danger mt-" + String(index);
        deleteButton.textContent = 'DELETE';
        deleteButton.id = index;

        deleteButton.addEventListener('click', function () {
            users1 = users
            users1.splice(deleteButton.id, 1)

            u = JSON.stringify(users1)
            localStorage.setItem('users', u)

            location.reload();
        });

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(emailP);
        cardBodyDiv.appendChild(surnameP);
        cardBodyDiv.appendChild(nameP);
        cardBodyDiv.appendChild(phoneP);
        cardBodyDiv.appendChild(deleteButton);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        containerDiv.appendChild(cardDiv);

        document.body.appendChild(containerDiv);
    }
});