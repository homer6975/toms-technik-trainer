// ============================================================
// TOMS TECHNIK-TRAINER – INHALTE
// Basierend auf: Technik-Schulbuch Kap. "Elektrotechnik und
// Elektronik", "Maschinen und Mobilität", "Transport und Verkehr"
// + Arbeitsblatt "Technik: Getriebe"
// ============================================================

const TOPICS = {
  elektro: {
    title: "⚡ Elektrotechnik",
    sub: "Spannung, Schaltungen, Löten, Widerstand",
    emoji: "⚡",
    cards: [
      { q: "Was ist eine Spannungsquelle?", a: "Ein Gerät, das elektrische Spannung liefert – z. B. eine Batterie, ein Akku oder eine Solarzelle." },
      { q: "In welcher Einheit wird die elektrische Spannung gemessen?", a: "In Volt (V). Formelzeichen: U" },
      { q: "Wonach ist die Einheit Volt benannt?", a: "Nach Alessandro Volta (1745–1827), dem Erfinder der Spannungsquelle." },
      { q: "Was misst man mit einem Voltmeter?", a: "Die elektrische Spannung. Voltmeter werden PARALLEL geschaltet." },
      { q: "Wie groß ist die Netzspannung in der Steckdose?", a: "230 Volt Wechselspannung. ACHTUNG: Lebensgefährlich, niemals selbst daran arbeiten!" },
      { q: "Was zeigt der Drehregler am regelbaren Netzgerät?", a: "Damit stellst du die Größe der Gleichspannung ein, z. B. von 0–24V." },
      { q: "Welche Farbe hat der Pluspol meist? Welche der Minuspol?", a: "Plus = Rot, Minus = Blau (manchmal Schwarz)." },
      { q: "Was ist eine Gleichspannungsquelle? Nenne 2 Beispiele.", a: "Eine Quelle mit festem Plus- und Minuspol. Beispiele: Batterie, Akku, Solarzelle." },
      { q: "Was ist der Unterschied zwischen Batterie und Akku?", a: "Eine Batterie ist nicht wiederaufladbar. Ein Akku (Akkumulator) ist wiederaufladbar." },
      { q: "Wie viel Volt hat eine Mignonzelle (AA)?", a: "1,5 Volt" },
      { q: "Wie viel Volt hat ein 9V-Block?", a: "9 Volt" },
      { q: "Was passiert bei der Energiewandlung in Solarzellen?", a: "Lichtenergie wird in elektrische Energie umgewandelt." },
      { q: "Woraus besteht ein elektrischer Stromkreis?", a: "Aus Spannungsquelle, Leuchtmittel (oder anderem Verbraucher) und Verbindungsleitungen." },
      { q: "Was ist ein 'geschlossener Stromkreis'?", a: "Ein Stromkreis ohne Unterbrechung – der Strom kann fließen, die Lampe leuchtet." },
      { q: "Was ist ein Schaltplan?", a: "Eine Zeichnung eines Stromkreises mit genormten Schaltzeichen, NICHT mit der echten Bauform." },
      { q: "Was ist der elektrische Widerstand?", a: "Ein Bauteil, das den Stromfluss begrenzt. Formelzeichen: R, Einheit: Ohm (Ω)" },
      { q: "Wonach ist die Einheit Ohm benannt?", a: "Nach dem Physiker Georg Simon Ohm." },
      { q: "Was ist ein Potenziometer?", a: "Ein einstellbarer Widerstand. Man kann den Widerstandswert durch Drehen oder Schieben verstellen." },
      { q: "Was zeigt der Farbcode an einem Widerstand?", a: "Die ersten 2 Ringe = Widerstandswert, 3. Ring = Multiplikationsfaktor, 4. Ring = Toleranz (Abweichung)." },
      { q: "Merksatz: Was passiert bei großem Widerstand mit der Stromstärke?", a: "Großer Widerstand → kleine Stromstärke. Kleiner Widerstand → große Stromstärke." },

      // --- Löten ---
      { q: "Was ist Löten?", a: "Eine stoffschlüssige Verbindung: Metallteile werden durch ein Lot (Schmelzmetall) verbunden und elektrisch leitend mit einer Platine verbunden." },
      { q: "Was unterscheidet Weichlöten von Hartlöten?", a: "Weichlöten: bis ca. 450°C. Hartlöten: 450°C bis ca. 900°C. Hochtemperaturlöten: über 900°C." },
      { q: "Woraus besteht Lötzinn (Lot) hauptsächlich?", a: "Aus einer Legierung verschiedener Metalle – hauptsächlich Blei, Zinn, Silber und Kupfer." },
      { q: "Welche Temperatur erreicht ein normaler Lötkolben ungefähr?", a: "Etwa 360°C an der Lötkolbenspitze." },
      { q: "Warum sollte die Lötkolbenspitze nicht zu heiß sein?", a: "Bei zu hohen Temperaturen kann sich auf dem Lot eine Oxidschicht bilden, die das Löten erschwert oder unmöglich macht." },
      { q: "Was bewirkt Flussmittel beim Löten?", a: "Es löst die Oxidschicht auf den Metallen und schützt vor erneuter Oxidation." },
      { q: "Warum sollte die Lotschicht möglichst dünn sein?", a: "Weil die Zugfestigkeit des Lotes geringer ist als die der zu verbindenden Materialien." },
      { q: "Nenne die 3 Schritte beim richtigen Löten.", a: "1. Verbindungsstellen mit dem Lötkolben erwärmen. 2. Lötzinn schmilzt (ca. 300°C) und legt sich auf die Metallteile. 3. Durch Abkühlen wird das Lot fest – Teile sind verbunden." },
      { q: "Nenne 2 Tipps für haltbare Lötstellen.", a: "Lötstelle sauber halten, Lötspalt klein halten, Lot erst auf die erhitzte Stelle geben, Teile bis zum Erkalten fixieren." },
      { q: "Welche Ausstattung gehört zu einem Lötarbeitsplatz?", a: "Lötkabel, Ablage, feuchter Schwamm, 3. Hand, Lot, Lötunterlage, Entlötpumpe, offenes Fenster/Lötdampfabsorber, gute Beleuchtung." },
      { q: "Woran erkennt man eine GUTE Lötstelle?", a: "Glatte, schön verlaufende Oberfläche, glänzend, wenig Lötzinn verbraucht." },
      { q: "Was bedeutet es, wenn eine Lötstelle nur 'geklebt' aussieht?", a: "Das Lot ist nicht richtig verflossen – die Lötstelle ist kalt geblieben und damit unbrauchbar." },
      { q: "Was bedeutet es, wenn auf dem Lot eine raue/krustige Oberfläche zu sehen ist?", a: "Das Lot wurde überhitzt – auch das macht die Lötstelle unbrauchbar." },
      { q: "Welches Lot sollte man heute zum Löten verwenden?", a: "Bleifreies Lot mit Flussmittel." },
      { q: "Wie verhindert man, dass empfindliche Bauteile (z.B. LEDs) beim Löten überhitzt werden?", a: "Nicht länger als 2–3 Sekunden pro Lötung, Wärme z.B. mit einer Zange ableiten, Bauteil-Beinchen vorher kürzen." },
      { q: "Nenne 3 wichtige Sicherheitsregeln beim Löten.", a: "Lötkolben ist heiß – Verbrennungsgefahr! Kabel vor dem Anschmoren sichern. Lötdämpfe nicht einatmen, lüften. Lötzinn/verschmutzte Hände nicht zum Mund führen (Blei!). Lötspitzen reinigen. Vor Wegräumen muss der Lötkolben erkaltet sein." },
      { q: "Warum darf man Lötzinn oder verschmutzte Hände nicht zum Mund führen?", a: "Weil Lötzinn Blei enthalten kann – das ist giftig." },

      // --- Schalter im Stromkreis ---
      { q: "Was ist eine UND-Schaltung? Nenne ein Beispiel.", a: "Zwei Schalter müssen GLEICHZEITIG geschlossen sein, damit Strom fließt (Reihenschaltung der Schalter). Beispiel: Waschmaschine – Hauptschalter UND Türschalter müssen beide an sein." },
      { q: "Was ist eine ODER-Schaltung? Nenne ein Beispiel.", a: "Es reicht, wenn EINER von mehreren Schaltern geschlossen ist, damit Strom fließt (Parallelschaltung der Schalter). Beispiel: Klingel – von der Haustür ODER der Wohnungstür auslösbar." },
      { q: "Was ist ein Wechselschalter und wofür wird er gebraucht?", a: "Ein Schalter mit zwei Schaltstellungen, mit dem man von verschiedenen Stellen aus eine Lampe an- und ausschalten kann. Beispiel: Treppenhauslicht." },
      { q: "Wie ist ein Fön-Schalter aufgebaut (technisch)?", a: "Zuerst wird nur der Ventilator (Motor) eingeschaltet. Bei weiterem Schalten kommt der Heizdraht (Lampe symbolisch) dazu – aber nur in Verbindung mit dem Ventilator, sonst brennt der Heizdraht durch." },
      { q: "Warum darf der Heizdraht eines Föns nur zusammen mit dem Ventilator laufen?", a: "Um ein schnelles Durchbrennen der Heizdrähte durch fehlende Kühlung zu vermeiden." },

      // --- Reihen- und Parallelschaltung ---
      { q: "Was passiert mit der Helligkeit von Lämpchen in einer Reihenschaltung, wenn man mehr Lämpchen hinzufügt?", a: "Die Lämpchen leuchten schwächer – die Spannung verteilt sich auf alle Lämpchen (z.B. 6V auf 2 Lämpchen = je 3V)." },
      { q: "Was passiert mit der Helligkeit von Lämpchen in einer Parallelschaltung?", a: "Alle Lämpchen leuchten gleich hell – jedes bekommt die volle Spannung (z.B. je 6V)." },
      { q: "Was passiert in einer Reihenschaltung, wenn ein Lämpchen ausfällt?", a: "Der Stromkreis wird unterbrochen – KEIN Lämpchen leuchtet mehr." },
      { q: "Was passiert in einer Parallelschaltung, wenn ein Lämpchen ausfällt?", a: "Die andere Lampe leuchtet trotzdem weiter, weil es zwei getrennte Stromkreise gibt." },
      { q: "Welche Schaltung lässt die Batterie länger halten – Reihen- oder Parallelschaltung?", a: "Die Reihenschaltung – die Batterie hält länger, weil weniger Strom fließt (dafür leuchten die Lämpchen schwächer)." },
      { q: "Warum leuchten Lämpchen in Reihenschaltung schwächer? (Begründung mit Ohmschem Gesetz)", a: "Bei der Reihenschaltung addieren sich die Widerstände der Lämpchen. Das beeinflusst die Stromstärke – sie sinkt, die Lämpchen leuchten schwächer." },
      { q: "Wie verhält sich der Gesamtwiderstand bei Parallelschaltung von Lämpchen?", a: "Der Parallelwiderstand ist kleiner als der kleinste Einzelwiderstand." },

      // --- Spannungsquellen vertieft ---
      { q: "Was sind Monozellen?", a: "Kleine elektrochemische Spannungsquellen für geringen Verbrauch, z.B. in Taschenlampen oder Uhren – nur 'verbraucht', nicht wiederaufladbar." },
      { q: "Was bewirken Kondensatoren in einer Schaltung?", a: "Sie wirken wie kleine Spannungsspeicher: speichern elektrische Energie kurzzeitig zum Glätten von Gleichspannungen oder zur Funkentstörung." },
      { q: "Was ist die technische Stromrichtung?", a: "Die festgelegte Richtung, in der der Strom in Leitungen fließt: vom Pluspol zum Minuspol der Spannungsquelle (auch wenn Elektronen physikalisch andersrum wandern)." },
      { q: "Was bedeutet Wechselspannung?", a: "Die Spannung wechselt ständig ihre Richtung (Polung) – z.B. die 230V-Netzspannung aus der Steckdose." },
      { q: "Was bedeutet Gleichspannung?", a: "Die Stromrichtung in den Leitungen bleibt immer gleich – Plus- und Minuspol sind fest." },
      { q: "Wer darf an Netzspannung (230V) arbeiten?", a: "NUR ausgebildete Fachleute! Schüler dürfen nur mit Kleinspannung bis 24V experimentieren." },
      { q: "Was bedeutet das Schaltzeichen 'Masse' bei Fahrzeugen?", a: "Ein Massepunkt verbindet mehrere Spannungsquellen-Minuspole leitend mit der Karosserie – das spart Leitungsstücke." },

      // --- Ohmsches Gesetz / Widerstand berechnen ---
      { q: "Wie lautet das Ohmsche Gesetz?", a: "R = U / I  (Widerstand = Spannung geteilt durch Stromstärke)" },
      { q: "Welche Einheit hat U im Ohmschen Gesetz?", a: "Volt (V) – die Spannung." },
      { q: "Welche Einheit hat I im Ohmschen Gesetz?", a: "Ampere (A) – die Stromstärke." },
      { q: "Welche Einheit hat R im Ohmschen Gesetz?", a: "Ohm (Ω) – der Widerstand." },
      { q: "Warum braucht eine LED einen Schutzwiderstand?", a: "Durch die LED darf nur ein begrenzter Strom (z.B. 20mA) fließen und es darf nicht mehr Spannung anliegen, als sie verträgt (z.B. max. 1,6V) – sonst geht sie kaputt." },
      { q: "Rechenbeispiel: Batteriespannung 9V, LED braucht 1,6V, Strom soll 0,02A sein. Wie groß muss R sein?", a: "R = (9V − 1,6V) / 0,02A = 7,4V / 0,02A = 370 Ohm" },
      { q: "Warum wählt man in der Praxis oft einen höheren Widerstandswert als berechnet?", a: "Weil im Handel nur bestimmte Normwerte erhältlich sind, z.B. 370 Ohm → man nimmt 390 Ohm (nächsthöherer Wert)." },
      { q: "Wie kann man einen Widerstandswert bestimmen? Nenne 2 Methoden.", a: "1. Über den Farbcode ablesen. 2. Mit einem Vielfachmessgerät (Ohmmeter) messen. 3. Mit dem Ohmschen Gesetz berechnen." },

      // --- Transistor ---
      { q: "Was sind die 3 Anschlüsse eines Transistors?", a: "Basis, Kollektor und Emitter (keine Abkürzungen verwenden!)." },
      { q: "Was ist die Funktion eines Transistors?", a: "Er funktioniert wie ein elektronischer Schalter: Wenn die Basis Strom erhält, wird der Strom zwischen Kollektor und Emitter durchgeschaltet (verstärkt/geschaltet)." },
      { q: "Wofür wird ein Transistor häufig genutzt?", a: "Zum Schalten oder Verstärken von kleinen Strömen – z.B. steuert ein kleiner Basisstrom einen viel größeren Strom." },

      // --- Relais & Steuerstromkreis ---
      { q: "Was ist ein Relais?", a: "Ein elektromagnetisch betätigter Schalter: Ein kleiner Steuerstrom schaltet einen größeren Arbeitsstromkreis ein oder aus." },
      { q: "Was ist der Unterschied zwischen Steuerstromkreis und Arbeitsstromkreis?", a: "Steuerstromkreis: kleiner Strom (z.B. 12V), der das Relais ansteuert. Arbeitsstromkreis: der größere/gefährlichere Strom (z.B. 230V), der über das Relais geschaltet wird." },
      { q: "Warum benutzt man bei einer 230V-Lampe, die per Taster geschaltet wird, ein Relais?", a: "Damit der Taster (z.B. in einer Sitzfläche) nur mit sicherer Kleinspannung (z.B. 12V) arbeitet, während die gefährliche 230V-Lampe getrennt über das Relais geschaltet wird." },
      { q: "Was passiert, wenn ein Taster (Steuerstromkreis) betätigt und wieder losgelassen wird?", a: "Bei Betätigung zieht das Relais an und schließt den Arbeitsstromkreis (Verbraucher schaltet ein). Beim Loslassen öffnet das Relais wieder, der Arbeitsstromkreis wird unterbrochen (Verbraucher schaltet aus)." },

      // --- Strom-Wasser-Analogie ---
      { q: "Was entspricht der elektrischen Stromstärke im Wasserstromkreis-Vergleich?", a: "Die Wassermenge, die durch das Rohr fließt (Durchflussmenge)." },
      { q: "Was entspricht der elektrischen Spannung im Wasserstromkreis-Vergleich?", a: "Der Wasserdruck (z.B. erzeugt durch eine Pumpe)." },
      { q: "Was entspricht dem elektrischen Widerstand im Wasserstromkreis-Vergleich?", a: "Eine Verengung im Rohr (Engstelle), die den Wasserfluss bremst." },

      // --- Begriffsverständnis ---
      { q: "Warum ist 'Verbraucher' eigentlich ein falscher Begriff für Lampen, Motoren usw.?", a: "Man kann elektrischen Strom (Energie) nicht wirklich 'verbrauchen' – er geht nicht verloren, sondern wird nur in eine andere Energieform umgewandelt (z.B. Licht, Wärme, Bewegung)." },
      { q: "Was passiert mit der Energie, wenn eine Lampe leuchtet?", a: "Elektrische Energie wird in Licht- und Wärmeenergie umgewandelt – sie verschwindet nicht, sondern wandelt sich um." },

      // --- Reihenschaltung mit mehreren Widerständen berechnen ---
      { q: "Wie berechnet man den Gesamtwiderstand bei einer Reihenschaltung mehrerer Widerstände?", a: "Man addiert einfach alle Einzelwiderstände: Rges = R1 + R2 + R3 + ..." },
      { q: "Wie groß ist die Stromstärke an jeder Stelle einer Reihenschaltung?", a: "Überall gleich groß! In einer Reihenschaltung ist die Stromstärke I an jedem Punkt identisch (I1 = I2 = I3)." },
      { q: "Wie berechnet man die Teilspannung an einem einzelnen Widerstand in der Reihenschaltung?", a: "Mit dem Ohmschen Gesetz: U = R · I (Widerstand mal die (überall gleiche) Stromstärke)." },
      { q: "Rechenbeispiel: R1=500Ω, R2=200Ω, R3=150Ω in Reihe, Uges=10V. Wie groß ist Rges?", a: "Rges = 500Ω + 200Ω + 150Ω = 850Ω" },
      { q: "Rechenbeispiel: Rges=850Ω, Uges=10V. Wie groß ist die Stromstärke I (überall in der Reihenschaltung)?", a: "I = U / R = 10V / 850Ω ≈ 0,0118 A ≈ 11,8 mA" },
      { q: "Rechenbeispiel: I≈0,0118A, R3=150Ω. Wie groß ist U3 (Spannung an R3)?", a: "U3 = R3 · I = 150Ω · 0,0118A ≈ 1,76 V" },

      // --- Widerstandswerte ordnen ---
      { q: "Wie viel Ohm hat 1 Kiloohm (kΩ)?", a: "1 kΩ = 1.000 Ω" },
      { q: "Wie viel Ohm hat 1 Megaohm (MΩ)?", a: "1 MΩ = 1.000.000 Ω (eine Million Ohm)" },
      { q: "Ordne der Größe nach (klein → groß): 2Ω, 2,4kΩ, 2MΩ, 2500kΩ. Was ist der kleinste Wert?", a: "2Ω ist am kleinsten. Reihenfolge: 2Ω < 2,4kΩ (2.400Ω) < 2500kΩ (2.500.000Ω) < 2MΩ (2.000.000Ω) – Achtung: 2500kΩ ist größer als 2MΩ!" },
    ],
    quiz: [
      {
        q: "In welcher Einheit misst man elektrische Spannung?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correct: 1,
        explain: "Spannung wird in Volt (V) gemessen, benannt nach Alessandro Volta."
      },
      {
        q: "Wie wird ein Voltmeter im Stromkreis angeschlossen?",
        options: ["In Reihe", "Parallel", "Gar nicht", "Nur am Minuspol"],
        correct: 1,
        explain: "Voltmeter werden PARALLEL zur Spannungsquelle bzw. zum Bauteil geschaltet."
      },
      {
        q: "Was ist KEINE Gleichspannungsquelle?",
        options: ["Batterie", "Akku", "Solarzelle", "Steckdose (230V)"],
        correct: 3,
        explain: "Die Steckdose liefert 230V Wechselspannung – das ist keine Gleichspannungsquelle."
      },
      {
        q: "Welche Spannung hat eine normale Mignonzelle (AA-Batterie)?",
        options: ["1,5 V", "4,5 V", "9 V", "12 V"],
        correct: 0,
        explain: "Eine AA-Mignonzelle hat 1,5 Volt."
      },
      {
        q: "Was unterscheidet einen Akku von einer Batterie?",
        options: ["Akkus sind größer", "Akkus sind wiederaufladbar, Batterien nicht", "Kein Unterschied", "Batterien sind teurer"],
        correct: 1,
        explain: "Akkus (Akkumulatoren) kann man wieder aufladen, Batterien nicht."
      },
      {
        q: "Was zeigt ein Schaltplan?",
        options: ["Die echte Bauform der Bauteile", "Genormte Schaltzeichen statt echter Bauform", "Nur die Farben der Kabel", "Die Größe der Lampe"],
        correct: 1,
        explain: "Ein Schaltplan zeigt genormte Schaltzeichen, nicht wie die Bauteile wirklich aussehen."
      },
      {
        q: "Wofür steht das Formelzeichen R?",
        options: ["Reichweite", "Widerstand", "Richtung", "Reaktion"],
        correct: 1,
        explain: "R steht für den elektrischen Widerstand, Einheit Ohm (Ω)."
      },
      {
        q: "Was macht ein Potenziometer?",
        options: ["Es misst die Spannung", "Sein Widerstandswert lässt sich einstellen", "Es speichert Energie", "Es erzeugt Licht"],
        correct: 1,
        explain: "Ein Potenziometer ist ein einstellbarer Widerstand – z. B. durch Drehen oder Schieben."
      },
      {
        q: "Wie verhält sich die Stromstärke bei großem Widerstand?",
        options: ["Sie wird groß", "Sie wird klein", "Sie bleibt gleich", "Sie verschwindet ganz"],
        correct: 1,
        explain: "Großer Widerstand → kleine Stromstärke (bei gleicher Spannung)."
      },
      {
        q: "Wie viele Ringe zeigen beim Widerstand den Multiplikationsfaktor an?",
        options: ["Der 1. Ring", "Der 2. Ring", "Der 3. Ring", "Der 4. Ring"],
        correct: 2,
        explain: "Die ersten zwei Ringe geben den Widerstandswert an, der 3. Ring den Multiplikationsfaktor, der 4. Ring die Toleranz."
      },
      {
        q: "Was ist Löten?",
        options: ["Eine Schraubverbindung", "Eine stoffschlüssige Verbindung mit einem Lot", "Eine Klebeverbindung", "Eine Schweißverbindung mit Strom"],
        correct: 1,
        explain: "Löten ist eine stoffschlüssige Verbindung, bei der Metallteile durch ein Lot verbunden werden."
      },
      {
        q: "Bis zu welcher Temperatur spricht man von Weichlöten?",
        options: ["bis ca. 100°C", "bis ca. 450°C", "bis ca. 900°C", "bis ca. 1500°C"],
        correct: 1,
        explain: "Weichlöten reicht bis etwa 450°C. Darüber spricht man von Hartlöten, über 900°C von Hochtemperaturlöten."
      },
      {
        q: "Was bewirkt Flussmittel beim Löten?",
        options: ["Es macht das Lot bunt", "Es löst die Oxidschicht und schützt vor erneuter Oxidation", "Es kühlt die Lötstelle", "Es ersetzt den Lötkolben"],
        correct: 1,
        explain: "Flussmittel löst die Oxidschicht auf den Metallen und schützt vor erneuter Oxidation."
      },
      {
        q: "Woran erkennt man eine GUTE Lötstelle?",
        options: ["Matt und krustig", "Glatt, glänzend, schön verlaufen", "Sehr viel Lötzinn verwendet", "Kalt und klebrig"],
        correct: 1,
        explain: "Eine gute Lötstelle ist glatt, glänzend und hat eine schön verlaufende Oberfläche, mit wenig Lötzinn-Verbrauch."
      },
      {
        q: "Warum darf man Lötzinn nicht zum Mund führen?",
        options: ["Es schmeckt nach Metall", "Es kann Blei enthalten – giftig", "Es ist zu heiß", "Das ist kein Problem"],
        correct: 1,
        explain: "Lötzinn kann Blei enthalten, das giftig ist – deshalb niemals zum Mund führen."
      },
      {
        q: "Eine Waschmaschine startet nur, wenn Hauptschalter UND Türschalter geschlossen sind. Welche Schaltungsart ist das?",
        options: ["ODER-Schaltung", "UND-Schaltung", "Wechselschaltung", "Kurzschluss"],
        correct: 1,
        explain: "Beide Schalter müssen gleichzeitig geschlossen sein – das ist eine UND-Schaltung (Reihenschaltung der Schalter)."
      },
      {
        q: "Eine Klingel kann von der Haustür ODER der Wohnungstür ausgelöst werden. Welche Schaltungsart ist das?",
        options: ["UND-Schaltung", "ODER-Schaltung", "Reihenschaltung der Schalter", "Schutzschaltung"],
        correct: 1,
        explain: "Es reicht, wenn einer der beiden Schalter betätigt wird – das ist eine ODER-Schaltung (Parallelschaltung der Schalter)."
      },
      {
        q: "Welcher Schalter wird für eine Treppenhauslampe verwendet, die von mehreren Stellen schaltbar sein soll?",
        options: ["Tastschalter", "Wechselschalter", "Schiebeschalter", "Drehschalter"],
        correct: 1,
        explain: "Ein Wechselschalter erlaubt das Schalten von verschiedenen Stellen aus, z. B. im Treppenhaus."
      },
      {
        q: "Zwei Lämpchen leuchten in Reihenschaltung an 6V. Wie hell leuchten sie im Vergleich zur Parallelschaltung?",
        options: ["Gleich hell", "Schwächer", "Heller", "Sie leuchten gar nicht"],
        correct: 1,
        explain: "In Reihenschaltung verteilt sich die Spannung auf beide Lämpchen (z.B. je 3V) – sie leuchten schwächer als bei Parallelschaltung."
      },
      {
        q: "Bei einer Parallelschaltung fällt ein Lämpchen aus. Was passiert?",
        options: ["Beide Lämpchen gehen aus", "Das andere Lämpchen leuchtet weiter", "Die Batterie explodiert", "Nichts ändert sich an der Batterie"],
        correct: 1,
        explain: "Bei Parallelschaltung gibt es getrennte Stromkreise – fällt eines aus, leuchtet das andere weiter."
      },
      {
        q: "Welche Schaltung lässt die Batterie länger halten?",
        options: ["Parallelschaltung", "Reihenschaltung", "Beide gleich", "Keine von beiden"],
        correct: 1,
        explain: "Bei der Reihenschaltung fließt weniger Strom, die Batterie hält länger (dafür leuchten die Lämpchen schwächer)."
      },
      {
        q: "Wie lautet das Ohmsche Gesetz?",
        options: ["U = R + I", "R = U / I", "I = R / U", "U = R / I"],
        correct: 1,
        explain: "Das Ohmsche Gesetz lautet R = U / I (Widerstand = Spannung durch Stromstärke)."
      },
      {
        q: "Eine LED braucht 1,6V, soll mit 0,02A betrieben werden, die Batterie liefert 9V. Wie groß ist der nötige Schutzwiderstand?",
        options: ["180 Ohm", "370 Ohm", "450 Ohm", "720 Ohm"],
        correct: 1,
        explain: "R = (9V − 1,6V) / 0,02A = 7,4V / 0,02A = 370 Ohm."
      },
      {
        q: "Im Handel gibt es keinen 370-Ohm-Widerstand. Welchen Wert wählt man stattdessen?",
        options: ["Den nächsthöheren Normwert (z.B. 390 Ohm)", "Den nächstniedrigeren Normwert", "Irgendeinen Wert", "Man braucht keinen Widerstand"],
        correct: 0,
        explain: "Man wählt grundsätzlich den nächsthöheren verfügbaren Normwert, hier z.B. 390 Ohm."
      },
      {
        q: "Was bedeutet Wechselspannung?",
        options: ["Die Spannung bleibt immer gleich", "Die Spannung wechselt ständig ihre Richtung", "Es gibt keinen Pluspol", "Das ist dasselbe wie Gleichspannung"],
        correct: 1,
        explain: "Bei Wechselspannung wechselt die Spannung ständig ihre Richtung (Polung), z.B. die 230V-Netzspannung."
      },
      {
        q: "Wie heißen die 3 Anschlüsse eines Transistors?",
        options: ["Plus, Minus, Mitte", "Basis, Kollektor, Emitter", "Anode, Kathode, Gate", "Eingang, Ausgang, Erde"],
        correct: 1,
        explain: "Ein Transistor hat die drei Anschlüsse Basis, Kollektor und Emitter."
      },
      {
        q: "Wie funktioniert ein Transistor grundsätzlich?",
        options: ["Er speichert Energie wie ein Akku", "Ein kleiner Basisstrom schaltet einen größeren Strom", "Er wandelt Wechselspannung in Gleichspannung um", "Er misst die Spannung"],
        correct: 1,
        explain: "Erhält die Basis Strom, wird der (größere) Strom zwischen Kollektor und Emitter durchgeschaltet."
      },
      {
        q: "Was ist die Aufgabe eines Relais?",
        options: ["Es misst den Widerstand", "Ein kleiner Steuerstrom schaltet einen größeren Arbeitsstrom", "Es speichert Spannung", "Es wandelt Licht in Strom um"],
        correct: 1,
        explain: "Ein Relais ist ein elektromagnetischer Schalter: ein kleiner Steuerstrom schaltet einen größeren Arbeitsstromkreis."
      },
      {
        q: "Warum nutzt man bei einer 230V-Lampe mit Sitzflächen-Taster ein Relais?",
        options: ["Damit es schneller schaltet", "Damit der Taster nur mit sicherer Kleinspannung arbeitet", "Um Strom zu sparen", "Das ist nicht nötig"],
        correct: 1,
        explain: "Das Relais trennt den gefährlichen 230V-Arbeitsstromkreis vom sicheren Kleinspannungs-Steuerstromkreis am Taster."
      },
      {
        q: "Was entspricht der elektrischen Spannung im Wasserstromkreis-Vergleich?",
        options: ["Die Wassermenge", "Der Wasserdruck", "Die Rohrlänge", "Die Wassertemperatur"],
        correct: 1,
        explain: "Die elektrische Spannung entspricht dem Wasserdruck im Wasserstromkreis-Vergleich."
      },
      {
        q: "Was entspricht dem elektrischen Widerstand im Wasserstromkreis-Vergleich?",
        options: ["Die Pumpe", "Eine Verengung im Rohr", "Der Wasserhahn", "Die Wassermenge"],
        correct: 1,
        explain: "Eine Engstelle im Rohr bremst den Wasserfluss – das entspricht dem elektrischen Widerstand."
      },
      {
        q: "Warum ist 'Verbraucher' eigentlich kein passender Begriff?",
        options: ["Weil es zu negativ klingt", "Weil Energie nicht verloren geht, sondern nur umgewandelt wird", "Weil nur Strom verbraucht wird, keine Energie", "Der Begriff ist korrekt"],
        correct: 1,
        explain: "Elektrische Energie wird nicht 'verbraucht', sondern nur in andere Energieformen (Licht, Wärme, Bewegung) umgewandelt."
      },
      {
        q: "Drei Widerstände R1=500Ω, R2=200Ω, R3=150Ω liegen in Reihe. Wie groß ist Rges?",
        options: ["283 Ω", "850 Ω", "150.000 Ω", "500 Ω"],
        correct: 1,
        explain: "In Reihenschaltung addieren sich die Widerstände: Rges = 500 + 200 + 150 = 850 Ω."
      },
      {
        q: "Wie verhält sich die Stromstärke an verschiedenen Stellen einer Reihenschaltung?",
        options: ["Sie ist überall unterschiedlich", "Sie ist überall gleich groß", "Sie wird am Ende immer 0", "Das kann man nicht sagen"],
        correct: 1,
        explain: "In einer Reihenschaltung ist die Stromstärke an jeder Stelle gleich groß (I1 = I2 = I3)."
      },
      {
        q: "Welcher Widerstandswert ist am GRÖSSTEN: 2Ω, 2,4kΩ, 2MΩ oder 2500kΩ?",
        options: ["2Ω", "2,4kΩ", "2MΩ", "2500kΩ"],
        correct: 3,
        explain: "2500kΩ = 2.500.000Ω ist größer als 2MΩ (2.000.000Ω) – Achtung bei den Einheiten-Umrechnungen!"
      }
    ]
  },

  getriebe: {
    title: "⚙️ Getriebe & Maschinen",
    sub: "Räder, Übersetzung, EVA-Prinzip",
    emoji: "⚙️",
    cards: [
      { q: "Was ist die Aufgabe eines Getriebes?", a: "Bewegung in Richtung, Geschwindigkeit (Drehzahl) oder Kraft verändern – wenn Antrieb und Abtrieb nicht direkt verbunden sind." },
      { q: "Was ist ein Stirnradgetriebe?", a: "Zwei Zahnräder, deren Stirnseiten sich berühren oder ineinander greifen (z. B. Zahnräder)." },
      { q: "Was ist ein Schneckenradgetriebe?", a: "Antrieb ist eine Schnecke (wie eine Schraube), Abtrieb ein Zahnrad. Eine Schneckenumdrehung bewegt nur 1 Zahn weiter – sehr starke Untersetzung." },
      { q: "Was ist ein Kegelradgetriebe?", a: "Räder mit kegelförmig bearbeiteten Zahnrädern. Wird eingesetzt, wenn Antriebs- und Abtriebswelle NICHT parallel sind (oft 90°)." },
      { q: "Was ist ein Schubkurbelgetriebe?", a: "Wandelt eine Drehbewegung in eine Hin- und Herbewegung um (oder umgekehrt). Beispiel: Kolbenmotor." },
      { q: "Was ist ein Zugmittelgetriebe?", a: "Räder, die sich nicht direkt berühren, sondern über Kette, Riemen o.ä. verbunden sind. Beispiel: Fahrrad-Kette." },
      { q: "Was ist ein Zahnstangengetriebe?", a: "Wandelt eine Drehbewegung in eine geradlinige Bewegung um. Die Zahnstange ist ein abgewickeltes Zahnrad. Beispiel: Lenkung im Auto." },
      { q: "Welches Getriebe nutzt ein Fensterheber im Auto?", a: "Ein Schneckenradgetriebe (oder Zahnstangengetriebe je nach Bauart) – meist Schneckenradgetriebe, weil es selbsthemmend ist." },
      { q: "Welches Getriebe steckt in einer Tischbohrmaschine?", a: "Ein Kegelradgetriebe (zwischen Motor und senkrechter Bohrspindel, 90° Winkel)." },
      { q: "Welches Getriebe steckt in einem Kolbenmotor?", a: "Ein Schubkurbelgetriebe – wandelt die Hin-und-Her-Bewegung des Kolbens in eine Drehbewegung um." },
      { q: "Wie berechnet man das Übersetzungsverhältnis i?", a: "i = Antriebsdrehzahl (z1) / Abtriebsdrehzahl (z2) → eigentlich i = z2/z1 (Verhältnis der Zähnezahlen). Merke: i = z2/z1" },
      { q: "Was bedeutet i = 2:1?", a: "Halbierte Drehzahl am Abtrieb, aber die Kraft verdoppelt sich." },
      { q: "Was bedeutet i = 1:2?", a: "Doppelte Drehzahl am Abtrieb, aber die Kraft halbiert sich." },
      { q: "Wie ändert sich die Drehrichtung bei einem Riementrieb?", a: "Wenn das Zugmittel (Riemen) gekreuzt zwischen Rad 1 und Rad 2 verlegt wird (wie eine liegende Acht)." },
      { q: "Was gilt für gerade Stirnradgetriebe bei der Drehrichtung?", a: "Jedes zusätzlich eingebaute Zwischenrad ändert die Drehrichtung." },
      { q: "Was ist das EVA-Prinzip?", a: "Eingabe → Verarbeitung → Ausgabe. So funktionieren alle Maschinen: sie übertragen ihre Arbeit nach diesem Schema." },
      { q: "Nenne 3 Baugruppen einer Maschine.", a: "z. B.: Träger-/Gehäuseteil, Antriebs-/Energieteil, Übertragungsteil, Schalt-/Steuer-/Regelteil, Abtriebs-/Arbeitsteil, Sicherheitsvorrichtung." },
      { q: "Was ist beim Akku-Bohrschrauber das Antriebsteil?", a: "Der Akku (liefert die Energie)." },
      { q: "Was passiert mit der Kraft, wenn man von einem kleinen auf ein großes Antriebsrad wechselt?", a: "Kleines Antriebsrad zu großem Abtriebsrad = Übersetzung ins Langsame, Kraft wird größer." },
    ],
    quiz: [
      {
        q: "Welches Getriebe wandelt eine Drehbewegung in eine Hin- und Herbewegung um?",
        options: ["Stirnradgetriebe", "Schubkurbelgetriebe", "Zugmittelgetriebe", "Kegelradgetriebe"],
        correct: 1,
        explain: "Das Schubkurbelgetriebe wandelt Dreh- in Hin-und-Her-Bewegung um, z. B. im Kolbenmotor."
      },
      {
        q: "Welches Getriebe wird verwendet, wenn die Achsen NICHT parallel sind (z. B. 90°)?",
        options: ["Kegelradgetriebe", "Zugmittelgetriebe", "Schubkurbelgetriebe", "Stirnradgetriebe"],
        correct: 0,
        explain: "Kegelradgetriebe werden eingesetzt, wenn Antriebs- und Abtriebswelle nicht parallel zueinander sind."
      },
      {
        q: "Welches Getriebe steckt in der Lenkung eines Autos?",
        options: ["Schneckenradgetriebe", "Zahnstangengetriebe", "Schubkurbelgetriebe", "Kegelradgetriebe"],
        correct: 1,
        explain: "Die Lenkung nutzt meist ein Zahnstangengetriebe: Drehbewegung wird in eine geradlinige Bewegung umgewandelt."
      },
      {
        q: "Welches Getriebe steckt typischerweise im Kolbenmotor?",
        options: ["Zugmittelgetriebe", "Zahnstangengetriebe", "Schubkurbelgetriebe", "Schneckenradgetriebe"],
        correct: 2,
        explain: "Im Kolbenmotor wandelt das Schubkurbelgetriebe die Kolbenbewegung in eine Drehbewegung um."
      },
      {
        q: "Wofür steht EVA bei Maschinen?",
        options: ["Energie-Verbrauch-Antrieb", "Eingabe-Verarbeitung-Ausgabe", "Einbau-Verkabelung-Anschluss", "Erst-Vor-Aufbau"],
        correct: 1,
        explain: "EVA = Eingabe, Verarbeitung, Ausgabe. So arbeiten alle Maschinen."
      },
      {
        q: "Was passiert bei einem Übersetzungsverhältnis von i = 2:1?",
        options: ["Drehzahl verdoppelt sich, Kraft sinkt", "Drehzahl halbiert sich, Kraft steigt", "Nichts ändert sich", "Die Drehrichtung kehrt sich um"],
        correct: 1,
        explain: "Bei i = 2:1 wird die Drehzahl am Abtrieb halbiert, dafür steigt die verfügbare Kraft."
      },
      {
        q: "Wie kann man bei einem Riementrieb die Drehrichtung umkehren?",
        options: ["Riemen straffer spannen", "Riemen über Kreuz (liegende Acht) verlegen", "Zweites Rad hinzufügen", "Das geht nicht"],
        correct: 1,
        explain: "Wird der Riemen gekreuzt (wie eine liegende Acht) verlegt, dreht sich die Richtung um."
      },
      {
        q: "Welches Getriebe nutzt eine Fahrradkette?",
        options: ["Stirnradgetriebe", "Zugmittelgetriebe", "Kegelradgetriebe", "Zahnstangengetriebe"],
        correct: 1,
        explain: "Eine Kette ist ein Zugmittel – daher Zugmittelgetriebe (gilt auch für Riemen)."
      },
      {
        q: "Was ist KEINE typische Baugruppe einer Maschine?",
        options: ["Antriebsteil", "Übertragungsteil", "Geschmacksteil", "Abtriebsteil"],
        correct: 2,
        explain: "'Geschmacksteil' gibt es nicht – Maschinen bestehen z. B. aus Träger-, Antriebs-, Übertragungs- und Abtriebsteil."
      },
      {
        q: "Ein Antriebsrad mit 10 Zähnen treibt ein Abtriebsrad mit 40 Zähnen an. Was passiert mit der Kraft?",
        options: ["Die Kraft wird kleiner", "Die Kraft wird größer", "Die Kraft bleibt gleich", "Die Drehrichtung dreht sich um"],
        correct: 1,
        explain: "Kleines Antriebsrad zu großem Abtriebsrad = Übersetzung ins Langsame → die Kraft wird größer."
      }
    ]
  },

  mobil: {
    title: "🚇 Mobilität",
    sub: "Verkehrsmittel früher, heute, Zukunft",
    emoji: "🚇",
    cards: [
      { q: "Wie hat sich die Mobilität seit ca. 1900 verändert?", a: "Damals: ruhige Straßen, kaum Verkehr. Heute: viel mehr Menschen und Güter, mehr und stärkere Verkehrsmittel." },
      { q: "Welche Verkehrsmittel gab es um 1900 hauptsächlich?", a: "Straßenbahnen, Fußgänger, Pferdegespanne – kaum Pkws mit Motoren." },
      { q: "Was transportieren Pkws und Lkws heute hauptsächlich?", a: "Pkws: Menschenmassen von einem Ort zum anderen. Lkws: große Gütermengen." },
      { q: "Was bedeutet 'gesteigerte Mobilität' für die Gesellschaft?", a: "Mehr Menschen können sich freier bewegen, mehr Waren werden transportiert – aber es entstehen auch Probleme (Stau, Umwelt)." },
      { q: "Was bedeutet weltweite Warenströme?", a: "Waren und Nahrungsmittel werden heute weltweit produziert und in jeden Markt der Welt transportiert – nicht mehr nur regional." },
      { q: "Wie hat sich der Urlaub durch moderne Verkehrsmittel verändert?", a: "Früher: Urlaub meist regional (z. B. Schwarzwald). Heute: Reisen in die ganze Welt möglich (Flugzeug, Bahn, Auto)." },
      { q: "Was ist Carsharing?", a: "Ein Mobilitätskonzept, bei dem man sich ein Auto mit anderen teilt, statt ein eigenes zu besitzen." },
      { q: "Was sind moderne Mobilitäts-Apps?", a: "Apps, die z. B. Carsharing, ÖPNV-Fahrpläne oder Routenplanung anbieten, um Mobilität flexibel zu organisieren." },
      { q: "Was ist ein Nachteil der gestiegenen Mobilität in Großstädten?", a: "Verkehrskollaps: lange Staus, volle Parkplätze, verstopfte Innenstädte." },
      { q: "Welche Lösung bieten Park & Ride / S-Bahn-Anbindung?", a: "Sie verknüpfen Auto und öffentliche Verkehrsmittel, um Staus in der Innenstadt zu verringern." },
    ],
    quiz: [
      {
        q: "Wie sah der Verkehr um 1900 hauptsächlich aus?",
        options: ["Viele Autos und Staus", "Ruhige Straßen mit Straßenbahnen und Fußgängern", "Nur Flugverkehr", "Vor allem Lkw-Verkehr"],
        correct: 1,
        explain: "Um 1900 war es auf den Straßen noch ruhig – geprägt von Straßenbahnen, Fußgängern und Pferdegespannen."
      },
      {
        q: "Was transportieren Lkws heute hauptsächlich?",
        options: ["Nur Personen", "Große Gütermengen", "Nur Briefe", "Gar nichts mehr"],
        correct: 1,
        explain: "Lkws transportieren heute große Gütermengen – schneller und leistungsfähiger als früher."
      },
      {
        q: "Was versteht man unter 'weltweiten Warenströmen'?",
        options: ["Waren werden nur lokal verkauft", "Waren werden weltweit produziert und überallhin transportiert", "Es gibt keine Warentransporte mehr", "Nur Lebensmittel werden transportiert"],
        correct: 1,
        explain: "Heute werden Waren und Nahrungsmittel weltweit produziert und in jeden Markt der Welt transportiert."
      },
      {
        q: "Was ist Carsharing?",
        options: ["Ein eigenes Auto kaufen", "Sich ein Auto mit anderen teilen", "Ein Fahrrad ausleihen", "Ein Taxi rufen"],
        correct: 1,
        explain: "Beim Carsharing teilt man sich ein Auto mit anderen Nutzern, statt ein eigenes zu besitzen."
      },
      {
        q: "Was ist ein Nachteil der gestiegenen Mobilität in Großstädten?",
        options: ["Zu wenig Verkehr", "Verkehrskollaps durch Staus", "Keine Autos mehr nötig", "Weniger Reisen"],
        correct: 1,
        explain: "Die gestiegene Mobilität führt in Großstädten oft zu Verkehrskollaps mit langen Staus."
      }
    ]
  },

  verkehr: {
    title: "🌍 Verkehr & Umwelt",
    sub: "Feinstaub, Lärm, Stau, Klima",
    emoji: "🌍",
    cards: [
      { q: "Was ist Feinstaub und woher kommt er u.a.?", a: "Winzige Partikel in der Luft. Wird u.a. durch Dieselruß von Dieselmotoren mitverursacht." },
      { q: "Wie hoch darf der Feinstaub-Jahresmittelwert in der EU höchstens sein?", a: "40 µg/m³ (Mikrogramm pro Kubikmeter) seit 2005." },
      { q: "Was bedeutet µ (Mikro) als Einheit?", a: "1 Millionstel (also ein sehr, sehr kleiner Teil)." },
      { q: "Nenne 3 Stoffe, die die Luft durch Verkehr verschmutzen.", a: "Z. B.: Kohlenstoffdioxid, Kohlenstoffmonoxid, Stickstoffoxide, Schwefeloxide, Ruß, Staub." },
      { q: "Warum ist Kohlenstoffmonoxid giftig?", a: "Es bindet sich an die roten Blutkörperchen im Blut und wirkt dadurch direkt toxisch." },
      { q: "Welche Auswirkung hat Kohlenstoffdioxid auf die Umwelt?", a: "Es wirkt vor allem als Treibhausgas und trägt zum Klimawandel bei." },
      { q: "Was verursacht 'sauren Regen'?", a: "Schwefeldioxid verbindet sich mit Niederschlagswasser zu schwefeliger Säure → schädigt Wald und kalkhaltige Bauwerke." },
      { q: "Wodurch entsteht Verkehrslärm?", a: "Durch Reifen-Kontakt mit der Straße, Motoren- und Auspuffgeräusche, Bremsgeräusche und Fahrtwind." },
      { q: "Was sind die 3 Hauptursachen für Staus?", a: "Unfälle (ca. 33%), hohes Verkehrsaufkommen (ca. 32%), Baustellen (ca. 31%)." },
      { q: "Was ist Sommersmog?", a: "Erhöhter Ozonwert in Bodennähe, der auch durch den Verkehr entsteht. Verursacht Atembeschwerden, Schwindel, Kopfschmerzen." },
      { q: "Welche Maßnahme hat London 2003 eingeführt, um Verkehr zu reduzieren?", a: "Die City-Maut – eine Gebühr für das Befahren der Innenstadt mit dem Auto." },
      { q: "Wie viel konnte die Londoner City-Maut den Verkehr und Feinstaub senken?", a: "Verkehrsaufkommen um 18%, Feinstaub um 12%." },
      { q: "Was sind positive Auswirkungen von Verkehr? Nenne 2 Beispiele.", a: "Zur Arbeit kommen, Einkaufen, Erholungsstätten erreichen, soziale/Gesundheitsdienste betreiben, abgelegene Gebiete erreichen." },
      { q: "Wo entstehen 85% der weltweiten CO2-Emissionen – und wo leben die meisten Menschen?", a: "85% der Emissionen entstehen in den Industrieländern, dort leben aber nur 15% der Weltbevölkerung." },
    ],
    quiz: [
      {
        q: "Wie hoch darf der Feinstaub-Jahresmittelwert in der EU höchstens sein?",
        options: ["4 µg/m³", "40 µg/m³", "400 µg/m³", "4000 µg/m³"],
        correct: 1,
        explain: "Seit 2005 gilt in der EU ein Grenzwert von 40 µg/m³ im Jahresmittel."
      },
      {
        q: "Warum ist Kohlenstoffmonoxid für den Menschen gefährlich?",
        options: ["Es riecht schlecht", "Es bindet sich an rote Blutkörperchen im Blut", "Es macht laute Geräusche", "Es ist nur für Pflanzen schädlich"],
        correct: 1,
        explain: "Kohlenstoffmonoxid bindet sich an die roten Blutkörperchen im Blut und wirkt dadurch direkt toxisch."
      },
      {
        q: "Was ist die häufigste Ursache für Staus laut Statistik?",
        options: ["Baustellen", "Unfälle", "Schlechtes Wetter", "Tankstellen"],
        correct: 1,
        explain: "Unfälle sind mit ca. 33% die häufigste Stauursache, knapp vor hohem Verkehrsaufkommen (32%) und Baustellen (31%)."
      },
      {
        q: "Was verursacht 'sauren Regen'?",
        options: ["Kohlenstoffdioxid", "Schwefeldioxid", "Sauerstoff", "Wasserdampf"],
        correct: 1,
        explain: "Schwefeldioxid verbindet sich mit dem Niederschlagswasser und bildet schwefelige Säure – das ist 'saurer Regen'."
      },
      {
        q: "Was ist Sommersmog?",
        options: ["Nebel im Winter", "Erhöhter Ozonwert in Bodennähe", "Rauch von Lagerfeuern", "Staub von Baustellen"],
        correct: 1,
        explain: "Sommersmog ist ein erhöhter Ozonwert in Bodennähe, auch durch Verkehr verursacht."
      },
      {
        q: "Welches Gas wirkt vor allem als Treibhausgas?",
        options: ["Sauerstoff", "Kohlenstoffdioxid (CO2)", "Stickstoff", "Wasserstoff"],
        correct: 1,
        explain: "Kohlenstoffdioxid (CO2) wirkt vor allem als Treibhausgas und beeinflusst das Weltklima."
      },
      {
        q: "Was bewirkte die Londoner City-Maut (eingeführt 2003)?",
        options: ["Verkehr und Feinstaub stiegen an", "Verkehr sank um 18%, Feinstaub um 12%", "Keine Veränderung", "Nur der Lärm wurde lauter"],
        correct: 1,
        explain: "Die City-Maut in London senkte das Verkehrsaufkommen um 18% und den Feinstaub um 12%."
      },
      {
        q: "Wo entstehen laut Text 85% der weltweiten CO2-Emissionen?",
        options: ["In Entwicklungsländern", "In Industrieländern", "Gleich verteilt überall", "Nur in Großstädten Asiens"],
        correct: 1,
        explain: "85% der CO2-Emissionen entstehen in den Industrieländern, wo aber nur 15% der Weltbevölkerung leben."
      }
    ]
  }
};

