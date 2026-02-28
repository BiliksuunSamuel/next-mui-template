import {
  alpha,
  Box,
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
} from "@mui/material";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface IProps extends InputBaseProps {}

export default function SearchInput({ ...others }: IProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setValue("");
    if (others.onChange) {
      others.onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Paper
      elevation={isFocused ? 1 : 0}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1, 2),
        minWidth: "320px",
        borderRadius: theme.spacing(1),
        backgroundColor: isFocused
          ? theme.palette.background.paper
          : alpha(theme.palette.action.hover, 0.08),
        border: `1px solid ${
          isFocused
            ? theme.palette.primary.main
            : alpha(theme.palette.divider, 0.1)
        }`,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: theme.palette.background.paper,
          borderColor: alpha(theme.palette.primary.main, 0.5),
          boxShadow: theme.shadows[2],
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isFocused
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          transition: "color 0.2s ease-in-out",
        })}
      >
        <Search size={20} />
      </Box>

      <InputBase
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (others.onChange) {
            others.onChange(e);
          }
        }}
        onFocus={(e) => {
          setIsFocused(true);
          if (others.onFocus) {
            others.onFocus(e);
          }
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (others.onBlur) {
            others.onBlur(e);
          }
        }}
        sx={(theme) => ({
          ml: 1.5,
          flex: 1,
          fontSize: theme.spacing(1.75),
          fontWeight: 500,
          "& input::placeholder": {
            opacity: 0.7,
            fontWeight: 400,
          },
        })}
        placeholder="Search products..."
        type="search"
        {...others}
      />

      {value && (
        <IconButton
          size="small"
          onClick={handleClear}
          sx={(theme) => ({
            ml: 1,
            color: theme.palette.text.secondary,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: alpha(theme.palette.error.main, 0.1),
              color: theme.palette.error.main,
            },
          })}
        >
          <X size={16} />
        </IconButton>
      )}
    </Paper>
  );
}
