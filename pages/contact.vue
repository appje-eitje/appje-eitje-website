<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>
            Kunnen wij het leven van jou of je team makkelijker maken?
          </p>
          <p>
            Laten we kennismaken!
          </p>
          <!-- <p>
            Kun je dit gebruiken? <NuxtLink to="/tarieven">Bekijk onze tarieven</NuxtLink>
          </p> -->
        </div>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Contact
        </h2>
        <h3>E-mail</h3>
      </PageContent>
      <p class="contact-item">
        <button
          type="button"
          class="contact-item__btn btn"
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
          class="contact-item__link"
          href="mailto:sales@appje-eitje.nl"
        >
          <span class="contact-item__link__content">sales@appje-eitje.nl</span>
          <span class="contact-item__link__meta">Beste Appje Eitje, kun je...</span>
        </a>
      </p>
      <div class="page-content__spacer-large"></div>
      <!-- <p class="contact-item">
        <button
          type="button"
          class="contact-item__btn btn"
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
          class="contact-item__link"
          href="tel:+31641017611"
        >
          <span class="contact-item__link__content">+31 6 41 01 76 11</span>
          <span class="contact-item__link__meta">Binnen kantoortijden</span>
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
          Liever iemand direct aanspreken? <NuxtLink to="/team">Ga naar het team</NuxtLink>
        </p>
        <div class="page-content__spacer-large"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Contact'
})

const copiedStr = ref('')
const copy = (str) => {
  copiedStr.value = str
  navigator.clipboard.writeText(str)
  setTimeout(() => { this.copiedStr = undefined }, 1380)
}
</script>

<style src="./contact.vue.scss" lang="scss" scoped />
