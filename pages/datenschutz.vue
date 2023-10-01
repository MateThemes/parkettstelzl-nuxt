<script setup lang="ts">
const title = ref('Datenschutz')

useSeoMeta({
    title,
    description: 'This is the about page',
})
</script>

<template>
  <div class="uk-section uk-section-default uk-section-large">
    <div class="uk-container">
      <div class="uk-grid-margin" data-uk-grid>
        <div class="uk-flex-auto uk-width-1-1@m">
          <h1 class="uk-text-center">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-section uk-section-default uk-section-large">
    <div class="uk-container uk-container-small">
      <h2>NAME UND KONTAKT</h2>

      <p>Art Parkett Stelzl<br />
        Datenschutzbeauftragter: Robert Stelzl<br />
        Görzer Straße 144<br />
        81549 München, Deutschland<br />
        E-Mail: info[at]parkett-stelzl.de</p>

      <h3>EINLEITUNG</h3>

      <p class="uk-text-justify">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

      <p class="uk-text-justify">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>

      <p class="uk-text-justify">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

      <h3>ERKLÄRUNG ZUR INFORMATIONSPFLICHT (WEITERE INFORMATIONEN)</h3>

      <h4>KONTAKT MIT UNS</h4>

      <p class="uk-text-justify">Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

      <h4>COOKIES</h4>

      <p class="uk-text-justify">Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.</p>

      <p class="uk-text-justify">Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>

      <p class="uk-text-justify">Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.</p>

      <p>Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.</p>

      <h4>WEB-ANALYSE</h4>

      <p class="uk-text-justify">Unsere Website verwendet Funktionen des Webanalysedienstes Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA<i>.&nbsp;</i>Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website durch Ihre Benutzer ermöglicht. Die dadurch erzeugten Informationen werden auf den Server des Anbieters übertragen und dort gespeichert.</p>

      <p class="uk-text-justify">Sie können dies verhindern, indem Sie Ihren Browser so einrichten, dass keine Cookies gespeichert werden.</p>

      <p class="uk-text-justify">Wir haben mit dem Anbieter einen entsprechenden Vertrag zur Auftragsdatenverarbeitung abgeschlossen.</p>

      <p class="uk-text-justify">Ihre IP-Adresse wird erfasst, aber umgehend (z.B. durch Löschung der letzten 8 Bit) pseudonymisiert. Dadurch ist nur mehr eine grobe Lokalisierung möglich.</p>

      <p class="uk-text-justify">Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.</p>

      <p class="uk-text-justify">Unser Anliegen im Sinne der DSGVO (berechtigtes Interesse) ist die Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert.</p>

      <h4>IHRE RECHTE</h4>

      <p class="uk-text-justify">Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der uns&nbsp;<i>info[at]parkett-stelzl.de</i>&nbsp;oder der Datenschutzbehörde beschweren.</p>

      <h4>SIE ERREICHEN UNS UNTER FOLGENDEN KONTAKTDATEN:</h4>

      <p>Siehe oben.</p>
    </div>
  </div>
</template>
