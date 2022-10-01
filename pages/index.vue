<template>
  <div>
    <div class="page-center">
      <!-- <SiteHero /> -->
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            Developers gezocht? Eitje!
          </p>
          <p>
            Wie of wat je ook zoekt, wij vullen jouw team aan.
            Samen werken we aan de beste website, software of app voor jou, je team en je klant.
          </p>
          <p>
            Kosteneffectief. Betrokken. Wij zijn jouw ei van Columbus.*
          </p>
          <p>
            Wat heb je nodig? <NuxtLink to="/contact">Vertel het ons</NuxtLink>
          </p>
        </div>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Onze expertises
        </h2>
        <h3>
          Front-end
        </h3>
        <p>
          HTML, CSS, JavaScript, Vue, Angular, Svelte
        </p>
        <h3>Back-end</h3>
        <p>REST API, GraphQL, Node.JS, MySQL, PHP</p>
        <h3>
          Toegankelijkheid
        </h3>
        <p>
          WCAG
        </p>
        <h3>
          Cybersecurity
        </h3>
        <p>
          Voorbereiden of verwerken van een security audit of pentest
        </p>
        <div class="page-content__spacer-smaller"></div>
        <p>
          <NuxtLink to="/dit-doen-we">Dit doen we met onze expertises</NuxtLink>
        </p>
        <div class="page-content__spacer"></div>
        <p>
          * Het ei van Columbus.<br>
          Simpele oplossing voor een moeilijke opgave
        </p>
        <div class="page-content__spacer"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home'
})
</script>
