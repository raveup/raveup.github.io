# Posts yaml

- `tag: [ 'new', 'soldout' ]`

# Post example

## Posts

```yml
---
layout: post
title: Luxfero
item: New Hedonism
category: RURI
volume: 1
tag: soldout
image: luxferobig.jpg
support: lp
---
```

Optional:

```yml
thumb: alterego.gif
video: http://www.youtube.com/embed/Osad30m6QGE?rel=0
audio: 63_monroe.mov
```

## Headers

- Soldout label header

```yaml
---
layout: header
category: rur
tag: soldout
---
```

- Homepage release header

```yaml
---
layout: header
category: ss
release: 20-10-2013
---
```

- Still in Stock header

```yml
---
layout: header
title: still in stock
---
```

## Pages

```yml
---
layout: default
title: Soldout
permalink: /soldout/
---
```
