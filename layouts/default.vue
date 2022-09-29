<template>
  <div class="m-page">
    <header class="m-page__header">
      <PageHeader />
    </header>
    <main class="m-page__main">
      <slot />
      <!-- <SiteFooter /> -->
    </main>
    <!-- <footer class="m-page__footer">
      <PageFooter />
    </footer> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: route.meta.lang ? route.meta.lang : 'nl',
  },
  title: route.meta.title ? `Appje-Eitje - ${route.meta.title}` : 'Appje-Eitje',
  script: [
    {
      children: 'var _paq = window._paq = window._paq || []; /* tracker methods like "setCustomDimension" should be called before "trackPageView" */ _paq.push([\'trackPageView\']); _paq.push([\'enableLinkTracking\']); (function() { var u="//stats.ikbenmelle-en-co.nl/"; _paq.push([\'setTrackerUrl\', u+\'matomo.php\']); _paq.push([\'setSiteId\', \'1\']); var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0]; g.async=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s); })(); '
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: route.meta.canonical ? route.meta.canonical : 'https://appje-eitje.nl' + route.path,
    },
  ],
  meta: [
    {
      name: 'title',
      content: route.meta.title ? `Appje Eitje - ${route.meta.title}` : 'Appje Eitje',
    },
    {
      name: 'description',
      content: route.meta.description ? route.meta.description : 'Appje Eitje',
    },
    {
      name: 'theme-color',
      content: '#A4E4AE',
    },
    {
      property: 'og:title',
      content: route.meta.title ? `Appje Eitje - ${route.meta.title}` : 'Appje Eitje',
    },
    {
      property: 'og:description',
      content: route.meta.description ? route.meta.description : 'Appje Eitje',
    },
    {
      property: 'og:image',
      content: route.meta.image ? route.meta.image : '',
    },
    {
      property: 'og:url',
      content: 'https://appje-eitje.nl',
    },
    {
      property: 'og:site_name',
      content: 'Appje Eitje',
    },
    {
      property: 'og:locale',
      content: 'nl_NL',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:title',
      content: route.meta.title ? `Appje Eitje - ${route.meta.title}` : 'Appje Eitje',
    },
    {
      property: 'twitter:description',
      content: route.meta.description ? `Appje Eitje - ${route.meta.description}` : 'Appje Eitje',
    },
    {
      property: 'twitter:image',
      content: route.meta.image ? route.meta.image : '',
    },
  ],
})
</script>

<style>
.layout__home {
  background-image: radial-gradient(circle farthest-corner at 32.7% 82.7%, #FEE1BA 8.3%, #FEF5E9 79.4%);
  min-height: 100vh;
}
</style>
