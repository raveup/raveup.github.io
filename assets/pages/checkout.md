---
title: checkout
permalink: /checkout/
---
<section class="checkout">
{% include topbar.html name='CHECKOUT' description='select shipping and checkout with paypal' class="grey" %}
{% include karrello/cart.html %}

<div id="shipping-box">
  <h2>Shipping</h2>
  Select Shipping Zone:
  <select name="zone" id="zone">
    <option value="" disabled selected>Select shipping zone</option>
    {%- for zone in site.data.carello.shippings -%}
    <option
      value="{{ zone[0] }}"
      data-few="{{ zone[1] }}">{{ zone[0] | upcase }} ({{site.data.carello.currency.symbol}} {{zone[1]}})</option>
    {%- endfor -%}
  </select>
  <h3>Shipping: € <span id="shipping"></span></h3>
  <h3>Total: € <span id="total"></span></h3>
  <div id="paypal-button"></div>
</div>

</section>
