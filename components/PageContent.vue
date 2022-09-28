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

    > .page-content__spacer-large {
      height: calc(10vh + 3.8rem);
    }

    > .page-content__lead {
      font-size: 1.8rem;
    }

    > .page-spacer__large {}

    p {
      margin-top: 1rem;
    }

    a {
      color: currentColor;
    }
  }
</style>
