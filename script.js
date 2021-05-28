const Wines = {
  all: [
    {
      name: "Quartz Rosé",
      flavor: "Red fruits",

      winery: "Luigi Bosca",
      grapes: ["Pinot Gris", "Pinot Noir"],
      harvest: "2012",

      alcohol: 12
    },
    {
      name: "Pure Galaxy",
      flavor: "Orange fruits",

      winery: "Gérard Bertrand",
      grapes: ["Nebbiolo", "Grenache"],
      harvest: "2011",

      alcohol: 14
    },
    {
      name: "Black Mirror",
      flavor: "Red fruits",

      winery: "Kai Simone",
      grapes: ["Pinot Meunier", "Chardonnay"],
      harvest: "2014",

      alcohol: 20
    }
  ]
}

const modal = document.querySelector('#modal');
const Modal = {
  open () {
    modal.style.zIndex = 5;
    modal.hidden = false;
  },
  close () {
    modal.style.zIndex = -1;
    modal.hidden = true;
  }
}
