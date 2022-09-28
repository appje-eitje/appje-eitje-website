<template>
  <section>
    <h2 class="heading-section">
      Wie zijn wij?
    </h2>
    <Content>
      <p>
        Het team bestaat uit vrolijke, inspirerende collega's en ZZP'ers die aan high-profile projecten werken.
        Spreekt dit je aan?
        Bekijk <nuxt-link to="/vacatures">
          onze vacatures
        </nuxt-link>
        of doe een <nuxt-link to="/vacatures/sollicitatie">
          open sollicitatie
        </nuxt-link>.
      </p>
    </Content>
    <ul class="team">
      <li v-for="person of team" :key="person.name" class="team__person">
        <CardPerson
          :image="person.image"
          :name="person.name"
          :name-label="person.nameLabel[lang]"
          :job="person.job[lang]"
          :quote="person.quote[lang]"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
const team = []
</script>

<style scoped>
.team {
  margin: 0 calc(var(--page-section-margin-small) / -2);
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.team__person {
  margin: 0 calc(var(--page-section-margin-small) / 2);
  padding: 0;
  flex: 1 1;
  max-width: calc(25% - var(--page-section-margin-small));
  min-width: 26rem;
  width: 100%;
}
</style>
