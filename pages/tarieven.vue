<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            € 62,00 excl. btw Developer support tarief<br/>
            <small>Als het een eitje is – Onze developers gaan meteen aan de slag</small><br>
          </p>
          <p>
            € 117,00 excl. btw Consultancy tarief<br/>
            <small>Als het géén eitje is – Voor senior/lead invulling, architecturele beslissingen of (development) advies</small>
          </p>
          <p>
            <span class="site-label-status">Beschikbaar per november</span> <NuxtLink to="/contact">Neem contact op</NuxtLink> of <NuxtLink to="/voorwaarden">bekijk de voorwaarden</NuxtLink><br>
            <small class="label-info">Tarieven ter indicatie. Informeer naar voorwaarden en mogelijkheden voor korting</small>
          </p>
        </div>
        <div class="page-content__spacer-smaller"></div>
        <details>
          <summary>Bepaal het tarief zelf</summary>
          <small>1e maand € 55,00 excl. btw</small>
          <ul>
            <li>
              0.5% korting per easter egg die je vindt op de website bij aanvang (max 3%)
            </li>
            <li>
              2% korting per jaar dat je klant bent (max. 6%)
            </li>
            <li>
              6% korting bij geen haast
            </li>
            <li>
              2% korting op volgende factuur indien vorige binnen 5 werkdagen betaald wordt
            </li>
            <li>
              100% opslag bij buitengewone inzet, als 'whatever it takes geldt'. Altijd in overleg
              Desnoods komen we je ophalen bij Schiphol en zetten we je thuis weer af.
            </li>
          </ul>
          <p>
            Pas op: aan de tarieven kunnen geen rechten ontleend worden, voordat we aan de slag gaan, maken we definitieve afspraken.
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
          Wanneer er geen vragen meer zijn, gaan we aan de slag!
          Periodiek plannen we een stand-up en/of refinement om zowel de backlog als het board bij te werken.
          Zo kunnen we elke sprint iets opleveren met behulp van CI / CD tooling.
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
          Geen verrassingen meer.
          We werken op nacalculatie.
          Gemaakte uren kun je via onze tools volgen wanneer je wilt.
          Aan het einde van de maand controleren we dit en na akkoord van de uren ontvang je de factuur.
        </p>
        <h3>
          De beste kandidaat
        </h3>
        <p>
          We doen geen detachering.
          Je krijgt bij Appje Eitje altijd de beste kandidaat.
          Binnen ons team kijken we per item op de backlog wie het beste past.
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
