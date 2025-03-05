const box = document.querySelector("#list");
const cartBox = document.querySelector("#cart-list"); 
const totalPriceElem = document.querySelector("#total-price"); 
let totalPrice = 0; 

fetch("https://fakestoreapi.com/products?limit=10")
  .then(response => response.json())
  .then(data => {
    const html = data.map(item => `
      <li class="bg-white shadow-lg p-4 rounded-lg text-center">
        <img src="${item.image}" alt="${item.title}" class="w-full h-40 object-contain mb-2" />
        <h2 class="text-lg font-semibold">${item.title}</h2>
        <p class="text-green-600 font-bold">$${item.price}</p>
        <button class="buy-btn bg-green-500 text-white px-4 py-2 rounded mt-2" 
                data-name="${item.title}" data-price="${item.price}">
          Sotib olish
        </button>
      </li>
    `).join('');

    box.innerHTML = html;

    document.querySelectorAll(".buy-btn").forEach(button => {
      button.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const price = Number(this.getAttribute("data-price")); 

        alert(`"${name}" mahsuloti savatga qo‘shildi!`);

      
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `<strong>${name}</strong> - $${price}`;
        cartBox.appendChild(cartItem);

       
        totalPrice += price;
        totalPriceElem.innerText = `$${totalPrice}`;
      });
    });

  })
  .catch(error => {
    console.error("Xatolik yuz berdi:", error);
  });


  
