import { createTheme, alpha, colors } from "@mui/material";

export default (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light mode - Professional, trustworthy school interface
            primary: {
              50: "#eff6ff",
              100: "#dbeafe",
              200: "#bfdbfe",
              300: "#93c5fd",
              400: "#60a5fa",
              500: "#3b82f6", // Blue - Trust, stability, professionalism
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              main: "#2563eb",
              light: "#60a5fa",
              dark: "#1e40af",
              contrastText: "#ffffff",
            },
            secondary: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b", // Slate - Neutral, modern
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
              main: "#475569",
              light: "#94a3b8",
              dark: "#334155",
              contrastText: "#ffffff",
            },
            success: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e", // Green - Positive feedback, attendance
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
              main: "#16a34a",
              light: "#4ade80",
              dark: "#15803d",
              contrastText: "#ffffff",
            },
            warning: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316", // Orange - Warnings, pending approvals
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              main: "#ea580c",
              light: "#fb923c",
              dark: "#c2410c",
              contrastText: "#ffffff",
            },
            error: {
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444", // Red - Absences, overdue fees, failures
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              main: "#dc2626",
              light: "#f87171",
              dark: "#b91c1c",
              contrastText: "#ffffff",
            },
            info: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9", // Sky blue - Information, announcements
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
              main: "#0284c7",
              light: "#38bdf8",
              dark: "#0369a1",
              contrastText: "#ffffff",
            },
            // Custom school management colors
            academic: {
              50: "#faf5ff",
              100: "#f3e8ff",
              200: "#e9d5ff",
              300: "#d8b4fe",
              400: "#c084fc",
              500: "#a855f7", // Purple - Academic performance, grades
              600: "#9333ea",
              700: "#7e22ce",
              800: "#6b21a8",
              900: "#581c87",
              main: "#9333ea",
              light: "#c084fc",
              dark: "#7e22ce",
              contrastText: "#ffffff",
            },
            payment: {
              50: "#ecfdf5",
              100: "#d1fae5",
              200: "#a7f3d0",
              300: "#6ee7b7",
              400: "#34d399",
              500: "#10b981", // Emerald - Payments, financial transactions
              600: "#059669",
              700: "#047857",
              800: "#065f46",
              900: "#064e3b",
              main: "#059669",
              light: "#34d399",
              dark: "#047857",
              contrastText: "#ffffff",
            },
            attendance: {
              50: "#fef9c3",
              100: "#fef08a",
              200: "#fde047",
              300: "#facc15",
              400: "#eab308",
              500: "#ca8a04", // Amber - Attendance tracking
              600: "#a16207",
              700: "#854d0e",
              800: "#713f12",
              900: "#713f12",
              main: "#ca8a04",
              light: "#facc15",
              dark: "#854d0e",
              contrastText: "#ffffff",
            },
            communication: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#14b8a6", // Teal - Messaging, communication
              600: "#0d9488",
              700: "#0f766e",
              800: "#115e59",
              900: "#134e4a",
              main: "#0d9488",
              light: "#2dd4bf",
              dark: "#0f766e",
              contrastText: "#ffffff",
            },
            grey: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
            },
            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },
            text: {
              primary: "#0f172a",
              secondary: "#475569",
              disabled: "#94a3b8",
            },
            divider: "#e2e8f0",
          }
        : {
            // Dark mode - Professional dark theme
            primary: {
              50: "#eff6ff",
              100: "#dbeafe",
              200: "#bfdbfe",
              300: "#93c5fd",
              400: "#60a5fa",
              500: "#3b82f6",
              600: "#2563eb",
              700: "#1d4ed8",
              800: "#1e40af",
              900: "#1e3a8a",
              main: "#3b82f6",
              light: "#93c5fd",
              dark: "#1d4ed8",
              contrastText: "#ffffff",
            },
            secondary: {
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
              main: "#64748b",
              light: "#cbd5e1",
              dark: "#334155",
              contrastText: "#ffffff",
            },
            success: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e",
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
              main: "#22c55e",
              light: "#86efac",
              dark: "#16a34a",
              contrastText: "#000000",
            },
            warning: {
              50: "#fff7ed",
              100: "#ffedd5",
              200: "#fed7aa",
              300: "#fdba74",
              400: "#fb923c",
              500: "#f97316",
              600: "#ea580c",
              700: "#c2410c",
              800: "#9a3412",
              900: "#7c2d12",
              main: "#f97316",
              light: "#fdba74",
              dark: "#ea580c",
              contrastText: "#000000",
            },
            error: {
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              main: "#ef4444",
              light: "#fca5a5",
              dark: "#dc2626",
              contrastText: "#ffffff",
            },
            info: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
              main: "#0ea5e9",
              light: "#7dd3fc",
              dark: "#0284c7",
              contrastText: "#000000",
            },
            academic: {
              50: "#faf5ff",
              100: "#f3e8ff",
              200: "#e9d5ff",
              300: "#d8b4fe",
              400: "#c084fc",
              500: "#a855f7",
              600: "#9333ea",
              700: "#7e22ce",
              800: "#6b21a8",
              900: "#581c87",
              main: "#a855f7",
              light: "#d8b4fe",
              dark: "#9333ea",
              contrastText: "#000000",
            },
            payment: {
              50: "#ecfdf5",
              100: "#d1fae5",
              200: "#a7f3d0",
              300: "#6ee7b7",
              400: "#34d399",
              500: "#10b981",
              600: "#059669",
              700: "#047857",
              800: "#065f46",
              900: "#064e3b",
              main: "#10b981",
              light: "#6ee7b7",
              dark: "#059669",
              contrastText: "#000000",
            },
            attendance: {
              50: "#fef9c3",
              100: "#fef08a",
              200: "#fde047",
              300: "#facc15",
              400: "#eab308",
              500: "#ca8a04",
              600: "#a16207",
              700: "#854d0e",
              800: "#713f12",
              900: "#713f12",
              main: "#eab308",
              light: "#fde047",
              dark: "#a16207",
              contrastText: "#000000",
            },
            communication: {
              50: "#f0fdfa",
              100: "#ccfbf1",
              200: "#99f6e4",
              300: "#5eead4",
              400: "#2dd4bf",
              500: "#14b8a6",
              600: "#0d9488",
              700: "#0f766e",
              800: "#115e59",
              900: "#134e4a",
              main: "#14b8a6",
              light: "#5eead4",
              dark: "#0d9488",
              contrastText: "#000000",
            },
            grey: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
            },
            background: {
              default: "#0f172a",
              paper: "#1e293b",
            },
            text: {
              primary: "#f1f5f9",
              secondary: "#94a3b8",
              disabled: "#475569",
            },
            divider: "#334155",
          }),
    },
    typography: {
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.75,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.57,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.43,
      },
      button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.75,
        textTransform: "none",
        letterSpacing: "0.02em",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.66,
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: 2.66,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      },
    },
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    shadows:
      mode === "light"
        ? [
            "none",
            "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            "0 25px 50px -12px rgb(0 0 0 / 0.25)",
          ]
        : [
            "none",
            "0 1px 2px 0 rgb(0 0 0 / 0.3)",
            "0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)",
            "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)",
            "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
            "0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
            "0 25px 50px -12px rgb(0 0 0 / 0.5)",
          ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
            padding: "10px 20px",
            fontSize: "0.875rem",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          sizeLarge: {
            padding: "12px 28px",
            fontSize: "1rem",
          },
          sizeSmall: {
            padding: "6px 16px",
            fontSize: "0.8125rem",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              mode === "light"
                ? "0 1px 1px 0 rgb(0 0 0 / 0.03), 0 1px 6px -1px rgb(0 0 0 / 0.02)"
                : "0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
            border:
              mode === "light"
                ? "1px solid rgb(0 0 0 / 0.06)"
                : "1px solid rgb(255 255 255 / 0.08)",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              fontSize: "0.875rem",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 12,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: "0.875rem",
            padding: "12px 16px",
            borderBottom: `1px solid ${alpha(
              mode === "light" ? "#000000" : "#ffffff",
              0.05,
            )}`,
            "&:first-of-type": {
              paddingLeft: 24,
            },
            "&:last-of-type": {
              paddingRight: 24,
            },
          },
          head: {
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            borderBottom: `1px solid ${alpha(
              mode === "light" ? "#000000" : "#ffffff",
              0.12,
            )}`,
            backgroundColor:
              mode === "light"
                ? alpha("#000000", 0.02)
                : alpha("#ffffff", 0.02),
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor:
                mode === "light"
                  ? alpha("#2563eb", 0.04)
                  : alpha("#3b82f6", 0.08),
              cursor: "pointer",
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
            minHeight: 48,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontSize: "0.875rem",
          },
        },
      },
    },
  });

// Type augmentation for custom colors
declare module "@mui/material/styles" {
  interface Palette {
    academic: Palette["primary"];
    payment: Palette["primary"];
    attendance: Palette["primary"];
    communication: Palette["primary"];
  }
  interface PaletteOptions {
    academic?: PaletteOptions["primary"];
    payment?: PaletteOptions["primary"];
    attendance?: PaletteOptions["primary"];
    communication?: PaletteOptions["primary"];
  }
}
