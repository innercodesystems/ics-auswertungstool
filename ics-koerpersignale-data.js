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
,
  {
    category: "Kopf",
    title: "Spannung an den Schläfen",
    body: "Wann tritt die Spannung auf und wie lange hält sie an?",
    inner: "Gab es viel Bildschirmzeit, wenig Pausen oder Kieferpressen?",
    action: "Entspanne den Kiefer und gönne dir zwei Minuten Bildschirmruhe.",
    reset: "Was verändert sich nach der kurzen Pause?"
  },
  {
    category: "Kopf",
    title: "Druck an der Stirn",
    body: "Wie stark ist der Druck und was begleitet ihn?",
    inner: "Wie waren Schlaf, Flüssigkeitszufuhr und Reizbelastung heute?",
    action: "Trinke etwas Wasser und reduziere für einige Minuten äußere Reize.",
    reset: "Ist der Druck unverändert oder anders wahrnehmbar?"
  },
  {
    category: "Augen",
    title: "Brennende Augen",
    body: "Wann beginnen die Augen zu brennen?",
    inner: "Gab es trockene Luft, Bildschirmarbeit oder andere Auslöser?",
    action: "Blinzle bewusst und gönne deinen Augen eine Bildschirmpause.",
    reset: "Wie fühlen sich die Augen danach an?"
  },
  {
    category: "Augen",
    title: "Lichtempfindlichkeit",
    body: "Bei welchem Licht fällt die Empfindlichkeit besonders auf?",
    inner: "Ist sie neu oder mit Kopfschmerz oder Sehstörungen verbunden?",
    action: "Suche einen angenehm beleuchteten Raum auf; neue starke Beschwerden ärztlich abklären.",
    reset: "Was verbessert oder verschlechtert die Wahrnehmung?"
  },
  {
    category: "Gesicht",
    title: "Angespannte Gesichtsmuskeln",
    body: "Welche Gesichtspartie fühlt sich angespannt an?",
    inner: "Merkst du unbewusstes Stirnrunzeln oder Zusammenbeißen?",
    action: "Lass Stirn, Augenbrauen und Lippen für sechs Atemzüge weich werden.",
    reset: "Welche Partie entspannt sich zuerst?"
  },
  {
    category: "Mund & Kiefer",
    title: "Trockener Mund",
    body: "Wann bemerkst du die Trockenheit besonders?",
    inner: "Hast du genug getrunken oder atmest du häufig durch den Mund?",
    action: "Trinke bei Bedarf Wasser; anhaltende Mundtrockenheit ärztlich besprechen.",
    reset: "Verändert sich die Trockenheit über den Tag?"
  },
  {
    category: "Hals",
    title: "Kloßgefühl im Hals",
    body: "Wann tritt das Gefühl auf und kannst du normal schlucken?",
    inner: "Gibt es Situationen, in denen du es stärker bemerkst?",
    action: "Atme ruhig und beobachte; Schluck- oder Atemprobleme ärztlich abklären.",
    reset: "Wann lässt das Gefühl nach?"
  },
  {
    category: "Hals",
    title: "Heisere Stimme",
    body: "Seit wann ist die Stimme heiser?",
    inner: "Wie viel hast du gesprochen und gab es einen Infekt?",
    action: "Schone deine Stimme und trinke ausreichend; anhaltende Heiserkeit abklären.",
    reset: "Wie klingt die Stimme nach einer Sprechpause?"
  },
  {
    category: "Nacken & Schulter",
    title: "Einseitige Nackensteife",
    body: "Auf welcher Seite und bei welcher Bewegung spürst du die Steife?",
    inner: "Gab es eine ungewohnte Haltung oder Belastung?",
    action: "Wechsle vorsichtig die Haltung, ohne in den Schmerz zu dehnen.",
    reset: "Welche Bewegung ist angenehm möglich?"
  },
  {
    category: "Nacken & Schulter",
    title: "Schultern hochgezogen",
    body: "Wann bemerkst du, dass die Schultern hochstehen?",
    inner: "Welche Tätigkeit verlangt gerade viel Konzentration?",
    action: "Lass beide Schultern beim Ausatmen bewusst sinken.",
    reset: "Wie fühlt sich der Schultergürtel danach an?"
  },
  {
    category: "Brustkorb",
    title: "Steifer Brustkorb",
    body: "Bei welchen Bewegungen fühlt sich der Brustkorb unbeweglich an?",
    inner: "Gab es langes Sitzen oder eine ungewohnte Belastung?",
    action: "Richte dich sanft auf und atme ohne Druck; neue Brustschmerzen sofort medizinisch abklären.",
    reset: "Wird die Bewegung leichter?"
  },
  {
    category: "Atmung",
    title: "Häufiges Seufzen",
    body: "In welchen Situationen seufzt du häufiger?",
    inner: "Wie fühlt sich deine Atmung zwischen den Seufzern an?",
    action: "Beobachte drei natürliche Atemzüge, ohne sie zu erzwingen.",
    reset: "Was fällt dir am Atemrhythmus auf?"
  },
  {
    category: "Atmung",
    title: "Atem anhalten",
    body: "Bei welchen Tätigkeiten hältst du unbewusst die Luft an?",
    inner: "Passiert es besonders bei Konzentration oder Anstrengung?",
    action: "Unterbrich kurz die Tätigkeit und lasse den Atem natürlich fließen.",
    reset: "Kannst du die nächste Aufgabe mit ruhigerem Atem beginnen?"
  },
  {
    category: "Herz & Kreislauf",
    title: "Kalte Hände",
    body: "Sind beide Hände kalt oder nur eine?",
    inner: "Gab es Kälte, langes Sitzen oder andere Veränderungen?",
    action: "Wärme die Hände sanft; plötzlich einseitige Veränderungen abklären.",
    reset: "Wie schnell kehrt angenehme Wärme zurück?"
  },
  {
    category: "Herz & Kreislauf",
    title: "Kalte Füße",
    body: "Wann fühlen sich die Füße besonders kalt an?",
    inner: "Wie lange warst du unbewegt und wie warm ist die Umgebung?",
    action: "Bewege die Zehen und ziehe bei Bedarf warme Socken an.",
    reset: "Ändert sich das Wärmegefühl?"
  },
  {
    category: "Herz & Kreislauf",
    title: "Kreislaufgefühl beim Aufstehen",
    body: "Wird dir beim Aufstehen kurz schwarz vor Augen?",
    inner: "Wie schnell stehst du auf und wie geht es dir insgesamt?",
    action: "Setze dich bei Schwindel hin und stehe langsam auf; wiederkehrende Beschwerden abklären.",
    reset: "Hilft ein langsamer Positionswechsel?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Völlegefühl nach dem Essen",
    body: "Wann und nach welchen Mahlzeiten entsteht das Völlegefühl?",
    inner: "Wie schnell isst du und wie groß sind die Portionen?",
    action: "Mache nach dem Essen einen ruhigen kurzen Spaziergang, sofern angenehm.",
    reset: "Wie verändert sich das Gefühl im Verlauf?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Wechselnder Appetit",
    body: "Wann ist dein Appetit stärker oder schwächer?",
    inner: "Wie regelmäßig isst du und wie ist dein Tagesrhythmus?",
    action: "Beobachte Hunger und Sättigung ohne Bewertung; anhaltende Veränderungen abklären.",
    reset: "Erkennst du wiederkehrende Zeiten?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Bauchgrummeln",
    body: "Wann treten die Geräusche auf?",
    inner: "Gibt es einen Zusammenhang mit Mahlzeiten oder bestimmten Lebensmitteln?",
    action: "Beobachte den Verlauf ohne sofortige Deutung.",
    reset: "Was fällt dir beim nächsten Essen auf?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Unregelmäßiger Stuhlgang",
    body: "Wie hat sich dein gewohnter Rhythmus verändert?",
    inner: "Wie sehen Bewegung, Trinken und Ernährung derzeit aus?",
    action: "Notiere Veränderungen; Blut im Stuhl oder anhaltende Beschwerden ärztlich abklären.",
    reset: "Erkennst du einen zeitlichen Zusammenhang?"
  },
  {
    category: "Rücken",
    title: "Steifheit am Morgen",
    body: "Welche Rückenregion fühlt sich nach dem Aufstehen steif an?",
    inner: "Wie lange dauert es, bis Bewegung leichter wird?",
    action: "Beginne mit sanfter Bewegung im schmerzfreien Bereich.",
    reset: "Wie verändert sich die Steifheit nach einigen Minuten?"
  },
  {
    category: "Rücken",
    title: "Verspannung zwischen Schulterblättern",
    body: "Wann spürst du die Spannung besonders?",
    inner: "Wie lange sitzt du ohne Haltungswechsel?",
    action: "Stehe auf und bewege die Schultern langsam.",
    reset: "Welche Haltung fühlt sich freier an?"
  },
  {
    category: "Rücken",
    title: "Müdigkeit im unteren Rücken",
    body: "Bei welcher Tätigkeit ermüdet der Rücken?",
    inner: "Wie lange hältst du dieselbe Position?",
    action: "Wechsle zwischen Sitzen, Stehen und Gehen.",
    reset: "Welche Position entlastet dich?"
  },
  {
    category: "Hüfte & Becken",
    title: "Steife Hüften nach Sitzen",
    body: "Wann bemerkst du die Steifheit beim Aufstehen?",
    inner: "Wie lange saßt du zuvor?",
    action: "Gehe einige Schritte in angenehmem Tempo.",
    reset: "Wie frei fühlt sich die Bewegung danach an?"
  },
  {
    category: "Hüfte & Becken",
    title: "Gesäßverspannung",
    body: "Ist die Spannung einseitig oder beidseitig?",
    inner: "Gab es langes Sitzen oder ungewohnte Belastung?",
    action: "Wechsle die Sitzposition und gehe kurz umher.",
    reset: "Was verändert sich beim Gehen?"
  },
  {
    category: "Hüfte & Becken",
    title: "Beckenspannung",
    body: "Wo genau nimmst du Spannung wahr?",
    inner: "Tritt sie bei Ruhe, Bewegung oder bestimmten Positionen auf?",
    action: "Suche eine bequeme Haltung und entspanne bewusst den Bauch.",
    reset: "Kannst du den Bereich ohne Anstrengung wahrnehmen?"
  },
  {
    category: "Arme & Hände",
    title: "Schwere Arme",
    body: "Wann fühlen sich die Arme schwer an?",
    inner: "Gab es körperliche Anstrengung oder monotone Arbeit?",
    action: "Lege eine kurze Pause ein; plötzlich einseitige Schwäche ist ein Notfall.",
    reset: "Lässt die Schwere nach der Pause nach?"
  },
  {
    category: "Arme & Hände",
    title: "Steife Finger am Morgen",
    body: "Welche Finger sind betroffen und wie lange hält die Steife an?",
    inner: "Ist die Steifheit neu oder wiederkehrend?",
    action: "Bewege die Finger sanft; anhaltende Schwellung oder Schmerzen abklären.",
    reset: "Wann werden die Finger beweglicher?"
  },
  {
    category: "Arme & Hände",
    title: "Daumenbelastung",
    body: "Bei welchen Griffen spürst du den Daumen?",
    inner: "Wie viel nutzt du Handy, Maus oder wiederholte Greifbewegungen?",
    action: "Entlaste die Hand und wechsle die Tätigkeit.",
    reset: "Welche Bewegung bleibt angenehm?"
  },
  {
    category: "Arme & Hände",
    title: "Ellenbogenspannung",
    body: "Bei welchen Bewegungen tritt die Spannung auf?",
    inner: "Gab es wiederholtes Greifen, Heben oder Tippen?",
    action: "Unterbrich die belastende Bewegung und lockere den Arm.",
    reset: "Wie reagiert der Ellenbogen auf die Pause?"
  },
  {
    category: "Beine & Füße",
    title: "Wadenanspannung",
    body: "Wann und wo spürst du Spannung in der Wade?",
    inner: "Gab es ungewohnte Bewegung oder langes Stehen?",
    action: "Bewege den Fuß sanft; plötzlich einseitige Schwellung oder Schmerzen dringend abklären.",
    reset: "Wird die Spannung bei leichter Bewegung anders?"
  },
  {
    category: "Beine & Füße",
    title: "Steife Sprunggelenke",
    body: "Wann fühlt sich das Gelenk steif an?",
    inner: "Gab es langes Sitzen oder eine Verletzung?",
    action: "Kreise den Fuß langsam im angenehmen Bewegungsbereich.",
    reset: "Welche Richtung fühlt sich leichter an?"
  },
  {
    category: "Beine & Füße",
    title: "Müde Fußsohlen",
    body: "Wann werden die Fußsohlen müde?",
    inner: "Wie lange standest oder gingst du heute?",
    action: "Entlaste die Füße und wechsle bei Bedarf die Schuhe.",
    reset: "Was verändert sich nach der Entlastung?"
  },
  {
    category: "Beine & Füße",
    title: "Druck an den Zehen",
    body: "Welche Zehen sind betroffen?",
    inner: "Drücken Schuhe oder gab es viel Gehbelastung?",
    action: "Prüfe den Sitz der Schuhe und bewege die Zehen vorsichtig.",
    reset: "Lässt der Druck ohne Schuhe nach?"
  },
  {
    category: "Beine & Füße",
    title: "Schwere Oberschenkel",
    body: "Wann tritt das Schweregefühl auf?",
    inner: "Gab es Training, Treppensteigen oder langes Sitzen?",
    action: "Mache eine kurze Erholungspause; neue deutliche Schwäche abklären.",
    reset: "Wie fühlen sich die Beine nach Ruhe an?"
  },
  {
    category: "Haut",
    title: "Trockene Haut",
    body: "Wo ist die Haut besonders trocken?",
    inner: "Gibt es Kälte, häufiges Waschen oder neue Pflegeprodukte?",
    action: "Nutze eine verträgliche Pflege und beobachte die Haut.",
    reset: "Wie reagiert die Haut in den nächsten Tagen?"
  },
  {
    category: "Haut",
    title: "Juckreiz ohne sichtbare Ursache",
    body: "Wann und wo tritt der Juckreiz auf?",
    inner: "Gab es neue Produkte, Kleidung oder Umgebungsreize?",
    action: "Vermeide Kratzen und beobachte mögliche Auslöser; anhaltenden Juckreiz abklären.",
    reset: "Tritt der Juckreiz in bestimmten Situationen häufiger auf?"
  },
  {
    category: "Haut",
    title: "Gänsehaut ohne Kälte",
    body: "Wann bemerkst du Gänsehaut?",
    inner: "Begleiten Musik, Gefühle oder Temperaturwechsel das Empfinden?",
    action: "Nimm den Moment wahr, ohne eine feste Bedeutung zuzuschreiben.",
    reset: "Was war unmittelbar davor?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Unruhiger Schlaf",
    body: "Woran merkst du, dass dein Schlaf unruhig ist?",
    inner: "Wie sehen Licht, Geräusche und Abendroutine aus?",
    action: "Gestalte die letzte halbe Stunde vor dem Schlafen möglichst reizarm.",
    reset: "Was hilft dir beim Zur-Ruhe-Kommen?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Müdigkeit trotz Schlaf",
    body: "Wie erholt fühlst du dich morgens?",
    inner: "Wie regelmäßig schläfst du und gibt es nächtliche Unterbrechungen?",
    action: "Notiere Schlafdauer und Tagesmüdigkeit; anhaltende starke Müdigkeit abklären.",
    reset: "Welche Muster zeigen sich über mehrere Tage?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Schwierigkeiten beim Abschalten",
    body: "Was beschäftigt dich kurz vor dem Schlafen?",
    inner: "Welche Gedanken oder Aufgaben möchtest du noch festhalten?",
    action: "Schreibe drei offene Punkte für morgen auf.",
    reset: "Ist der Kopf danach etwas ruhiger?"
  },
  {
    category: "Energie & Alltag",
    title: "Energieloch am Nachmittag",
    body: "Zu welcher Uhrzeit fällt deine Energie ab?",
    inner: "Wie waren Schlaf, Mahlzeiten, Bewegung und Pausen?",
    action: "Mache fünf Minuten Pause mit Tageslicht und sanfter Bewegung.",
    reset: "Was gibt dir spürbar neue Energie?"
  },
  {
    category: "Energie & Alltag",
    title: "Überforderung durch Geräusche",
    body: "Welche Geräusche empfindest du als besonders belastend?",
    inner: "Wie viele Reize wirken gerade gleichzeitig auf dich ein?",
    action: "Suche für zwei Minuten eine ruhigere Umgebung.",
    reset: "Wie verändert sich deine Anspannung?"
  },
  {
    category: "Energie & Alltag",
    title: "Unruhe bei Pausen",
    body: "Was bemerkst du, wenn du kurz nichts tust?",
    inner: "Fühlt sich Ruhe ungewohnt oder unangenehm an?",
    action: "Bleibe für drei natürliche Atemzüge sitzen, ohne etwas leisten zu müssen.",
    reset: "Was wird in der Pause sichtbar?"
  },
  {
    category: "Energie & Alltag",
    title: "Anspannung vor Terminen",
    body: "Wo im Körper bemerkst du die Anspannung?",
    inner: "Was erwartest du von dem bevorstehenden Termin?",
    action: "Plane einen kurzen Übergang und atme ruhig aus.",
    reset: "Was brauchst du, um vorbereitet und präsent zu sein?"
  },
  {
    category: "Wahrnehmung",
    title: "Unruhe im Bauch bei Entscheidungen",
    body: "Wann bemerkst du das Gefühl?",
    inner: "Welche Informationen fehlen dir noch für die Entscheidung?",
    action: "Schreibe die nächste kleine, reversible Handlung auf.",
    reset: "Wird die Entscheidung dadurch überschaubarer?"
  },
  {
    category: "Wahrnehmung",
    title: "Gefühl innerer Getriebenheit",
    body: "Wie zeigt sich das Getriebensein körperlich?",
    inner: "Wie viele Aufgaben versuchst du gleichzeitig zu erledigen?",
    action: "Wähle bewusst nur die nächste Aufgabe.",
    reset: "Was verändert sich, wenn du das Tempo reduzierst?"
  },
  {
    category: "Wahrnehmung",
    title: "Schwierigkeit, Hunger zu spüren",
    body: "Wann fällt es dir schwer, Hunger wahrzunehmen?",
    inner: "Wie regelmäßig unterbrichst du deinen Tag für Mahlzeiten?",
    action: "Halte kurz inne und achte auf körperliche Signale, ohne sie zu erzwingen.",
    reset: "Welche Signale kannst du heute erkennen?"
  },
  {
    category: "Wahrnehmung",
    title: "Schwierigkeit, Müdigkeit zu bemerken",
    body: "Woran erkennst du rückblickend Erschöpfung?",
    inner: "Welche frühen Zeichen übergehst du im Alltag?",
    action: "Plane eine kurze Pause vor dem nächsten Leistungstief.",
    reset: "Welches Warnsignal möchtest du künftig früher beachten?"
  },
  {
    category: "Wahrnehmung",
    title: "Anspannung beim Multitasking",
    body: "Wo spürst du die Anspannung während mehrerer Aufgaben?",
    inner: "Welche Aufgabe ist gerade wirklich wichtig?",
    action: "Schließe eine Tätigkeit ab, bevor du die nächste beginnst.",
    reset: "Wie fühlt sich konzentriertes Arbeiten an?"
  }
