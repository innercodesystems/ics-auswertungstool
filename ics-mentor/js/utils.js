window.ICS = window.ICS || {};

ICS.normalisiere = function(text){
  return String(text || "")
    .toLowerCase()
    .replace(/ä/g,"ae")
    .replace(/ö/g,"oe")
    .replace(/ü/g,"ue")
    .replace(/ß/g,"ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/[^\p{L}\p{N}\s]/gu," ")
    .replace(/\s+/g," ")
    .trim();
};

ICS.begriffGefunden = function(text,begriff){
  const quelle = " " + ICS.normalisiere(text) + " ";
  const suche = " " + ICS.normalisiere(begriff) + " ";
  return quelle.includes(suche);
};

ICS.trefferAnzahl = function(text,begriffe){
  return (begriffe || []).reduce(function(summe,begriff){
    return summe + (ICS.begriffGefunden(text,begriff) ? 1 : 0);
  },0);
};

ICS.bestesErgebnis = function(text,daten){
  let bestes = null;
  let bestePunktzahl = 0;

  Object.keys(daten).forEach(function(id){
    const eintrag = daten[id];
    const punkte = ICS.trefferAnzahl(text,eintrag.begriffe);

    if(punkte > bestePunktzahl){
      bestePunktzahl = punkte;
      bestes = Object.assign({
        id:id,
        punkte:punkte
      },eintrag);
    }
  });

  return bestes;
};

ICS.escapen = function(text){
  const div = document.createElement("div");
  div.textContent = String(text || "");
  return div.innerHTML;
};

ICS.zufall = function(liste){
  if(!Array.isArray(liste) || !liste.length) return "";
  return liste[Math.floor(Math.random() * liste.length)];
};
