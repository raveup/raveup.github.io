var current = JSON.parse(localStorage.getItem('carello')) || [];
var subtotal = 0;
var table = document.getElementById('cart') || null;
var add = document.getElementById('add') || null;
var sub = document.getElementById('sub') || null;
var cart = document.getElementById('addcart') || null;

if (table) {
	table.innerHTML = '';
	for (i = 0, len = current.length; i < len; i++) {
		var ordine = current[i];
		var newRow = document.createElement('tr');
		var totalino = ordine.price * ordine.quantity;
		newRow.innerHTML = '<td><h3><a href="' + ordine.link + '" title="">' + ordine.item + '</a></h3>Number: ' + ordine.number + '<br>Price: € ' + ordine.price + '<br>Quantity: ' + ordine.quantity + '</td><td class="bis">€ ' + totalino.toFixed(2) + '</td><td class="bis"><a href="javascript:void(0);" class="remover" data-timestamp="' + ordine.timestamp + '">Remove this item</a></td>';
		subtotal += parseFloat(ordine.price) * parseInt(ordine.quantity);
		table.appendChild(newRow);
	}
}

if (add) {
	add.addEventListener('click', function (e) {
		var quantity = document.getElementById('quantity').textContent;
		quantity++;
		document.getElementById('quantity').textContent++;
		var price = document.getElementById('price').textContent;
		if (quantity > 3) price = document.getElementById('wholesale').textContent;
		document.getElementById('total').innerHTML = quantity * price;
	});
}

if (sub) {
	sub.addEventListener('click', function (e) {
		var quantity = document.getElementById('quantity').textContent;
		if (quantity > 0) {
			quantity--;
			document.getElementById('quantity').textContent--;
			var price = document.getElementById('price').textContent;
			if (quantity > 3) price = document.getElementById('wholesale').textContent;
			document.getElementById('total').innerHTML = quantity * price;
		}
	});
}

if (cart) {
	addcart.addEventListener('click', function(e) {
		var quantity = document.getElementById('quantity').textContent;
		var price = document.getElementById('price').textContent;
		if (quantity > 0) {
			if (quantity > 3) price = document.getElementById('wholesale').textContent;
			item = {
				number: document.getElementById('number').textContent,
				timestamp: Date.now().toString(),
				link: document.getElementById('pagepermalink').href,
				item: document.getElementById('item').textContent,
				price: price,
				quantity: quantity
			};
			current.push(item);
			localStorage.setItem('carello', JSON.stringify(current));
			disableButtons();
		}
	});
}

function disableButtons() {
	var buttons = document.getElementsByTagName('button');
	var fn = function(element) {
		return element.setAttribute('disabled', 'true');
	};
	for (i = 0, len = buttons.length; i < len; i++) {
		element = buttons[i];
		fn(element);
	}
	setInterval(function() {
		window.location = '/cart';
	}, 1000);
}
