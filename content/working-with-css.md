# Way of working with CSS

## CSS, Sass or SCSS?
SCSS is preferred, this enables the use of variables for media queries and it enables nesting.

## Nesting
Nesting is allowed for two levels and only for modifiers like hover states and pseudo elements.

### Use of `&`
The Ampersand symbol `&`  can only be used in these cases:
- Pseudo classes
```css
.class {
  &:hover {
  }
}
```
- Modifiers
```css
.class {
  &.-success {
   }
}
```
- Although not preferred, nesting classes on the same element:
```css
.class {
  &.another-class {
  }
}
```

## Naming

### BEM
We're using [BEM](https://getbem.com/) in most cases, but limited to mostly one element and/or modifier.

#### Modifiers
Modifiers like `success` must be used with an alternative use of BEM. 
Instead of `.classname--success` we use one hyphen and nested like `&.-success`.
Two hyphens are not allowed at the start of class name.

### Semantics
Class names should convey meaning, longer class names are acceptable when it means it's more clear where the class applies to.

## Variables
Use CSS variables where possible and only SCSS variables for media queries or other cases where CSS variables cannot be used.

## Global CSS
When using a framework like Vue, limit the use of global CSS to atomic elements that are not components and/or live on every page `.screen-reader-text`.

### Reset
We're using a small [reset.css](https://github.com/appje-eitje/appje-eitje-website/blob/develop/assets/css/reset.css) that resets some browser specific styling like margins and paddings.
