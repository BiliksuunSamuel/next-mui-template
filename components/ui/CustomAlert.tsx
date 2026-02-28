"use client";
import { Alert, Stack, styled } from "@mui/material";
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import CustomCloseButton from "./CustomCloseButton";
import { useEffect, useState } from "react";

interface IProps {
  body?: string;
  variant?: "error" | "warning" | "info" | "success";
  onClose?: () => void;
  closable?: boolean;
}

const StyledAlert = styled(Alert)(({ theme, severity }) => {
  const colors = {
    success: {
      bg: theme.palette.mode === "light" ? "#f0fdf4" : "#022c22",
      border: theme.palette.mode === "light" ? "#86efac" : "#166534",
      text: theme.palette.mode === "light" ? "#166534" : "#86efac",
      icon: theme.palette.mode === "light" ? "#22c55e" : "#4ade80",
    },
    error: {
      bg: theme.palette.mode === "light" ? "#fef2f2" : "#2c0b0e",
      border: theme.palette.mode === "light" ? "#fca5a5" : "#991b1b",
      text: theme.palette.mode === "light" ? "#991b1b" : "#fca5a5",
      icon: theme.palette.mode === "light" ? "#ef4444" : "#f87171",
    },
    warning: {
      bg: theme.palette.mode === "light" ? "#fffbeb" : "#2c1810",
      border: theme.palette.mode === "light" ? "#fcd34d" : "#92400e",
      text: theme.palette.mode === "light" ? "#92400e" : "#fcd34d",
      icon: theme.palette.mode === "light" ? "#f59e0b" : "#fbbf24",
    },
    info: {
      bg: theme.palette.mode === "light" ? "#eff6ff" : "#0c1e2c",
      border: theme.palette.mode === "light" ? "#93c5fd" : "#1e40af",
      text: theme.palette.mode === "light" ? "#1e40af" : "#93c5fd",
      icon: theme.palette.mode === "light" ? "#3b82f6" : "#60a5fa",
    },
  };

  const colorScheme = colors[severity || "info"];

  return {
    borderRadius: theme.spacing(0.75),
    padding: theme.spacing(1.25, 1.75),
    border: `1px solid ${colorScheme.border}`,
    backgroundColor: colorScheme.bg,
    alignItems: "center",
    fontSize: theme.spacing(1.75),

    "& .MuiAlert-icon": {
      color: colorScheme.icon,
      opacity: 1,
      marginRight: theme.spacing(1.5),
      fontSize: theme.spacing(2.75),
      padding: 0,
      alignItems: "center",
    },

    "& .MuiAlert-message": {
      color: colorScheme.text,
      padding: theme.spacing(0.5, 0),
      fontSize: theme.spacing(1.75),
      fontWeight: 500,
      lineHeight: 1.6,
      width: "100%",
      overflow: "hidden",

      "& div": {
        margin: 0,
      },
    },

    "&.MuiAlert-standardSuccess": {
      backgroundColor: colorScheme.bg,
    },
    "&.MuiAlert-standardError": {
      backgroundColor: colorScheme.bg,
    },
    "&.MuiAlert-standardWarning": {
      backgroundColor: colorScheme.bg,
    },
    "&.MuiAlert-standardInfo": {
      backgroundColor: colorScheme.bg,
    },
  };
});

const iconMapping = {
  success: <CheckCircle2 size={18} />,
  error: <AlertCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  info: <Info size={18} />,
};

export default function CustomAlert({
  body,
  variant,
  closable = true,
}: IProps) {
  const { error, message }: any = {};
  const [content, setContent] = useState<string | null>(null);

  const handleClose = () => {};

  const alertVariant = variant ?? error ? "error" : "success";

  useEffect(() => {
    if (error) {
      setContent(error);
    } else if (message) {
      setContent(message);
    } else if (body) {
      setContent(body);
    } else {
      setContent(null);
    }
  }, [error, message, body]);

  return content ? (
    <StyledAlert severity={alertVariant} icon={iconMapping[alertVariant]}>
      <Stack direction="row" alignItems="center" spacing={2} width="100%">
        <Stack
          component="div"
          flex={1}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {closable && (
          <CustomCloseButton
            onClick={handleClose}
            sx={{
              color: "inherit",
              opacity: 0.7,
              flexShrink: 0,
              "&:hover": {
                opacity: 1,
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          />
        )}
      </Stack>
    </StyledAlert>
  ) : null;
}
