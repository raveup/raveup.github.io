## Jekyll rendering notes

### bash
  - `jekyll serve --baseurl ''`
  - http://0.0.0.0:4000 or http://localhost:4000

### theme
- http://prev.freshface.net/file/rw/wp/category/topics/blog-23/
- http://prev.freshface.net/file/rw/wp/category/blog/blog-5/

### mediacrush
  - https://mediacru.sh/

### sass
```bash
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
`{{ 'bar' | prepend:'foo' }}
{{ 'foo' | append:'bar' }}`

### md5

- https://github.com/blueimp/JavaScript-MD5
- Hash in console on post pages

### StackOverflow

- http://stackoverflow.com/a/24745825
