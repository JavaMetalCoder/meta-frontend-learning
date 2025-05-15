# Riassunto Completo - Corso Meta Front-End Developer: Modulo 1 - Introduzione a JavaScript

---

### ✨ Panoramica Generale

Il modulo 1 introduce i concetti fondamentali di JavaScript, il linguaggio di programmazione del web. Attraverso esempi pratici e spiegazioni progressive, impari cos'è JavaScript, come funziona, e come iniziare a usarlo per costruire logica e interattività nelle pagine web.

---

### 🌐 Cos'è JavaScript?

- Linguaggio di scripting interpretato, nato nel 1995.
- È il **linguaggio del web**: ogni browser moderno lo supporta.
- Permette di **modificare dinamicamente i contenuti** HTML/CSS.
- Si usa sia nel **front-end** (React, browser) che nel **back-end** (Node.js).
- Funziona anche su **mobile (React Native)** e dispositivi IoT.

---

### 📅 Variabili

- Le variabili sono contenitori che **salvano valori** per riutilizzarli.
- Dichiarazione: `var`, `let`, `const` (si vedranno più avanti)
- Esempio:
    
    ```
    var nome = "Fabio";
    console.log("Ciao", nome);
    
    ```
    
- Le variabili possono essere **riassegnate** (a seconda del tipo).

---

### 📊 Tipi di Dato Primitivi

1. `string` → Testo (es. `'ciao'`)
2. `number` → Numeri (interi e decimali)
3. `boolean` → `true` / `false`
4. `null` → assenza intenzionale di valore
5. `undefined` → variabile dichiarata ma senza valore
6. `BigInt` → numeri molto grandi
7. `Symbol` → identificatori unici

---

### 🔢 Operatori

- **Aritmetici**: `+`, , , `/`, `%`, `*`
- **Confronto**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- **Logici**: `&&`, `||`, `!`
- **Assegnazione**: `=`
- Differenza `==` vs `===`: il secondo controlla **tipo e valore**.

---

### ⚖️ Condizioni

- `if`: esegue codice solo se la condizione è vera
- `if...else`: aggiunge alternativa se falsa
- `if...else if...else`: gestisce più casi
- `switch`: alternativa ordinata a più `else if` se confronti lo stesso valore

```
let voto = 45;
if (voto >= 50) {
  console.log("Passato");
} else {
  console.log("Bocciato");
}

```

---

### 🔄 Loop (Cicli)

- Permettono di **ripetere codice** finché una condizione è vera.

### ✅ `for`

```
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

```

- Tutta la logica è nella dichiarazione.

### ⏳ `while`

```
let i = 3;
while (i > 0) {
  console.log(i);
  i--;
}

```

- Più flessibile, ma più soggetto a errori.

---

### 📆 Nested Loops (Loop Annidati)

- Un loop dentro un altro.
- Usato per gestire **dati multidimensionali** (es. settimane e giorni).

```
for (let settimana = 1; settimana <= 2; settimana++) {
  for (let giorno = 1; giorno <= 5; giorno++) {
    console.log("Settimana", settimana, "Giorno", giorno);
  }
}

```

---

### 📊 Conclusioni

- Hai imparato a scrivere variabili, usare tipi di dato, confrontare valori, scrivere condizioni e loop.
- Queste basi sono **fondamentali per tutto ciò che viene dopo**: funzioni, oggetti, DOM, API...

Prossimo step? **Quiz finale**, **esercizi pratici** o il primo **mini-progetto**!

---

Fine Modulo 1 ✔️