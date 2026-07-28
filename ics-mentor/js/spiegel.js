window.ICS = window.ICS || {};

ICS.Spiegel = {

  erstellen(analyse, gespraech) {

    const muster =
      analyse && Array.isArray(analyse.muster)
        ? analyse.muster
        : [];

    const hauptmuster =
      muster.length ? muster[0] : null;

    /*
     * Vorrang:
     * Das aktuell erkannte Hauptmuster.
     */
    if (
      hauptmuster &&
      hauptmuster.id &&
      ICS.MUSTER &&
      ICS.MUSTER[hauptmuster.id]
    ) {

      const daten =
        ICS.MUSTER[hauptmuster.id];

      if (daten.spiegel) {

        return {
          titel: "Spiegel",
          text: daten.spiegel,
          musterId: hauptmuster.id,
          musterName:
            daten.name ||
            hauptmuster.name ||
            ""
        };

      }

    }

    /*
     * Zweite Möglichkeit:
     * Eine erkannte Emotion.
     */
    if (
      analyse &&
      analyse.emotion &&
      analyse.emotion.antwort
    ) {

      return {
        titel: "Spiegel",
        text: analyse.emotion.antwort,
        musterId: "",
        musterName: ""
      };

    }

    /*
     * Rückgriff auf das bereits bekannte
     * Hauptmuster des Gesprächs.
     */
    if (
      gespraech &&
      gespraech.muster &&
      ICS.MUSTER &&
      ICS.MUSTER[gespraech.muster]
    ) {

      const daten =
        ICS.MUSTER[gespraech.muster];

      if (daten.spiegel) {

        return {
          titel: "Spiegel",
          text: daten.spiegel,
          musterId: gespraech.muster,
          musterName: daten.name || ""
        };

      }

    }

    return null;

  }

};
