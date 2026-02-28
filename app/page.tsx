"use client";
import { setTheme } from "@/api/features/appReducer";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import ContentContainer from "@/components/ui/ContentContainer";
import { IconButton, Stack, Typography } from "@mui/material";
import { Moon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.AppReducer);
  return (
    <ContentContainer>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        style={{ width: "100%" }}
      >
        <Typography color="text.primary" variant="h4">
          Nextjs MUI Template
        </Typography>
        <IconButton
          onClick={() =>
            dispatch(setTheme(theme === "dark" ? "light" : "dark"))
          }
        >
          <Moon />
        </IconButton>
      </Stack>
      <Stack
        alignItems="center"
        height={"100vh"}
        justifyContent={"center"}
        spacing={2}
      >
        <Typography color="text.primary" variant="h6">
          This is a template for Nextjs 13 with MUI and Redux Toolkit
        </Typography>
        <Typography color="text.primary" variant="body1">
          Click the moon icon in the top right corner to toggle between light
          and dark mode. The theme is persisted in local storage.
        </Typography>
        <Image
          src="/next.svg"
          alt="Nextjs MUI Template"
          width={120}
          height={120}
          style={{ marginTop: "2rem" }}
        />
      </Stack>
    </ContentContainer>
  );
}
