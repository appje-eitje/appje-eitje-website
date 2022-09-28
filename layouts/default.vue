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
  link: [
    {
      rel: 'canonical',
      href: route.meta.canonical ? route.meta.canonical : 'https://emzadi.nl' + route.path,
    },
  ],
  meta: [
    {
      name: 'title',
      content: route.meta.title ? `Emzadi - ${route.meta.title}` : 'Emzadi - De mooiste uitvaartvideo',
    },
    {
      name: 'description',
      content: route.meta.description ? route.meta.description : 'Maak zelf een persoonlijke herinnering bij de uitvaart van uw dierbare',
    },
    {
      name: 'theme-color',
      content: '#FEF5E9',
    },
    {
      property: 'og:title',
      content: route.meta.title ? `Emzadi - ${route.meta.title}` : 'Emzadi - De mooiste uitvaartvideo',
    },
    {
      property: 'og:description',
      content: route.meta.description ? route.meta.description : 'Maak zelf een persoonlijke herinnering bij de uitvaart van uw dierbare',
    },
    {
      property: 'og:image',
      content: route.meta.image ? route.meta.image : '',
    },
    {
      property: 'og:image:alt',
      content: route.meta.imageAlt ? route.meta.imageAlt : 'Een preview van een uitvaartvideo',
    },
    {
      property: 'og:url',
      content: 'https://emzadi.nl',
    },
    {
      property: 'og:site_name',
      content: 'Emzadi',
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
      content: route.meta.title ? `Emzadi - ${route.meta.title}` : 'Emzadi - De mooiste uitvaartvideo',
    },
    {
      property: 'twitter:description',
      content: route.meta.description ? `Emzadi - ${route.meta.description}` : 'Maak zelf een persoonlijke herinnering bij de uitvaart van uw dierbare',
    },
    {
      property: 'twitter:image',
      content: route.meta.image ? route.meta.image : '',
    },
    {
      property: 'twitter:image:alt',
      content: route.meta.imageAlt ? route.meta.imageAlt : 'Een preview van een uitvaartvideo',
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
