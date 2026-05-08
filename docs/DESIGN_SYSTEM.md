# Design System

Style : minimaliste, aéré, professionnel SaaS. Mobile-first obligatoire.

---

## Couleurs

Toutes les couleurs sont définies dans [`tailwind.config.ts`](../tailwind.config.ts) sous `theme.extend.colors.brand`.  
**Ne jamais utiliser de couleurs Tailwind génériques** (`gray-900`, `blue-500`, etc.).

| Token | Classe Tailwind | Valeur hex | Usage |
|-------|----------------|------------|-------|
| `brand-primary` | `text-brand-primary` / `bg-brand-primary` | `#E8393A` | CTA, liens actifs, accents principaux |
| `brand-secondary` | `text-brand-secondary` / `bg-brand-secondary` | `#2CC4D8` | Accents secondaires, badges, highlights |
| `brand-orange` | `text-brand-orange` / `bg-brand-orange` | `#F5A03C` | Avertissements, tags, accents tertiaires |
| `brand-dark` | `text-brand-dark` | `#1A1A1A` | Titres, texte principal |
| `brand-muted` | `text-brand-muted` | `#6B7280` | Texte secondaire, descriptions, placeholders |
| `brand-light` | `bg-brand-light` | `#F8F9FA` | Fond de sections alternées |
| `brand-border` | `border-brand-border` | `#E5E7EB` | Bordures de cards, séparateurs |

### Règle des fonds de page
- Fond par défaut : `bg-white`
- Sections alternées : `bg-white` → `bg-brand-light` → `bg-white`

---

## Typographie

Définie dans `tailwind.config.ts` sous `theme.extend.fontSize`.

| Classe | Taille | Line-height | Font-weight | Usage |
|--------|--------|-------------|-------------|-------|
| `text-display` | 3.5rem | 1.1 | 700 | Hero title, titre principal de page |
| `text-h1` | 2.5rem | 1.2 | 700 | Titre de section majeur |
| `text-h2` | 2rem | 1.3 | 600 | Titre de sous-section |
| `text-h3` | 1.5rem | 1.4 | 600 | Titre de card ou bloc |
| `text-body-lg` | 1.125rem | 1.7 | 400 | Texte d'introduction, descriptions |
| `text-body` | 1rem | 1.6 | 400 | Texte courant |
| `text-small` | 0.875rem | 1.5 | 400 | Labels, captions, métadonnées |

La police est **Inter** (fallback `system-ui`), déclarée dans `tailwind.config.ts`.

---

## Espacements & formes

| Token | Valeur | Classe |
|-------|--------|--------|
| Espacement section | 6rem | `py-section` |
| Max-width container | 1280px | géré par `<Container>` |
| Border radius md | 1rem | `rounded-xl` |
| Border radius lg | 1.5rem | `rounded-2xl` |

### Ombres

| Classe | Usage |
|--------|-------|
| `shadow-soft` | Cards au repos, éléments flottants discrets |
| `shadow-medium` | Cards au hover, modals |
| `shadow-strong` | Dropdowns, popovers, éléments au premier plan |

---

## Composants UI

Tous importables depuis `@/components/ui`.

```tsx
import { Button, Card, Container, Display, H1, H2, H3, BodyLg, Body } from '@/components/ui'
```

---

### Button

```tsx
<Button variant="primary" size="md" onClick={...}>
  Commencer
</Button>
```

**Props**

| Prop | Type | Défaut | Options |
|------|------|--------|---------|
| `variant` | string | `'primary'` | `'primary'` `'secondary'` `'outline'` `'ghost'` |
| `size` | string | `'md'` | `'sm'` `'md'` `'lg'` |
| `className` | string | `''` | classes Tailwind additionnelles |
| `...rest` | `ButtonHTMLAttributes` | — | tous les attributs HTML natifs |

**Variantes**

```tsx
// Fond rouge — action principale
<Button variant="primary">Créer un compte</Button>

// Fond cyan — action secondaire
<Button variant="secondary">En savoir plus</Button>

// Contour rouge — action tertiaire
<Button variant="outline">Voir les tarifs</Button>

// Transparent — navigation, actions discrètes
<Button variant="ghost">Annuler</Button>
```

**Tailles**

```tsx
<Button size="sm">Petit</Button>   // px-4 py-2
<Button size="md">Moyen</Button>   // px-6 py-3 (défaut)
<Button size="lg">Grand</Button>   // px-8 py-4
```

---

### Card

```tsx
<Card hover>
  <H3>Titre de la card</H3>
  <Body>Description du contenu.</Body>
</Card>
```

**Props**

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | ReactNode | — | Contenu de la card |
| `hover` | boolean | `false` | Active l'effet de survol (élévation + ombre) |
| `className` | string | `''` | Classes Tailwind additionnelles |

```tsx
// Card statique
<Card>
  <p>Contenu</p>
</Card>

// Card interactive avec hover
<Card hover className="cursor-pointer">
  <H3>Feature</H3>
  <Body>Description</Body>
</Card>
```

---

### Container

Centrage automatique avec padding horizontal responsive.  
Max-width : 1280px. Padding : `px-4` (mobile) → `px-6` (sm) → `px-8` (lg).

```tsx
<Container>
  <H1>Titre de section</H1>
</Container>

// Avec classes additionnelles
<Container className="py-24">
  {/* contenu de section */}
</Container>
```

---

### Typographie

Les composants typographiques appliquent automatiquement la couleur correcte (`brand-dark` pour les titres, `brand-muted` pour les corps de texte).

```tsx
// Titres — couleur brand-dark par défaut
<Display>La marketplace des routes de la soie</Display>
<H1>Notre mission</H1>
<H2>Fonctionnalités</H2>
<H3>Rapidité</H3>

// Corps de texte — couleur brand-muted par défaut
<BodyLg>Une description plus large pour les introductions.</BodyLg>
<Body>Texte courant pour le contenu standard.</Body>

// Surcharge de couleur
<H2 className="text-brand-primary">Titre accentué</H2>
<Body className="text-brand-dark">Texte en couleur principale.</Body>
```

---

## Exemple de section complète

```tsx
import { Container, H2, BodyLg, Card, H3, Body, Button } from '@/components/ui'

export function FeaturesSection() {
  return (
    <section className="py-24 bg-brand-light">
      <Container>
        <div className="text-center mb-16">
          <H2>Pourquoi Silkroads ?</H2>
          <BodyLg className="mt-4 max-w-2xl mx-auto">
            Une plateforme pensée pour les équipes modernes.
          </BodyLg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <Card key={f.title} hover>
              <H3>{f.title}</H3>
              <Body className="mt-3">{f.description}</Body>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">Commencer gratuitement</Button>
        </div>
      </Container>
    </section>
  )
}
```
