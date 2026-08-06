window.ICS = window.ICS || {};

ICS.Engine = {

    antwort(text, gespraech) {

        const analyse = ICS.Analysieren(text, gespraech);

        if (!analyse) {
            return "Erzähl mir etwas mehr darüber.";
        }

        if (analyse.einstieg) {
            return ICS.Einstieg.antwort(analyse.einstieg);
        }

        if (analyse.muster) {
            return ICS.MusterDialog.antwort(analyse, gespraech);
        }

        if (analyse.thema) {
            return ICS.ThemenDialog.antwort(analyse, gespraech);
        }

        return "Was ist daran im Moment für dich am wichtigsten?";

    }

};
