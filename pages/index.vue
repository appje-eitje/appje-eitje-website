<template>
  <main>
    <div class="content">
      <h1>Appje Eitje</h1>
      <p>
        Wij verzorgen kwalitatieve, toegankelijke front-end toepassingen: software, applicaties en websites.
      </p>
      <p>Naast het ontwikkelen van eigen software, staan wij ook klaar om uw idee tot een succes te maken.</p>
      <a href="mailto:josee.wouters@ikbenmelle-en-co.nl">Neem direct contact op</a>
    </div>
    <PersonWithApp/>
  </main>
</template>

<script>
import PersonWithApp from 'assets/PersonWithApp'

export default {
  name: 'IndexPage',
  components: { PersonWithApp }
}
</script>

<style>
main {
  background-color: white;
  min-height: calc(100vh - 6rem);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem;
  font-size: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

@media (min-width: 64em) {
  main {
    flex-wrap: nowrap;
  }
}

h1 {
  font-size: 3.5rem;
  margin-bottom: .5em;
}

svg {
  max-width: 100%;
  height: 100%;
}

a {
  display: inline-block;
  background-color: var(--color-cta);
  color: #fff;
  text-decoration: none;
  padding: 1em;
  margin: 1.5em 0;
  transition: all .25s ease-in-out;
  border-radius: 0;
}

a:hover {
  border-radius: 35px;
}
</style>
