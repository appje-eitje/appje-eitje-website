<template>
  <div>
    <div class="page-center">
      <PageContent>
        <div class="page-content__spacer-large"></div>
      </PageContent>
      <ul class="team">
        <li v-for="person in data" :key="person._path" class="team__person">
          <div class="card-person">
            <span class="card-person__image">
              <span class="card-person__image__overflow">
                <img :src="person.image" alt="">
              </span>
            </span>
            <span class="card-person__name">
              {{ person.name }}
              <!-- <span v-if="person.nameLabel" class="card-person__name__label">
                {{ person.nameLabel }}
              </span> -->
            </span>
            <span class="card-person__job">
              {{ person.job['nl'] }}
            </span>
            <span v-if="person.quote['nl']" class="card-person__quote">
              “{{ person.quote['nl'] }}”
            </span>
            <!-- <NuxtLink :to="person._path">meer</NuxtLink> -->
          </div>
        </li>
      </ul>
      <PageContent>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Vacatures
        </h2>
        <p>
          Momenteel hebben we twee vacatures:
        </p>
        <ul>
          <li>designer die uitdagende UI / UX scenario's interssant vindt,</li>
          <li>developer die graag wil starten als trainee of junior.</li>
        </ul>
        <p>
          Lijkt dit je wat? Neem <NuxtLink to="/contact">contact</NuxtLink> op
        </p>
      </PageContent>
      <PageContent>
        <div class="page-content__spacer"></div>
        <h2 class="heading-page">
          Achtergrond
        </h2>
        <div class="page-content__lead">
          <p>
            Na verschillende teams te hebben opgezet en geleid,
            ontstond bij Melle de wens om een eigen team te kunnen (op)leiden.
            Het idee voor Ik ben Melle <strong>& Co.</strong> was ontstaan,
              wat later zou overgaan in Appje Eitje.
            Niet alles draait om Melle, en wat een opluchting dat wel niet is.
          </p>
          <p>
            Vandaag de dag werken we met verscheidene teams van onze klanten
              en zijn we samenwerkingen en projecten gestart.
            Een nieuw tijdperk is aangebroken.
          </p>
          <p>
            <NuxtLink to="/dit-doen-we" class="cta-link">Bekijk wat we doen om er meer van te leren</NuxtLink>
          </p>
        </div>
        <div class="page-content__spacer"></div>
        <div class="page-content__spacer"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Team'
})

const { data, refresh } = await useAsyncData('homepage', () => {
  return queryContent('/team').sort({ index: 1 }).find()
})
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables-import-in-all-files.scss";

.team {
  margin: 0 calc(var(--page-section-margin-small) / -2);
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.team__person {
  --margin: var(--page-section-margin-small);

  margin: var(--margin) calc(var(--margin) / 2) 0 calc(var(--margin) / 2);
  padding: 0;
  flex: 0 1 calc(100% - var(--margin));
  width: 100%;

  @media (min-width: $responsive-mobile-landscape) {
    flex: 0 1 calc(50% - var(--margin));
  }

  @media (min-width: $responsive-tablet-portrait) {
    flex: 0 1 calc(33.3% - var(--margin));
  }
}

.card-person {
  margin-bottom: 0.4rem;
  padding: 16px 0 0 0;
}

.card-person__image {
  display: block;
  background: #a4e4ae;
  border-radius: 4px;
  padding: 1px 0 0 0;
}

.card-person__image__overflow {
  display: block;
  // margin: 10px 10px 0 0;
  margin-top: -16px;
  height: 200px;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 231px;
    margin: 0 auto;
  }
}

.card-person__image img {
  display: block;
  width: 100%;
  height: auto;
}

.card-person__name {
  margin-top: 0.4rem;
  display: block;
  font-weight: 600;
  font-size: var(--font-size-small);
}

.card-person__name__label {
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  display: inline-block;
  font-size: var(--font-size-smaller);
  background: var(--color-grey-100);
  font-weight: 400;
}

.card-person__job {
  margin-top: 0.2rem;
  margin-right: -14px;
  display: block;
  color: var(--color-grey-500);
  font-size: var(--font-size-small);
}

.card-person__quote {
  margin-top: 0.4rem;
  display: block;
  font-size: var(--font-size-small);
}
</style>
