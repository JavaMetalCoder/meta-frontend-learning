# Riassunto Modulo 2 - HTML5 e CSS Base (Corso Meta Front-End Developer)

Il Modulo 2 rappresenta il primo vero punto di partenza pratico del corso Meta Front-End Developer, e ti ha guidato passo dopo passo attraverso la creazione di una pagina web statica utilizzando HTML5 e CSS.

### 1. Introduzione all'HTML

Abbiamo iniziato scoprendo cos'è l'HTML (HyperText Markup Language), il linguaggio usato per costruire la struttura di tutte le pagine web. Come una cornice in un edificio, l'HTML fornisce l'impalcatura sulla quale tutto il resto si appoggia.

Hai imparato a:

- Scrivere la struttura base di un documento HTML con `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`
- Usare i principali tag semantici: `<h1><h6>`, `<p>`, `<a>`, `<img>`, `<div>`
- Collegare pagine HTML tra loro usando `<a href="pagina.html">`
- Inserire immagini con `src` e `alt`
- Costruire tabelle con `<table>`, `<tr>`, `<td>`, `<th>`
- Creare moduli HTML usando `<form>` e vari tipi di `<input>`: testo, password, radio, checkbox, `textarea` e `select`

### 2. Il DOM (Document Object Model)

Hai esplorato il concetto di DOM, ovvero la rappresentazione ad albero di tutti gli elementi HTML di una pagina. Ogni tag diventa un oggetto che JavaScript può leggere e modificare, rendendo le pagine dinamiche e interattive.

Hai visto come:

- Il browser genera il DOM a partire dal codice HTML
- Ogni elemento ha una posizione nell'albero (es. `html > body > div > h1`)
- JavaScript interagisce col DOM per modificare contenuti, rispondere a eventi, animare elementi e creare nuove parti della pagina

### 3. Accessibilità Web (WAI & WCAG)

Un sito ben fatto è un sito accessibile. L'accessibilità web permette a tutte le persone, incluse quelle con disabilità, di utilizzare Internet.

Hai imparato che:

- L'accessibilità non riguarda solo la vista, ma anche udito, mobilità, linguaggio, e cognizione
- Le buone pratiche includono: uso di `alt`, `label`, struttura semantica corretta, evitare `<br>` per creare spazio
- Le tecnologie assistive includono: screen reader, comandi vocali, sottotitoli
- Gli standard WCAG sono forniti dalla WAI (Web Accessibility Initiative)

### 4. Introduzione al CSS

Hai scoperto il CSS (Cascading Style Sheets), che controlla l'aspetto grafico di una pagina.

Concetti chiave:

- Una regola CSS = `selettore { proprietà: valore; }`
- Selettori: di tipo (`h1`), ID (`#titolo`), classi (`.rosso`)
- Proprietà: `color`, `background-color`, `font-size`, `text-align`, ecc.
- I CSS possono essere scritti in un file esterno (`style.css`) e collegati con `<link rel="stylesheet" href="style.css">`

### 5. Box Model

Ogni elemento HTML è una "scatola" composta da:

- `content`: il contenuto vero e proprio
- `padding`: spazio interno
- `border`: contorno
- `margin`: spazio esterno

Hai imparato a calcolare la dimensione totale di un elemento sommando questi valori.

### 6. Display: blocco e inline

Hai capito la differenza tra:

- Elementi di **blocco**: occupano tutta la riga (es. `<div>`, `<p>`, `<h1>`)
- Elementi **in linea**: stanno sulla stessa riga (es. `<span>`, `<a>`, `<img>`, `<strong>`)
- La proprietà CSS `display` permette di cambiare il comportamento (`block`, `inline`, `inline-block`, ecc.)

---

### Conclusione

Al termine del modulo, sei in grado di:

- Costruire una pagina HTML completa e accessibile
- Applicare stili CSS per modificare colori, layout e formattazione
- Comprendere e gestire il DOM per creare pagine dinamiche in futuro
- Applicare buone pratiche di accessibilità
- Usare VS Code con Live Preview per vedere i cambiamenti in tempo reale

Hai costruito la tua **prima pagina web** e hai messo le basi solide per tutto ciò che seguirà: layout avanzati, interazioni, design responsivo e JavaScript.

Ben fatto Fabietto! È ora di passare al prossimo modulo: **CSS intermedio - Colori e Tipografia!** 🌟