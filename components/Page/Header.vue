<template>
  <div>
    <header class="page-header">
      <!-- TODO: Only show for screen-readers -->
      <div class="page-header__brand">
        <h1 class="page-header__brand__text">
          <nuxt-link to="/" class="label-ae">
            <AtomLogo class="label-ae__logo"/>
            <span class="label-ae__name">Appje-Eitje</span>
            <span class="label-ae__service"></span>
          </nuxt-link>
        </h1>
        <!-- <p class="page-header__brand__slogan">
          <nuxt-link to="/en/happy-people-happy-code" class="label-ibmco-slogan">Happy people. Happy code.</nuxt-link>
        </p> -->
        <nav class="header-nav">
          <ul class="header-nav-items">
            <li class="header-nav-items__item">
              <nuxt-link
                to="/dit-doen-we"
                class="nav-link"
              >
                Dit doen we
              </nuxt-link>
            </li>
            <li class="header-nav-items__item">
              <nuxt-link
                to="/tarieven"
                class="nav-link"
              >
                Tarieven
              </nuxt-link>
            </li>
            <!-- <li class="header-nav-items__spacer" aria-hidden="true">

            </li> -->
            <li class="header-nav-items__item">
              <nuxt-link
                to="/team"
                class="nav-link"
              >
                Team
              </nuxt-link>
            </li>
            <li class="header-nav-items__item ___space-after">
              <nuxt-link
                to="/contact"
                class="nav-link"
              >
                Contact
              </nuxt-link>
            </li>
            <!-- <li class="header-nav-items__item">
              <nuxt-link
                to="/vacatures"
                class="nav-link"
              >
                Vacatures <span class="nav-link__bubble"><span class="screen-reader-text">(</span>2<span class="screen-reader-text">)</span></span>
              </nuxt-link>
            </li> -->
            <!-- TODO: <li class="header-nav-items__item">
              <nuxt-link
                to="/werken-bij/open-hiring"
                class="nav-link"
              >
                Open Hiring
              </nuxt-link>
            </li> -->
          </ul>
        </nav>
      </div>
      <div class="page-header__nav">
        <!--
        <div>
          <span class="">Switch language</span>
          <nuxt-link to="/">
            NL
          </nuxt-link>
          <nuxt-link to="/en">
            EN
          </nuxt-link>
        </div>
        -->
        <nav class="header-nav">
          <ul class="header-nav-items">
            <!-- <li class="header-nav-items__item">
              <nuxt-link
                to="/tarieven"
                class="nav-link"
              >
                Tarieven
              </nuxt-link>
            </li>
            <li class="header-nav-items__item ___space-after">
              <nuxt-link
                to="/contact"
                class="nav-link"
              >
                Spoed? <strong><span class="util-hide-mobile-small">Direct</span> Contact</strong>
              </nuxt-link>
            </li>
            <li class="header-nav-items__spacer" aria-hidden="true">

            </li>
            <li class="header-nav-items__item">
              <nuxt-link
                to="/team"
                class="nav-link"
              >
                Over
              </nuxt-link>
            </li> -->
            <!-- <li class="header-nav-items__item">
              <nuxt-link
                to="/vacatures"
                class="nav-link"
              >
                Vacatures <span class="nav-link__bubble"><span class="screen-reader-text">(</span>2<span class="screen-reader-text">)</span></span>
              </nuxt-link>
            </li> -->
            <!-- TODO: <li class="header-nav-items__item">
              <nuxt-link
                to="/werken-bij/open-hiring"
                class="nav-link"
              >
                Open Hiring
              </nuxt-link>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from "../Atom/Logo.vue";
export default {
    data: () => ({
        navExpand: false
    }),
    methods: {
        toggleNav(expand = !this.navExpanded) {
            this.navExpand = expand;
        }
    },
    components: { Logo }
}
</script>

<style src="./Header.vue.scss" lang="scss" scoped />
