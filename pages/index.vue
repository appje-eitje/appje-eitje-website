<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            Appje Eitje ontwikkelt doordachte websites, apps en toepassingen.
          </p>
          <p>
            We doen dit voor jou of samen met jouw team.
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
          <small>Klant (of gebruiker) reis tot in de puntjes uitwerken</small>
        </p>
        <p>
          HTML, CSS, JavaScript, Vue, Angular, Svelte
        </p>
        <p>
          Design Tokens
        </p>
        <h3>
          Back-end
        </h3>
        <p>
          <small>Als het nodig is, staan we ons mannetje </small>
        </p>
        <p>
          REST API, Swagger, GraphQL, Node.JS, Postgres, Java, .NET
        </p>
        <h3>
          Full-stack
        </h3>
        <p>
          <small>Maximale synergy tussen front-end en achterliggende systemen</small>
        </p>
        <p>
          Nuxt, Next.js
        </p>
        <h3>
          Toegankelijkheid
        </h3>
        <p>
          <small>Als je het publiek maximaal wilt bereiken</small>
        </p>
        <p>
          WCAG, Accessibility Audit, Accessible Web Apps
        </p>
        <h3>
          Cybersecurity
        </h3>
        <p>
          <small>Spannende tijd voor je project goed voorbereiden, begeleiden en afronden</small>
        </p>
        <p>
          OWASP 10, Pentest, Security Audit, AVG, Privacy
        </p>
        <div class="page-content__spacer-smaller"></div>
        <p>
          <NuxtLink to="/dit-doen-we">Dit doen we met onze expertises</NuxtLink>
        </p>
        <!-- <div class="page-content__spacer"></div>
        <p>
          * Het ei van Columbus.<br>
          Simpele oplossing voor een moeilijke opgave
        </p> -->
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
