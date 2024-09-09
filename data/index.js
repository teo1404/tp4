async function request() {
  const response = await fetch("data/jsons/articulos.json");
  const data = await response.json();
  return data;
}
let setBody=(view,data,id)=>{
  switch(view){
    case"article":
      return setArticleView(data,id);
    case"cart":
      return setCartView();
    default:
      return setHomeView(data);
  }
}
let setView=async (view,id)=>{
  window.scroll(0,40);
  let data=await request();
  let main=document.querySelector("main");
  main.className=view;
  main.innerHTML=setBody(view,data,id)
}
setView();