,
  {
    category: "Kopf",
    title: "Hinterkopfdruck",
    body: "Wann spürst du den Druck am Hinterkopf?",
    inner: "Beobachte Sitzhaltung, Nackenbewegung und Pausen.",
    action: "Wechsle behutsam die Haltung und ruhe dich kurz aus.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Kopf",
    title: "Pochender Kopfschmerz",
    body: "Wie beginnt das Pochen und wie stark ist es?",
    inner: "Achte auf Begleitsymptome und wiederkehrende Auslöser.",
    action: "Suche Ruhe; plötzlich stärkster Kopfschmerz ist ein Notfall.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Kopf",
    title: "Schweregefühl im Kopf",
    body: "Zu welcher Tageszeit fühlt sich der Kopf schwer an?",
    inner: "Prüfe Schlaf, Belastung und ausreichendes Trinken.",
    action: "Gönne dir eine kurze reizfreie Pause.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Augen",
    title: "Verschwommenes Sehen nach Bildschirmzeit",
    body: "Wann wird das Sehen unscharf und wie lange dauert es?",
    inner: "Beobachte Bildschirmdauer und ob die Unschärfe nach Ruhe verschwindet.",
    action: "Unterbrich die Bildschirmarbeit; neue oder anhaltende Sehstörungen zeitnah abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Augen",
    title: "Zuckendes Augenlid",
    body: "Wie häufig zuckt das Lid?",
    inner: "Beobachte Schlaf, Koffein und Augenbelastung.",
    action: "Mache eine kurze Pause und reduziere Bildschirmreize.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Ohren",
    title: "Druckgefühl im Ohr",
    body: "Ist ein Ohr oder sind beide betroffen?",
    inner: "Beobachte Zusammenhang mit Erkältung oder Druckwechsel.",
    action: "Vermeide Manipulation am Ohr; anhaltende Beschwerden abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Ohren",
    title: "Geräuschempfindlichkeit",
    body: "Welche Geräusche empfindest du als unangenehm?",
    inner: "Prüfe Lautstärke und Reizdichte deiner Umgebung.",
    action: "Suche eine ruhigere Umgebung; plötzliche Hörveränderung ärztlich abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Nase & Atemwege",
    title: "Verstopfte Nase",
    body: "Wann ist die Nasenatmung eingeschränkt?",
    inner: "Beobachte Umgebung, Jahreszeit und mögliche Reizstoffe.",
    action: "Sorge für angenehme Raumluft und trinke ausreichend.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Nase & Atemwege",
    title: "Trockene Nase",
    body: "Wann bemerkst du Trockenheit?",
    inner: "Prüfe trockene Heizungsluft oder häufige Reizung.",
    action: "Vermeide Reizstoffe und achte auf angenehme Luftfeuchtigkeit.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Mund & Kiefer",
    title: "Empfindliches Zahnfleisch",
    body: "Wann tritt die Empfindlichkeit auf?",
    inner: "Beobachte Veränderungen beim Putzen oder Essen.",
    action: "Reinige sanft; Blutungen oder anhaltende Beschwerden zahnärztlich abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Mund & Kiefer",
    title: "Nächtliches Zähnepressen",
    body: "Bemerkst du morgens Kiefermüdigkeit?",
    inner: "Achte auf Kieferanspannung tagsüber.",
    action: "Löse tagsüber bewusst den Zahnkontakt; bei Beschwerden zahnärztlich beraten lassen.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Hals",
    title: "Verspannte Halsvorderseite",
    body: "Wann spürst du die Spannung vorne am Hals?",
    inner: "Beobachte Kopfhaltung und begleitende Symptome.",
    action: "Richte den Kopf sanft auf; Schwellungen oder Schluckprobleme abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Nacken & Schulter",
    title: "Schmerz beim Schulterheben",
    body: "Bei welcher Bewegung tritt Schmerz auf?",
    inner: "Gab es ungewohnte Belastung oder eine Verletzung?",
    action: "Bewege die Schulter nur im angenehmen Bereich; anhaltende Schmerzen abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Nacken & Schulter",
    title: "Knacken der Schulter",
    body: "Ist das Knacken schmerzhaft oder schmerzfrei?",
    inner: "Beobachte, bei welchen Bewegungen es auftritt.",
    action: "Vermeide erzwungenes Knacken; schmerzhaftes Knacken abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Brustkorb",
    title: "Verspannte Zwischenrippenmuskeln",
    body: "Bei welcher Bewegung fällt die Spannung auf?",
    inner: "Gab es Husten oder ungewohnte körperliche Aktivität?",
    action: "Bewege dich sanft; neue Brustschmerzen oder Atemnot sofort abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Atmung",
    title: "Schnelle Atmung in Ruhe",
    body: "Wann atmest du schneller als gewöhnlich?",
    inner: "Beobachte, ob Fieber, Belastung oder andere Symptome vorliegen.",
    action: "Setze dich ruhig hin; neue deutliche Atemnot erfordert sofortige medizinische Hilfe.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Atmung",
    title: "Trockener Husten",
    body: "Seit wann besteht der Husten?",
    inner: "Beobachte Luftqualität, Infektzeichen und Dauer.",
    action: "Trinke nach Bedarf; anhaltenden Husten ärztlich abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Atmung",
    title: "Räusperzwang",
    body: "Wann musst du dich häufig räuspern?",
    inner: "Beobachte Sprechen, trockene Luft und Mahlzeiten.",
    action: "Trinke kleine Schlucke Wasser und schone die Stimme.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Herz & Kreislauf",
    title: "Wärmegefühl im Gesicht",
    body: "Wann wird dein Gesicht warm?",
    inner: "Achte auf Temperatur, Bewegung und Begleitzeichen.",
    action: "Suche bei Bedarf einen kühleren Raum und beobachte den Verlauf.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Herz & Kreislauf",
    title: "Schweißausbruch ohne Belastung",
    body: "Wann beginnt das Schwitzen?",
    inner: "Beobachte Temperatur, Mahlzeiten und weitere Symptome.",
    action: "Ruh dich aus; kalter Schweiß mit Brustschmerz oder Atemnot ist ein Notfall.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Druck im Oberbauch",
    body: "Wann und wo tritt der Druck auf?",
    inner: "Beobachte Mahlzeiten und mögliche Begleitbeschwerden.",
    action: "Iss bei Bedarf kleinere Portionen; starke oder anhaltende Schmerzen abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Druck im Unterbauch",
    body: "Wo sitzt der Druck und wie verändert er sich?",
    inner: "Beobachte Verdauung und weitere Beschwerden.",
    action: "Schone dich; zunehmende oder starke Schmerzen medizinisch abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Aufstoßen",
    body: "Wann musst du häufiger aufstoßen?",
    inner: "Beobachte Essgeschwindigkeit und kohlensäurehaltige Getränke.",
    action: "Iss langsamer und beobachte, ob das hilft.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Schnelles Sättigungsgefühl",
    body: "Nach welcher Essmenge fühlst du dich satt?",
    inner: "Beobachte, ob sich dein gewohntes Sättigungsgefühl verändert hat.",
    action: "Notiere Veränderungen; anhaltend frühe Sättigung ärztlich abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Bauch & Verdauung",
    title: "Bauchkrämpfe",
    body: "Wo treten Krämpfe auf und wie stark sind sie?",
    inner: "Beobachte zeitliche Zusammenhänge und Warnzeichen.",
    action: "Suche eine bequeme Position; starke oder anhaltende Krämpfe abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Rücken",
    title: "Schmerz beim langen Stehen",
    body: "Wann beginnt der Schmerz?",
    inner: "Beobachte Standdauer, Schuhe und Positionswechsel.",
    action: "Wechsle die Position und gehe kurz umher, soweit angenehm.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Rücken",
    title: "Schmerz beim Vorbeugen",
    body: "Wie weit kannst du dich angenehm vorbeugen?",
    inner: "Beobachte, ob der Schmerz neu ist oder ausstrahlt.",
    action: "Vermeide schmerzhafte Bewegungen; neue neurologische Ausfälle dringend abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Hüfte & Becken",
    title: "Seitlicher Hüftschmerz",
    body: "Bei welcher Bewegung oder Lage tritt Schmerz auf?",
    inner: "Beobachte Gehbelastung und Schlafposition.",
    action: "Entlaste die schmerzhafte Seite; anhaltende Beschwerden abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Hüfte & Becken",
    title: "Leistenziehen",
    body: "Wann spürst du ein Ziehen in der Leiste?",
    inner: "Gab es Sport, Heben oder ungewohnte Bewegung?",
    action: "Reduziere belastende Bewegungen; starke oder anhaltende Schmerzen abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Hüfte & Becken",
    title: "Steißbeindruck beim Sitzen",
    body: "Wie lange kannst du angenehm sitzen?",
    inner: "Beobachte Sitzfläche und Dauer.",
    action: "Verändere die Sitzposition und stehe regelmäßig auf.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Arme & Hände",
    title: "Kribbeln im Unterarm",
    body: "Wo beginnt das Kribbeln?",
    inner: "Beobachte Armhaltung und ob Taubheit hinzukommt.",
    action: "Wechsle die Position; anhaltende Gefühlsstörungen abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Arme & Hände",
    title: "Schwacher Griff",
    body: "Wann fällt dir das Greifen schwer?",
    inner: "Ist die Schwäche neu, plötzlich oder einseitig?",
    action: "Plötzliche Schwäche ist ein Notfall; sonst Belastung reduzieren und abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Arme & Hände",
    title: "Handschmerz beim Tippen",
    body: "Nach welcher Tätigkeit beginnt der Schmerz?",
    inner: "Beobachte Tastaturposition und Pausen.",
    action: "Unterbrich das Tippen und lockere die Hände sanft.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Fersenschmerz morgens",
    body: "Wann schmerzt die Ferse beim Auftreten?",
    inner: "Beobachte Schuhe und Belastung am Vortag.",
    action: "Beginne mit wenigen vorsichtigen Schritten; anhaltende Schmerzen abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Schmerz an der Fußaußenseite",
    body: "Bei welcher Belastung tritt der Schmerz auf?",
    inner: "Gab es Umknicken oder neue Schuhe?",
    action: "Entlaste den Fuß; nach Verletzung oder bei starker Schwellung abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Knieknacken",
    body: "Ist das Knacken mit Schmerzen verbunden?",
    inner: "Beobachte Bewegung und Schwellung.",
    action: "Bewege das Knie sanft; schmerzhaftes Knacken oder Blockieren abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Knieschmerz beim Treppensteigen",
    body: "Beim Hoch- oder Runtergehen stärker?",
    inner: "Beobachte Belastung und Schwellung.",
    action: "Nutze bei Bedarf das Geländer und reduziere schmerzhafte Belastung.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Schienbeinschmerz nach Bewegung",
    body: "Wann beginnt der Schmerz am Schienbein?",
    inner: "Gab es mehr Lauf- oder Gehbelastung als üblich?",
    action: "Reduziere die Belastung; punktuellen oder anhaltenden Schmerz abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Beine & Füße",
    title: "Wadenkrampf nachts",
    body: "Wie häufig tritt der Krampf auf?",
    inner: "Beobachte Bewegung, Medikamente und Flüssigkeitszufuhr.",
    action: "Bewege den Fuß vorsichtig; wiederkehrende Krämpfe abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Haut",
    title: "Gerötete Haut nach Reibung",
    body: "Wo tritt die Rötung auf?",
    inner: "Beobachte Kleidung und mechanische Reizung.",
    action: "Verringere Reibung und beobachte, ob die Haut sich beruhigt.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Haut",
    title: "Spannungsgefühl der Kopfhaut",
    body: "Wann fühlt sich die Kopfhaut gespannt an?",
    inner: "Beobachte Frisur, Pflegeprodukte und Hautveränderungen.",
    action: "Löse straffe Frisuren und vermeide reizende Produkte.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Morgendliches Zerschlagenheitsgefühl",
    body: "Wie lange hält das Gefühl nach dem Aufstehen an?",
    inner: "Beobachte Schlafqualität und Regelmäßigkeit.",
    action: "Beginne den Morgen ruhig; anhaltende Erschöpfung medizinisch abklären.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Unruhige Träume",
    body: "Wie fühlst du dich nach dem Aufwachen?",
    inner: "Beobachte Abendroutine und Schlafunterbrechungen.",
    action: "Notiere belastende Träume kurz und gestalte einen ruhigen Tagesbeginn.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Schlaf & Erholung",
    title: "Abendliche Wachheit",
    body: "Wann wirst du abends besonders wach?",
    inner: "Beobachte Licht, Koffein und Aktivität.",
    action: "Reduziere helles Licht und anregende Tätigkeiten vor dem Schlafen.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Energie & Alltag",
    title: "Müdigkeit nach Besprechungen",
    body: "Wie fühlst du dich direkt nach längeren Gesprächen?",
    inner: "Beobachte Dauer, Pausen und Reizbelastung.",
    action: "Plane zwischen Terminen eine kurze Erholungspause.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Energie & Alltag",
    title: "Körperliche Unruhe beim Warten",
    body: "Wo spürst du die Unruhe?",
    inner: "Beobachte Erwartungen und äußere Reize.",
    action: "Stelle beide Füße auf den Boden und nimm drei natürliche Atemzüge.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Energie & Alltag",
    title: "Erschöpfung nach sozialen Kontakten",
    body: "Wann bemerkst du den Energieabfall?",
    inner: "Beobachte Dauer und Intensität sozialer Situationen.",
    action: "Plane eine kurze stille Phase zum Auftanken.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Wahrnehmung",
    title: "Anspannung bei Zeitdruck",
    body: "Wo zeigt sich Zeitdruck in deinem Körper?",
    inner: "Beobachte, welche Aufgaben wirklich dringend sind.",
    action: "Priorisiere den nächsten kleinen Schritt und lockere die Schultern.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Wahrnehmung",
    title: "Körpergefühl nach langem Autofahren",
    body: "Welche Bereiche fühlen sich steif an?",
    inner: "Beobachte Fahrdauer und Sitzhaltung.",
    action: "Mache bei sicherem Halt eine kurze Geh- und Bewegungspause.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  },
  {
    category: "Wahrnehmung",
    title: "Schwierigkeit, Durst zu bemerken",
    body: "Wann fällt dir auf, dass du wenig getrunken hast?",
    inner: "Beobachte Trinkgewohnheiten über den Tag.",
    action: "Stelle Wasser sichtbar bereit und trinke nach deinem Bedarf.",
    reset: "Was hat sich nach dem bewussten Beobachten oder der kleinen Pause verändert?"
  }
,
  {category:"Kopf",title:"Kopfdruck nach Konzentration",body:"Wann beginnt der Druck?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Kopf",title:"Kopfschmerz nach wenig Schlaf",body:"Wie stark ist der Schmerz?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Augen",title:"Tränende Augen",body:"Wann tränen die Augen?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Augen",title:"Augenreizung durch Wind",body:"Welche Umstände reizen die Augen?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Ohren",title:"Gefühl eines verstopften Ohrs",body:"Seit wann besteht das Gefühl?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Gesicht",title:"Wangenspannung",body:"Wann bemerkst du die Spannung?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Mund & Kiefer",title:"Morgendlicher Kieferschmerz",body:"Wie lange hält der Schmerz an?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Hals",title:"Kratzen im Hals",body:"Wann tritt das Kratzen auf?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Hals",title:"Müde Stimme nach Gesprächen",body:"Wann ermüdet deine Stimme?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Nacken & Schulter",title:"Nackenschmerz nach Handy-Nutzung",body:"Nach welcher Nutzungsdauer beginnt der Schmerz?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Nacken & Schulter",title:"Schulterspannung beim Arbeiten",body:"Wann ziehst du die Schultern hoch?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Nacken & Schulter",title:"Eingeschränkte Kopfdrehung",body:"Welche Bewegung fällt schwer?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Brustkorb",title:"Ziehen seitlich am Brustkorb",body:"Wann tritt das Ziehen auf?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Atmung",title:"Kurzer Atem bei Treppen",body:"Bei welcher Belastung tritt Atemnot auf?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Atmung",title:"Atemunruhe vor Gesprächen",body:"Wie verändert sich der Atem?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Herz & Kreislauf",title:"Rote Ohren bei Wärme",body:"Wann werden die Ohren warm?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Bauch & Verdauung",title:"Bauchdruck bei engem Hosenbund",body:"Wann entsteht das Druckgefühl?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Bauch & Verdauung",title:"Unwohlsein nach hastigem Essen",body:"Wann beginnt das Unwohlsein?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Bauch & Verdauung",title:"Morgendliches Bauchgrummeln",body:"Wann beginnt das Grummeln?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Bauch & Verdauung",title:"Druck nach großen Mahlzeiten",body:"Wann tritt der Druck auf?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Rücken",title:"Steifer oberer Rücken nach Autofahrt",body:"Welche Bewegung fällt schwer?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Rücken",title:"Rückenmüdigkeit beim Kochen",body:"Wann ermüdet dein Rücken?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Rücken",title:"Ziehen nach Gartenarbeit",body:"Bei welcher Tätigkeit begann das Ziehen?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Hüfte & Becken",title:"Hüftsteife beim Aufstehen",body:"Wie lange dauert die Steifheit?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"},
  {category:"Hüfte & Becken",title:"Gesäßdruck beim langen Sitzen",body:"Wo bemerkst du den Druck?",inner:"Welche Situationen, Gewohnheiten oder Belastungen gehen dem Signal voraus?",action:"Beobachte das Signal und lege eine kurze Pause ein. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Was verändert sich nach einer bewussten Pause?"}
,
  {category:"Arme & Hände",title:"Schwere Hand nach Computerarbeit",body:"Wann fühlt sich die Hand schwer an?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Arme & Hände",title:"Verspannter Daumen beim Scrollen",body:"Bei welcher Bewegung beginnt die Spannung?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Arme & Hände",title:"Müde Unterarme nach Tragen",body:"Wie lange hält die Müdigkeit an?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Arme & Hände",title:"Steife Hand nach dem Aufwachen",body:"Welche Gelenke sind betroffen?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Müde Beine nach Treppen",body:"Wann ermüden deine Beine?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Spannung an der Achillessehne",body:"Wann bemerkst du die Spannung?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Druck auf dem Fußrücken",body:"Wann tritt der Druck auf?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Ziehen an der Knieaußenseite",body:"Bei welcher Bewegung spürst du das Ziehen?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Schwere Füße am Abend",body:"Wann werden die Füße schwer?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Beine & Füße",title:"Steife Zehen nach Ruhe",body:"Welche Zehen sind betroffen?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Haut",title:"Trockene Hände nach Waschen",body:"Wann spannen deine Hände?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Haut",title:"Juckende Kopfhaut",body:"Wann tritt der Juckreiz auf?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Schlaf & Erholung",title:"Müdigkeit nach kurzer Nacht",body:"Wie erholt fühlst du dich morgens?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Schlaf & Erholung",title:"Unruhe vor dem Einschlafen",body:"Welche Gedanken begleiten dich?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Schlaf & Erholung",title:"Schwere Augen am Morgen",body:"Wie lange hält die Müdigkeit an?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Energie & Alltag",title:"Energieabfall nach Bildschirmarbeit",body:"Wann sinkt deine Energie?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Energie & Alltag",title:"Innere Unruhe nach Nachrichten",body:"Wie fühlst du dich nach dem Lesen?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Energie & Alltag",title:"Anspannung bei vielen Aufgaben",body:"Wo spürst du die Anspannung?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Wahrnehmung",title:"Schwierigkeit, eine Pause zu genießen",body:"Was geschieht, wenn du nichts erledigst?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Wahrnehmung",title:"Unruhe vor Entscheidungen",body:"Wie reagiert dein Körper?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Wahrnehmung",title:"Anspannung beim Zuhören",body:"Wo bemerkst du die Anspannung?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Wahrnehmung",title:"Müdigkeit nach Reizüberflutung",body:"Welche Reize waren besonders intensiv?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Bauch & Verdauung",title:"Unregelmäßiges Hungergefühl",body:"Wann fällt dir Hunger besonders auf?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Herz & Kreislauf",title:"Schweregefühl nach langem Stehen",body:"Wo bemerkst du die Schwere?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"},
  {category:"Kopf",title:"Empfindliche Schläfen",body:"Sind die Schläfen druckempfindlich?",inner:"Welche Alltagsumstände könnten mit dem Zeitpunkt zusammenhängen?",action:"Nimm eine kurze Pause und vermeide schmerzhafte Belastung. Neue, starke oder anhaltende Symptome ärztlich abklären.",reset:"Wie fühlt sich der Bereich nach der Pause an?"}
,
  {category:"Kopf",title:"Druck hinter den Augen",body:"Wann tritt das Druckgefühl auf?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Kopf",title:"Spannung nach langem Lesen",body:"Wie lange hast du ohne Pause gelesen?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Augen",title:"Augentrockenheit am Morgen",body:"Wie fühlen sich die Augen nach dem Aufwachen an?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Augen",title:"Empfindliche Augen bei Zugluft",body:"Wann reagieren deine Augen empfindlich?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Ohren",title:"Ohrendruck beim Fliegen",body:"Wann beginnt der Druckwechsel?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Mund & Kiefer",title:"Verspannte Kaumuskeln nach Essen",body:"Welche Speisen belasten deinen Kiefer?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Hals",title:"Trockenes Halsgefühl beim Sprechen",body:"Wann wird der Hals trocken?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Nacken & Schulter",title:"Schultersteife nach dem Schlafen",body:"Welche Seite fühlt sich steif an?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Nacken & Schulter",title:"Nackenspannung beim Lesen",body:"Wie hältst du deinen Kopf beim Lesen?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Brustkorb",title:"Engegefühl bei enger Kleidung",body:"Wann bemerkst du die Enge?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Atmung",title:"Häufiges tiefes Einatmen",body:"Wann verspürst du den Wunsch tief einzuatmen?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Atmung",title:"Unregelmäßiger Atemrhythmus bei Arbeit",body:"Bei welcher Tätigkeit verändert sich dein Atem?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Bauch & Verdauung",title:"Bauchspannung beim Sitzen",body:"Wann bemerkst du die Bauchspannung?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Bauch & Verdauung",title:"Blähgefühl am Abend",body:"Zu welcher Tageszeit nimmt das Gefühl zu?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Bauch & Verdauung",title:"Durst nach salzigem Essen",body:"Wann bemerkst du vermehrten Durst?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Rücken",title:"Schulterblattspannung nach Tragen",body:"Welche Belastung ging der Spannung voraus?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Rücken",title:"Rückensteife nach langem Liegen",body:"Wie lange dauert die Steifheit?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Hüfte & Becken",title:"Hüftziehen beim Gehen",body:"Nach welcher Strecke beginnt das Ziehen?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Arme & Hände",title:"Fingerermüdung nach Schreiben",body:"Wann ermüden deine Finger?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Arme & Hände",title:"Handflächenspannung beim Greifen",body:"Welche Griffe lösen die Spannung aus?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Beine & Füße",title:"Druckgefühl in den Schuhen",body:"Wann werden die Schuhe unangenehm?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Beine & Füße",title:"Müde Waden nach langem Gehen",body:"Wie fühlen sich die Waden nach Belastung an?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Haut",title:"Spannende Lippen bei trockener Luft",body:"Wann fühlen sich die Lippen trocken an?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Schlaf & Erholung",title:"Mittagsschläfrigkeit nach wenig Schlaf",body:"Wann beginnt die Müdigkeit?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"},
  {category:"Wahrnehmung",title:"Anspannung bei Unterbrechungen",body:"Wie reagiert dein Körper auf Unterbrechungen?",inner:"Was ist vor dem Signal passiert und wie lange hält es an?",action:"Gönne dir eine kurze Pause und beobachte ohne Bewertung. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie verändert sich deine Wahrnehmung nach der Pause?"}
,
  {category:"Kopf",title:"Schwere Stirn am Nachmittag",body:"Wann fühlt sich deine Stirn schwer an?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Augen",title:"Blendempfindlichkeit beim Wechsel ins Freie",body:"Wie reagieren deine Augen auf helles Licht?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Augen",title:"Müde Augen nach Videokonferenzen",body:"Wie lange hast du auf den Bildschirm geschaut?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Ohren",title:"Ohrmüdigkeit nach lauter Umgebung",body:"Wie fühlt sich dein Gehör nach Lärm an?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Mund & Kiefer",title:"Kiefersteife nach langem Sprechen",body:"Wann bemerkst du die Steife?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Hals",title:"Halsanspannung beim Telefonieren",body:"Wie hältst du Kopf und Telefon?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Nacken & Schulter",title:"Nackenmüdigkeit nach Autofahrten",body:"Wie lange saßt du ohne Pause?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Nacken & Schulter",title:"Schulterschmerz beim Jackeanziehen",body:"Welche Bewegung löst den Schmerz aus?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Atmung",title:"Atemveränderung bei Eile",body:"Wie verändert sich dein Atem unter Zeitdruck?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Herz & Kreislauf",title:"Wärmegefühl nach Bewegung",body:"Wie lange bleibt das Wärmegefühl bestehen?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Bauch & Verdauung",title:"Bauchgrummeln vor Mahlzeiten",body:"Wann hörst du die Geräusche?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Bauch & Verdauung",title:"Unwohlsein bei ungewohnten Speisen",body:"Nach welchen Speisen tritt es auf?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Rücken",title:"Müdigkeit zwischen den Schulterblättern",body:"Wann wird der Bereich müde?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Rücken",title:"Steifheit nach Schreibtischarbeit",body:"Wie lange sitzt du am Stück?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Hüfte & Becken",title:"Beckensteife nach langem Sitzen",body:"Wann fällt dir die Steifheit auf?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Arme & Hände",title:"Handgelenkmüdigkeit nach Mausarbeit",body:"Nach welcher Zeit beginnt sie?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Arme & Hände",title:"Fingeranspannung beim Handyhalten",body:"Wie hältst du das Gerät?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Beine & Füße",title:"Fußmüdigkeit nach Einkaufen",body:"Wie fühlen sich die Füße danach an?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Beine & Füße",title:"Zehenanspannung in engen Schuhen",body:"Welche Schuhe lösen das Gefühl aus?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Beine & Füße",title:"Knieermüdung nach langem Stehen",body:"Wann ermüdet dein Knie?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Haut",title:"Trockene Ellenbogenhaut",body:"Wann bemerkst du trockene Stellen?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Schlaf & Erholung",title:"Müdigkeit nach spätem Zubettgehen",body:"Wie fühlst du dich am nächsten Morgen?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Energie & Alltag",title:"Anspannung vor Videoterminen",body:"Wann beginnt die Anspannung?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Wahrnehmung",title:"Unruhe beim Wechsel zwischen Aufgaben",body:"Wie fühlt sich der Aufgabenwechsel an?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"},
  {category:"Wahrnehmung",title:"Erschöpfung nach langem Zuhören",body:"Wann brauchst du eine Pause?",inner:"Welche Gewohnheit oder Situation könnte zeitlich damit zusammenhängen?",action:"Wechsle die Haltung oder mache eine kurze Pause, soweit angenehm. Bei neuen, starken oder anhaltenden Beschwerden ärztlichen Rat einholen.",reset:"Was nimmst du nach der kleinen Veränderung wahr?"}
,
  {category:"Kopf",title:"Kopfspannung beim Arbeiten über Kopf",body:"Wann beginnt die Spannung?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Kopf",title:"Kopfschwere nach langem Aufenthalt drinnen",body:"Wann bemerkst du die Schwere?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Augen",title:"Augenbrennen nach Kontaktlinsen",body:"Wann beginnt das Brennen?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Augen",title:"Unscharfes Sehen bei Müdigkeit",body:"Wann fällt die Unschärfe auf?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Ohren",title:"Ohrgeräusche nach Konzertbesuch",body:"Seit wann hörst du Geräusche?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Ohren",title:"Druck beim Tragen von Kopfhörern",body:"Wo bemerkst du den Druck?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Gesicht",title:"Spannung um die Augenbrauen",body:"Wann ziehen sich die Augenbrauen zusammen?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Mund & Kiefer",title:"Müder Kiefer nach Kaugummikauen",body:"Wie lange hast du gekaut?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Hals",title:"Halskratzen nach trockener Raumluft",body:"Wann beginnt das Kratzen?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Nacken & Schulter",title:"Nackensteife nach Zugluft",body:"Wann hast du die Steifheit bemerkt?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Nacken & Schulter",title:"Schulterdruck durch schwere Tasche",body:"Welche Schulter trägt die Tasche?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Brustkorb",title:"Brustkorbspannung nach langem Sitzen",body:"Bei welcher Bewegung bemerkst du Spannung?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Atmung",title:"Ungewohnte Atemtiefe nach Sport",body:"Wie verändert sich deine Atmung nach Belastung?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Atmung",title:"Atembeschwerden bei kalter Luft",body:"Wann wird das Atmen unangenehm?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Bauch & Verdauung",title:"Bauchrumoren nach Kaffee",body:"Wann beginnt das Rumoren?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Bauch & Verdauung",title:"Völlegefühl bei spätem Abendessen",body:"Wann bemerkst du das Völlegefühl?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Bauch & Verdauung",title:"Verändertes Bauchgefühl auf Reisen",body:"Welche Veränderung fällt dir auf?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Bauch & Verdauung",title:"Bauchdruck nach langem Sitzen",body:"Wo sitzt der Druck?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Rücken",title:"Rückenverspannung nach Hausarbeit",body:"Welche Tätigkeit ging voraus?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Rücken",title:"Rückensteife beim ersten Aufstehen",body:"Wie lange hält die Steifheit an?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Rücken",title:"Müder Rücken nach langem Gehen",body:"Wann beginnt die Müdigkeit?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Hüfte & Becken",title:"Hüftmüdigkeit nach Treppen",body:"Welche Bewegung strengt dich an?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Hüfte & Becken",title:"Beckendruck auf hartem Stuhl",body:"Wie verändert sich das Gefühl beim Aufstehen?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Arme & Hände",title:"Fingersteife nach Gartenarbeit",body:"Welche Finger sind betroffen?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"},
  {category:"Arme & Hände",title:"Handspannung nach Werkzeuggebrauch",body:"Bei welcher Tätigkeit tritt Spannung auf?",inner:"Welche Belastung, Haltung oder Umgebung ging dem Signal voraus?",action:"Unterbrich die Belastung und beobachte den Verlauf. Neue, starke oder anhaltende Beschwerden medizinisch abklären.",reset:"Wie fühlt sich der Bereich nach einer kurzen Pause an?"}
];