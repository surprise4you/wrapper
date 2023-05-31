document.addEventListener('DOMContentLoaded', function() {
  const wrapList = document.getElementById('wrap-list');
  const orderList = document.getElementById('order-list');
  const submitOrderButton = document.getElementById('submit-order');

  // Массив с врапами
  const wraps = [
    { name: 'Cesar', price: 450, image: '1.jpeg' },
    { name: 'Kimchi', price: 400, image: '2.jpeg' },
    { name: 'Wrapper', price: 600, image: '3.jpeg' },
    { name: 'Morning', price: 400, image: '4.jpeg' },
    { name: 'Pesto', price: 350, image: '5.jpeg' }
  ];

  // Отображение врапов в меню
  wraps.forEach(function(wrap) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = wrap.image;
    img.alt = wrap.name;
    li.appendChild(img);
    const namePrice = document.createElement('div');
    namePrice.classList.add('name-price');
    const name = document.createElement('span');
    name.innerText = wrap.name;
    const price = document.createElement('span');
    price.innerText = wrap.price + ' руб';
    namePrice.appendChild(name);
    namePrice.appendChild(price);
    li.appendChild(namePrice);
    li.addEventListener('click', function() {
      const orderLi = document.createElement('li');
      orderLi.innerHTML = `
        <div class="order-item">
          <img src="${wrap.image}" alt="${wrap.name}">
          <div class="order-details">
            <span>${wrap.name}</span>
            <span>${wrap.price} руб</span>
            <div class="add-ons">
              <label>
                <input type="checkbox" name="add-on" value="cheese"> Сыр
              </label>
              <label>
                <input type="checkbox" name="add-on" value="bacon"> Бекон
              </label>
              <label>
                <input type="checkbox" name="add-on" value="jalapenos"> Халапеньо
              </label>
            </div>
            <div class="sauces">
              <label>
                <input type="checkbox" name="sauce" value="ketchup"> Кетчуп
              </label>
              <label>
                <input type="checkbox" name="sauce" value="mayo"> Майонез
              </label>
              <label>
                <input type="checkbox" name="sauce" value="mustard"> Горчица
              </label>
            </div>
          </div>
        </div>
      `;
      orderList.appendChild(orderLi);
    });
    wrapList.appendChild(li);
  });

  // Обработчик кнопки "Отправить заказ"
  submitOrderButton.addEventListener('click', function() {
    const orderItems = orderList.getElementsByClassName('order-item');
    let totalPrice = 0;
    let orderDetails = '';
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const name = item.querySelector('.order-details span').innerText;
      const priceText = item.querySelector('.order-details span:nth-child(2)').innerText;
      const price = parseInt(priceText);
      const addOns = Array.from(item.querySelectorAll('.add-ons input[name="add-on"]:checked')).map(checkbox => checkbox.value);
      const sauces = Array.from(item.querySelectorAll('.sauces input[name="sauce"]:checked')).map(checkbox => checkbox.value);
      totalPrice += price;
      orderDetails += `- ${name} (${priceText})\n`;
      if (addOns.length > 0) {
        orderDetails += `  - Доп. ингредиенты: ${addOns.join(', ')}\n`;
      }
      if (sauces.length > 0) {
        orderDetails += `  - Соусы: ${sauces.join(', ')}\n`;
      }
    }
    alert(`Ваш заказ отправлен!\n\nСумма заказа: ${totalPrice} руб\n\nДетали заказа:\n${orderDetails}`);
    orderList.innerHTML = '';
  });
});
