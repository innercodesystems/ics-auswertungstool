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
  }
];
