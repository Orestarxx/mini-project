let postUrl = new URL(location.href);
let currentPost = postUrl.searchParams.get('data');
const post = JSON.parse(currentPost);
console.log(post);

const mainDiv = document.getElementById('main');
const postHolder = document.getElementById('postHolder');

const divUserId = document.createElement('div');
divUserId.innerHTML = `<b>UserID:</b> ${post.userId}`;

const divId = document.createElement('div');
divId.innerHTML = `<b>ID:</b> ${post.id}`;

const titleDiv = document.createElement('div');
titleDiv.innerHTML =`<b>Title:</b> ${post.title}`;

const bodyDiv = document.createElement('div');
bodyDiv.innerHTML = `<b>Body:</b> ${post.body}`

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
  commentId.innerHTML = `<b>ID:</b> ${comment.id}`;
  commentId.classList.add('commentDetails')


  const commentPostId = document.createElement('div');
  commentPostId.innerHTML = `<b>PostID:</b> ${comment.postId}`;
  commentPostId.classList.add('commentDetails')


  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = `<b>Name:</b> ${comment.name}`;
  nameDiv.classList.add('commentDetails')


  const emailDiv = document.createElement('div');
  emailDiv.innerHTML = `<b>Email:</b> ${comment.email}`;
  emailDiv.classList.add('commentDetails')


  const bodyDiv = document.createElement('div');
  bodyDiv.innerHTML = `<b>Body:</b> ${comment.body}`;
  bodyDiv.classList.add('commentDetails')

  commentDiv.append(commentId,commentPostId,nameDiv,emailDiv,bodyDiv);


 }
})