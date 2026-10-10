# ICS Partneranfragen – separater Cloudflare Worker

Diese Dateien sind eine **Vorbereitung**, kein aktiver Live-Endpunkt. Die aktuelle Partnerseite nutzt weiterhin den funktionierenden E-Mail-Entwurf.

## Bereitstellung
1. Separaten Cloudflare Worker anlegen, z. B. `ics-partner-anfragen`. Bestehenden PayPal-/Report-Worker nicht verändern.
2. Inhalt von `ics-partner-worker.js` als Worker-Code einsetzen.
3. Secret `RESEND_API_KEY` eintragen. Der Schlüssel darf niemals in HTML/JavaScript der Website landen.
4. Variable `FROM_EMAIL` setzen, z. B. `INNER CODE SYSTEMS <partner@innercodesystems.com>` – nur nachdem die Absenderdomain beim E-Mail-Dienst verifiziert ist.
5. Optional `TO_EMAIL=info@innercodesystems.com`.
6. Worker-URL und tatsächliche E-Mail-Zustellung mit einer Testanfrage prüfen.
7. **Erst danach** das Formular auf `partner.html` vom bisherigen `mailto:` auf den Worker umstellen. Bei Ausfall einen sichtbaren Mailto-Fallback anbieten.

## Wichtige Hinweise
- Browser-Origin ist keine vollständige Spamabwehr. Vor Live-Betrieb Rate-Limit, Turnstile und Monitoring ergänzen.
- Keine persönlichen Anfragedaten in öffentliche GitHub-Dateien schreiben.
- Datenschutztext für Serververarbeitung und E-Mail-Dienst ergänzen/prüfen.
- Die Bestätigungsmail ist optional: Der erfolgreiche Eingang bei ICS zählt als Versandbestätigung, auch wenn die automatische Rückmail scheitert.
