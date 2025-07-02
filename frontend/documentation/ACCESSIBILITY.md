# Accessibility Guidelines

This document outlines the accessibility (a11y) standards and practices implemented in the DeviMarket Zero frontend application to ensure our product is usable by everyone, including people with disabilities.

## Core Principles

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and operation of the user interface must be understandable.
4. **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.

## Implementation

### Semantic HTML

Always use the most appropriate HTML element for the job:

- Use `<button>` for clickable actions, not `<div>` with click handlers
- Use `<nav>` for navigation menus
- Use heading elements (`<h1>` through `<h6>`) in a logical hierarchy
- Use `<table>` for tabular data with appropriate `<th>`, `<caption>`, etc.
- Use `<form>`, `<label>`, and form elements for user input

Example from our codebase:

```tsx
// Good
<button 
  onClick={handleClick}
  aria-label="Add to cart"
>
  Add to cart
</button>

// Bad - avoid this
<div 
  onClick={handleClick}
  className="button-like"
>
  Add to cart
</div>
```

### Keyboard Navigation

All interactive elements should be operable using only a keyboard:

- Ensure proper focus order with `tabIndex`
- Provide visible focus indicators
- Use keyboard event handlers where appropriate

### ARIA Attributes

Use ARIA (Accessible Rich Internet Applications) to enhance accessibility:

- `aria-label` - Provide an accessible name for elements without visible text
- `aria-labelledby` - Reference another element as the label
- `aria-describedby` - Link to a description element
- `aria-expanded` - Indicate if a dropdown or similar control is expanded
- `aria-hidden` - Hide decorative elements from screen readers
- `aria-live` - Announce dynamic content changes
- `role` - Define the purpose of an element when HTML semantics aren't sufficient

Example from our `FormInput` component:

```tsx
<input
  id={id}
  aria-invalid={hasError}
  aria-required={required}
  aria-describedby={getAriaDescribedBy()}
  {...inputProps}
/>

{hasError && (
  <p 
    id={errorId} 
    className="mt-1 text-sm text-red-600" 
    role="alert"
  >
    {error}
  </p>
)}
```

### Color and Contrast

- Ensure sufficient color contrast (WCAG AA requires 4.5:1 for normal text, 3:1 for large text)
- Never use color alone to convey meaning
- Provide additional indicators (icons, text) alongside color-based information

### Images and Media

- All images must have appropriate `alt` text
- Decorative images should use `alt=""`
- Video content should have captions and transcripts when possible

### Form Accessibility

We've created accessible form components like `FormInput` that:

- Associate labels with inputs using `htmlFor` and `id`
- Provide error messages with `role="alert"`
- Use `aria-invalid` to indicate validation errors
- Communicate required fields both visually and with `aria-required`
- Provide help text linked with `aria-describedby`

### Testing Accessibility

- Keyboard navigation testing: Ensure all interactive elements can be accessed and operated using only the keyboard
- Screen reader testing: Test with VoiceOver (macOS), NVDA or JAWS (Windows)
- Automated testing: Use tools like axe-core or lighthouse
- Color contrast analysis: Use tools like WebAIM's contrast checker

## Resources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility) 