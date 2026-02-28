import React from "react";
import { MuiTelInput, MuiTelInputInfo, MuiTelInputProps } from "mui-tel-input";
import { FormControl, InputLabel, styled } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

interface IProps extends Omit<MuiTelInputProps, "onChange"> {
  value: string;
  handleChange: (newValue: string, info: MuiTelInputInfo) => void;
  label?: string;
}

const StyledMuiTelInput = styled(MuiTelInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
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

    "&:hover": {
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    },

    "&.Mui-focused": {
      backgroundColor:
        theme.palette.mode === "light" ? theme.palette.common.white : "#1A2027",
      borderColor: theme.palette.action.hover,
    },

    "&.Mui-error": {
      borderColor: theme.palette.error.main,
    },

    "&.Mui-disabled": {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      borderColor: theme.palette.grey[300],
    },
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0,
    fontSize: theme.spacing(1.65),
  },

  "label + &": {
    marginTop: theme.spacing(2.5),
  },
}));

export default function PhoneNumberInput({
  value,
  handleChange,
  label,
  ...props
}: IProps) {
  return (
    <FormControl sx={{ flex: 1 }} fullWidth variant="standard">
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2),
          })}
          shrink
          htmlFor="phone-number-input"
        >
          {label} {props.required && <span style={{ color: "red" }}>*</span>}
        </InputLabel>
      )}
      <StyledMuiTelInput
        id="phone-number-input"
        value={value.includes("+") ? value : `+${value}`}
        onChange={(val, info) => {
          info.numberValue = info.numberValue?.startsWith("+")
            ? info.numberValue.slice(1)
            : info.numberValue;
          handleChange(info?.numberValue ?? val, info);
        }}
        {...(props as any)}
      />
    </FormControl>
  );
}
