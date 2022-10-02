<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <h2 class="heading-page">Appje Eitje Showcase</h2>
          <p>Niet al ons werk kunnen wij direct tonen, de onderstaande showcases zijn een kleine greep uit het werk wat wij doen.
          </p>
        </div>
        <div class="page-content__spacer"></div>
      </PageContent>

      <ul class="cards-work">
        <li v-for="item in data" :key="item._path" class="cards-work__item ___responsive-tablet-portrait-50">
          <div href="https://coronamelder.nl" class="card-work">
            <div class="card-work__preview">
              <img
                v-if="item.image"
                class="card-work__preview__img"
                :src="item.image"
                alt="Screenshot van homepage van coronamelder"
              >
            </div>
            <div class="card-work__text">
              <h3 class="card-work__text__title">
                {{ item.title }}
              </h3>
              <p class="card-work__text__lead">
                <small>TLDR</small>
                {{ item.tldr }}
              </p>
              <NuxtLink v-if="item.readMore" :to="item._path" class="card-work__text__more">
                <span class="m-content-link">Lees meer</span>
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>

      <PageContent>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          En daar stopt het niet...
        </h2>
        <p>
          <!-- TODO: Team tldr gebruiken? -->
          Uit de ruim 15 jaar ervaring van Melle is Appje Eitje ontstaan.
          Daaronder vallen diverse projecten bij o.a. Alliander, de Volksbank, de Rijksoverheid en de zorgsector.
          Bekijk zijn <a href="https://mellewynia.nl">uitgebreide website</a> om een indruk te krijgen.
        </p>
        <!-- <p>
          Peter Doolaard is auteur van
        </p>
        <p>
          Jip Wijnia is auteur van
        </p> -->
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
  title: 'Wat we doen'
})

const { data } = await useAsyncData('dit-doen-we', () => {
  return queryContent('/dit-doen-we').find()
})
</script>
