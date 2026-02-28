"use client";
import {
  IconButton,
  InputBase,
  InputBaseProps,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.5),
  },
  "&.MuiInputBase-root": {
    borderRadius: theme.spacing(1.05),
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.common.white : "#1A2027",
    border: `2px solid ${theme.palette.action.disabled}`,
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: theme.spacing(1.65),
    padding: theme.spacing(0.85, 1.5),
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.action.hover, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.action.hover,
    },
  },
}));

export interface IProps extends InputBaseProps {
  label?: string;
  min?: number;
  max?: number;
}

export default function CustomInput({
  label,
  placeholder,
  id,
  type,
  min,
  max,
  inputProps,
  ...others
}: IProps) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  return (
    <FormControl sx={{ flex: 1 }} fullWidth={isMobile} variant="standard">
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2),
          })}
          shrink
          htmlFor={id ?? "custom-input"}
        >
          {label}{" "}
          {others.required && (
            <span style={{ color: theme.palette.error.main }}>*</span>
          )}
        </InputLabel>
      )}
      <BootstrapInput
        fullWidth
        id={id ?? "custom-input"}
        placeholder={placeholder}
        type={
          type === "password" && visible
            ? visible
              ? "text"
              : "password"
            : type
        }
        endAdornment={
          type === "password" ? (
            <IconButton onClick={() => setVisible(!visible)} size="small">
              {!visible ? <EyeOff size={16} /> : <Eye size={16} />}
            </IconButton>
          ) : (
            others.endAdornment
          )
        }
        inputProps={{ ...inputProps, min, max }}
        {...others}
      />
    </FormControl>
  );
}
