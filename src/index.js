const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector("#app");

// appNode.addEventListener("click", (event) => {
//   if (event.target.type === "DIV") {
//     window.alert("Hola");
//   }
// });

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

//Intl format dates and currency

//web api
async function fetchData() {
  const response = await fetch(url),
    data = await response.json(),
    allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = "https://platzi-avo.vercel.app/" + item.image;
    image.style.height = "240px";
    image.style.width = "240px";
    image.style.borderRadius = "4px";
    image.style.objectFit = "cover";

    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.style.fontSize = "18px";
    title.style.fontWeight = "500";
    title.style.color = "#1f2937";
    title.style.textAlign = "center";

    // create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);
    price.style.fontSize = "12px";
    price.style.color = "#006eff";
    price.style.fontWeight = "bold";
    price.style.textAlign = "right";

    // const description = document.createElement("div");
    // description.style.fontSize = "14px";
    // description.style.color = "#344f72";
    // description.style.textAlign = "justify";
    // description.textContent = item.attributes.description;

    const container = document.createElement("div");
    container.style.width = "240px";
    container.style.border = "2px solid black";
    container.style.padding = "8px";
    container.style.boxShadow = " 2px 2px 2px 1px var(--box-shadow)";
    container.style.borderRadius = "4px";

    container.append(image, title, price);

    allItems.push(container);
  });
  const wrapper = document.createElement("div");

  wrapper.style.display = "grid";
  wrapper.style.margin = "4px";
  wrapper.style.placeContent = "center";
  wrapper.style.gap = "26px";
  wrapper.style.gridTemplateColumns = "repeat(auto-fill, 240px)";

  wrapper.append(...allItems);
  document.body.append(wrapper);
}

fetchData();
