"use client";
import { useAppSelector } from "@/api/hooks";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme: themeMode } = useAppSelector((state) => state.AppReducer);
  return <ThemeProvider theme={theme(themeMode)}>{children}</ThemeProvider>;
}
