<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            Kunnen wij het leven van jou of jouw team misschien makkelijker maken?
          </p>
          <p>
            Neem contact op voor een kennismaking.
          </p>
          <!-- <p>
            Kun je dit gebruiken? <NuxtLink to="/tarieven">Bekijk onze tarieven</NuxtLink>
          </p> -->
        </div>
        <h2 class="heading-page">
          Contact
        </h2>
        <h3>E-mail</h3>
      </PageContent>
      <p class="m-contact-item">
        <button
          type="button"
          class="m-contact-item__btn btn"
          @click="copy('sales@appje-eitje.nl')"
        >
          Kopieer
          <span class="btn__tooltip-container" role="alert">
            <span
              class="btn__tooltip"
              :class="{ ___show: copiedStr === 'sales@appje-eitje.nl' }"
            >
              Gekopieerd!
            </span>
          </span>
        </button>
        <a
          class="m-contact-item__link"
          href="mailto:sales@appje-eitje.nl"
        >
          <span class="m-contact-item__link__content">sales@appje-eitje.nl</span>
          <span class="m-contact-item__link__meta">Beste Appje Eitje, kun je...</span>
        </a>
      </p>
      <div class="page-content__spacer-large"></div>
      <!-- <p class="m-contact-item">
        <button
          type="button"
          class="m-contact-item__btn btn"
          :class="{ ___copied: copiedStr === '+31641017611' }"
          @click="copy('+31641017611')"
        >
          Kopieer
          <span class="btn__tooltip-container" role="alert">
            <span
              class="btn__tooltip"
              :class="{ ___show: copiedStr === '+31641017611' }"
            >
              Gekopieerd!
            </span>
          </span>
        </button>
        <a
          class="m-contact-item__link"
          href="tel:+31641017611"
        >
          <span class="m-contact-item__link__content">+31 6 41 01 76 11</span>
          <span class="m-contact-item__link__meta">Binnen kantoortijden</span>
        </a>
      </p> -->
      <PageContent>
        <div class="page-content__spacer-small"></div>
        <h3>Gegevens</h3>
        <p>
          <span>Appje Eitje</span><br>
          Leuvensbroek 1019<br>
          6546 XA NIJMEGEN
        </p>
        <p>KvK 71965858</p>
        <div class="page-content__spacer"></div>
        <p>
          Liever iemand direct aanspreken? <NuxtLink to="/over">Kijk op de over-pagina</NuxtLink>
        </p>
      </PageContent>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Contact' })

const copiedStr = ref('')
const copy = (str) => {
  copiedStr.value = str
  navigator.clipboard.writeText(str)
  setTimeout(() => { this.copiedStr = undefined }, 1380)
}
</script>

<style src="./contact.vue.scss" lang="scss" scoped />
