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
            € 72,00 excl. btw Developer support tarief<br/>
            <small>Als het een eitje is – Onze developers kunnen meteen aan de slag</small><br>
          </p>
          <p>
            € 94,00 excl. btw Developer Senior / Lead tarief<br/>
            <small>Als het géén eitje is – Voor als er uitgebreide afstemming benodigd is</small>
          </p>
          <p>
            € 117,00 excl. btw Consultancy tarief<br/>
            <small>Liever vandaag eieren dan morgen kuikens – Architectuur of (development) advies</small>
          </p>
        </div>
        <div class="page-content__spacer-smaller"></div>
        <div class="page-content__lead">
          <p>
            <NuxtLink to="/contact" class="cta-link">Neem contact op</NuxtLink>
            <!-- of <NuxtLink to="/voorwaarden">bekijk de voorwaarden</NuxtLink> -->
            <br>
            <small class="label-info">Tarieven ter indicatie. Informeer naar voorwaarden.</small>
          </p>
        </div>
        <div class="page-content__spacer"></div>
        <h2 class="heading-section">
          Invloed op tarief
        </h2>
        <p>
          We gaan altijd een stapje verder, doe jij dat ook?
        </p>
        <ul>
          <li>
            10% wenkorting op eerste factuur
          </li>
          <li>
            5% korting op volgende factuur indien de vorige factuur binnen een week betaald is
          </li>
          <li>
            1% korting per jaar dat je klant bent (max. 10%)
          </li>
          <li>
            75% opslag bij overwerk.
            Altijd in overleg.
            Afhankelijk van beschikbaarheid.
          </li>
        </ul>
        <p>
          <small>Aan kortingen kunnen geen rechten ontleend worden.</small>
        </p>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Appje Eitje Werkwijze
        </h2>
        <h3>
          Aan de slag als alles duidelijk is
        </h3>
        <p>
          Wij helpen je om het (ontwikkel)werk in zinvolle delen op te splitsen en zorgen zo samen voor een backlog.
          Wanneer er geen vragen meer zijn, gaan we aan de slag!
          Periodiek plannen we een stand-up en/of refinement om zowel de backlog als het board bij te werken.
          Zo kunnen we elke sprint iets opleveren met behulp van CI/CD-tooling.
        </p>
        <h3>
          Altijd op de hoogte
        </h3>
        <p>
          Via het backlog en board weet je altijd direct wat de status is van de werkzaamheden of features.
          Zo hoef je nooit meer te bellen drie dagen voor een deadline. Het mag natuurlijk wel ;-)
        </p>
        <h3>
          Geen factuurstress
        </h3>
        <p>
          Gemaakte uren kun je via onze tools volgen wanneer je wilt.
          Geen verrassingen meer.
          We werken op nacalculatie.
          Aan het einde van de maand controleren we dit en na akkoord van de uren ontvang je de factuur.
        </p>
        <h3>
          De beste kandidaat
        </h3>
        <p>
          Je krijgt bij Appje Eitje altijd de beste kandidaat.
          Binnen ons team kijken we per item op de backlog wie het beste past.
          Dat is anders dan traditionele detachering.
          Zo werken we zo efficiënt als mogelijk.
        </p>
        <div class="page-content__spacer-smaller"></div>
        <p>
          <NuxtLink to="/team" class="cta-link">Maak kennis met het team</NuxtLink>
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
