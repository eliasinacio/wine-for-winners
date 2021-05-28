const Wines = {
  all: [
    {
      name: "Quartz Rosé",
      flavor: "Red fruits",

      winery: "Luigi Bosca",
      grapes: ["Pinot Gris", "Pinot Noir"],
      harvest: "2012",

      alcohol: 12,
      price: 129.00
    },
    {
      name: "Pure Galaxy",
      flavor: "Orange fruits",

      winery: "Gérard Bertrand",
      grapes: ["Nebbiolo", "Grenache"],
      harvest: "2011",

      alcohol: 14,
      price: 68.50
    },
    {
      name: "Black Mirror",
      flavor: "Red fruits",

      winery: "Kai Simone",
      grapes: ["Pinot Meunier", "Chardonnay"],
      harvest: "2014",

      alcohol: 20,
      price: 87.74
    }
  ]
}

const modal = document.querySelector('#modal');
const wineName = document.querySelector('#title h2');
const wineSub = document.querySelector('#title small');
const wineWinery = document.querySelector('#winery');
const wineGrapes = document.querySelector('#grapes');
const wineHarvest = document.querySelector('#harvest');
const alcoholValue = document.querySelector('#alcoholValue');
const alcoholField = document.querySelector('#alcoholField');
const price = document.querySelector('#price');


const Modal = {
  setValues ( wine ) {
    wineName.innerText = `${Wines.all[wine].name}`
    wineSub.innerText = `${Wines.all[wine].flavor}`
    wineWinery.innerText = `${Wines.all[wine].winery}`
    wineGrapes.innerText = `${Wines.all[wine].grapes}`
    wineHarvest.innerText = `${Wines.all[wine].harvest}`
    alcoholValue.innerText = `${Wines.all[wine].alcohol}`
    alcoholField.style.width = `${Wines.all[wine].alcohol/10*15+'px'}`
    price.innerText = `${Wines.all[wine].price
                                .toFixed(2)
                                .toString()
                                .replace('.', ",")}`
  },
  open () {
    modal.style.zIndex = 5;
    modal.hidden = false;
  },
  
  close () {
    modal.style.zIndex = -1;
    modal.hidden = true;
  }
}