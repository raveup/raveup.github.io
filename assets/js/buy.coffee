---
---

document.getElementById("add").addEventListener('click', (e) ->
  document.getElementById("quantity").textContent++
  quantity = document.getElementById("quantity").textContent
  price = document.getElementById("price").textContent
  zone = document.getElementById("zone").value
  switch zone
    when "1" then shipping = 7
    when "2" then shipping = 10
    when "3" then shipping = 15
    else shipping = 0
  document.getElementById("total").innerHTML = quantity * price + shipping
)

document.getElementById("sub").addEventListener('click', (e) ->
  document.getElementById("quantity").textContent--
  quantity = document.getElementById("quantity").textContent
  price = document.getElementById("price").textContent
  zone = document.getElementById("zone").value
  switch zone
    when "1" then shipping = 7
    when "2" then shipping = 10
    when "3" then shipping = 15
    else shipping = 0
  document.getElementById("total").innerHTML = quantity * price + shipping
)

document.getElementById("zone").addEventListener('change', (e) ->
  zone = document.getElementById("zone").value
  price = document.getElementById("quantity").textContent * document.getElementById("price").textContent
  switch zone
    when "1" then shipping = 7
    when "2" then shipping = 10
    when "3" then shipping = 15
    else shipping = 0

  document.getElementById("total").innerHTML = price + shipping

)
