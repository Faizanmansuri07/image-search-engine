let accessKey = "SUsbRVQR9nQJc0v1nzXCRbLmcnMjF2ZUVtqp-d84pWo";
let input = document.querySelector("#image");
let submit = document.querySelector("#submit");
const searchResult = document.querySelector(".img-container");
const more = document.querySelector("#more");
let keyword ="";
let page = 1;

async function fetchData() {
    keyword = input.value;
    const api = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    let response = await fetch(api);
    let data  = await response.json();
    if(page===1) {
        searchResult.innerHTML="";
    }
    console.log(data);
  const results = data.results

  results.map((result)=>{
     const image = document.createElement("img");
     image.src= result.urls.small;
     const imgLink = document.createElement("a");
     imgLink.href=result.links.html;
     imgLink.target ="_blank";

     imgLink.appendChild(image);
     searchResult.appendChild(imgLink);
  });
  more.style.display="block";
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    page = 1;
    fetchData();
});
more.addEventListener("click" ,()=>{
    page++;
    fetchData();
});
