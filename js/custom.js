$( document ).ready(function(){
  $(".button-collapse").sideNav();

  let subtotal = 0;
  const products = {
    heart: {
      name: "Human Heart",
      price: 599
    },
    lungs: {
      name: "Human Lungs",
      price: 899
    },
    liver: {
      name: "Human Liver",
      price: 399
    },
    kit: {
      name: "DIY Kit",
      price: 99
    },
  };

  const addProduct = function() {
    const price = products[event.target.name].price;
    const name = products[event.target.name].name;
    const $row = $('<tr>');
    $('<td>').text(name).appendTo($row);
    $('<td>').text('$' + price.toFixed(2)).addClass('right-align').appendTo($row);
    $('tbody').append($row);
    subtotal += price;
    console.log($('#subtotal'));
    $('#subtotal').text('$' + subtotal.toFixed(2));
    $('#tax').text('$' + (subtotal * .096).toFixed(2));
    $('#total').text('$' + (subtotal * 1.096).toFixed(2));
  };

  const submitOrder = function() {
    event.preventDefault();
    if ($('tbody').children().length < 1) {
      Materialize.toast('Cart is empty!', 4000, 'pink');

      return;
    }
    if ($('.valid').length < 3) {
      Materialize.toast('Please complete the order form.', 4000, 'pink');

      return;
    }
    Materialize.toast('Order Placed!', 4000, 'pink')

  };

  $('form').submit(submitOrder);
  $('.card-action button').click(addProduct);
});
