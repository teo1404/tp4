let articleCount=(type,id)=>{
  let n=document.querySelector(`#${id} .num`);
  n.innerText=Number(n.innerText)+(type=="+" ? 1 : (n.innerText>1 ? -1 : 0));
  setTotal();
}
let setTotal=()=>{
  let total=0;
  document.querySelectorAll("article").forEach(e=>{
    let a = Number(e.querySelector(".article-price .price").innerHTML)
    let b = Number(e.querySelector(".article-price .num").innerHTML)
    total+= a * b;
  })
  document.querySelector("#total h3").innerText="$"+total.toFixed(2);
}
let checkOut=()=>{
  localStorage.removeItem("cart");
  setView("cart");
}
let setCartContent=()=>{
  let result="";
  if(localStorage.getItem("cart")!==null){
    let data=JSON.parse("["+localStorage.getItem("cart")+"]");
    data.forEach(e => {
      result+=/*html*/`
      <article id="a${e.id}">
        <div class="img-container" onClick='setView("article",${e.id})'>
          <img src="${e.img.src}" alt="">
        </div>
        <div class="article-info">
          <h4>${e.name}</h4>
          <div class="article-options"><h5>${e.color}</h5><h5 class="size">${e.size}</h5></div>
          <div class="article-price">
            <h4 class="price">${e.price.now}</h4>
            <div class="article-unit">
              <button class="icon restar" onclick='articleCount("-","a${e.id}")'>remove</button>
              <h5 class="num">1</h5>
              <button class="icon sumar" onclick='articleCount("+","a${e.id}")'>add</button>
            </div>
          </div>
        </div>
      </article>`
    });
  }
  return result;
}
function setCartView(){
  let total=0;
  if(localStorage.getItem("cart")!==null){
    JSON.parse("["+localStorage.getItem("cart")+"]").forEach(e=>total+=Number(e.price.now))
  }
  return /*html*/`
  <section id="heading">
    <span class="icon" onclick='setView("home")'>arrow_back</span>
    <h2>tu compra</h2>
  </section>
  <section id="cart" class="${localStorage.getItem("cart")===null ? "empty" : ""}">
    ${setCartContent()}
  </section>
  <section id="price">
    <div id="total"><h5>Total</h5><h3>$${total.toFixed(2)}</h3></div>
    <button id="end" onclick="checkOut()">cerra compra</button>
  </section>`
}