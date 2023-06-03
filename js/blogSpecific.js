const blogPost = document.querySelector(".blog");
const modalImg = document.querySelector(".modal-img")

const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get("id");



async function getBlogDetailed() {
      const url = `https://blissfulnirvanano.local/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
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

  modalImg.innerHTML = `<span>&times;</span><img src=${imageUrl} class="img_modal">`;

  document.querySelector(".sp_blog img").onclick = () => {
    document.querySelector(".modal-img").style.display = "block";
  }

  document.querySelector(".modal-img span").onclick = () => {
    document.querySelector(".modal-img").style.display = "none";
  }
}

getBlogDetailed();





