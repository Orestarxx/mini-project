let postUrl = new URL(location.href);
let currentPost = postUrl.searchParams.get('data');
const post = JSON.parse(currentPost);
console.log(post);

const mainDiv = document.getElementById('main');
const postHolder = document.getElementById('postHolder');

const divUserId = document.createElement('div');
divUserId.innerHTML = `<b>UserID:</b><span class="textColor">${post.userId}</span>`;

const divId = document.createElement('div');
divId.innerHTML = `<b>ID:</b> <span class="textColor">${post.id}</span>`;

const titleDiv = document.createElement('div');
titleDiv.innerHTML =`<b>Title:</b> <span class="textColor">${post.title}</span>`;

const bodyDiv = document.createElement('div');
bodyDiv.innerHTML = `<b>Body:</b> <span class="textColor">${post.body}</span>`

const commentsHolder = document.createElement('div');
commentsHolder.classList.add('commentsHolder');

postHolder.append(divUserId,divId,titleDiv,bodyDiv);
mainDiv.append(postHolder,commentsHolder);




 fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`)
.then(response => response.json())
.then(comments =>{
 console.log(comments);
 for (const comment of comments) {

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('commentDiv');
  commentsHolder.append(commentDiv);

  const commentId = document.createElement('div');
  commentId.innerHTML = `<b>ID:</b> <span class="textColor">${comment.id}</span>`;
  commentId.classList.add('commentDetails')


  const commentPostId = document.createElement('div');
  commentPostId.innerHTML = `<b>PostID:</b><span class="textColor">${comment.postId}</span>`;
  commentPostId.classList.add('commentDetails')


  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = `<b>Name:</b> <span class="textColor">${comment.name}</span>`;
  nameDiv.classList.add('commentDetails')


  const emailDiv = document.createElement('div');
  emailDiv.innerHTML = `<b>Email:</b> <span class="textColor">${comment.email}</span>`;
  emailDiv.classList.add('commentDetails')


  const bodyDiv = document.createElement('div');
  bodyDiv.innerHTML = `<b>Body:</b> <span class="textColor">${comment.body}</span>`;
  bodyDiv.classList.add('commentDetails')

  commentDiv.append(commentId,commentPostId,nameDiv,emailDiv,bodyDiv);


 }
})