<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer"></div>
        <p>
          <span class="site-label-status">Beschikbaar per november</span>
        </p>
        <div class="page-content__spacer-smaller"></div>
        <div class="page-content__lead">
          <p>
            € 72,00 ex. btw Developer support tarief<br/>
            <small>Als het een eitje is – Onze developers kunnen meteen aan de slag</small><br>
          </p>
          <p>
            € 94,00 ex. btw Developer Senior / Lead tarief<br/>
            <small>Als het géén eitje is – Voor senior/lead invulling</small>
          </p>
          <p>
            € 117,00 ex. btw Consultancy tarief<br/>
            <small>Liever vandaag eieren dan morgen kuikens – Architectuur of (development) advies</small>
          </p>
        </div>
        <div class="page-content__spacer-smaller"></div>
        <div class="page-content__lead">
          <p>
            <NuxtLink to="/contact">Neem contact op</NuxtLink>
            <!-- of <NuxtLink to="/voorwaarden">bekijk de voorwaarden</NuxtLink> -->
            <br>
            <small class="label-info">Tarieven ter indicatie. Informeer naar voorwaarden</small>
          </p>
        </div>
        <div class="page-content__spacer-smaller"></div>
        <details>
          <summary>Mogelijkheden voor korting*</summary>
          <ul>
            <li>
              0.5% korting op volgende factuur per gevonden easter egg<br>
              <small>Elke easter egg is eenmalig te gebruiken</small>
            </li>
            <li>
              10% korting op eerste factuur
            </li>
            <li>
              1% korting per jaar dat je klant bent (max. 10%)
            </li>
            <li>
              2% korting op volgende factuur indien vorige factuur binnen 5 dagen betaald is
            </li>
            <li>
              75% opslag bij buitengewone 'whatever it takes geldt' inzet.
              Altijd in overleg/
              Desnoods komen we je ophalen bij Schiphol en zetten we je thuis weer af.
            </li>
          </ul>
          <p>
            * Aan kortingen kunnen geen rechten ontleend worden.
          </p>
        </details>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Appje Eitje Werkwijze
        </h2>
        <h3>
          Aan de slag als alles duidelijk is
        </h3>
        <p>
          Wij helpen je om het (ontwikkel)werk in zinvolle delen op te splitsen en zorgen zo samen voor een backlog.
          Als alles duidelijk is, kunnen we actief aan de slag!
          Periodiek plannen we een stand-up en/of refinement om zowel de backlog als het Scrum board bij te werken.
          Zo kunnen we elke sprint iets opleveren met behulp van CI / CD tooling.
        </p>
        <h3>
          Altijd op de hoogte
        </h3>
        <p>
          Via het gezamenlijke Scrum board en backlog weet je altijd direct wat de status is van de werkzaamheden of features.
          Zo hoef je nooit meer te bellen drie dagen voor een deadline. Het mag natuurlijk wel ;-)
        </p>
        <h3>
          Geen factuurstress
        </h3>
        <p>
          Geen verrassingen meer.
          We werken op nacalculatie.
          Gemaakte uren kun je via onze tools volgen wanneer je wilt.
          Aan het einde van de maand verzamelen we dit en na akkoord van de uren ontvang je de factuur.
        </p>
        <h3>
          De beste kandidaat
        </h3>
        <p>
          We doen geen detachering.
          Je krijgt bij Appje Eitje altijd de beste kandidaat.
          Binnen ons team kijken we per item op de backlog wat het beste past.
          Zo werken we zo efficiënt als mogelijk.
        </p>
        <div class="page-content__spacer-smaller"></div>
        <p>
          <NuxtLink to="/team">Maak kennis met het team</NuxtLink>
        </p>
        <div class="page-content__spacer-large"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Tarieven'
})
</script>
