"use client";
import {
  Autocomplete,
  Chip,
  FormControl,
  InputLabel,
  TextField,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { X } from "lucide-react";
import React from "react";

interface IProps {
  label?: string;
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  options?: string[];
  freeSolo?: boolean;
  required?: boolean;
  disabled?: boolean;
  name?: string;
}

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.5),
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: theme.spacing(1.05),
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.common.white : "#1A2027",
    border: `2px solid ${theme.palette.action.disabled}`,
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: theme.spacing(1.65),
    padding: `${theme.spacing(1.25)} ${theme.spacing(1.5)} !important`,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:hover": {
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    },

    "&.Mui-focused": {
      boxShadow: `none`,
      borderColor: theme.palette.action.hover,
      border: `2px solid ${theme.palette.action.hover}`,
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

    // Remove default outline
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },

  // Input field styles
  "& .MuiOutlinedInput-input": {
    padding: "0 !important",
    fontSize: theme.spacing(1.65),
  },

  // Chip styles
  "& .MuiChip-root": {
    height: "auto",
    padding: theme.spacing(0.5, 0.5),
    margin: theme.spacing(0.25),
    backgroundColor: theme.palette.action.hover,
    "& .MuiChip-label": {
      fontSize: theme.spacing(1.65),
      padding: theme.spacing(0, 0.5),
    },
    "& .MuiChip-deleteIcon": {
      fontSize: theme.spacing(2),
      color: theme.palette.text.secondary,
      "&:hover": {
        color: theme.palette.error.main,
      },
    },
  },

  // Clear indicator
  "& .MuiAutocomplete-clearIndicator": {
    color: theme.palette.text.secondary,
  },

  // Popup indicator
  "& .MuiAutocomplete-popupIndicator": {
    color: theme.palette.text.secondary,
  },
})) as typeof Autocomplete;

export default function MultiValueAutocompleteInput({
  label,
  value,
  onChange,
  placeholder,
  options = [],
  freeSolo = true,
  required = false,
  disabled = false,
  name,
}: IProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormControl sx={{ flex: 1 }} fullWidth={isMobile} variant="standard">
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2),
          })}
          shrink
          htmlFor={name ?? "multi-value-autocomplete"}
        >
          {label}{" "}
          {required && (
            <span style={{ color: theme.palette.error.main }}>*</span>
          )}
        </InputLabel>
      )}
      <StyledAutocomplete
        multiple
        id={name ?? "multi-value-autocomplete"}
        value={value}
        onChange={(_event, newValue) => {
          onChange(newValue as string[]);
        }}
        options={options}
        freeSolo={freeSolo}
        disabled={disabled}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option}
              {...getTagProps({ index })}
              key={option}
              deleteIcon={<X size={16} />}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={value.length === 0 ? placeholder : ""}
          />
        )}
      />
    </FormControl>
  );
}
