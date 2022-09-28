<template>
  <div>
    <div class="page-center ___padding">
      <h2 class="heading-page">
        Contact
      </h2>
      <div class="layout-contact">
        <div class="layout-contact__content">
          <Content>
            <p class="lead">
              Neem contact op om een kennismaking en/of intake voor jouw project en plannen op te nemen.
            </p>
          </Content>
        </div>
      </div>
      <!-- TODO: Toon remote working possibilities -->
      <div class="layout-contact">
        <div class="layout-contact__side">
          <Content>
            <div class="content-block highlight">
              <h3>Spoed?</h3>
              <p>Binnen één week front-end expertise nodig?</p>
              <p>
                Dat kan.
                Neem contact op en omschrijf in je e-mail gedetailleerd wat er moet gebeuren zodat we snel
                een inschatting kunnen maken of we je kunnen helpen en alvast kunnen meedenken over de oplossing.
              </p>
              <p>
                <span>Tip:</span> vermeldt onder andere de tech stack, het op te lossen probleem of de te ontwikkelen
                feature, welke inspanningen al gedaan zijn en een intro tot de teamleden en product owners/managers.
              </p>
            </div>
            <!-- <div class="contact-links">
              <a href="">Werkwijze</a>
              <a href="">Tarieven</a>
              <a href="">Algemene voorwaarden</a>
            </div> -->
          </Content>
        </div>
        <div class="layout-contact__content">
          <Content>
            <h3>Contactpersonen</h3>
            <p class="contact-personen--persoon">Melle Wijnia</p>
            <p>Front-end lead / consultant</p>
          </Content>
          <p class="m-contact-item">
            <button
              type="button"
              class="m-contact-item__btn btn"
              @click="copy('melle.wijnia@ikbenmelle-en-co.nl')"
            >
              Kopieer
              <span class="btn__tooltip-container" role="alert">
                <span
                  class="btn__tooltip"
                  :class="{ ___show: copiedStr === 'melle.wijnia@ikbenmelle-en-co.nl' }"
                >
                  Gekopieerd!
                </span>
              </span>
            </button>
            <a
              class="m-contact-item__link"
              href="mailto:melle.wijnia@ikbenmelle-en-co.nl"
            >
              <span class="m-contact-item__link__content">melle.wijnia@ikbenmelle-en-co.nl</span>
              <span class="m-contact-item__link__meta">Beste Melle, wij willen...</span>
            </a>
          </p>
          <p class="m-contact-item">
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
          </p>
          <Content>
            <h3>Werkgebied</h3>
            <p>Remote onbeperkt</p>
            <p>Nederland, West-Duitsland, Noord-België</p>
            <h3>Gegevens</h3>
            <p>
              <span>Ik ben Melle B.V.</span><br>
              Leuvensebroek 1019 <br>
              6546 XA NIJMEGEN
            </p>
            <p>KvK 71965858</p>
          </Content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    copiedStr: undefined
  }),
  methods: {
    copy (str) {
      this.copiedStr = str
      navigator.clipboard.writeText(str)
      setTimeout(() => { this.copiedStr = undefined }, 1380)
    }
  }
}
</script>

<style src="./contact.vue.scss" lang="scss" scoped />
