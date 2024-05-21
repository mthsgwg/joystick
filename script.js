const dataHamb = {
  fifa: {
    name: "FIFA",
    price: 35.99,
  },
  gta: {
    name: "GTA",
    price: 65.99,
  },
  roblox: {
    name: "ROBLOX",
    price: 19.99,
  },
  uno: {
    name: "UNO",
    price: 35.99,
  },
  minecraft: {
    name: "MINECRAFT",
    price: 59.99,
  },
  pou: {
    name: "POU",
    price: 24.99,
  },
  freefire: {
    name: "FREE FIRE",
    price: 15.99,
  },
  angrybirds: {
    name: "ANGRY BIRDS",
    price: 10.99,
  },
  valorant: {
    name: "VALORANT",
    price: 25.99,
  },
};

function main() {
  const cart = document.getElementById("carrinho");
  const close = document.getElementById("close");
  const open = document.getElementById("open");
  const modal = document.getElementById("modal");
  const cartTotalValue = document.getElementById("total-value");
  const makeRequest = document.getElementById("make-request");

  //SANDUICHES
  const fifa = document.getElementById("fifa");
  const gta = document.getElementById("gta");
  const roblox = document.getElementById("roblox");
  const uno = document.getElementById("uno");
  const minecraft = document.getElementById("minecraft");
  const pou = document.getElementById("pou");
  const freefire = document.getElementById("freefire");
  const angrybirds = document.getElementById("angrybirds");
  const valorant = document.getElementById("valorant");

  fifa.addEventListener("click", (e) => pushCart(dataHamb.fifa));
  gta.addEventListener("click", (e) => pushCart(dataHamb.gta));
  roblox.addEventListener("click", (e) => pushCart(dataHamb.roblox));
  uno.addEventListener("click", (e) => pushCart(dataHamb.uno));
  minecraft.addEventListener("click", (e) => pushCart(dataHamb.minecraft));
  pou.addEventListener("click", (e) => pushCart(dataHamb.pou));
  freefire.addEventListener("click", (e) => pushCart(dataHamb.freefire));
  angrybirds.addEventListener("click", (e) => pushCart(dataHamb.angrybirds));
  valorant.addEventListener("click", (e) => pushCart(dataHamb.valorant));

  let carrinho = [];
  let total = 0.0;

  const pushCart = (obj) => {
    const newObj = { index: `item${carrinho.length}`, ...obj };
    carrinho.push(newObj);
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.innerHTML = ` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="#ff0000"
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    />
  </svg>`;
    li.appendChild(p);
    li.appendChild(span);
    p.innerHTML =
      carrinho.length + " <b>" + obj.name + "</b>" + " R$" + obj.price;
    li.id = "item" + carrinho.length;
    li.classList.add("delete-cart-item");
    li.classList.add("flex");
    li.classList.add("justify-between");
    cart.appendChild(li);
    updateCartTotal();
  };

  cart.addEventListener("click", (e) => {
    for (let i of carrinho) {
      const possibleParent = e.target.parentNode.closest(
        `#item${Number(i.index.replace("item", "")) + 1}`
      );
      if (possibleParent) {
        document.getElementById(possibleParent.id).remove();
        const index = carrinho.indexOf(i);
        carrinho.splice(index, 1);
      }
    }
    updateCartTotal();
  });

  const updateCartTotal = () => {
    total = 0;
    for (let i of carrinho) {
      total += i.price;
    }
    cartTotalValue.innerHTML = "R$" + total.toFixed(2);
  };

  makeRequest.addEventListener("click", () => {
    if (carrinho.length < 1) return;
    let items = "";
    carrinho.map((item) => (items += ` ${item.name} R$${item.price};`));
    const request = `
    Itens adicionados: \n
    ${items} \n
    Total: R$${total.toFixed(2)} \n
    Obrigado por fazer seu pedido conosco!`;
    window.open(`https://wa.me/+5534998068991?text=${request}`);
  });

  close.addEventListener("click", () => modal.classList.add("hidden"));
  open.addEventListener("click", () => modal.classList.remove("hidden"));
}
main();
