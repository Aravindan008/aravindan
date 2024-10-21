document.getElementById('order-now').addEventListener('click', function() {
  alert('Order Now clicked!');
});

const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(button => {
  button.addEventListener('click', function() {
      alert('Item added to order!');
  });
});


