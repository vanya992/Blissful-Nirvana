const blogPost = document.querySelector(".blog");
const modalDisplay = document.querySelector(".modal-img");
const modalImage = document.querySelector(".modal-img img");


const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get("id");



async function getBlogDetailed() {
      const url = `https://blissfulnirvana.simplygreat.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
      const response = await fetch(url);
      const results = await response.json();
      const blog = results;
      const featuredMedia = blog._embedded["wp:featuredmedia"][0];
      const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
      const altText = featuredMedia.alt_text;
      
    blogPost.innerHTML = "";
    console.log(blog);
  
    const newPageTitle = `Blissful Nirvana | ${blog.title.rendered}`;
    document.title = newPageTitle;
  
  blogPost.innerHTML = `<h2>${blog.title.rendered}</h2><div class="sp_blog"><div><img src="${imageUrl}" alt="${altText}" class="img"></div><div><p>${blog.content.rendered}</p></div></div>`;

// Reference for modal image: https://www.youtube.com/watch?v=QghhoJBdw7A

  modalDisplay.innerHTML = `<span>&times;</span><img src=${imageUrl} class="img_modal">`;


  document.querySelector(".sp_blog img").onclick = () => {
    modalDisplay.style.display = "block";
  }

  modalDisplay.addEventListener("click", (event) => {
    if (event.target === modalDisplay || event.target === modalImage) {
      modalDisplay.style.display = "none";
    }
  })

  document.querySelector(".modal-img span").onclick = () => {
    modalDisplay.style.display = "none";
  }
}

getBlogDetailed();





