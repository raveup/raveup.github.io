# Rave Up Records website

**Sommario**

- [Modificare articolo](https://github.com/raveup/raveup.github.io#modificare-articolo)
- [Aggiungere articolo](https://github.com/raveup/raveup.github.io#aggiungere-articolo)
- [Metadati](https://github.com/raveup/raveup.github.io#metadati)
- [Labels](https://github.com/raveup/raveup.github.io#labels)
- [Homepage](https://github.com/raveup/raveup.github.io#home-page)
- [Caricamento files](https://github.com/raveup/raveup.github.io#caricamento-files)
- [Cartelle e files](https://github.com/raveup/raveup.github.io#cartelle-e-files)
- [Altri links](https://github.com/raveup/raveup.github.io#altri-links)
- [PayPal docs](https://github.com/raveup/raveup.github.io#paypal-docs)

### Modificare articolo

1. Trovare il file da modificare  
  - Cliccare nella cartella [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts) e una volta trovato il file da modificare, cliccarci sopra
  - Oppure premere il pulsante `Go to file` (in alto al centro) e digitare il nome
1. Premere il pulsante matita in alto a destra
1. Modificare il testo
1. Per salvare, premere il pulsante `Commit changes` in basso a sinistra

*Attendere un minuto per la propagazione della modifica sul sito online*

### Aggiungere articolo

1. Entrare nella cartella [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts)
1. Premere su `Add file > Create new file` in alto a destra
1. Inserire il nome del file nel formato `YYYY-MM-DD-nome-del-file.md` (ha estensione `.md` Markdown)
1. Nel campo `Edit new file` inserire i **metadati** e il testo dell'articolo
1. Per salvare, premere il pulsante `Commit new file` in basso a sinistra.

*Attendere un minuto per la propagazione della modifica sul sito online*

### Metadati

Ogni articolo deve contenere in cima al file i metadati, preceduti e seguiti da 3 trattini `---`

Esempio:

```yml
---
# Metadati richiesti
layout: post
title: Nome della band
item: Titolo dell'articolo
# Supporto, può essere "lp", "7", "book" eccetera
# Lista in è nel file "_data/carello.yml"
support: lp
# Se ci sono vinili colorati, esprimerli con una lista
support: [lp, lpc]
# oppure
support:
  - 7
  - 7c
# La categoria è il codice della label
# Lista dei codici nel file "_data/labels.yml"
category: rur
# Numero del volume
volume: 75
# Nome del file immagine senza estensione
# Da caricare in "assets/covers/< category >"
image: file_immagine

# Metadati opzionali
# Tag può essere "new" "few" oppure "soldout"
tag: new
# Aggiunge un testo in home page
focus:
  - title: text
  - description: text
# Aggiunge un video da youtube
youtube: youtube-url
# Aggiunge un video da caricare nella cartella "assets/video"
video: video-filename-senza-estensione
# Aggiunge un audio mp3 da caricare nella cartella "assets/mp3"
mp3: mp3-filename-senza-estensione
# Aggiunge metadati aggiuntivi
# Ad esempio tiratura, numero di pagine, etc.
metadata: [ "more", "info" ]
---

Qui va la prima frase dell'articolo (slogan), che verrà visualizzata in home page.

Qui va il resto dell'articolo...
```

Notare come i nomi dei file (metadati `image`, `audio` e `video`) siano da riportare senza estensione: non `filename.ext` ma solo `filename`.

Il file immagine (copertina) `image` va caricato nella cartella della corrispondente `category` (label) all'interno di [`assets/covers`](https://github.com/raveup/raveup.github.io/tree/master/assets/covers).

Ad esempio le copertine "BackStreet" nella cartella `assets/covers/bac` e quelle "Synthetic Shadows" in `assets/covers/ss`.

### Home page

Ordine di visualizzazione degli articoli in home page:

1. Blog posts (se attivati in [`_data/settings.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/settings.yml))
2. Articoli con `tag: new` oppure `focus: ...` raggruppati per label
3. Articoli con `tag: few` senza raggruppamento per label
4. Articoli rimanenti senza `tag` raggruppati per label

### Caricamento files

Per caricare file immagine, video o audio, cliccare sulla cartella di destinazione e premere `Add file > Upload files` in alto a destra.

File caricabili per ogni articolo, con cartella di destinazione e formati del file richiesti (estensioni):

|Tipo file|Cartella|Formato (estensione)|
|:--|:--|:--|
|immagine|`assets/covers/<label>`|`.jpg`|
|audio|`assets/mp3`|`.mp3` `.ogg`|
|video|`assets/video`|`.mp4` `.ogg` `.webm` e `.jpg` per l'immagine|

### Shop

La configurazione di *carello* è in [`_data/carello.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/carello.yml).

La lista dei prodotti disponibili è in [Shop](https://www.raveuprecords.com/shop/).

### Labels

La lista delle labels (`category` nei metadati degli articoli) si trova nel file [`_data/labels.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/labels.yml).

Ogni label consiste di un codice (da usare nei metadati degli articoli, esempio `category: rur`), il nome per esteso, la descrizione e il colore usato per i titoli (in formato esadecimale).

L'ordine delle labels in questo file determina anche l'ordine di visualizzazione in home page e nella pagina *Catalog*.

```yml
- name: AMERICAN LOST PUNK ROCK NUGGETS
  code: rur
  description: Obscure nuggets from the golden age of Punk Rock!
  color: d01d1f
```

Per aggiungere una nuova label:

1. Aggiungerla nel file `_data/labels.yml`
2. Creare una pagina generale in [`assets/pages/series`](https://github.com/raveup/raveup.github.io/tree/master/assets/pages/series)
3. Creare una cartelle per le copertine in [`assets/covers`](https://github.com/raveup/raveup.github.io/tree/master/assets/covers)

Ad esempio per la label "Pinco Pallino" aggiungere i dati in [`_data/labels.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/labels.yml)

```yml
- name: PINCO PALLINO
  code: pp
  description: Pinco Pallino Punk Productions
  color: b00
```

E aggiungere il file `assets/pages/series/pp.html` con il seguente contenuto:

```yml
---
layout: archive
category: pp
permalink: /pp/
---
```

### Cartelle e files

- [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts) contiene le uscite
- [`_data/menu.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/menu.yml) contiene il menù di navigazione
- [`_blog`](https://github.com/raveup/raveup.github.io/tree/master/_blog) contiene i blog posts estemporanei. Il numero di posts visualizzati è gestito nel file [`_data/settings.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/settings.yml)
- [`assets/pages`](https://github.com/raveup/raveup.github.io/tree/master/assets/pages) contiene le pagine del sito

### Altri links

- [Shop info](https://www.raveuprecords.com/shop/)
- [Newsletter](https://www.raveuprecords.com/newsletter) aggiornata
- [Feed RSS](https://www.raveuprecords.com/feed.xml)

### PayPal docs

- [Archived **JavaScriptButtons** repository](https://web.archive.org/web/20161004203013/https://github.com/paypal/JavaScriptButtons)
- [Archived **HTML variables** Dev Docs](https://web.archive.org/web/20161227211543/https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/)