# 📘 MANUAL DE PADRONIZAÇÃO — Design System (DS)

Este documento estabelece as diretrizes técnicas e padrões de código para o desenvolvimento do Design System utilizando **Next.js**, **Tailwind CSS v4**, **TypeScript** e **Storybook**.

---

## 1. Arquitetura de Pastas (Atomic Design)

Adotamos uma versão simplificada do Atomic Design para organização dos componentes:

- `src/components/atomos`: Componentes básicos e indivisíveis (Ex: Button, Input, Badge).
- `src/components/moleculas`: Combinação de átomos (Ex: FormField, SearchBar).
- `src/components/organismos`: Seções complexas e independentes (Ex: Header, Footer, Sidebar).
- `src/components/layouts`: Layouts estruturais para páginas.

---

## 2. Tipagem (TypeScript)

### interface vs type
| Caso | Usar |
| :--- | :--- |
| Props de componentes | `interface` (permite extensão de tipos HTML) |
| Tipos utilitários / Uniões | `type` (Ex: `type Status = 'idle' \| 'loading'`) |
| Variantes de Estilo | `VariantProps<typeof ...>` (integração com CVA) |

### Exemplo de Props:
```tsx
interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
          VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}
```

---

## 3. Padrão de Componentes React

### Estrutura Obrigatória
1. **forwardRef**: Essencial para acessibilidade e bibliotecas de terceiros.
2. **DisplayName**: Facilita o debug no React DevTools.
3. **CVA (Class Variance Authority)**: Para gestão de variantes Tailwind.

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

// TypeScript ...

const buttonVariants = cva('base-classes...', {
  variants: {
    variant: {
      default: 'bg-primary text-white dark:bg-zinc-100',
      outline: 'border border-input bg-transparent',
    },
  },
  defaultVariants: { variant: 'default' }
})

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
```

---

## 4. Estilização (Tailwind v4)

- **Configuração via CSS**: Não utilize `tailwind.config.js`. Use o arquivo CSS global com a diretiva `@theme`.
- **Dark Mode**: Utilize o modificador `dark:` em conjunto com o `next-themes`.
- **Variáveis de Tema**: Prefira usar variáveis CSS nativas definidas no tema.

```css
@theme {
  --color-brand: #3b82f6;
}

/* No componente */
<div className="text-brand dark:text-white" />
```

---

## 5. Nomeação (Naming Convention)

- **Arquivos**: `camelCase` (Ex: `mainPage.tsx`).
- **Componentes (React)**: `PascalCase` (Ex: `MainFooter`).
- **Constantes**: `SCREAMING_SNAKE_CASE` (Ex: `MAX_RETRIES`).
- **Stories**: `nome.stories.tsx`.
- **Hooks**: `useNome.ts` (Ex: `useTheme.ts`).

---

## 6. Organização do Arquivo (Ordem de Código)

1. `use client` (se necessário).
2. Imports (Externos -> Internos -> Tipos).
3. Definição do `cva` (Variantes).
4. Interface de Props.
5. Componente Principal (`forwardRef`).
6. Exportação do componente e variantes.

---

## 7. Storybook (Documentação)

Todo componente deve ter documentação ativa:
- **Autodocs**: Habilitado via `tags: ['autodocs']`.
- **Variantes**: Uma Story para cada estado importante do componente.
- **Acessibilidade**: Testar o toggle de Dark Mode no preview.

---

## 8. Next.js & App Router

- **"use client"**: Adicionar no topo apenas se o componente usar hooks (`useState`, `useEffect`) ou interatividade.
- **Hydration**: Use `suppressHydrationWarning` no `html` do `layout.tsx` ao usar `next-themes`.

---

## 9. Commits (Conventional Commits)

- `feat(componente):` Novo componente ou funcionalidade.
- `fix(componente):` Correção de bug visual ou técnico.
- `docs:` Alteração em manual ou Storybook.
- `refactor:` Mudança no código que não altera comportamento.

---