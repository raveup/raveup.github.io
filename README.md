# Rave Up Records website

Gli articoli si trovano nella cartella [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts).

### Modifica articolo

- Entra nella cartella [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts)
- Clicca sul file da modificare
- Premi il pulsante matita in alto a destra
- Modifica il testo
- Per salvare, premi il pulsante `Commit changes` in basso a sinistra.

### Aggiungi articolo

- Entra nella cartella [`_posts`](https://github.com/raveup/raveup.github.io/tree/master/_posts)
- Premi su `Add file > Create new file` in alto a destra
- Inserisci il nome del file nel formato `YYYY-MM-DD-nome-del-file.md` (ha estensione `.md` Markdown)
- Nel campo `Edit new file` inserisci i **metadati** e il testo dell'articolo
- Per salvare, premi il pulsante `Commit new file` in basso a sinistra.

### Metadati

Ogni articolo deve contenere in cima al file i metadati, preceduti e seguiti da 3 trattini `---`

Esempio:

```yml
---
# Metadati richiesti
layout: post
title: Nome della band
item: Titolo dell'articolo
# Supporto, può essere "lp", "7", "libro" eccetera
support: lp
# La categoria è il codice della label (vedi file "_data/labels.yml")
category: rur
# Numero del volume
volume: 75
# Nome del file immagine senza estensione caricato in "assets/covers/< category >"
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
# Aggiunge metadati aggiuntivi per esempio tiratura, numero di pagine, etc.
metadata: [ "more", "info" ]
---
```

Notare come i nomi dei file (metadati `image`, `audio` e `video`) siano da riportare senza estensione (non `filename.ext` ma solo `filename`).

Il file immagine o copertina `image` va caricato nella cartella della corrispondente `category` (label) all'interno di [`assets/covers`](https://github.com/raveup/raveup.github.io/tree/master/assets/covers).

Ad esempio le copertine "BackStreet" nella cartella `assets/covers/bac` e quelle "Synthetic Shadows" in `assets/covers/ss`.

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
3. Creare una cartelle per le copertine in [`assets/images/covers`](https://github.com/raveup/raveup.github.io/tree/master/assets)

Ad esempio per la label "Pinco Pallino" aggiungere il file `assets/pages/series/pp.html` con il seguente contenuto:

```yml
---
layout: archive
category: pp
permalink: /pp/
---
```

### Home page

Ordine di visualizzazione degli articoli in home page:

1. Blog posts (se attivati in [`_data/settings.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/settings.yml))
2. Articoli con `tag: new` oppure `focus: ...` raggruppati per label
3. Articoli con `tag: few` senza raggruppamento per label
4. Articoli rimanenti senza `tag` raggruppati per label

### Caricamento files

Per caricare file immagine, video o audio, cliccare sulla cartella di destinazione e premere `Add file > Upload files` in alto a destra.

File caricabili per ogni articolo, con cartella di destinazione e formati del file richiesti (estensioni):

|file|cartella|formato (estensione)|
|:--|:--|:--|
|immagine|`assets/images/covers/< label >`|`.jpg`|
|audio|`assets/mp3`|`.mp3` `.ogg`|
|video|`assets/video`|`.mp4` `.ogg` `.webm` e `.jpg` per l'immagine|

### Cartelle e files

- [`_data/menu.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/menu.yml) contiene il navigation menù
- [`_blog`](https://github.com/raveup/raveup.github.io/tree/master/_blog) contiene i blog posts. Il numero di posts visualizzati è gestito nel file [`_data/settings.yml`](https://github.com/raveup/raveup.github.io/blob/master/_data/settings.yml)

### PayPal docs

- [paypal/JavaScriptButtons](https://github.com/paypal/JavaScriptButtons)
- [Instant Payment Notification (IPN) simulator](https://developer.paypal.com/webapps/developer/applications/ipn_simulator)
