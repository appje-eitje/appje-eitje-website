<template>
  <div>
    <div class="page-center ___padding-width">
      <PageContent>
        <div class="page-content__spacer-large"></div>
      </PageContent>
      <!-- <ContentDoc path="/about" /> -->
      <ul class="team">
        <li v-for="person in data" :key="person._path" class="team__person">
          <!-- <ContentRenderer :value="lol" /> -->

          <div class="m-card-person">
            <span class="m-card-person__image">
              <span class="m-card-person__image__overflow">
                <img :src="person.image" alt="">
              </span>
            </span>
            <span class="m-card-person__name">
              {{ person.name }}
              <!-- <span v-if="person.nameLabel" class="m-card-person__name__label">
                {{ person.nameLabel }}
              </span> -->
            </span>
            <span class="m-card-person__job">
              {{ person.job['nl'] }}
            </span>
            <span v-if="person.quote['nl']" class="m-card-person__quote">
              “{{ person.quote['nl'] }}”
            </span>
          </div>
        </li>
      </ul>
      <PageContent>
        <div class="page-content__spacer-large"></div>
        <h2 class="heading-page">
          Achtergrond
        </h2>
        <div class="page-content__lead">
          <p>
            Na verschillende teams te hebben opgezet en geleid,
            ontstond bij Melle de wens om een eigen team te kunnen (op)leiden.
            Het idee voor Ik ben Melle <strong>& Co.</strong> was ontstaan.
          </p>
        </div>
        <div class="page-content__spacer"></div>
        <div class="page-content__spacer"></div>
      </PageContent>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Over' })

const { data, refresh } = await useAsyncData('homepage', () => {
  return queryContent('/team').find()
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

.m-card-person {
  margin-bottom: 0.4rem;
  padding: 16px 0 0 0;
}

.m-card-person__image {
  display: block;
  background: #a4e4ae;
  border-radius: 4px;
  padding: 1px 0 0 0;
}

.m-card-person__image__overflow {
  display: block;
  // margin: 10px 10px 0 0;
  margin-top: -16px;
  height: 200px;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.m-card-person__image img {
  display: block;
  width: 100%;
  height: auto;
}

.m-card-person__name {
  margin-top: 0.4rem;
  display: block;
  font-weight: 600;
  font-size: var(--font-size-small);
}

.m-card-person__name__label {
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  display: inline-block;
  font-size: var(--font-size-smaller);
  background: var(--color-grey-100);
  font-weight: 400;
}

.m-card-person__job {
  margin-top: 0.2rem;
  display: block;
  color: var(--color-grey-500);
  font-size: var(--font-size-small);
}

.m-card-person__quote {
  margin-top: 0.4rem;
  display: block;
  font-size: var(--font-size-small);
}
</style>