// ============================================================
// KLASSENARBEIT-SIMULATION
// Aufgabentypen orientiert an typischen Technik-Klassenarbeiten
// zum Thema Elektrotechnik (Widerstand, Schaltungen, Transistor,
// Relais, Ohmsches Gesetz). Eigenständig erstellte Aufgaben.
// ============================================================

const EXAM = {
  title: "📝 Klassenarbeit-Simulation",
  sub: "Elektrotechnik – wie in einer echten Arbeit",
  durationMinutes: 30,
  questions: [
    {
      type: "open",
      points: 2,
      q: "Bestimme den Wert des Widerstands mit den Farbringen: grün, rot, rot, gold.",
      hint: "1. Ring + 2. Ring = Ziffern, 3. Ring = Multiplikator, 4. Ring = Toleranz.",
      answer: "grün=5, rot=2 → 52, 3. Ring rot = x100 → 52 × 100 = 5.200 Ω = 5,2 kΩ (Toleranz gold = ±5%)"
    },
    {
      type: "open",
      points: 2,
      q: "Bestimme den Wert des Widerstands mit den Farbringen: silber, orange, blau, gelb.",
      hint: "Achtung: 'silber' als 1. Ring ist ungewöhnlich – meist beginnt man mit dem 1. Wertring. Nimm orange=3, blau=6 als Ziffern.",
      answer: "orange=3, blau=6 → 36, 3. Ring gelb = x10.000 → 36 × 10.000 = 360.000 Ω = 360 kΩ"
    },
    {
      type: "open",
      points: 2,
      q: "Welche Farbkombination (4 Ringe) hat ein Widerstand mit 6,8 kΩ?",
      hint: "6,8 kΩ = 68 × 100 Ω. Finde die Ziffern 6 und 8 im Farbcode, dann den passenden Multiplikator.",
      answer: "blau (6), grau (8), rot (x100), + eine Toleranzfarbe, z. B. gold (±5%) → blau, grau, rot, gold"
    },
    {
      type: "open",
      points: 4,
      q: "Eine Reihenschaltung hat drei Widerstände: R1 = 500 Ω, R2 = 200 Ω, R3 = 150 Ω. Die Gesamtspannung beträgt Uges = 10 V. Berechne den Gesamtwiderstand Rges, die Stromstärke I und die Teilspannung U3 an R3.",
      hint: "Reihenfolge: 1) Rges = R1+R2+R3, 2) I = Uges/Rges (I ist überall gleich), 3) U3 = R3 · I",
      answer: "Rges = 500+200+150 = 850 Ω. I = 10V / 850Ω ≈ 0,0118 A (11,8 mA). U3 = 150Ω · 0,0118A ≈ 1,76 V"
    },
    {
      type: "open",
      points: 2,
      q: "Zeichne/Beschreibe das Schaltzeichen eines Transistors und benenne alle 3 Anschlüsse (ohne Abkürzungen).",
      hint: "Ein Transistor hat drei Anschlüsse – einer steuert, zwei lassen den Hauptstrom fließen.",
      answer: "Anschlüsse: Basis (Steuereingang), Kollektor und Emitter (zwischen denen der Hauptstrom fließt, wenn die Basis angesteuert wird)."
    },
    {
      type: "open",
      points: 2,
      q: "Erkläre die Funktion eines Transistors in eigenen Worten.",
      hint: "Was passiert, wenn die Basis Strom bekommt?",
      answer: "Erhält die Basis einen (kleinen) Steuerstrom, wird dadurch der (größere) Strom zwischen Kollektor und Emitter freigegeben/durchgeschaltet. Der Transistor wirkt wie ein elektronischer Schalter bzw. Verstärker."
    },
    {
      type: "open",
      points: 3,
      q: "Eine Schreibtischlampe (230V) soll automatisch leuchten, wenn man sich auf den Stuhl setzt (Drucktaster in der Sitzfläche). Die Lampe wird über ein Relais (12V) angesteuert. Beschreibe, welche zwei Stromkreise es gibt und welche Aufgabe sie jeweils haben.",
      hint: "Es gibt einen sicheren 'kleinen' Kreis und einen 'großen', gefährlicheren Kreis.",
      answer: "Steuerstromkreis (12V, ungefährlich): Drucktaster in der Sitzfläche schließt diesen Kreis und aktiviert das Relais. Arbeitsstromkreis (230V): Wird vom Relais geschaltet und versorgt die eigentliche Lampe mit Strom. Vorteil: Die gefährliche Spannung liegt nicht am Taster an."
    },
    {
      type: "open",
      points: 2,
      q: "Erkläre die Strom-Wasser-Analogie: Was entspricht Stromstärke, Spannung und Widerstand jeweils im Wasserkreislauf?",
      hint: "Denk an eine Pumpe, ein Rohr und eine Engstelle.",
      answer: "Stromstärke = Wassermenge/Durchfluss. Spannung = Wasserdruck (von der Pumpe erzeugt). Widerstand = Engstelle im Rohr, die den Durchfluss bremst."
    },
    {
      type: "open",
      points: 2,
      q: "Warum ist der Begriff 'Verbraucher' im Zusammenhang mit elektrischem Strom eigentlich nicht ganz korrekt?",
      hint: "Geht die Energie wirklich verloren?",
      answer: "Strom (Energie) wird nicht wirklich 'verbraucht' – sie geht nicht verloren, sondern wird nur in eine andere Energieform umgewandelt, z. B. in Licht, Wärme oder Bewegung."
    },
    {
      type: "open",
      points: 3,
      q: "Eine LED hat die Spezifikation Imax = 25 mA, ULED = 2,0 V. Berechne den nötigen Vorwiderstand, wenn die angelegte Spannung 9 V beträgt.",
      hint: "1) mA in A umrechnen (25mA = 0,025A). 2) R = (Uges − ULED) / I",
      answer: "R = (9V − 2,0V) / 0,025A = 7V / 0,025A = 280 Ω → in der Praxis nächsthöheren Normwert wählen, z. B. 300 Ω."
    },
    {
      type: "open",
      points: 2,
      q: "Berechne I: U = 130 V, R = 0,2 kΩ.",
      hint: "Achtung: 0,2 kΩ erst in Ω umrechnen (kΩ × 1000). Dann I = U/R.",
      answer: "0,2 kΩ = 200 Ω. I = U/R = 130V / 200Ω = 0,65 A"
    },
    {
      type: "open",
      points: 2,
      q: "Berechne R: I = 2,5 A, U = 200 V.",
      hint: "R = U/I",
      answer: "R = 200V / 2,5A = 80 Ω"
    },
    {
      type: "open",
      points: 1,
      q: "Ordne der Größe nach (klein → groß): 18Ω; 1,8kΩ; 1800kΩ; 1,8MΩ",
      hint: "Rechne alles in Ω um: kΩ ×1.000, MΩ ×1.000.000.",
      answer: "18Ω < 1,8kΩ (1.800Ω) < 1,8MΩ (1.800.000Ω) < 1800kΩ (1.800.000Ω) → 1,8MΩ und 1800kΩ sind gleich groß! Reihenfolge: 18Ω, 1,8kΩ, 1,8MΩ = 1800kΩ"
    },
    {
      type: "mc",
      points: 1,
      q: "Was entspricht der elektrischen Stromstärke im Wasserstromkreis-Vergleich?",
      options: ["Der Wasserdruck", "Die durchfließende Wassermenge", "Die Rohrlänge", "Die Wassertemperatur"],
      correct: 1,
      explain: "Die Stromstärke entspricht der Wassermenge, die durch das Rohr fließt."
    },
    {
      type: "mc",
      points: 1,
      q: "Welche der folgenden Aussagen zum Relais ist richtig?",
      options: [
        "Ein Relais erhöht die Spannung",
        "Ein Relais schaltet mit einem kleinen Steuerstrom einen größeren Arbeitsstrom",
        "Ein Relais speichert elektrische Energie",
        "Ein Relais wandelt Wechselspannung in Gleichspannung um"
      ],
      correct: 1,
      explain: "Ein Relais ist ein elektromagnetischer Schalter: kleiner Steuerstrom schaltet größeren Arbeitsstrom."
    }
  ]
};
