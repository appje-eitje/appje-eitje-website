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

  .cta-link {
    display: inline-flex;
    align-items: baseline;

    &::before {
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='5' y1='1' y2='1' stroke='%2300BF1F' stroke-width='2'/%3E%3Cpath d='M9 5L4 5' stroke='%2300BF1F' stroke-width='2'/%3E%3C/svg%3E");
      width: 9px;
      height: 6px;
      margin-right: .25em;
      align-self: center;
    }
  }

  .label-info {
    color: var(--color-grey-500);
  }
}
</style>
