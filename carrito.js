const cart = document.getElementById('grid-item');
const addItemButton = document.getElementById('botones');
const checkoutButton = document.getElementById('checkout');
addItemButton.addEventListener('click', () => {
  
  const item = document.createElement('li');
  item.textContent = 'Artículo';
  cart.appendChild(item);
});
checkoutButton.addEventListener('click', () => {
  
  alert('¡Gracias por su compra!');
  cart.innerHTML = '';
});

const addItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  cart.appendChild(li);
};

const checkout = () => {
  alert('¡Gracias por su compra!');
  cart .innerHTML = '';
};
