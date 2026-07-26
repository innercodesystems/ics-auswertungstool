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
    return summe + (ICS.begriffGefunden(text,begriff) ? Math.max(1, ICS.normalisiere(begriff).split(" ").length) : 0);
  },0);
};

ICS.ergebnisse = function(text,daten){
  return Object.keys(daten)
    .map(function(id){
      const eintrag = daten[id];
      return Object.assign({id:id,punkte:ICS.trefferAnzahl(text,eintrag.begriffe)},eintrag);
    })
    .filter(function(eintrag){ return eintrag.punkte > 0; })
    .sort(function(a,b){ return b.punkte-a.punkte; });
};

ICS.bestesErgebnis = function(text,daten){
  return ICS.ergebnisse(text,daten)[0] || null;
};

ICS.escapen = function(text){
  const div = document.createElement("div");
  div.textContent = String(text || "");
  return div.innerHTML;
};

ICS.zufall = function(liste){
  if(!Array.isArray(liste) || !liste.length) return "";
  return liste[Math.floor(Math.random()*liste.length)];
};
