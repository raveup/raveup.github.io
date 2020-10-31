---
layout: default
title: shop
permalink: /shop/
---

<section class="shop" markdown="1">
{% include topbar.html name="Shop"%}

{% comment %} -------------------- TABLE -------------------- {% endcomment %}
{% assign items = site.posts | where_exp: "item","item.tag != 'soldout'" %}
{% comment %} -------------------- NEW -------------------- {% endcomment %}
{% assign sorted_soldable = items | sort: "date" | reverse %}
{% for o in site.data.carello.prices %}
  {% assign prezzo = o[1].price %}
  {% assign found = "" | split: "" %}
  {% for r in sorted_soldable %}
    {% assign ff = 0 %}
    {% if r.support.first %}
      {% for current in r.support %}
        {% assign slug2 = current | downcase | slugify %}
        {% for string in o[1].names %}
          {% assign slug1 = string | slugify %}
          {% if slug2 == slug1 and ff == 0 %}
            {% assign found = found | push: r %}
            {% assign ff = 1 %}
          {% endif %}
        {% endfor %}
      {% endfor %}
    {% else %}
      {% assign slug = r.support | slugify %}
      {% for string in o[1].names %}
        {% assign slug1 = string | slugify %}
        {% if slug == slug1 and ff == 0 -%}
          {% assign found = found | push: r %}
          {% assign ff = 1 %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
  {% if found.size > 0 %}
<header>
  <h2>{{o[0]|upcase}} ({{found.size}})</h2>
</header>
<table id="elenco">
  <thead>
    <tr>
      <th>Image</th>
      <th>Cat / Vol</th>
      <th>Title / Item</th>
      <th>Price</th>
    </tr>
  </thead>
{% for f in found %}
  {% comment %} -------------------- image -------------------- {% endcomment %}
  {% assign image_src = '/assets/covers/' | append: f.category | append: '/' | append: f.image | append: '.jpg' | absolute_url %}
  {% comment %} -------------------- link -------------------- {% endcomment %}
  {% assign github_link = "https://github.com/" | append: site.repository | append: "/edit/master/" | append: f.path %}
  <tr>
    <td><img src="{{image_src}}" alt=""></td>
    <td>{{f.category|upcase}} #{{f.volume}}</td>
    <td data-title="true"><b><a href="{{f.url}}">{{f.title|upcase}}</a></b><br>{{f.item|upcase}}</td>
    <td>{{site.data.carello.currency.symbol}} {{f.price | default: prezzo}}</td>
    <td><a href="{{github_link}}">Edit</a></td>
  </tr>
{% endfor %}
</table>
  {% endif %}
{% endfor %}

{% include topbar.html name="Stats"%}

{% assign list = site.posts | sort: category | reverse %}
{% assign soldout = list | where_exp: "item", "item.tag == 'soldout'" %}
{% assign soldable = list | where_exp: "item", "item.tag != 'soldout'" %}
{% assign supports = list | group_by: "support" %}
{% assign soldable_supports = soldable | group_by: "support" %}


<header>
  <h2>TOTAL RELEASES</h2>
</header>

<table>
<thead>
  <tr>
    <th>Avaiability</th><th>Items</th>
  </tr>
</thead>
<tr>
  <td>Soldout</td><td>{{soldout.size}}</td>
</tr>
<tr>
  <td>Available</td><td>{{soldable.size}}</td>
</tr>
<tfoot>
  <tr>
    <td colspan="2">Total: {{list.size}}</td>
  </tr>
</tfoot>
</table>

<header>
  <h2>TOTAL SUPPORTS</h2>
  <h3>Support strings in all releases: {{supports.size}}</h3>
</header>

<table>
  <thead>
    <tr>
      <th>String</th><th>Items</th>
    </tr>
  </thead>
{% assign supports_items = 0 %}
{% for support in supports %}<tr>
  {%- assign first_item_support = support.items[0].support -%}
  {%- capture su -%}{% include get/support_list.html support=first_item_support %}{%- endcapture -%}
  <td>{{su|upcase}}</td><td>{{support.items.size}}</td>
</tr>{% assign supports_items = supports_items | plus: support.items.size %}
{% endfor %}
<tfoot>
  <tr>
    <td colspan="2">Total: {{supports_items}}</td>
  </tr>
</tfoot>
</table>

<header>
  <h2>AVAILABLE SUPPORTS</h2>
  <h3>Support strings in available releases: {{soldable_supports.size}}</h3>
</header>


<table>
<thead>
  <tr>
    <th>String</th><th>Items</th>
  </tr>
</thead>
{% assign supports_items = 0 %}
{% for support in soldable_supports %}<tr>
  {%- assign first_item_support = support.items[0].support -%}
  {%- capture su -%}{% include get/support_list.html support=first_item_support %}{%- endcapture -%}
  <td>{{su|upcase}}</td><td>{{support.items.size}}</td>
</tr>{% assign supports_items = supports_items | plus: support.items.size %}
{% endfor %}
<tfoot>
  <tr>
    <td colspan="2">Total: {{supports_items}}</td>
  </tr>
</tfoot>
</table>

<header>
  <h2>SHOP CONFIG</h2>
</header>
<table>
  <thead>
    <tr>
      <th>Support</th>
      <th>Price</th>
      <th>Wholesale</th>
    </tr>
  </thead>
  {% for pp in site.data.carello.prices %}
    <tr>
      <td>{{pp[0]|upcase}}</td>
      <td>{{pp[1].price|default:"missing"}}</td>
      <td>{{pp[1].wholesale|default:"missing"}}</td>
    </tr>
  {% endfor %}
</table>

</section>