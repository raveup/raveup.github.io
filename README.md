## volume

`{% include volume.html vol = post.volume cat = post.category %}`

## Templates

- [lgc.it](http://www.lgc.it/it/stampa/multimedia-cd-dvd-vinile/custodie-dischi-vinile)

- Color: try `#CC3700`

## Jekyll rendering notes

```bash
jekyll -v
jekyll 2.4.0
gem update jekyll
jekyll -v
jekyll 2.5.3
```

- gems

`gem install 'jekyll-sitemap'`
`gem install 'jekyll-feed'`

### bash
  - `jekyll serve --baseurl ''`
  - `jekyll serve --drafts`
  - http://0.0.0.0:4000 or http://localhost:4000
  - `sass --watch assets/css/style.scss`

### theme
- http://prev.freshface.net/file/rw/wp/category/topics/blog-23/
- http://prev.freshface.net/file/rw/wp/category/blog/blog-5/

### mediacrush
  - https://mediacru.sh/

### sass

```shell
$gem install sass
Fetching: sass-3.4.16.gem (100%)
Successfully installed sass-3.4.16
Parsing documentation for sass-3.4.16
Installing ri documentation for sass-3.4.16
Done installing documentation for sass after 5 seconds
1 gem installed
$sass -v
Sass 3.4.16 (Selective Steve)
$sass --watch assets/css/style.scss
error assets/css/style.scss (Line 4: Invalid CSS after "$bg-color: black": expected "{", was ";")
# Until removed ---\n--- from style.scss
```

### Boostrap
- Bootstrap.sass + Jekyll:
  - http://jekyll.pygmeeweb.com/2014/08/02/jekyll-with-twitter-bootstrap-sass/
- Bootswatch:
  - https://bootswatch.com/united/

### Rotating nebula
- http://media.24ways.org/2009/15/space.html

### Semantic http://diveintohtml5.info/semantics.html
```html
<article>
  <header>
    <time datetime="2009-10-22" pubdate>
      October 22, 2009
    </time>
    <h1>
      <a href="#"
         rel="bookmark"
         title="link to this post">
         Travel day
      </a>
    </h1>
  </header>
  <p>Lorem ipsum dolor sit amet…</p>
</article>
```
- http://diveintohtml5.info/semantics.html

### Layouts
- Home
  - Focus (header in post)
  - New (header in index)
    - Serie
      - Items
  - Stock (no tag)
    - Items by serie (mini header)
  - Soldout (view total mosaic by serie)

- Serie
  - Focus (header in post)
  - New (header in index)
      - Items
  - Stock (no tag)
    - Items
  - Soldout mosaic

- Post (article)
  - Figure
  - Header
  - Content
  - Metadata

- Search
  - Thumbnail
  - Header

- Item.html
  - Figure
  - Header
  - Excerpt
  - Content

- YAML
  - layout: post
  - title: bizzarro italiano 1988-1999
  - item: italian weird cinema from the analogic era
  - support: fanzine + dvd
  - category: rur
  - tag: new
  - volume: 75
  - image: rdgPu-6FpxHS
  - focus:
    - title: text
    - description: text
  - video: url
  - audio: url
  - links:
    - [ url, text ]
  - metadata: [ "more", "info" ]

### Liquid

- https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
- https://gist.github.com/smutnyleszek/9803727
- http://blog.lanyonm.org/articles/2013/11/21/alphabetize-jekyll-page-tags-pure-liquid.html

`{% assign myArray = "one|two|three" | split: "|" %}`
`{{ newArray[0].name }}`
`{{ "bar" | prepend:"foo" }}
{{ "foo" | append:"bar" }}`

Check "in stock" in `series.html`

```liquid
{% assign cat = labels.code %}
{% assign rev = site.categories[cat] | sort: 'volume' %}
{% for post in rev reversed %}
  {% if post.tags contains 'new' or post.focus != null %}
    {% include item.html %}
  {% endif %}
{% endfor %}
```

### md5

- https://github.com/blueimp/JavaScript-MD5
- Hash in console on post pages

### StackOverflow

- http://stackoverflow.com/a/24745825

### PayPal

- [paypal/JavaScriptButtons](https://github.com/paypal/JavaScriptButtons)
- [Instant Payment Notification (IPN) simulator](https://developer.paypal.com/webapps/developer/applications/ipn_simulator)

#### Add To Cart

Add To Cart buttons let users add multiple items to their PayPal cart.

```javascript
<script async src="paypal-button.min.js?merchant=YOUR_MERCHANT_ID"
    data-button="cart"
    data-type="form"
    data-name="Product in your cart"
    data-amount="1.00"
></script>
```
