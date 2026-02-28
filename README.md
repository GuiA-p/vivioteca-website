# 📚 Vivioteca

Uma base profissional **full-stack** para aplicações de descoberta e avaliação de livros, construída com foco em **performance**, **escalabilidade** e **design system modular**.


---

## 🚀 Quick Start

Prepare o ambiente e suba a aplicação em menos de **5 minutos**.

### Clone e Instale
```bash
git clone https://github.com/GuiA-p/vivioteca.git
cd vivioteca
npm install
```

### Infraestrutura (Docker)
```bash
docker-compose up -d
```

### Banco de Dados
```bash
npx prisma migrate dev
```

### Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em:
- **Aplicação:**   : 'Ainda não disponível para visualização :/
- **Storybook:**   : https://storybook-static-eosin.vercel.app/

---

## 🏗️ Arquitetura e Decisões Técnicas

Este projeto não é apenas uma aplicação, mas um **boilerplate de alta performance**, pensado para escalar com qualidade.

### Tech Stack Core

- **Framework:** Next.js 15 (App Router) — SSR, Streaming e Server Actions
- **Linguagem:** TypeScript com tipagem estrita (sem `any`)
- **Estilização:** Tailwind CSS v4 (CSS-first engine)
- **ORM:** Prisma + PostgreSQL
- **UI Foundation:** Radix UI + CVA (Class Variance Authority)

---

## 📐 Padrões de Código (Governance)

Para manter escalabilidade e consistência em times maiores, o projeto utiliza:

- **Import Sorting:** Organização automática de imports
- **Tailwind Linter:** Ordem oficial de classes e prevenção de duplicatas
- **Atomic Design Adaptado:**
  - `/atomos` → componentes simples e puramente visuais, sem regra de negócio.
  Ex: Button, Input, Badge.

  - `/moleculas` → combinação de átomos com lógica leve e reutilizável.
  Ex: campos de formulário, buscas, pequenos agrupamentos.

  - `/organismos` → componentes mais complexos que concentram regras de negócio e comportamento.
  Ex: listas, headers, seções completas da interface.

  - `/layout` → componentes responsáveis pela estrutura e composição das páginas.
  Ex: sidebar, wrappers e containers de layout.

---

## 🎨 Design System

O **Storybook** é utilizado como *Single Source of Truth* para UI.

- **Variantes Dinâmicas:** Controladas via `cva` no próprio componente
- **Helper de Classes:** Função `cn()` (`clsx + tailwind-merge`)
- **Design Tokens:** Definidos via variáveis CSS em `globals.css` (Tailwind v4)

---

## 📂 Estrutura de Pastas

```txt

```

---

## 🛠️ Scripts Disponíveis

- `npm run dev` — Inicia o Next.js em modo desenvolvimento
- `npm run storybook` — Documentação e visualização do Design System
- `npm run lint` — Verificação de padrões com ESLint
- `npm run format` — Formatação automática do projeto
- `npm run db:studio` — Interface visual do Prisma para o banco

---

## 🎯 Roadmap de Evolução

- [ ] Implementação de **Auth.js (NextAuth)**
- [ ] Integração com **Google Books API**
- [ ] Testes unitários com **Vitest**
- [ ] Pipeline de **CI/CD com GitHub Actions**

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.
