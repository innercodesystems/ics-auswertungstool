window.ICS = window.ICS || {};

ICS.erstelleAuswertung = function(gespraech){
  const thema=gespraech.thema?ICS.THEMEN[gespraech.thema]:null;
  const muster=gespraech.muster?ICS.MUSTER[gespraech.muster]:null;

  const hauptthema=thema?thema.name:"Persönliche Klarheit";
  const mustertitel=muster?muster.name:"Noch kein eindeutiges Muster";
  const inner=muster?.innerCode||thema?.innerCode||"Klarheit beginnt mit einem ehrlichen Blick auf das, was gerade wirklich da ist.";
  const body=muster?.bodyCode||thema?.bodyCode||"Atme ruhig und nimm wahr, wo dein Körper auf die Situation reagiert.";
  const action=muster?.actionCode||thema?.actionCode||"Wähle heute einen kleinen, realistischen nächsten Schritt.";
  const reset=thema?.reset||"Realisiere die Situation. Erkenne das Muster. Nimm dich selbst wahr. Entscheide bewusst. Transformiere durch eine neue Handlung.";

  return `
    <div class="ics-auswertung">
      <strong>ICS Spiegel</strong><br><br>
      <strong>Erkanntes Hauptthema</strong><br>${ICS.escapen(hauptthema)}<br><br>
      <strong>Erkanntes Muster</strong><br>${ICS.escapen(mustertitel)}<br><br>
      <strong>Inner Code</strong><br>${ICS.escapen(inner)}<br><br>
      <strong>Body Code</strong><br>${ICS.escapen(body)}<br><br>
      <strong>Action Code</strong><br>${ICS.escapen(action)}<br><br>
      <strong>RESET</strong><br>${ICS.escapen(reset)}
    </div>`;
};
