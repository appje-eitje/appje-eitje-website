<template>
  <div>
    <div class="page-center ___padding-width">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            € 62,00 ex. btw Developer support tarief<br/>
            <small>Als het eitje is – We kunnen zo aan de slag met de todo</small><br>
          </p>
          <p>
            € 117,00 ex. btw Consultancy tarief<br/>
            <small>Als het géén eitje is – Moeten eerst todo uitwerken en inplannen</small>
          </p>
          <p>
            Beschikbaar per november <NuxtLink to="/contact">Neem contact op</NuxtLink><br>
            <small>Tarieven ter indicatie. Informeer naar voorwaarden en mogelijkheden voor korting</small>
          </p>
        </div>
        <div class="page-content__spacer-smaller"></div>
        <details>
          <summary>Bepaal het tarief zelf</summary>
          <small>1e maand € 55,00 ex. btw</small>
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
              100% opslag bij buitengewone inzet, als 'whatever it takes geldt'. Altijd in overleg
              Desnoods komen we je ophalen bij Schiphol en zetten we je thuis weer af.
            </li>
          </ul>
          <p>
            Pas op: aan de tarieven kunnen geen rechten ontleend worden, voordat we aan de slag gaan maken we definitieve afspraken.
          </p>
        </details>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Appje Eitje Werkwijze
        </h2>
        <h3>
          Geen factuurstress
        </h3>
        <p>
          Geen verrassingen meer.
          We werken op nacalculatie.
          Gemaakte uren kun je volgen per maand, via onze tools.
          Aan het einde van de maand corrigeren we dit en factureren na akkoord.
        </p>
        <h3>
          Altijd de laatste status
        </h3>
        <p>
          Via een heldere backlog i.c.m. actief board weet je altijd direct wat de status is.
          Zo hoef je nooit meer te bellen drie dagen voor een deadline, maar het mag natuurlijk wel ;-)
        </p>
        <h3>
          We gaan pas aan de slag als alles duidelijk is
        </h3>
        <p>
          Als opdrachtgever helpen we je om het ontwikkelwerk (backlog) in zinvolle delen op te splitsen,
          en pas als alles duidelijk is zetten we dit op de To Do.
          Wekelijks of twee-wekelijks plannen we een stand-up om dit bij te werken.
          Zo kunnen we bijna elke week wat nieuws kunnen leveren m.b.v. CI / CD tooling.
        </p>
        <h3>
          Beste kandidaat
        </h3>
        <p>
          Binnen ons team kijken we per item op de backlog wat het beste past, zo werken we altijd zo efficiënt als mogelijk.
        </p>
        <p>
          <NuxtLink to="/tarieven">Maak kennis met het team</NuxtLink>
        </p>
        <div class="page-content__spacer-large"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Tarief' })

definePageMeta({
  // description: 'Maak zelf een persoonlijke herinnering bij de uitvaart van uw dierbare',
  // TODO: image: 'http://placekitten.com/200/300',
  // TODO: imageAlt: 'Placekitten',
})
</script>
