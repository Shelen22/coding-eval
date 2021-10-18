
let home = document.getElementById("content");

async function searchS(){

    let search = document.getElementById("ser").value;

    let res = await fetch(`http://newsapi.org/v2/everything?q=${search}&from=2021-10-18&sortBy=popularity&apiKey=2c3797d5f1134a6d8516325c2aec720f`);
    let data = await res.json();
      console.log('data:', data)
      searchPart(data.articles);
}

function searchPart(mn){
home.innerHTML = null;
mn.forEach((s) =>{
  let div = document.createElement("div");
  div.setAttribute("class","divv");
  
  let title = document.createElement("h1");
  title.innerText =s.title;

  let author = document.createElement("p");
  author.innerText = s.author;

  let img = document.createElement("img");
  img.src = s.urlToImage;

  div.append(title,author,img);
  home.append(div);
});
}
