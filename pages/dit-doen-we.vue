<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            Uitgelicht
          </p>
          <p>
            Jep... binnenkort volgt hier meer.
          </p>
        </div>
        <div class="page-content__spacer"></div>
      </PageContent>
      <ul class="cards-work">
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
useHead({ title: 'Wat we doen' })

definePageMeta({
  // description: 'Maak zelf een persoonlijke herinnering bij de uitvaart van uw dierbare',
  // TODO: image: 'http://placekitten.com/200/300',
  // TODO: imageAlt: 'Placekitten',
})
</script>
