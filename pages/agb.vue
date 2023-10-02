<script setup lang="ts">
const title = ref('AGB')

useSeoMeta({
    title,
    description: 'AGB page',
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
  <div class="uk-section uk-section-large uk-section-default">
    <div class="uk-container uk-container-small">
      <h3>1. GELTUNGSBEREICH</h3>

      <p class="uk-text-justify">Allen unseren Leistungen, einschließlich hierbei erbrachter Beratungsleistungen, die nicht Gegenstand eines selbständigen Beratungsvertrages sind, liegen unsere Allgemeinen Geschäftsbedingungen zu Grunde. Abweichende Vereinbarungen bedürfen unserer ausdrücklichen schriftlichen Bestätigung. Unsere Geschäftsbedingungen gelten für alle Rechtsgeschäfte mit Unternehmen im Sinne von § 24, Satz 1, Nr. 1 AGB-Gesetz. Einkaufsbedingungen unserer Vertragspartner und abweichende Vereinbarungen von unseren Bedingungen erkennen wir nur an, wenn ihre Geltung von uns ausdrücklich schriftlich bestätigt wird.</p>

      <ol>
        <li>Sofern Sie unseren Bedingungen nicht widersprechen, gelten die Gebräuche im holzwirtschaftlichen Verkehr, insbesondere die „Tegernseer Gebräuche“ in der jeweils gültigen Fassung mit ihren Anlagen und ihrem Anhang.</li>
        <li>Abweichende Vereinbarungen und Bedingungen, insbesondere Einkaufsbedingungen, sind nur verbindlich, wenn sie vom Verkäufer schriftlich bestätigt sind.</li>
        <li>Kreuzen sich zwei Bestätigungsschreiben, die abweichende Bestimmungen enthalten, gilt das des Verkäufers.</li>
      </ol>

      <h3>2. ANGEBOTE, LIEFERFRISTEN, PREISE</h3>

      <ol>
        <li>Angebote sind freibleibend, Zwischenverkauf bleibt vorbehalten. Vereinbarungen mit Beauftragten bedürfen zu ihrer Gültigkeit der schriftlichen Bestätigung.</li>
        <li>Lieferfristen gelten vorbehaltlich richtiger sowie rechtzeitiger Selbstbelieferung, es sei denn, daß der Verkäufer die unrichtige oder verspätete Selbstbelieferung zu vertreten hat oder verbindliche Lieferfristen schriftlich zusagt.</li>
        <li>Verkaufspreise gelten nur dann als Festpreise, wenn sie der Verkäufer schriftlich zusagt. Den Verkaufspreisen ist die jeweils gültige Mehrwertsteuer hinzuzurechnen. Sofern nichts anderes vereinbart ist, gelten sie frei verladen Abgangsort der Ware.</li>
      </ol>

      <h3>3. LIEFERUNG UND GEFAHRENÜBERGANG</h3>

      <ol>
        <li>Für die Lieferung des Verkäufers ist die Verladestelle Erfüllungsort. Die Gefahr geht damit über. Das gilt insbesondere für die Transportgefahr, die zu Lasten des Käufers auch dann geht, wenn Lieferung frei Empfangsort erfolgt oder durch Transportmittel des Verkäufers.</li>
        <li>Lieferung frei Baustelle oder frei Lager bedeutet Anlieferung ohne Abladen und unter der Voraussetzung einer mit schwerem Lastzug befahrbaren Anfuhrstraße. Verlässt das Lieferfahrzeug auf Weisung des Käufers die befahrbare Anfuhrstraße, so haftet dieser für auftretende Schäden. Das Abladen hat unverzüglich und sachgemäß durch den Käufer zu erfolgen. Wartezeiten, die vom Käufer zu vertreten sind, werden diesem berechnet. Bei Lieferung ab Werk ist eine Haftung auch ausgeschlossen, wenn Leute des Verkäufers beim Verladen helfen und dabei dem Käufer einen Schaden zufügen.</li>
        <li>Bei Leistungsverzug oder einer vom Verkäufer zu vertretenden Unmöglichkeit der Leistung kann der Käufer unter angemessener Nachfrist vom Vertrag zurücktreten. Das gilt auch für den Fall des Fixgeschäftes. Schadensersatzansprüche sind ausgeschlossen.</li>
      </ol>

      <h3>4. ZAHLUNG</h3>

      <ol>
        <li>Der Kaufpreis ist mit Ablieferung der Ware beim Käufer fällig, sofern nicht etwas anderes vereinbart wird.</li>
        <li>Ist die Gewährung von Skonto vereinbart, so ist der Käufer nur dann zu einem entsprechenden Abzug berechnet, wenn er die fälligen Rechnungsbeträge aus anderen Lieferungen bezahlt hat. Die Gewährung von Skonto bezieht sich nur auf den Warenwert ohne Mehrwertsteuer, Fracht und Verpackung.</li>
        <li>Der Verkäufer ist berechtigt, vom Käufer, der Kaufmann im Sinne des Handelsgesetzbuches ist, vom Fälligkeitstage an und vom Käufer, der kein Kaufmann ist, ab Verzug Zinsen in Höhe der von ihm selbst zu zahlenden Kreditkosten, mindestens aber von 2% über dem Diskontsatz der Deutschen Bundesbank jeweils zuzüglich Mehrwertsteuer, zu berechnen; die Geltendmachung weiteren Schadens bleibt vorbehalten.</li>
        <li>Bei Zahlungsverzug, Scheck- oder Wechselprotest, ist der Verkäufer berechtigt, weitere Lieferungen nur gegen Vorauskasse auszuführen, alle offenstehenden Rechnungsbeträge sofort fällig zu stellen und gegen Rückgabe zahlungshalber hereingenommener Wechsel Barzahlung oder Sicherheitsleistung zu verlangen. Das gleiche gilt, wenn nach Vertragsabschluss eine wesentliche Verschlechterung der Vermögensverhältnisse des Käufers eintritt oder dem Verkäufer bekannt wird.</li>
        <li>Die vertraglichen Zahlungstermine sind auch dann einzuhalten, wenn sich eine Mängelrüge in einem gemäß § 459 Abs. 1 Satz 2 BGB als unerheblich zu bezeichnendem Umfange als berechtigt erweist. Im übrigen darf der Käufer im Falle einer fristgerecht erhobenen, berechtigten Mängelrüge fehlerhafte Ware im Sinne von § 459 Abs. 1 BGB nur den Teil der Kaufsumme vorläufig einbehalten, der dem Rechnungsbetrag des ordnungsgemäß gerügten Teils der Lieferung entspricht.</li>
        <li>Die Aufrechnung von Gegenforderungen ist nur insofern zulässig, als es sich um unbestrittene oder rechtskräftig festgestellte Forderungen handelt.</li>
      </ol>

      <h3>5. BESCHAFFENHEIT, GEWÄHRLEISTUNG</h3>

      <ol>
        <li>Der Käufer hat die Ware unverzüglich zu untersuchen und etwaige Mängel oder Fehlmengen unverzüglich, spätestens innerhalb einer Frist von 3 Werktagen nach Empfang der Ware zu rügen. Der Käufer verliert seine Gewährleistungsansprüche, wenn er die Ware auch nur teilweise vom Lagerort entfernt, bevor eine Einigung erzielt ist oder bevor dem Verkäufer die Möglichkeit zur Besichtigung oder der Beweissicherung durch vereidigte Sachverständige gegeben wurde. Bei Abholung durch den Käufer ab Werk ist ein Mängel oder eine Fehlmenge sofort noch vor dem Abtransport zu rügen. Andernfalls gilt die Ware als genehmigt.</li>
        <li>Ist die Mängelrüge gerechtfertigt, hat der Verkäufer die Ware auf seine Kosten abzuholen. Der Käufer ist nur berechtigt, Lagerkosten zu erheben, wenn die Ware nicht innerhalb von zwei Wochen nach Aufforderung abgeholt wird. § 12 der Tegernseer Gebräuche gilt nicht mit Ausnahme von Ziffer 6 a.</li>
        <li>Zugesicherte Eigenschaften im Sinne von § 459 Abs. 2 des Bürgerlichen Gesetzbuches sind als Zusicherung ausdrücklich zu kennzeichnen. Eine Bezugnahme auf DIN-Normen begründet keine Zusicherung durch den Verkäufer.</li>
        <li>Übernimmt der Verkäufer auch Bauleistungen, so sind VOB, Teil B und VOB, Teil C Bestandteil aller Angebote und Verträge über solche Bauleistungen. Die Ansprüche des Käufers bei fehlerhafter Lieferung beschränken sich auf das Recht der Nachlieferung fehlerfreier Ware in angemessener Frist.</li>
        <li>Weitergehende Ansprüche, insbesondere Schadensersatzansprüche aus positiver Vertragsverletzung, Verschulden bei Vertragsverhandlungen und unerlaubter Handlung sind ausgeschlossen, es sei denn, sie beruhen auf Vorsatz oder grober Fahrlässigkeit des Verkäufers, eines gesetzlichen Vertreters oder Erfüllungsgehilfen. In diesen Fällen ist die Haftung auf den im Zeitpunkt des Vertragsabschlusses voraussehbaren Schaden begrenzt. Das gilt insbesondere für Mängelfolgeschäden und für Schäden, die sich aus der mangelnden Eignung der Ware für einen bestimmten Verwendungszweck ergeben.</li>
      </ol>

      <h3>6. EIGENTUMSVORBEHALTE</h3>

      <ol>
        <li>Die gelieferte Ware bleibt bis zur Bezahlung des Kaufpreises und Tilgung aller aus der Geschäftsverbindung bestehenden Forderungen und der im Zusammenhang mit dem Kaufgegenstand noch entstehenden Forderungen als Vorbehaltsware Eigentum des Verkäufers. Die Einstellung einzelner Forderungen in eine laufende Rechnung oder die Saldoziehung durch deren Anerkennung heben den Eigentumsvorbehalt nicht auf. Bei Zahlungsverzug des Käufers ist der Verkäufer zur Rücknahme der Vorbehaltsware nach Mahnung berechtigt und der Käufer zur Herausgabe verpflichtet.</li>
        <li>Wird Vorbehaltsware vom Käufer zu einer neuen beweglichen Sache verarbeitet, so erfolgt die Verarbeitung für den Verkäufer, ohne dass dieser hieraus verpflichtet wird; die neue Sache wird Eigentum des Verkäufers. Bei Verarbeitung zusammen mit nicht dem Verkäufer gehörender Ware erwirbt der Verkäufer Miteigentum an der neuen Sache nach dem Verhältnis des Wertes der Vorbehaltsware zu der anderen Ware zur Zeit der Verarbeitung. Wird Vorbehaltsware mit nicht dem Verkäufer gehörender Ware gemäß §§ 947, 948 des Bürgerlichen Gesetzbuches verbunden, vermischt oder vermengt, so wird der Verkäufer Miteigentümer entsprechend den gesetzlichen Bestimmungen. Erwirbt der Käufer durch Verbindung, Vermischung oder Vermengung Alleineigentum, so überträgt er schon jetzt an den Verkäufer Miteigentum nach dem Verhältnis des Wertes der Vorbehaltsware zu der anderen Ware zur Zeit der Verbindung, Vermischung oder Vermengung. Der Käufer hat in diesen Fällen die im Eigentum oder Miteigentum des Verkäufers stehende Sache, die ebenfalls als Vorbehaltsware im Sinne der nachfolgenden Bestimmungen gilt, unentgeltlich zu verwahren.</li>
        <li>Wird Vorbehaltsware vom Käufer, allein oder zusammen mit nicht dem Verkäufer gehörender Ware, veräußert, so tritt der Käufer schon jetzt die aus der Weiterveräußerung entstehender Forderungen in Höhe des Wertes der Vorbehaltsware mit allen Nebenrechten und Rang vor dem Rest ab; der Verkäufer nimmt die Abtretung an. Wenn die weiterveräußerte Vorbehaltsware im Miteigentum des Verkäufers steht, so erstreckt sich die Abtretung der Forderungen auf den Betrag, der dem Anteilswert des Verkäufers am Miteigentum entspricht. Abs. 1 Satz 2 gilt entsprechend für den verlängerten Eigentumsvorbehalt; die Vorausabtretung gemäß Abs. 3 Satz 1 und 3 erstreckt sich auch auf die Saldoforderung.</li>
        <li>Wird Vorbehaltsware vom Käufer als wesentlicher Bestandteil in das Grundstück eines Dritten eingebaut, so tritt der Käufer schon jetzt die gegen den Dritten oder den, den es angeht, entstehenden Forderungen auf Vergütung in Höhe des Wertes der Vorbehaltsware mit allen Nebenrechten einschließlich eines solchen auf Einräumung einer Sicherungshypothek, mit Rang vor dem Rest ab; der Verkäufer nimmt die Abtretung an. Abs. 3 Satz 2 und 3 gelten entsprechend. Wird Vorbehaltsware vom Käufer als wesentlicher Bestandteil in das Grundstück des Käufers eingebaut, so tritt der Käufer schon jetzt die aus der gewerbsmäßigen Veräußerung des Grundstücks oder von Grundstücksrechten entstehenden Forderungen in Höhe des Wertes der Vorbehaltsware mit allen Nebenrechten und mit Rang vor dem Rest ab; der Verkäufer nimmt die Abtretung an. Abs. 3 Satz 2 und 3 gelten entsprechend.</li>
        <li>Der Käufer ist zur Weiterveräußerung, zur Verwendung oder zum Einbau der Vorbehaltsware nur im üblichen ordnungsgemäßen Geschäftsgang und nur mit der Maßgabe berechtigt und ermächtigt, dass die Forderungen im Sinne von Abs. 3, 4 und 5 auf den Verkäufer tatsächlich übergehen. Zu anderen Verfügungen über die Vorbehaltsware, insbesondere Verpfändung oder Sicherungsübereignung, ist der Käufer nicht berechtigt.</li>
        <li>Der Verkäufer ermächtigt den Käufer unter Vorbehalt des Widerrufs zur Einziehung der gemäß Abs. 3, 4 und 5 abgetretenen Forderungen. Der Verkäufer wird von der eigenen Einziehungsbefugnis keinen Gebrauch machen, solange der Käufer seinen Zahlungsverpflichtungen, auch gegenüber Dritten, nachkommt. Auf Verlangen des Verkäufers hat der Käufer die Schuldner der abgetretenen Forderungen zu benennen und diesen die Abtretung anzuzeigen; der Verkäufer ist ermächtigt, den Schuldnern die Abtretung auch selbst anzuzeigen.</li>
        <li>Über Zwangsvollstreckungsmaßnahmen Dritter in die Vorbehaltsware oder in die abgetretenen Forderungen hat der Käufer den Verkäufer unverzüglich unter Übergabe der für den Widerspruch notwendigen Unterlagen zu unterrichten. Mit Zahlungseinstellung, Beantragung oder Eröffnung des Konkurses, eines gerichtlichen oder außergerichtlichen Vergleichsverfahrens erlöschen das Recht zur Weiterveräußerung, zur Verwendung oder zum Einbau der Vorbehaltsware und die Ermächtigung zum Einzug der abgetretenen Forderungen; bei einem Scheck- oder Wechselprotest erlischt die Einzugsermächtigung ebenfalls. In diesen Fällen, ferner unter den Voraussetzungen des § 4 Ziffer 7 ist der Verkäufer berechtigt, sich selber den Besitz an der Ware zu verschaffen und diese sicher- zustellen. Der Käufer darf den Abtransport nicht verhindern. Auch wenn der Verkäufer sich den Besitz gegen den Willen des Käufers wieder verschafft, stellt das keine verbotene Eigenmacht dar.</li>
        <li>Übersteigt der Wert der eingeräumten Sicherheiten die Forderungen um mehr als 20 %, so ist der Verkäufer insoweit zur Rückübertragung oder Freigabe nach seiner Wahl verpflichtet. Mit Tilgung aller Forderungen des Verkäufers aus der Geschäftsverbindung gehen das Eigentum an der Vorbehaltsware und die abgetretenen Forderungen auf den Käufer über.</li>
      </ol>

      <h3>7. ERFÜLLUNGSORT UND GERICHTSSTAND</h3>

      <ol>
        <li>Erfüllungsort für die Zahlung des Kaufpreises sowie für die sonstigen Leistungen des Käufers ist stets der Ort der gewerblichen Niederlassung des Verkäufers.</li>
        <li>Gerichtsstand für Vollkaufleute ist der Ort der gewerblichen Niederlassung des Verkäufers.</li>
      </ol>

      <p>Stand: 14. August 2016</p>
    </div>
  </div>
</template>
