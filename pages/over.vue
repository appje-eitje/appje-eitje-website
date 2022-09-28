<template>
  <div>
    <div class="page-center ___padding-width">
      <!-- <SiteHero /> -->
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <div class="page-content__lead">
          <p>

            Na verschillende teams te hebben opgezet en geleid,
            ontstond bij Melle de wens om een eigen team te kunnen (op)leiden.
            Het idee voor Ik ben Melle <strong>& Co.</strong> was ontstaan.
          </p>
          <p>

            We onderscheiden ons doordat we
            kwaliteitsgericht zijn,
            ons constant ontwikkelen en
            door nauw aan te sluiten bij de teams van onze klanten.
          </p>
        </div>
        <div class="page-content__spacer"></div>
      </PageContent>
    </div>
    <PageSectionTeam :team="team" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const team = await $content('team')
      .without(['body'])
      .sortBy('index', 'asc')
      .fetch()

    return {
      team,
      params
    }
  }
}
</script>
