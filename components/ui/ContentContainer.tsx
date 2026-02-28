import { Stack, StackProps } from "@mui/material";
import React from "react";

export default function ContentContainer({ children }: StackProps) {
  return (
    <Stack
      spacing={4}
      bgcolor={(theme) => theme.palette.background.default}
      padding={3}
      height="100vh"
      overflow="auto"
    >
      {children}
    </Stack>
  );
}
