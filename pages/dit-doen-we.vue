<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <h2 class="heading-page">Appje Eitje Showcase</h2>
        <div class="page-content__lead">
          <p>
            Niet al ons werk kunnen wij direct tonen, de onderstaande showcases zijn een kleine greep uit het werk wat wij doen.
          </p>
        </div>
        <div class="page-content__spacer"></div>
      </PageContent>
      <ul class="cards-work">
        <li class="cards-work__item ___responsive-tablet-portrait-50">
          <a href="https://ciz.nl/jaaroverzicht-2021/" class="card-work">
            <div class="card-work__preview">
              <img
                class="card-work__preview__img"
                src="~/assets/projects/ciz/ciz-jaarverslag-2021-one-page.jpg"
                alt="Screenshot van jaaroverzicht 2021 van CIZ"
              >
            </div>
            <div class="card-work__text">
              <h3 class="card-work__text__title">
                CIZ Jaaroverzicht 2021
              </h3>
              <p class="card-work__text__lead">
                Appje Eitje heeft in opdracht van Osage het Jaaroverzicht 2021 voor CIZ opgeleverd.
                Een interessante, uitdagende klus voor onze front-end developers om de vele illustraties te animeren.
              </p>
              <p class="card-work__text__more">
                <span class="m-content-link">Ga naar ciz.nl/jaaroverzicht-2021</span>
              </p>
            </div>
          </a>
        </li>
        <li class="cards-work__item ___responsive-tablet-portrait-50">
          <a href="https://coronamelder.nl" class="card-work">
            <div class="card-work__preview">
              <img
                class="card-work__preview__img"
                src="~/assets/projects/coronamelder/coronamelder-home-static-website.png"
                alt="Screenshot van homepage van coronamelder"
              >
            </div>
            <div class="card-work__text">
              <h3 class="card-work__text__title">
                Coronamelder.nl
              </h3>
              <p class="card-work__text__lead">
                Ik ben Melle heeft in korte tijd de meertalige, cybersecure en toegankelijke (WCAG AAA) campagnewebsite opgezet.
                Samen met ZZP’ers zijn we razendsnel opgeschaald alle uitdagingen aangedaan.
                En dat was niet mals;
                elke stap van dit overheidsproject werd gevolgd, al het werk was open source op Github.
              </p>
              <p class="card-work__text__more">
                <span class="m-content-link">Ga naar coronamelder.nl</span>
              </p>
            </div>
          </a>
        </li>
        <li class="cards-work__item ___responsive-tablet-portrait-50">
          <a href="https://mellewynia.nl" class="card-work">
            <div class="card-work__preview">
              <img
                class="card-work__preview__img"
                src="~/assets/projects/cv/mw-website.png"
                alt="Screenshot van homepage van mellewynia.nl"
              >
            </div>
            <div class="card-work__text">
              <h3 class="card-work__text__title">
                CV Melle Wijnia
              </h3>
              <p class="card-work__text__lead">
                Naast de oprichting van Ik ben Melle & Co.,
                werkt Melle ook (al) ruim 10 jaar als ZZP'er de Volksbank, Alliander.
                Vele Angular en Vue projecten gedaan, teams opgericht en ondersteuning verleend in bijzondere situaties.
              </p>
              <p class="card-work__text__more">
                <span class="m-content-link">Ga naar mellewynia.nl</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Dit doen we'
})
</script>
