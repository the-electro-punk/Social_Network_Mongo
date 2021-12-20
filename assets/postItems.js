let postTitle = document.getElementById("titleInput")
let postContent = document.getElementById("postInput")
let list_posts = document.getElementById("list_posts")

let loggedPosts = []

let submit = document.getElementById("postBTN")

submit.addEventListener('click', submitPost)

function submitPost() {
    for (var i = 0; i < loggedPosts; i++) {
        let newPost = document.createElement('li')
        newPost.textContent = (postTitle.value + '<b>' + postContent.value)
        list_posts.textContent = newPost
    }
}