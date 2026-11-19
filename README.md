# ESLint Live-Demo · ca. 5 Minuten

## Einmal vor dem Vortrag

1. ZIP in einen eigenen Ordner entpacken. In VS Code oder IntelliJ IDEA diesen Ordner öffnen. `package.json` und `bestellung.js` liegen direkt darin.
2. Im integrierten Terminal mit `node -v` prüfen, ob Node.js installiert ist. Für diese Demo eignet sich Node.js 24 oder Node.js 22 ab Version 22.13.
3. Im Terminal `npm ci` ausführen. Dieser Schritt braucht Internet. Danach laufen die Demo-Befehle mit der lokalen Installation.
4. `bestellung.js` und `eslint.config.mjs` als Tabs öffnen. Code und Terminal so groß einstellen, dass sie im Raum lesbar sind.
5. Die Schritte einmal proben. Direkt vor dem Vortrag `npm run reset` ausführen. Das überschreibt die beiden Demo-Dateien mit den Startvorlagen. Nach Terminalbefehlen einfach weiterarbeiten, auch wenn ESLint wegen der absichtlich eingebauten Fehler mit Exit-Code 1 endet.

## Ablauf und Sprechtext

### 1 · Zum Editor wechseln · ca. 1 Minute

Öffne `bestellung.js`.

> „Hier geht es um eine kleine Bestellung. Welche der Regeln von eben könnten hier greifen?“

Gib dem Publikum ein paar Sekunden. Führe dann `npm run lint` aus.

| Stelle | Meldung | Was du dazu sagst |
| --- | --- | --- |
| Zeile 1 | `prefer-const` · Warnung | „Die Anzahl wird später nicht neu zugewiesen. Deshalb reicht hier const.“ |
| Zeile 3 | `no-unused-vars` · Fehler | „Der Versand ist definiert, wird aber noch nicht verwendet.“ |
| Zeile 5 | `eqeqeq` · Fehler | „Hier vergleichen wir eine Zahl mit einem String. Mit zwei Gleichheitszeichen wandelt JavaScript beim Vergleich den Typ um.“ |

### 2 · Automatisch korrigieren · ca. 45 Sekunden

Führe `npm run lint:fix` aus. Zeige im Editor, dass jetzt `const anzahl = 3;` steht.

> „ESLint hat let durch const ersetzt. Für den Vergleich und die Versandkosten sehen wir weiterhin zwei Meldungen.“

### 3 · Von Hand korrigieren · ca. 1 Minute

Wechsle zu `bestellung.js`, ändere den Vergleich und verwende die Versandkosten in der Rechnung. Lass das if ohne geschweifte Klammern und speichere.

```js
if (anzahl === 3)
  console.log(anzahl * einzelpreis + versand);
```

Führe `npm run lint` aus. ESLint meldet keine Probleme. Mit `npm start` kannst du die Ausgabe `40` zeigen.

> „Die Anzahl ist eine Zahl. Deshalb vergleich ich sie mit der Zahl 3. Und die Versandkosten rechne ich beim Gesamtpreis dazu.“

### 4 · Die Regel curly einschalten · ca. 45 Sekunden

Öffne `eslint.config.mjs`. Ändere unter `rules` die Einstellung `"curly": "off"` zu `"curly": "warn"` und speichere. Führe erneut `npm run lint` aus. Jetzt erscheint eine Warnung wegen der fehlenden Klammern am if.

> „Ich hab nur die Regel eingeschaltet. Jetzt meldet ESLint, dass beim if die Klammern fehlen.“

### 5 · Zurück zur Fazitfolie · ca. 30 Sekunden

> „ESLint zeigt uns, wo wir genauer hinschauen sollten. Einen Teil können wir automatisch korrigieren. Was unser Programm fachlich tun soll, entscheiden wir selbst. Damit kommen wir zum Fazit.“

## Wenn das Terminal nicht mitspielt

In `vorlagen` findest du den Startcode, den fertigen Code und die aufgezeichneten Ausgaben. Zeige zuerst den Startcode, lies die drei Meldungen aus der Aufzeichnung vor und wechsle zum fertigen Code. Damit kannst du die Demo auch ohne laufende ESLint-Installation erklären.

## Spickzettel

`npm run lint` → `npm run lint:fix` → Vergleich und Rechnung ändern → `npm run lint` → optional `npm start` → `curly` auf `warn` → `npm run lint` → Fazitfolie.
