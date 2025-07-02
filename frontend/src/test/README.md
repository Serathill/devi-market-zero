# Test

Acest director conține configurația și utilitarele necesare pentru testele unitare și de integrare ale aplicației.

## Tehnologii de Testare

- **Vitest**: Framework de testare principal
- **React Testing Library**: Librărie pentru testarea componentelor React
- **jsdom**: Mediu DOM pentru rularea testelor în Node.js
- **@testing-library/user-event**: Utilitare pentru simularea interacțiunilor utilizatorului

## Structura Testelor

Testele sunt organizate folosind metoda de co-locație - fiecare fișier de test este plasat lângă fișierul pe care îl testează, cu extensia `.test.ts` sau `.test.tsx`:

```
src/
  ├── components/
  │   ├── FormInput.tsx
  │   └── FormInput.test.tsx
  ├── contexts/
  │   ├── Web3Context.tsx
  │   └── Web3Context.test.tsx
  ├── hooks/
  │   ├── useFetch.ts
  │   └── useFetch.test.ts
  └── utils/
      ├── performance.ts
      └── performance.test.ts
```

## Convenții de Testare

- Folosiți `describe` pentru a grupa teste conexe
- Folosiți `it` sau `test` pentru a defini cazuri de test individuale
- Folosiți `expect` cu potriviți (matchers) pentru asertări
- Preferați funcții asincrone când testați operații asincrone
- Utilizați `vi.fn()` pentru mock-uri de funcții
- Izolați testele folosind `beforeEach` și `afterEach`

## Exemple

### Testarea unui Component

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render with label and input', () => {
    render(<FormInput id="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });
});
```

### Testarea unui Hook

```tsx
import { renderHook, act } from '@testing-library/react';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test' };
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
      ok: true
    });

    const { result } = renderHook(() => useFetch('/api/test'));

    // Initial state
    expect(result.current.loading).toBe(true);

    // Wait for fetch to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
  });
});
```

## Rularea Testelor

```bash
# Rularea tuturor testelor
npm test

# Rularea testelor cu watch mode
npm test -- --watch

# Rularea testelor pentru un anumit fișier
npm test -- src/components/FormInput.test.tsx

# Rularea testelor pentru un anumit pattern
npm test -- components
```

## Acoperire cu Teste (Coverage)

Pentru a genera un raport de acoperire cu teste:

```bash
npm test -- --coverage
```

Raportul va fi generat în directorul `coverage/`. 