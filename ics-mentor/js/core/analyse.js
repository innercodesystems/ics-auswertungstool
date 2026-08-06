window.ICS = window.ICS || {};

ICS.Analysieren = function (text, gespraech) {

  const normalisiert =
    typeof ICS.normalisiere === "function"
      ? ICS.normalisiere(text)
      : String(text || "").toLowerCase().trim();

  const einstieg = einstiegErkennen(normalisiert);

  const muster =
    typeof ICS.musterErkennenAlle === "function"
      ? ICS.musterErkennenAlle(text)
      : [];

  const thema =
    typeof ICS.themaErkennen === "function"
      ? ICS.themaErkennen(text)
      : null;

  const emotion =
    typeof ICS.emotionErkennen === "function"
      ? ICS.emotionErkennen(text)
      : null;

  return {
    text: text,
    normalisiert: normalisiert,
    einstieg: einstieg,
    muster: muster,
    thema: thema,
    emotion: emotion,
    gespraech: gespraech || null
  };

};


function einstiegErkennen(text) {

  if (text === "situation") {
    return "situation";
  }

  if (
    text === "gefuehl" ||
    text === "gefühl"
  ) {
    return "gefuehl";
  }

  if (text === "beziehung") {
    return "beziehung";
  }

  if (text === "entscheidung") {
    return "entscheidung";
  }

  if (
    text === "wiederkehrendes verhalten" ||
    text === "verhalten"
  ) {
    return "verhalten";
  }

  return "";
}
