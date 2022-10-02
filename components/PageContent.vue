<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.page-content {
  font-size: 1.6rem;

  > .page-content__spacer {
    height: calc(6.2vh + 2rem);
  }

  > .page-content__spacer-smaller {
    height: calc(2vh + 1.6rem);
  }

  > .page-content__spacer-medium {
    height: calc(6.2vh + 1.6rem);
  }

  > .page-content__spacer-large {
    height: calc(10vh + 3.8rem);
  }

  > .page-content__lead {
    font-size: 1.8rem;
  }

  p {
    margin-top: 1rem;
  }

  ul {
    margin-top: 1rem;
    list-style: disc;

    li {
      margin-top: 0.4rem;
    }
  }

  h3 {
    margin-top: 2rem;
  }

  h4 {
    margin-top: 1.4rem;
  }

  a {
    color: currentColor;
  }

  .label-info {
    color: var(--color-grey-500);
  }
}
</style>
