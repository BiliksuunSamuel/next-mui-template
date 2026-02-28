# Next.js MUI Template

A production-ready starter template for building full-stack web applications with Next.js, Material UI, Redux Toolkit, and TypeScript. It ships with a complete theme system (light/dark), a typed HTTP client, 24 reusable UI components, and state persistence out of the box.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [MUI Material 7](https://mui.com) + [MUI X Date Pickers](https://mui.com/x/react-date-pickers/) |
| State Management | [Redux Toolkit 2](https://redux-toolkit.js.org) + [Redux Persist](https://github.com/rt2zz/redux-persist) |
| HTTP Client | [Axios](https://axios-http.com) (wrapped in a typed client) |
| Styling | MUI theme system + [Tailwind CSS v4](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) + MUI icons |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Date Utilities | [Day.js](https://day.js.org) |
| Phone Input | [mui-tel-input](https://github.com/viclafouch/mui-tel-input) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
next-mui-template/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, Redux wrapper)
│   ├── page.tsx                # Home page (theme toggle demo)
│   ├── globals.css             # Global styles
│   ├── AppThemeProvider.tsx    # MUI ThemeProvider driven by Redux
│   └── ReduxProvider.tsx       # Redux store + PersistGate wrapper
│
├── api/                        # State management & HTTP layer
│   ├── features/               # Redux slices
│   │   ├── appReducer.ts       # App state (theme)
│   │   ├── responseReducer.ts  # Shared loading/error/message state
│   │   └── index.ts            # Barrel export
│   ├── hooks/
│   │   └── index.ts            # useAppDispatch, useAppSelector
│   ├── http-client/
│   │   └── index.ts            # Typed Axios wrapper
│   └── store/
│       ├── index.ts            # Store setup, types, persistor
│       ├── reducer.ts          # Root reducer
│       └── thunksResolver.ts   # Async thunk state handler
│
├── components/
│   └── ui/                     # 24 reusable UI components
│
├── configuration/
│   └── index.ts                # API base URL config
│
├── interface/                  # TypeScript interfaces (API, HTTP, Redux)
│   └── index.ts
│
├── lib/
│   └── utils.ts                # Date, currency, UUID utilities
│
├── models/                     # TypeScript model interfaces (I-prefixed)
│   ├── index.ts
│   └── reducerStateModels.ts
│
├── theme/
│   └── index.ts                # Full MUI theme (light + dark)
│
├── types/
│   └── index.ts                # HttpMethods, HttpContentTypes, IconType
│
└── proxy.ts                    # Next.js middleware (auth guard placeholder)
```

---

## Features

### Theme System (Light / Dark)

The theme is configured in [theme/index.ts](theme/index.ts) and managed via Redux. It persists across page refreshes using `redux-persist`.

**Switching the theme:**

```tsx
import { setTheme } from "@/api/features";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

const dispatch = useAppDispatch();
const theme = useAppSelector((s) => s.AppReducer.theme);

dispatch(setTheme(theme === "light" ? "dark" : "light"));
```

**Custom semantic colors** (defined in the theme alongside MUI's standard palette):

| Name | Color | Intended Use |
|---|---|---|
| `academic` | Purple `#9333ea` | Grades, academic records |
| `payment` | Emerald `#059669` | Financial transactions |
| `attendance` | Amber `#ca8a04` | Attendance tracking |
| `communication` | Teal `#0d9488` | Messaging features |

Both light and dark variants are fully defined. Typography uses **Inter** with system font fallbacks and a 14px base size.

---

### State Management

The Redux store is configured in [api/store/index.ts](api/store/index.ts). Two slices are included out of the box:

**`AppReducer`** — app-level state:
- `theme: "light" | "dark"`

**`ResponseReducer`** — shared async state:
- `loading: boolean`
- `error: string | null`
- `message: string | null`
- `title: string | null`

Both slices are persisted to `localStorage`.

**Type-safe hooks** (always use these instead of raw `useDispatch`/`useSelector`):

```ts
import { useAppDispatch, useAppSelector } from "@/api/hooks";
```

**Adding a new slice:**

1. Create `api/features/myFeatureReducer.ts` with `createSlice`
2. Add it to `api/store/reducer.ts`
3. Optionally add its key to the `whitelist` in `api/store/index.ts` to persist it

---

### HTTP Client

Located at [api/http-client/index.ts](api/http-client/index.ts). A typed wrapper around Axios with:

- Bearer token injection
- Base URL from `configuration/index.ts`
- Custom header support
- JSON and `multipart/form-data` content types
- Structured error messages with nested fallback parsing

**Usage:**

```ts
import HttpClient from "@/api/http-client";

const data = await HttpClient<MyResponseType>({
  method: "get",
  path: "/users",
  token: "your-bearer-token",       // optional
  body: { name: "Alice" },          // optional (for POST/PUT/PATCH)
  contentType: "application/json",  // optional, defaults to JSON
});
```

**Changing the API base URL:**

Edit [configuration/index.ts](configuration/index.ts):

```ts
export const getConfiguration = () => ({
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:2026",
});
```

---

### Middleware / Auth Guard

[proxy.ts](proxy.ts) is the Next.js middleware file. It runs on every request and is set up as a scaffold for authentication guards.

**To add authentication:**

```ts
// proxy.ts
export async function middleware(request: NextRequest) {
  const session = await getSession(); // your auth logic
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
```

The `matcher` config already excludes `_next` static assets and API routes from middleware processing.

---

## Component Library

All 24 components live in [components/ui/](components/ui/). They are built on MUI and follow the project's theme.

### Layout

| Component | Description |
|---|---|
| `ContentContainer` | Full-height `Stack` with padding and background color |
| `RowContainer` | Horizontal flex row |
| `Flex` | Generic flex wrapper |

### Inputs

| Component | Description |
|---|---|
| `CustomInput` | Text field with label, password toggle, and validation display |
| `CustomSelect` | Dropdown with placeholder support |
| `CustomDatePicker` | MUI X date picker |
| `CustomTimePicker` | MUI X time picker |
| `CustomSwitch` | Toggle switch |
| `PhoneNumberInput` | International phone input (via `mui-tel-input`) |
| `MultiValueAutocompleteInput` | Multi-select autocomplete chip input |
| `SearchInput` | Debounced search field |

### Display

| Component | Description |
|---|---|
| `CustomAlert` | Styled alert (success/error/warning/info) with dismiss |
| `Loader` | Full-screen animated loader overlay |
| `StatCard` | Stat display card with icon, value, and label |
| `Label` | Form label |
| `Logo` | Logo component |

### Actions & Navigation

| Component | Description |
|---|---|
| `PrimaryButton` | Main CTA button — variants: `contained`, `outlined`, `text`; supports loading spinner |
| `CustomIconButton` | Icon-only button with custom styling |
| `CustomCloseButton` | Dismiss/close button (X icon) |

### Overlays & Navigation

| Component | Description |
|---|---|
| `CustomDialog` | Modal dialog wrapper |
| `CustomMenu` | Menu container |
| `CustomMenuItem` | Individual menu item |
| `CustomTabPanel` | Tab panel container |
| `CustomPaginationView` | Pagination control with record count display |

---

## Utilities

Located in [lib/utils.ts](lib/utils.ts):

```ts
import {
  cn,                    // Merge Tailwind + clsx classes
  generateId,            // Generate UUID (no hyphens)
  toLongDateString,      // "January 15, 2025"
  toLongDateTimeString,  // "January 15, 2025 2:30 PM"
  toShortDateString,     // "01/15/25"
  toShortDateTimeString, // "01/15/25 14:30:00"
  toShortTimeString,     // "14:30"
  toCurrencyString,      // "GHS 1,234.56" (default currency: GHS)
} from "@/lib/utils";
```

---

## TypeScript Reference

### Key Types (`types/index.ts`)

```ts
type HttpMethods = "get" | "post" | "patch" | "delete" | "head" | "put";
type HttpContentTypes = "application/json" | "multipart/form-data";
type IconType = typeof SvgIcon | LucideIcon;
```

### Key Interfaces (`interface/index.ts`)

```ts
interface BaseReducerState {
  message: string | null;
  error: string | null;
  loading: boolean;
  title: string | null;
}

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface PagedResults<T> {
  totalPages: number;
  totalCount: number;
  results: T[];
}

interface BaseFilter {
  page: number;
  pageSize: number;
  query?: string;
}
```

### Base Entity Schema (`interface/index.ts`)

```ts
interface BaseSchema {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}
```

---

## Path Aliases

The `@/` alias maps to the project root (configured in [tsconfig.json](tsconfig.json)):

```ts
import { useAppSelector } from "@/api/hooks";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { toCurrencyString } from "@/lib/utils";
```

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Docker / Self-hosted

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_API_URL` in your environment to point at your backend API.
