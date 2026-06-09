# QPS Shop Design System

## Direction
**Swiss Precision Commerce**: a premium, editorial storefront that feels engineered, quiet, fast, and trustworthy. The shop should read less like a generic template and more like a digital flagship: precise spacing, strong product imagery, restrained motion, excellent mobile ergonomics, and clear conversion paths.

## Product Principles
- Make the core shopping path feel effortless: discover, inspect, add to cart, checkout.
- Use editorial hierarchy to make commodity demo products feel curated and intentional.
- Keep pages fast and calm. No aggressive popups, countdowns, or noisy discount patterns.
- Prioritize mobile: thumb-safe controls, sticky commerce actions, short forms, and readable cards.
- Build on Medusa patterns: region-aware pricing, publishable keys, cart feedback, shipping clarity, Stripe checkout.

## Visual Language
- **Tone:** refined industrial, Swiss editorial, technical luxury.
- **Composition:** asymmetrical but ordered; large whitespace; dense product grids only where useful.
- **Surfaces:** warm off-white base, graphite text, hairline borders, subtle elevation, soft gradient/noise accents.
- **Shape:** mostly sharp or lightly rounded corners; reserve larger radius for cards and checkout surfaces.
- **Motion:** purposeful micro-interactions only: hover lift, add-to-cart feedback, drawer transitions, staggered page sections.

## Color Tokens
- `ink`: `#111315` for primary text.
- `graphite`: `#2B2F33` for secondary high-contrast text.
- `muted`: `#70767D` for tertiary text.
- `paper`: `#FAF8F3` for page background.
- `surface`: `#FFFFFF` for cards and forms.
- `line`: `#E7E1D8` for borders.
- `steel`: `#8E99A4` for technical UI accents.
- `signal`: `#C47A3A` for primary commerce CTAs.
- `signal-dark`: `#8F4F21` for hover/pressed.
- `success`: `#2F6B4F`.
- `danger`: `#B43D32`.

Contrast targets:
- Body text must meet WCAG AA 4.5:1.
- Interactive borders and icon-only controls must meet at least 3:1.
- Never communicate price, stock, or validation by color alone.

## Typography
- Use a restrained type system with clear contrast between editorial headings and utilitarian commerce labels.
- Preferred stack until custom fonts are added:
  - Display/headings: `ui-serif`, `Georgia`, serif.
  - Body/UI: `Arial`, `Helvetica`, sans-serif currently allowed as fallback only; replace with a deliberate font pair later.
- Type scale:
  - Hero: 56-88 desktop, 40-52 mobile.
  - H1: 40-56 desktop, 32-40 mobile.
  - H2: 28-40.
  - Body: 16-18, line-height 1.55-1.7.
  - Labels: 11-13 uppercase, letter-spaced.
- Use tabular numbers for prices.

## Layout
- Mobile first, then 768, 1024, 1440 breakpoints.
- Standard content gutters:
  - Mobile: 16px.
  - Tablet: 24px.
  - Desktop: 32-48px.
- Max content width: 1440px for immersive pages, 1120px for text-heavy pages.
- Section rhythm: 48px mobile, 80-120px desktop.
- Sticky header and sticky purchase controls must not obscure content.

## Motion
- Use Motion.dev for client-side UI animation only; keep data fetching in Server Components.
- Default easing: `[0.16, 1, 0.3, 1]` for calm, precise movement.
- Default durations:
  - Quick feedback: 180-260ms.
  - Section reveal: 450-650ms.
  - Drawer/menu transitions: 240-360ms.
- Prefer opacity, transform, and scale; avoid animating layout-heavy properties.
- Staggered reveals should be subtle and limited to first-view content.
- Respect `prefers-reduced-motion`; if reduced motion is enabled, use opacity-only or no motion.
- Cart and checkout animations must never block actions or hide validation.

## Component Rules
- Product cards need visible price, title, image, and clear touch target.
- Product detail pages need sticky buy box on desktop and sticky add-to-cart on mobile.
- Cart updates must provide visible feedback and ideally `aria-live` messaging.
- Checkout must show trust cues: shipping, returns, payment security, region/currency.
- Forms need visible labels, inline errors, autocomplete, and disabled/loading states.
- Empty states must explain the state and offer a next action.

## Navigation
- Primary nav: Store, Categories, Collections, About/Impressum as needed.
- Mobile nav should be thumb-friendly with no hover-only interactions.
- Preserve the country code in links (`/ch/...`) and never create accidental nested country routes like `/dk/ch`.
- Header should remain calm: cart, account, and menu are always reachable.

## Performance
- Default to Server Components.
- Use client components only for cart, variant selection, menus, payment, and dynamic interactions.
- Avoid heavy animation libraries unless needed.
- Keep product images lazy below the fold and reserve aspect ratio space.
- Avoid build-time dependencies on live backend data for dynamic catalog pages.

## Accessibility
- Keyboard navigation must work through nav, product grid, cart, checkout, and dialogs.
- Focus rings must remain visible.
- Touch targets minimum 44x44px.
- Respect `prefers-reduced-motion`.
- Provide alt text or decorative handling for product/editorial images.

## Implementation Order
1. Global tokens and base styling.
2. Header/navigation and mobile menu.
3. Homepage editorial hero and featured products.
4. Store grid and product cards.
5. Product detail page and add-to-cart flow.
6. Cart and checkout polish.
7. Accessibility/performance pass.
