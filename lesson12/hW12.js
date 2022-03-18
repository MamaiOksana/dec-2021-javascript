// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(answer => {
//         return answer.json();
//     })
//     .then(posts =>{
//         let divOne = document.createElement('div');
//         divOne.classList.add('divOne');
//         for (let post of posts) {
//             let divCard = document.createElement('div');
//             divCard.classList.add('post');
//             divCard.innerHTML = `
//              <h3>ID: ${post.id}</h3>
//                       <div>Title: ${post.title}</div>
//                       <p>Body: ${post.body}</p>`;
//             divOne.append(divCard);
//             document.body.append(divOne);
//         }
//     });
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(answer2 => answer2.json())
.then(comments =>{
    let info = document.createElement('div');
    info.classList.add('info');
    for (let comment of comments) {
        let information = document.createElement('div');
        information.classList.add('comment');
        information.innerHTML = `
        <h3>ID: ${comment.id}</h3>
        <h4>Name: ${comment.name}</h4>
        <h5>Email: ${comment.email}</h5>
        <h6>Body: ${comment.body}</h6>`;
        info.append(information);
        document.body.append(info);
    }
})