// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    return response.json();
})
.then(posts =>{
    let divOne = document.createElement('div');
    divOne.classList.add('divOne');
    for (let post of posts) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3> ID- ${post.id}</h3>
        <h4> Title- ${post.title}</h4>
        <h5> Body- ${post.body} </h5>`;
        let btn = document.createElement('button');
        btn.classList.add('btn')
        btn.innerText= 'click comments';
        btn.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/'+post.id + '/comments')
                .then(response => response.json())
                .then(comments => {
                    for (let comment of comments) {
                        if (post.id === comment.postId) {
                            let divComments = document.createElement('div');
                            divComments.classList.add('comments');
                            divComments.innerHTML = `
                        <h3> ID- ${comment.id}</h3>
                        <h4> Title- ${post.title}</h4>
                        <h5> mail- ${comment.email}</h5>
                        <h6> Body- ${comment.body} </h6>`;
                            card.append(divComments)
                        }
                        btn.disabled = true;
                    }
                })
        }
        card.append(btn);
        divOne.append(card);
        document.body.append(divOne);
    }
});










