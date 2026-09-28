/* Zentrale ICS Körpersignale-Datenbasis · aus bestehender App übernommen */
window.ICS_BODY_SIGNALS = [
  {
    category: 'Kopf',
    title: 'Kopfschmerz',
    body: 'Wo sitzt der Druck oder Schmerz genau? Wie verändert er sich über den Tag?',
    inner: 'Welche Anforderungen, Reize oder Gedanken beanspruchen gerade besonders viel Raum?',
    action: '2 Minuten Licht, Wasser und Ruhe: Bildschirm weg, bewusst atmen und den Kiefer lockern.',
    reset: 'Ist die Intensität danach gleich, stärker oder etwas geringer?'
  },
  {
    category: 'Kopf',
    title: 'Kieferanspannung',
    body: 'Spürst du Druck, Pressen oder Müdigkeit im Kiefer?',
    inner: 'Was hältst du gerade zurück, kontrollierst du stark oder versuchst du durchzuhalten?',
    action: 'Zunge locker, Zähne voneinander lösen, 6 langsame Ausatmungen.',
    reset: 'Wo bemerkst du zuerst Entlastung – Kiefer, Gesicht, Nacken oder Atmung?'
  },
  {
    category: 'Kopf',
    title: 'Augenmüdigkeit',
    body: 'Sind die Augen trocken, schwer oder überreizt?',
    inner: 'Wie viel Bildschirm, Konzentration und visuelle Reize hattest du heute?',
    action: '20 Sekunden in die Ferne schauen, dann 10-mal bewusst blinzeln.',
    reset: 'Fühlen sich Augen und Kopf danach weiter oder ruhiger an?'
  },
  {
    category: 'Nacken & Schulter',
    title: 'Nackenanspannung',
    body: 'Ist der Nacken eher steif, ziehend oder druckempfindlich?',
    inner: 'Wo bist du innerlich angespannt oder permanent aufmerksam?',
    action: 'Schultern 5-mal hochziehen und bewusst fallen lassen; anschließend langsam den Blick links/rechts führen.',
    reset: 'Hat sich Beweglichkeit oder Spannung verändert?'
  },
  {
    category: 'Nacken & Schulter',
    title: 'Schulterlast',
    body: 'Welche Schulter fühlt sich schwerer oder höher an?',
    inner: 'Welche Verantwortung trägst du gerade – und was davon muss heute wirklich bei dir bleiben?',
    action: 'Eine Aufgabe notieren, die heute bewusst warten darf.',
    reset: 'Wie reagiert dein Körper auf die Entscheidung, etwas nicht sofort zu tragen?'
  },
  {
    category: 'Rücken',
    title: 'Oberer Rücken',
    body: 'Ist es Druck zwischen den Schulterblättern, Müdigkeit oder Ziehen?',
    inner: 'Wie lange sitzt oder hältst du dich heute schon in derselben Position?',
    action: '1–3 Minuten aufstehen, Arme öffnen, Brustkorb bewegen.',
    reset: 'Was verändert sich an Atmung und Aufrichtung?'
  },
  {
    category: 'Rücken',
    title: 'Unterer Rücken',
    body: 'Fühlt es sich steif, müde oder instabil an?',
    inner: 'Wie viel Sitzen, Heben, Stress oder fehlende Bewegung war zuletzt dabei?',
    action: 'Kurz gehen oder die Position wechseln; keine schmerzhaften Dehnungen erzwingen.',
    reset: 'Ist Bewegung gerade wohltuend oder braucht dein Körper eher Ruhe?'
  },
  {
    category: 'Brust & Atmung',
    title: 'Flache Atmung',
    body: 'Atmest du eher hoch in die Brust oder frei in den Bauchraum?',
    inner: 'Bist du gerade unter Zeitdruck, innerer Alarmbereitschaft oder ständiger Aktivität?',
    action: '5 Atemzüge mit längerer Ausatmung als Einatmung.',
    reset: 'Wird dein Körper ruhiger, wärmer oder bleibt er unverändert?'
  },
  {
    category: 'Brust & Atmung',
    title: 'Engegefühl',
    body: 'Wo genau nimmst du Enge wahr und wann tritt sie auf?',
    inner: 'Welche Situation löst gerade Anspannung oder emotionale Aktivierung aus?',
    action: 'Wenn medizinisch unauffällig: hinsetzen, Füße spüren, langsam ausatmen und Umgebung bewusst wahrnehmen.',
    reset: 'Kannst du den Zustand klarer beschreiben als vorher?'
  },
  {
    category: 'Bauch & Verdauung',
    title: 'Bauchanspannung',
    body: 'Ist der Bauch hart, nervös, aufgebläht oder empfindlich?',
    inner: 'Gab es Stress, hastiges Essen oder wenig Pausen?',
    action: 'Hand auf den Bauch, 60 Sekunden ruhig sitzen; nächste Mahlzeit langsamer essen.',
    reset: 'Was verändert sich durch Ruhe und bewusstes Tempo?'
  },
  {
    category: 'Bauch & Verdauung',
    title: 'Unruhige Verdauung',
    body: 'Wann fällt dir die Verdauungsreaktion besonders auf?',
    inner: 'Welche Nahrung, Tageszeit, Stresssituation oder Gewohnheit könnte mitwirken?',
    action: 'Heute ein kleines Beobachtungsprotokoll führen: Essen, Stress, Zeitpunkt, Reaktion.',
    reset: 'Erkennst du einen wiederkehrenden Zusammenhang?'
  },
  {
    category: 'Energie',
    title: 'Erschöpfung',
    body: 'Ist die Müdigkeit körperlich, geistig oder beides?',
    inner: 'Wie waren Schlaf, Trinken, Ernährung, Tageslicht und Bewegung in den letzten 24 Stunden?',
    action: 'Wähle nur eine Basis: Wasser, 3 Minuten Tageslicht oder 3 Minuten Bewegung.',
    reset: 'Wie verändert sich deine Energie auf einer Skala von 0–10?'
  },
  {
    category: 'Energie',
    title: 'Mittagstief',
    body: 'Wann beginnt dein Tief und was ging ihm voraus?',
    inner: 'War die Mahlzeit sehr groß, hattest du wenig Schlaf oder saßt du lange?',
    action: '5–10 Minuten leicht gehen, möglichst draußen.',
    reset: 'Wie klar ist dein Kopf danach auf einer Skala von 0–10?'
  },
  {
    category: 'Energie',
    title: 'Innere Unruhe',
    body: 'Wo spürst du Unruhe zuerst – Brust, Bauch, Beine, Gedanken?',
    inner: 'Was versucht deine Aufmerksamkeit gerade gleichzeitig zu lösen?',
    action: 'Eine Sache aufschreiben, die jetzt Priorität hat; den Rest parken.',
    reset: 'Wird deine innere Geschwindigkeit danach niedriger?'
  },
  {
    category: 'Schlaf',
    title: 'Einschlafprobleme',
    body: 'Ist dein Körper müde, während der Kopf weiterarbeitet?',
    inner: 'Welche offenen Gedanken, Bildschirmreize oder späten Aktivitäten halten dich aktiv?',
    action: 'Vor dem Schlafen 3 offene Punkte notieren und für morgen terminieren.',
    reset: 'Kann dein Kopf die Themen danach leichter loslassen?'
  },
  {
    category: 'Schlaf',
    title: 'Nächtliches Aufwachen',
    body: 'Zu welcher Uhrzeit wachst du auf und wie fühlst du dich dabei?',
    inner: 'Welche Faktoren könnten mitwirken: Temperatur, Alkohol, Stress, Licht, Geräusche oder Harndrang?',
    action: 'Für einige Nächte nur Zeitpunkt und mögliche Auslöser notieren.',
    reset: 'Entsteht ein erkennbares Muster?'
  },
  {
    category: 'Beine & Füße',
    title: 'Schwere Beine',
    body: 'Fühlen sich die Beine müde, gespannt oder unbeweglich an?',
    inner: 'Wie viel Bewegung und wie viel langes Sitzen oder Stehen gab es heute?',
    action: '3 Minuten gehen und die Fußgelenke bewegen.',
    reset: 'Werden die Beine danach leichter oder unverändert?'
  },
  {
    category: 'Beine & Füße',
    title: 'Unruhige Beine',
    body: 'Wann tritt die Unruhe auf – abends, in Ruhe oder nach langem Sitzen?',
    inner: 'Welche Gewohnheiten, Aktivität oder Tagesbelastung gehen dem voraus?',
    action: 'Kurze sanfte Bewegung und bewusstes Ausschütteln der Beine.',
    reset: 'Welche Veränderung bemerkst du?'
  },
  {
    category: 'Hände & Arme',
    title: 'Verspannte Unterarme',
    body: 'Sind Unterarme oder Hände müde, fest oder überbeansprucht?',
    inner: 'Wie viel Tippen, Handy, Werkzeug oder monotone Belastung hattest du?',
    action: 'Hände lockern, Finger spreizen, 60 Sekunden Pause von der Tätigkeit.',
    reset: 'Wie fühlt sich die Spannung danach an?'
  },
  {
    category: 'Hände & Arme',
    title: 'Kribbeln in Händen',
    body: 'Wann tritt das Kribbeln auf und in welchen Fingern?',
    inner: 'Welche Haltung oder Belastung geht dem voraus?',
    action: 'Position wechseln und beobachten. Wiederkehrendes oder anhaltendes Kribbeln medizinisch abklären lassen.',
    reset: 'Verschwindet es mit Positionswechsel oder bleibt es bestehen?'
  },
  {
    category: 'Ganzkörper',
    title: 'Muskelanspannung',
    body: 'Welche Bereiche halten gerade unbewusst Spannung?',
    inner: 'Bist du seit längerer Zeit in Konzentration, Stress oder körperlicher Belastung?',
    action: 'Körper kurz scannen: Stirn, Kiefer, Schultern, Hände, Bauch – jeden Bereich bewusst lockern.',
    reset: 'Wo lässt dein Körper zuerst los?'
  },
  {
    category: 'Ganzkörper',
    title: 'Kältegefühl',
    body: 'Ist dir allgemein kalt oder nur an Händen/Füßen?',
    inner: 'Wie sind Raumtemperatur, Bewegung, Essen, Schlaf und allgemeiner Zustand?',
    action: 'Kurz bewegen, warmes Getränk und Temperatur bewusst beobachten.',
    reset: 'Wird dir danach wärmer oder bleibt das Gefühl ungewöhnlich stark?'
  },
  {
    category: 'Ganzkörper',
    title: 'Überreizung',
    body: 'Sind Geräusche, Licht oder Menschen gerade zu viel?',
    inner: 'Wie lange hattest du heute ohne echte Pause Input?',
    action: '3 Minuten ohne Bildschirm, Sprache und neuen Input.',
    reset: 'Wie viel Reiz verträgst du danach wieder?'
  },
  {
    category: 'Stress',
    title: 'Gedankenkreisen',
    body: 'Welcher Gedanke wiederholt sich?',
    inner: 'Ist es ein Problem, das jetzt lösbar ist – oder nur gedanklich aktiv?',
    action: 'Schreibe den Gedanken auf und ergänze: „Der nächste konkrete Schritt ist …“',
    reset: 'Ist der Gedanke danach klarer oder weniger dominant?'
  },
  {
    category: 'Stress',
    title: 'Druckgefühl',
    body: 'Wo zeigt sich der Druck im Körper?',
    inner: 'Welche Erwartung erzeugt gerade das Gefühl, schneller oder mehr leisten zu müssen?',
    action: 'Eine Aufgabe verkleinern: Was ist die kleinste sinnvolle Version davon?',
    reset: 'Was passiert mit deinem Körper, wenn die Aufgabe kleiner wird?'
  },
  {
    category: 'Regeneration',
    title: 'Keine Lust auf Bewegung',
    body: 'Ist es echte Erschöpfung oder eher Startwiderstand?',
    inner: 'Wie viel wäre gerade wirklich möglich: 1, 3 oder 10 Minuten?',
    action: 'Nur die gewählte Minimalzeit bewegen – danach neu entscheiden.',
    reset: 'Hast du danach mehr, gleich viel oder weniger Energie?'
  },
  {
    category: 'Regeneration',
    title: 'Nach langem Sitzen steif',
    body: 'Welche Gelenke oder Muskeln fühlen sich unbeweglich an?',
    inner: 'Wie lange warst du ohne Positionswechsel?',
    action: '90 Sekunden gehen, strecken und die Gelenke sanft bewegen.',
    reset: 'Welche Stelle verändert sich am deutlichsten?'
  },
  {
    category: 'Regeneration',
    title: 'Gefühl von Leere',
    body: 'Wie zeigt sich Leere körperlich – Müdigkeit, Schwere, Distanz oder Ruhe?',
    inner: 'Was fehlt dir gerade eher: Pause, Kontakt, Bewegung, Essen, Natur oder Orientierung?',
    action: 'Wähle nur eine kleine Ressource und nutze sie 3 Minuten bewusst.',
    reset: 'Was ist danach anders – auch wenn es nur minimal ist?'
  },
  {
    category: 'Wahrnehmung',
    title: 'Körper kaum spürbar',
    body: 'Welche Körperstelle kannst du gerade am leichtesten wahrnehmen?',
    inner: 'War deine Aufmerksamkeit lange ausschließlich im Denken oder Außen?',
    action: 'Füße am Boden spüren und 30 Sekunden drei Körperempfindungen benennen.',
    reset: 'Kannst du jetzt mehr Details wahrnehmen?'
  },
  {
    category: 'Wahrnehmung',
    title: 'Unspezifisches Unwohlsein',
    body: 'Was genau bedeutet „unwohl“ – Druck, Müdigkeit, Nervosität, Schmerz, Wärme, Kälte?',
    inner: 'Wann begann es und was war unmittelbar davor?',
    action: 'Das Gefühl in drei konkrete Körperwörter übersetzen und Verlauf beobachten.',
    reset: 'Ist dein Zustand dadurch klarer beschreibbar geworden?'
  },
  {
    category: "Kopf",
    title: "Schwindel",
    body: "Wie fühlt sich der Schwindel an – Drehen, Schwanken oder Benommenheit? Wann tritt er auf?",
    inner: "Gab es wenig Schlaf, zu wenig Flüssigkeit, langes Sitzen oder eine belastende Situation?",
    action: "Setz dich sicher hin, vermeide riskante Bewegungen und beobachte den Verlauf. Neuer, starker oder anhaltender Schwindel sollte medizinisch abgeklärt werden.",
    reset: "Wird es in Ruhe besser, bleibt es gleich oder kommen weitere Beschwerden hinzu?"
  },
  {
    category: "Kopf",
    title: "Ohrgeräusche",
    body: "Ist das Geräusch einseitig oder beidseitig, dauerhaft oder vorübergehend?",
    inner: "Wann fällt es besonders auf – nach Lärm, Stress, wenig Schlaf oder in Ruhe?",
    action: "Gönne den Ohren Ruhe und vermeide zusätzliche starke Lärmbelastung. Plötzlich neu auftretende oder einseitige Ohrgeräusche mit Hörverlust zeitnah medizinisch abklären.",
    reset: "Verändert sich Lautstärke oder Wahrnehmung in ruhiger Umgebung?"
  },
  {
    category: "Nacken & Schulter",
    title: "Schultersteife",
    body: "Welche Bewegung ist eingeschränkt oder unangenehm?",
    inner: "Gab es ungewohnte Belastung, langes Sitzen oder eine einseitige Haltung?",
    action: "Bewege die Schulter nur im angenehmen Bereich und wechsle die Haltung. Starke, zunehmende oder verletzungsbedingte Beschwerden abklären lassen.",
    reset: "Wird die Bewegung nach sanftem Positionswechsel leichter?"
  },
  {
    category: "Rücken",
    title: "Rückenschmerz allgemein",
    body: "Wo genau sitzt der Schmerz und wodurch verändert er sich?",
    inner: "Welche Bewegungen, Belastungen oder langen Positionen gingen ihm voraus?",
    action: "Wechsle vorsichtig die Position und bleibe im verträglichen Maß in Bewegung. Bei Lähmungserscheinungen, Taubheit im Schritt oder Problemen mit Blase/Darm sofort medizinische Hilfe suchen.",
    reset: "Welche Position oder leichte Bewegung verändert den Schmerz?"
  },
  {
    category: "Brust & Atmung",
    title: "Kurzatmigkeit",
    body: "Tritt die Atemnot in Ruhe oder bei Belastung auf und ist sie neu?",
    inner: "Welche Situation ging voraus? Beobachte zunächst, ohne eine psychische Ursache anzunehmen.",
    action: "Neue oder starke Atemnot, Brustschmerz, bläuliche Lippen oder deutliche Verschlechterung sind medizinische Warnzeichen und brauchen sofortige Abklärung.",
    reset: "Wird die Atmung in Ruhe normaler oder bleibt die Atemnot bestehen?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Blähungen",
    body: "Wann treten Blähungen auf und gibt es einen Zusammenhang mit Mahlzeiten?",
    inner: "Welche Lebensmittel, Essgeschwindigkeit, Getränke oder Stresssituationen könnten mitwirken?",
    action: "Beobachte einige Tage Essen, Zeitpunkt und Beschwerden. Anhaltende oder starke Beschwerden ärztlich abklären lassen.",
    reset: "Zeigt sich ein wiederkehrendes Muster?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Sodbrennen",
    body: "Wann tritt das Brennen auf – nach Mahlzeiten, beim Liegen oder nachts?",
    inner: "Welche Mahlzeiten, Getränke oder Essenszeiten gehen ihm voraus?",
    action: "Beobachte Auslöser und vermeide direktes Hinlegen nach großen Mahlzeiten. Häufiges oder anhaltendes Sodbrennen medizinisch abklären.",
    reset: "Welche Gewohnheit scheint den größten Unterschied zu machen?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Übelkeit",
    body: "Wann begann die Übelkeit und welche weiteren Beschwerden sind dabei?",
    inner: "Gab es ungewohntes Essen, Infektzeichen, Medikamente, Bewegung oder starke Belastung?",
    action: "Trinke bei Verträglichkeit kleine Mengen. Starke, anhaltende Übelkeit, Austrocknung, starke Schmerzen oder Blut erfordern medizinische Abklärung.",
    reset: "Kannst du Flüssigkeit behalten und verändert sich die Übelkeit?"
  },
  {
    category: "Energie",
    title: "Morgenmüdigkeit",
    body: "Wie erholt fühlst du dich direkt nach dem Aufwachen?",
    inner: "Wie waren Schlafdauer, Schlafqualität, Abendroutine und mögliche Unterbrechungen?",
    action: "Beobachte einige Tage Schlafenszeit, Aufwachzeit und Erholung. Anhaltend starke Tagesmüdigkeit sollte medizinisch besprochen werden.",
    reset: "Welche Veränderung zeigt sich nach mehreren Nächten mit regelmäßigerem Schlaf?"
  },
  {
    category: "Schlaf",
    title: "Zu frühes Erwachen",
    body: "Wie viel früher als gewünscht wachst du auf und kannst du wieder einschlafen?",
    inner: "Welche Veränderungen bei Stress, Licht, Geräuschen, Alkohol, Koffein oder Schlafrhythmus gab es?",
    action: "Notiere für eine Woche Schlaf- und Aufwachzeiten sowie mögliche Einflussfaktoren.",
    reset: "Entsteht ein zeitliches oder situatives Muster?"
  },
  {
    category: "Beine & Füße",
    title: "Knieschmerz",
    body: "Wo am Knie sitzt der Schmerz und tritt er bei Belastung, Ruhe oder bestimmten Bewegungen auf?",
    inner: "Gab es eine neue Belastung, längere Inaktivität, Sport oder eine Verletzung?",
    action: "Belastung anpassen und schmerzhafte Bewegungen nicht erzwingen. Nach Verletzung, bei deutlicher Schwellung, Blockade oder Instabilität medizinisch abklären.",
    reset: "Welche Bewegung ist gut tolerierbar und welche verstärkt die Beschwerden?"
  },
  {
    category: "Beine & Füße",
    title: "Fußschmerz",
    body: "Wo am Fuß sitzt der Schmerz – Ferse, Sohle, Vorfuß oder Gelenk?",
    inner: "Welche Schuhe, Laufwege, Belastungen oder Veränderungen gingen voraus?",
    action: "Belastung vorübergehend anpassen und gut verträgliches Schuhwerk wählen. Anhaltende oder starke Schmerzen abklären lassen.",
    reset: "Verändert sich der Schmerz mit Belastung, Ruhe oder anderem Schuhwerk?"
  },
  {
    category: "Hände & Arme",
    title: "Handgelenkschmerz",
    body: "Welche Bewegung oder Tätigkeit löst die Beschwerden aus?",
    inner: "Gab es viel Tippen, Handy, Werkzeug, Sport oder eine ungewohnte Belastung?",
    action: "Belastung reduzieren und neutrale Handposition ausprobieren. Nach Verletzung oder bei anhaltender Schwäche, Schwellung oder Taubheit abklären lassen.",
    reset: "Welche Tätigkeit beeinflusst den Schmerz am deutlichsten?"
  },
  {
    category: "Ganzkörper",
    title: "Herzklopfen",
    body: "Ist der Herzschlag nur stärker spürbar, sehr schnell oder unregelmäßig?",
    inner: "Wann tritt es auf – nach Anstrengung, Koffein, wenig Schlaf, Medikamenten oder in Ruhe?",
    action: "Setz dich hin und beobachte den Verlauf. Herzklopfen mit Brustschmerz, Ohnmacht, starker Atemnot oder anhaltend sehr schnellem Puls sofort medizinisch abklären.",
    reset: "Beruhigt sich der Herzschlag in Ruhe oder bleibt er auffällig?"
  },
  {
    category: "Ganzkörper",
    title: "Fiebergefühl",
    body: "Hast du deine Temperatur gemessen und welche weiteren Beschwerden bestehen?",
    inner: "Gab es Kontakt zu Erkrankten, Infektzeichen oder ungewöhnliche Belastung?",
    action: "Ruhe, ausreichend trinken und Temperatur beobachten. Hohes, anhaltendes Fieber oder deutliche Verschlechterung medizinisch abklären.",
    reset: "Wie entwickeln sich Temperatur und Allgemeinzustand?"
  },
  {
    category: "Stress",
    title: "Konzentrationsprobleme",
    body: "Wann fällt Konzentration besonders schwer und wie lange hält das an?",
    inner: "Wie sind Schlaf, Pausen, Reizmenge, Ernährung und aktuelle Belastung?",
    action: "Reduziere für zehn Minuten Ablenkungen und wähle nur eine klar begrenzte Aufgabe.",
    reset: "Wird der Fokus mit weniger Reizen besser?"
  },
  {
    category: "Stress",
    title: "Reizbarkeit",
    body: "Woran merkst du körperlich zuerst, dass deine Reizschwelle sinkt?",
    inner: "Welche Faktoren wie Schlafmangel, Hunger, Überforderung oder fehlende Pausen könnten mitwirken?",
    action: "Unterbrich Input für einige Minuten und prüfe zuerst körperliche Grundbedürfnisse.",
    reset: "Was verändert sich nach einer kurzen Pause?"
  },
  {
    category: "Regeneration",
    title: "Muskelkater",
    body: "Welche Muskeln sind betroffen und passt es zu einer ungewohnten Belastung?",
    inner: "War die Trainings- oder Alltagsbelastung höher als sonst?",
    action: "Leichte Bewegung und normale Regeneration sind oft sinnvoll. Sehr starke Schmerzen, deutliche Schwellung oder dunkler Urin medizinisch abklären.",
    reset: "Wird die Beweglichkeit im Tagesverlauf langsam besser?"
  },
  {
    category: "Wahrnehmung",
    title: "Taubheitsgefühl",
    body: "Wo ist die Taubheit, seit wann besteht sie und kam sie plötzlich?",
    inner: "Welche Körperposition oder Belastung ging voraus? Vermeide eine vorschnelle emotionale Deutung.",
    action: "Plötzlich neue Taubheit, besonders einseitig oder zusammen mit Schwäche, Sprach- oder Sehstörungen, ist ein Notfall. Anhaltende Taubheit medizinisch abklären.",
    reset: "Verschwindet sie nach Positionswechsel vollständig oder bleibt sie bestehen?"
  },
  {
    category: "Wahrnehmung",
    title: "Zittern",
    body: "Welche Körperstelle zittert und tritt es in Ruhe oder bei Aktivität auf?",
    inner: "Gab es Kälte, Hunger, Koffein, Anstrengung, Medikamente oder starke Aktivierung?",
    action: "Setz dich sicher hin und beobachte. Neues, anhaltendes oder deutlich zunehmendes Zittern medizinisch abklären.",
    reset: "Nimmt das Zittern nach Ruhe, Wärme oder Essen ab?"
  }
];
