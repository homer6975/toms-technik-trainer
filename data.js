// ============================================================
// TOMS TECHNIK-TRAINER – INHALTE
// Basierend auf: Technik-Schulbuch Kap. "Elektrotechnik und
// Elektronik", "Maschinen und Mobilität", "Transport und Verkehr"
// + Arbeitsblatt "Technik: Getriebe"
// ============================================================

const TOPICS = {
  elektro: {
    title: "⚡ Elektrotechnik",
    sub: "Spannung, Stromkreis, Widerstand",
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
