# Components

This directory contains reusable UI components that can be used across the application.

## Component Guidelines

- Components should be focused on UI concerns and contain minimal business logic
- Each component should be in its own file with the `.tsx` extension
- Use PascalCase for component file names (e.g., `ProductCard.tsx`)
- All components should have proper TypeScript types for their props
- Include JSDoc comments to document the component's purpose and props

## Available Components

- **Header.tsx**: The application's main navigation header
- **Footer.tsx**: The application's footer component
- **MetaMaskConnect.tsx**: A component for connecting to MetaMask wallet
- **PaginationControls.tsx**: Controls for paginating through lists of data
- **ProductCard.tsx**: Card component for displaying product information
- **FormInput.tsx**: Accessible form input component with label, error, and help text support

## Accessibility

All components should follow accessibility best practices:

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigability
- Maintain sufficient color contrast
- Provide text alternatives for non-text content

See the `FormInput` component for an example of proper accessibility implementation.

## Testing

Components should have corresponding test files named `ComponentName.test.tsx`.

Run component tests with:

```bash
npm test src/components
``` 