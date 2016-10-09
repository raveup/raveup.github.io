var current = JSON.parse(localStorage.getItem('carello')) || [];
var subtotal = 0;

var cartList = document.getElementById('cart_list') || null;
var add = document.getElementById('add') || null;
var sub = document.getElementById('sub') || null;
var code = document.getElementById('code') || null;
var volume = document.getElementById('volume') || null;
var category = document.getElementById('category') || null;
var addcart = document.getElementById('addcart') || null;
var shipping = document.getElementById('shipping') || null;
var total = document.getElementById('total') || null;

// ADD CART LINK
if (current.length) {
	var nav = document.querySelector('body header nav');
	var cartLink = document.createElement('a');
	cartLink.href = '/cart';
	cartLink.innerHTML = 'VIEW CART';
	cartLink.classList.add('cart-link');
	nav.appendChild(cartLink);
}

// RENDER CART
if (cartList) {
	if (current.length) {
		var notEmpty = document.querySelectorAll('.not-empty');
		for (var i = 0; i < notEmpty.length; i++) {
			notEmpty[i].removeAttribute('hidden');
		}
		for (i = 0, len = current.length; i < len; i++) {
			var ordine = current[i];
			var newRow = document.createElement('tr');
			var totalino = ordine.price * ordine.quantity;
			var ordineHtml = riOrdine(ordine);
			cartList.appendChild(ordineHtml);
		}
		document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
		removerEvent();
	}else{
		cartList.innerHTML = '<h3>NO ITEMS FOUND</h3>';
	}
}

// SHIPPING EVENT
if (shipping) {
	shipping.addEventListener('change', function (e) {
		var zone = shipping.value;
		var hasShipping = document.querySelectorAll('.has-shipping');
		for (var i = 0; i < hasShipping.length; i++) {
			hasShipping[i].removeAttribute('hidden');
		}
		do
	});
}

// ADD BUTTON
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

// SUB BUTTON
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

// DISPLAY UPDATED ITEM
if (code) {
	var codice = code.textContent;
	for (i = 0, len = current.length; i < len; i++) {
		var ordine = current[i];
		if (ordine.code == codice) {
			document.getElementById('quantity').textContent = ordine.quantity;
			document.getElementById('total').textContent = (ordine.quantity > 3) ? document.getElementById('wholesale').textContent * ordine.quantity: document.getElementById('price').textContent * ordine.quantity;
			document.getElementById('addcart').textContent = 'Update Cart';
		}
	}
}

// ADD TO CART BUTTON
if (addcart) {
	addcart.addEventListener('click', function(e) {
		var quantity = document.getElementById('quantity').textContent;
		var price = document.getElementById('price').textContent;
		var codice = document.getElementById('code').textContent;
		var updated = [];
		if (quantity > 0) {
			if (quantity > 3) price = document.getElementById('wholesale').textContent;
			var iitem = {};
			['item', 'title', 'support', 'volume', 'category', 'price', 'quantity'].map( function (i) {
				iitem[i] = document.getElementById(i).textContent;
			});
			iitem.code = codice;
			iitem.timestamp = Date.now().toString();
			iitem.link = document.getElementById('pagepermalink').href;
			updated.push(iitem);
			for (i = 0, len = current.length; i < len; i++) {
				ordine = current[i];
				if (ordine.code != codice) {
					updated.push(ordine);
				}
			}
			localStorage.setItem('carello', JSON.stringify(updated));
			disableLinks();
		}else{
			for (i = 0, len = current.length; i < len; i++) {
				ordine = current[i];
				if (ordine.code != codice) {
					updated.push(ordine);
				}
			}
			localStorage.setItem('carello', JSON.stringify(updated));
			disableLinks();
		}
	});
}

// DISABLE LINKS
function disableLinks() {
	var links = document.getElementsByTagName('a');
	var fn = function(element) {
		return element.setAttribute('disabled', '');
	};
	for (i = 0, len = links.length; i < len; i++) {
		var link = links[i];
		fn(link);
	}
	setInterval(function() {
		window.location = '/cart';
	}, 1000);
}

// REMOVE AN ITEM
function removeItem(e) {
	e.preventDefault();
	var timestamp = e.target.getAttribute("data-timestamp");
	var updated = [];
	for (var i = 0; i < current.length; i++) {
		var ordine = current[i];
		if (ordine.timestamp != timestamp) updated.push(ordine);
	}
	localStorage.setItem('carello', JSON.stringify(updated));
	disableLinks();
}

// RENDER ITEM IN CART
function riOrdine (ordine) {
	var header = document.createElement('header');
	header.classList.add(ordine.category);
	header.innerHTML = '<h2><a href="' + ordine.link + '">' + ordine.title + '</a></h3>';
	header.innerHTML += '<h3>' + ordine.item + '</h3>';
	['code', 'support', 'price', 'quantity' ].map( function (i) {
		var suffix = (i === 'price') ? '€' : '';
		header.innerHTML += '<p>' + i + ': ' + suffix + ordine[i] + '</p>';
	});
	header.innerHTML += '<h3>€' + (ordine.price * ordine.quantity).toFixed(2) + '</h3>';
	header.innerHTML += '<p><a href="javascript:void(0);" class="cart-link remover" data-timestamp="' + ordine.timestamp + '">Remove this item</a></p>';
	subtotal += parseFloat(ordine.price) * parseInt(ordine.quantity);
	return header;
}

// ITEM REMOVER EVENT
function removerEvent (e) {
	var removers = document.querySelectorAll('a.remover') || null;
	if (removers) {
		for (var i = 0; i < removers.length; i++) {
			var remover = removers[i];
			remover.addEventListener('click', removeItem);
		}
	}
}
