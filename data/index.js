let setFooter=()=>{
    return /*html*/`
    <footer>
      <h3>hablame</h3>
      <div>
        <div class="row">
          <span class="icon">mail</span>
          <h5>el chispon</h5>
        </div>
        <div class="row">
          <span class="icon">mail</span>
          <h5>sanchezteo@gmail.com</h5>
        </div>
      </div>
    </footer>`
  }
  let setView=(viewName,id)=>{
    document.body.innerHTML=/*html*/`
    ${viewName=="article"?setArticleView():setHomeView()}
    ${setFooter()}
    <script src="data/detalles.js"></script>
    <script src="data/home.js"></script>
    <script src="data/index.js"></script>`
    switch(viewName){
      case"article":
        setArticleData(id)
        break;
      default:
        setArticleList()
        break;
    }
  }
  
  setView("home");