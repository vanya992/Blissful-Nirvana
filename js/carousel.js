const carouselContainer = document.querySelector(".center");
const carouselContainerMobile = document.querySelector(".mobile")

let currentSlide = 1;

const url = "https://blissfulnirvana.simplygreat.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia?per_page=100";

async function detailed() {
    const response = await fetch(url);
    const results = await response.json();
    const post = results;

    console.log(post);

    

    carouselContainer.innerHTML += `
  <div class="wrapper">
  <div class="inner">
  <button class="left-arrow"></button>
  <section class="active_display first">
      <div class="card">
        <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/acroyoga-scaled.jpg" class="slide_img">
        <h3>${post[0].title.rendered}</h3>
        <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
        <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/poweryoga.jpg" class="slide_img">
        <h3>${post[1].title.rendered}</h3>
        <a href="blogspecific.html?id=${post[0].id}"> <h4>Read More</h4></a>
      </div>
      <div class="card">
        <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/yoga1-scaled.jpg" class="slide_img">
          <h3>${post[2].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
        <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/yoga3s2-scaled.jpg" class="slide_img">
          <h3>${post[3].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      </section>
      <section class="second">
      <div class="card">
      <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/yoga2-scaled.jpg" class="slide_img">
          <h3>${post[4].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/kundalini-scaled.jpg" class="slide_img">
          <h3>${post[5].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/bikramyoga.webp" class="slide_img">
          <h3>${post[6].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/om-scaled.jpg" class="slide_img">
          <h3>${post[7].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      </section>
      <section class="third">
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/yogablock.webp" class="slide_img">
          <h3>${post[8].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/om2-scaled.jpg" class="slide_img">
          <h3>${post[9].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/heartcentered-scaled.jpg" class="slide_img">
          <h3>${post[10].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      <div class="card">
          <img src="http://blissfulnirvanano.local/wp-content/uploads/2023/05/manyogi-scaled.jpg" class="slide_img">
          <h3>${post[11].title.rendered}</h3>
          <a href="blogspecific.html?id=${post[0].id}"><h4>Read More</h4></a>
      </div>
      </section>  
      <button class="right-arrow"></button>
      </div>
       </div>`;
    
       const leftArrow = document.querySelector(".left-arrow");
       const rightArrow = document.querySelector(".right-arrow");

    function updateCarousel() {
        const slides = document.querySelectorAll(".center .inner > section");

        slides.forEach((slide) => {
            slide.classList.remove("active_display");
        });
  
        slides[currentSlide].classList.add("active_display");
    }
  
    leftArrow.addEventListener("click", (event) => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = 2;
        }
        updateCarousel();
    });
  
    rightArrow.addEventListener("click", (event) => {
        currentSlide++;
        if (currentSlide > 2) {
            currentSlide = 0;
        }
        updateCarousel();
    });
}
    

detailed();



