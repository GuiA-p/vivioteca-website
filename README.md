# 📚 Vivioteca

<p align="center">
  <img src="https://raw.githubusercontent.com/GuiA-p/vivioteca-website/main/public/banner.png" alt="Vivioteca Banner" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/github/workflow/status/GuiA-p/vivioteca/ci?style=for-the-badge&logo=github-actions&labelColor=111&color=6366f1" alt="CI Status">
  <img src="https://img.shields.io/badge/Next.js-15%2F16-black?style=for-the-badge&logo=next.js&labelColor=111" alt="Next.js">
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css&labelColor=111" alt="Tailwind CSS">
  <img src="https://img.shields.io/github/license/GuiA-p/vivioteca?style=for-the-badge&labelColor=111&color=4ade80" alt="License">
</p>

---

## ⚡ Sobre o Projeto

A **Vivioteca** não é apenas um catálogo de livros; é um **boilerplate de nível enterprise** projetado para ser o ponto de partida de aplicações SaaS escaláveis. Construída com a "Bleeding Edge" do ecossistema React, ela foca em **Type-Safety de ponta a ponta**, **Componentização Atômica** e **Performance Brutal**.

> [!TIP]
> **Destaque:** O projeto utiliza **Tailwind CSS v4**, aproveitando a nova engine baseada em Rust para builds instantâneos e suporte nativo a CSS Variables.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Papel Crítico |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | SSR, Streaming & Server Actions |
| **Linguagem** | TypeScript | Tipagem estrita e inferência de banco |
| **Estilização** | Tailwind CSS v4 + Radix UI | Design System modular e acessível |
| **Persistência** | PostgreSQL + Prisma ORM | Modelagem de dados e Type-safe queries |
| **Qualidade** | Vitest + Storybook | Testes unitários e documentação de UI |
| **Infra** | Docker + GitHub Actions | Containerização e CI/CD |

---

## 🚀 Quick Start (DX-First)

Inicie o ambiente de desenvolvimento em segundos:

### 1. Preparação
```bash
# Clone o repositório
git clone https://github.com/GuiA-p/vivioteca.git && cd vivioteca

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env
```

### 2. Infraestrutura e Banco
```bash
# Sobe o banco PostgreSQL via Docker
docker compose up -d

# Sincroniza o schema e gera o client do Prisma
npx prisma migrate dev
```

### 3. Execução
```bash
npm run dev
```

| Serviço | URL Local | Link de Produção |
| :--- | :--- | :--- |
| **Aplicação** | `http://localhost:3000` | [vivioteca.vercel.app](https://vivioteca.vercel.app/) |
| **Storybook** | `http://localhost:6006` | [storybook.vivioteca](https://storybook-static-eosin.vercel.app/) |

---

## 📐 Arquitetura e Governança

O projeto segue princípios de **Clean Code** e **Atomic Design Adaptado**, garantindo que o código permaneça sustentável mesmo com o crescimento do time.

### Estrutura de Diretórios
```bash
├── app/                # Rotas, Layouts e Server Actions (Next.js)
├── components/         # Design System (Atomic Design)
│   ├── atomos/         # Botões, inputs, badges (puros)
│   ├── moleculas/      # Combinação de átomos (search bar, cards)
│   ├── organismos/     # Seções complexas (grids, listas de livros)
│   └── layout/         # Estruturas globais (navbars, footers)
├── services/           # Camada de abstração de APIs externas/internas
├── lib/                # Configurações de bibliotecas (Prisma Client, etc)
├── utils/              # Funções auxiliares e helpers puramente lógicos
├── types/              # Definições de interfaces e tipos TypeScript globais
├── styles/             # CSS Global e configurações de tema (Tailwind v4)
├── prisma/             # Schema do banco de dados e sementes (seeds)
└── public/             # Ativos estáticos (imagens, ícones)
```

### Padrões de Código
- **`cn()` Utility:** Combinação inteligente de classes com `tailwind-merge` e `clsx`.
- **CVA (Class Variance Authority):** Gerenciamento de variantes de UI de forma tipada.
- **Strict Linting:** ESLint configurado para auto-organização de imports e ordem de classes Tailwind.

---

## 🧪 Qualidade e Testes

Garantimos a estabilidade através de múltiplas camadas de validação:

- **Unitários:** `npm run test` (Vitest)
- **Componentes:** Storybook para isolamento visual.
- **E2E:** Playwright para fluxos críticos de usuário.
- **Linting:** `npm run lint` para manter a consistência estética do código.

---

## 🚀 CI/CD & DevOps

Nossa pipeline de integração contínua (GitHub Actions) valida cada Pull Request:
1. **Lint & Typecheck:** Garante que nenhum erro de tipo chegue à branch principal.
2. **Unit Tests:** Valida a lógica de negócio.
3. **Docker Build:** Verifica se a imagem de produção está íntegra.
4. **Deploy:** Deploy automático para Vercel (Frontend) e atualização de imagem no Docker Hub.

---

## 🎯 Roadmap de Evolução

- [ ] **Auth.js Integration:** Suporte nativo a OAuth e credenciais.
- [ ] **Google Books API:** Integração de busca em tempo real.
- [ ] **Caché Inteligente:** Implementação de `revalidateTag` para atualizações otimistas.
- [ ] **Acessibilidade (A11y):** Auditoria completa para conformidade WCAG.

---

## 📄 Licença

Este projeto é open-source e está licenciado sob a [MIT License](LICENSE). 

---

<p align="center">
  Desenvolvido com 💜 por <a href="https://github.com/GuiA-p">GuiA-p</a>
</p>

---
