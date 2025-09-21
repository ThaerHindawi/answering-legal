## Answering Legal – Web App

A modern marketing site for a legal answering service, built with Next.js App Router, Tailwind CSS v4, and React 19. The app includes a responsive header with mobile menu, animated navigation underline, carousels, and a validated contact form.

### Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (utility-first styling, custom CSS variables in `src/app/globals.css`)
- Swiper 12 (articles carousel)
- React Hook Form + Zod + @hookform/resolvers (form state + schema validation)
- class-variance-authority (Button variants)

### Scripts
```bash
# Run dev server (Turbopack)
npm run dev

# Build (Turbopack)
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

### Project Structure
```text
src/
  app/
    (home-page)/
      components/
        Articles.tsx        # Swiper carousel + Read More toggle
        ContactForm.tsx     # RHF + Zod validation + success state
        DataSecurity.tsx
        Hero.tsx
        IntakeProcess.tsx
        Services.tsx        # Responsive title splitting
      page.tsx              # Landing page sections
    pricing/
      page.tsx              # Simple pricing grid
    globals.css             # Tailwind layer + CSS variables
    layout.tsx              # Root layout mounting shared Layout
  components/
    common/
      Button.tsx           # CVA-based button variants
      Divider.tsx
    layout/
      index.tsx            # Composes Header + Footer around pages
      Footer.tsx           # Responsive, collapsible sections on <lg
      header/
        Header.tsx         # Manages mobile menu state
        NavItems.tsx       # Center-out underline animation
        RightSide.tsx      # Desktop search + mobile hamburger
        MobileMenu.tsx     # Full-screen mobile menu overlay
        Top.tsx
        Logo.tsx
        interfaces/
          NavItem.ts       # Shared nav item type
```

### Notable Features
- Header underline animates from center-out on active items.
- Mobile menu overlay with backdrop, close controls, search, and CTA.
- Footer categories collapse/expand on small screens; always open on large.
- Articles carousel shows peeks on mobile, multiple cards on desktop.
- Contact form validates required fields and email; shows success message.

### Configuration
- Redirects: configured in `next.config.ts` (e.g., `/landing-page` -> `/`).
- Fonts: Google Montserrat loaded in `src/app/layout.tsx`.

### Development Notes
- Components that use hooks or browser APIs are marked as client components via "use client".
- Tailwind classes prefer semantic variables defined in `globals.css`.
- Keep new UI consistent with existing spacing, radii, and color tokens.

### Deployment
Build with `npm run build` and start with `npm start`. Suitable for deployment on Vercel or any Node.js host that supports Next.js 15.