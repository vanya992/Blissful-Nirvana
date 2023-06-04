const blogDisplay = document.querySelector(".blogs");
const loadMoreButton = document.getElementById("load-more");
let currentItems = 10;

const url = "https://blissfulnirvana.simplygreat.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=100";

async function displayPosts() {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    const post = results;
    for (let i = 0; i < currentItems; i++) {
        const postItem = post[i];

        if (postItem._embedded) {
            const featuredMedia = postItem._embedded["wp:featuredmedia"][0];
            const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
            const title = postItem.title.rendered;
            const alt = featuredMedia.alt_text;
      
            blogDisplay.innerHTML += `<div class="blog-box"><img src="${imageUrl}" class="slide_img" alt="${alt}"><h3>${title}</h3><a href="blogspecific.html?id=${postItem.id}"<h4 class="button">Read More</h4><a/></div>`;
          }
        
    }

    for (let i = currentItems; i < post.length; i++) {
        const postItem = post[i];
        if (postItem._embedded) {
            const featuredMedia = postItem._embedded["wp:featuredmedia"][0];
            const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
            const title = postItem.title.rendered;
      
            blogDisplay.innerHTML += `<div class="blog-box hide-post"><img src="${imageUrl}" class="slide_img" alt="${alt}"><h3>${title}</h3><a href="blogspecific.html?id=${postItem.id}"<div class="button">Read More</div><a/></div>`;
          }
        }
    

    if (currentItems >= post.length) {
        loadMoreButton.style.display = "none";
}
}

displayPosts();

document.addEventListener("DOMContentLoaded", function() {


loadMoreButton.onclick = () => {
    let hiddenPosts = document.querySelectorAll(".hide-post"); 
    for (var i = 0; i < 2; i++) {
        if (hiddenPosts[i]) {
            hiddenPosts[i].classList.remove("hide-post");
        }
    }
    

    currentItems += 2;

    if (currentItems >= document.querySelectorAll(".container .blogs .box").length) {
        loadMoreButton.style.display = "none";
    }
}
});

