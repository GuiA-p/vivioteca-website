# 📚 Vivioteca

Uma base profissional **full-stack** para aplicações de descoberta e avaliação de livros, construída com foco em **performance**, **escalabilidade** e **design system modular**.

![Stack](https://img.shields.io/badge/Stack-Next.js%2015%20%7B%2B%7D%20Prisma-black)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

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
- **Aplicação:** http://localhost:3000  
- **Storybook:** http://localhost:6006  

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
  - `/ui` → componentes puramente visuais
  - `/shared` → componentes com regra de negócio

---

## 🎨 Design System

O **Storybook** é utilizado como *Single Source of Truth* para UI.

- **Variantes Dinâmicas:** Controladas via `cva` no próprio componente
- **Helper de Classes:** Função `cn()` (`clsx + tailwind-merge`)
- **Design Tokens:** Definidos via variáveis CSS em `globals.css` (Tailwind v4)

---

## 📂 Estrutura de Pastas

```txt
src/
├── app/              # Routes, Layouts e Server Actions
├── components/
│   ├── ui/           # Átomos do Design System (Button, Input)
│   ├── shared/       # Organismos (Navbar, Sidebar)
│   └── forms/        # Lógica de formulários (Zod + React Hook Form)
├── hooks/            # Hooks customizados e reutilizáveis
├── lib/              # Singletons e configurações globais (Prisma, Auth)
├── services/         # Camada de Acesso a Dados (DAL)
└── utils/            # Funções puras e utilitários
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

- [x] Implementação de **Auth.js (NextAuth)**
- [ ] Integração com **Google Books API**
- [ ] Testes unitários com **Vitest**
- [ ] Pipeline de **CI/CD com GitHub Actions**

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.
