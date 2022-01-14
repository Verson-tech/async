const posts = [
  { title: "POst One", body: "This is post one" },
  { title: "POst Two", body: "This is post two" }
];
// we are mimicking a fetch from the server, which may take  a few sceconds:
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}



createPost({ title: "Post Three", body: "This is post three " }, getPosts);
