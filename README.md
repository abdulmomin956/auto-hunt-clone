This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
car-market-next
├─ @types
│  ├─ api.type.ts
│  └─ index.type.ts
├─ app
│  ├─ (dashboard)
│  │  ├─ layout.tsx
│  │  └─ my-shop
│  │     ├─ add-listing
│  │     │  └─ page.tsx
│  │     └─ page.tsx
│  ├─ (web)
│  │  ├─ detail
│  │  │  ├─ [slug]
│  │  │  │  └─ [carId]
│  │  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ search
│  │  │  ├─ page.tsx
│  │  ├─ shop
│  │  │  └─ [shopId]
│  │  │     └─ page.tsx
│  ├─ api
│  ├─ favicon.ico
│  ├─ globals.css
│  └─ layout.tsx
├─ components
│  ├─ auth
│  │  ├─ LoginDialog.tsx
│  │  └─ RegisterDialog.tsx
│  ├─ CarCard.tsx
│  ├─ ChatSellerButton.tsx
│  ├─ EmptyState.tsx
│  ├─ FileUploader.tsx
│  ├─ FilterAccordionItem.tsx
│  ├─ FormGenerator.tsx
│  ├─ loader
│  │  └─ fallbackLoader.tsx
│  ├─ logo
│  │  └─ index.tsx
│  ├─ NavBar.tsx
│  ├─ NavBreadCrumb.tsx
│  ├─ shop
│  │  ├─ all-listing.tsx
│  │  └─ shop-info.tsx
│  ├─ skeleton-loader
│  │  └─ carlisting-skeleton.tsx
│  └─ ui
│     ├─ accordion.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ breadcrumb.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ checkbox.tsx
│     ├─ command.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ multi-select.tsx
│     ├─ phone-input.tsx
│     ├─ popover.tsx
│     ├─ progress.tsx
│     ├─ radio-group.tsx
│     ├─ scroll-area.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ skeleton.tsx
│     ├─ slider.tsx
│     ├─ textarea.tsx
│     ├─ toast.tsx
│     └─ toaster.tsx
├─ components.json
├─ constants
│  ├─ car-options.ts
│  ├─ listing-fields.ts
│  └─ server.ts
├─ context
│  └─ query-provider.tsx
├─ hooks
│  ├─ api
│  │  └─ use-current-user.ts
│  ├─ use-debounce.ts
│  ├─ use-fileuploader.tsx
│  ├─ use-filter.tsx
│  ├─ use-login.dialog.ts
│  ├─ use-register.dialog.ts
│  └─ use-toast.ts
├─ lib
│  ├─ app-config.ts
│  ├─ appwrite.ts
│  ├─ fetcher.ts
│  ├─ helper.ts
│  ├─ sendbird.ts
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ images
│     └─ hero-car.png
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
└─ validation
   ├─ auth.validation.ts
   ├─ listing.validation.ts
   └─ upload.validation.ts

```