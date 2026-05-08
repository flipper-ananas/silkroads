@AGENTS.md

# Documentation projet

- [Architecture et stack](docs/ARCHITECTURE.md)
- [Design system — couleurs, typographie, composants](docs/DESIGN_SYSTEM.md)
- [Conventions Git et code](docs/CONTRIBUTING.md)

---

# Instructions pour l'implémentation de tickets Linear

Applique ces règles à chaque fois que l'on te demande d'implémenter un ticket Linear.

## Projet

- Next.js 16, TypeScript, Tailwind CSS v4, App Router
- Pages dans `src/app/`, composants dans `src/components/`

## Design system

- Les tokens sont définis dans `tailwind.config.ts`
- Utilise UNIQUEMENT les couleurs `brand-*` — jamais de couleurs Tailwind génériques (`gray-900`, `blue-500`, etc.)
- Couleurs disponibles : `brand-primary` `brand-secondary` `brand-orange` `brand-dark` `brand-light` `brand-muted` `brand-border`
- Composants UI dans `src/components/ui` : `Button`, `Card`, `Container`, `Display`, `H1`, `H2`, `H3`, `BodyLg`, `Body`
- Style : minimaliste, aéré, professionnel SaaS, mobile-first

## Git

1. Crée une branche `feature/SLK-[NUMERO]` depuis `staging`
2. Fais un commit avec le message `feat: [titre du ticket] (SLK-[NUMERO])`
3. Pousse la branche sur GitHub
4. Crée une Pull Request vers `staging`

## Résumé

À la fin de chaque implémentation, fournis un résumé de ce qui a été fait.
