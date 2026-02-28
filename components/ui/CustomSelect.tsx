import {
  BaseSelectProps,
  FormControl,
  InputLabel,
  Select,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface IProps extends BaseSelectProps {
  label?: string;
  placeholder?: string;
}

const StyledSelect = styled(Select)(({ theme }) => ({
  "&.MuiInputBase-root": {
    borderRadius: theme.spacing(1.05),
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.common.white : "#1A2027",
    border: `2px solid ${theme.palette.action.hover}`,
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: theme.spacing(1.65),
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:hover": {
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    },

    "&.Mui-focused": {
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
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiSelect-select": {
    padding: theme.spacing(1.25, 1.5),
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(4),
  },

  "&.placeholder-active .MuiSelect-select": {
    color: theme.palette.text.disabled,
  },

  "& .MuiSvgIcon-root": {
    right: theme.spacing(1),
    color: theme.palette.text.secondary,
  },

  "label + &": {
    marginTop: theme.spacing(2.5),
  },
}));

export default function CustomSelect({ label, placeholder, ...props }: IProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const hasValue =
    props.value !== undefined && props.value !== null && props.value !== "";

  return (
    <FormControl
      sx={{ flex: 1 }}
      fullWidth={isMobile || props.fullWidth}
      variant="standard"
      error={props.error}
    >
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2),
          })}
          shrink
          htmlFor={props.id ?? "custom-select"}
        >
          {label}{" "}
          {props.required && (
            <span style={{ color: theme.palette.error.main }}>*</span>
          )}
        </InputLabel>
      )}
      <StyledSelect
        id={props.id ?? "custom-select"}
        variant="outlined"
        displayEmpty={!!placeholder}
        renderValue={
          placeholder
            ? (value) => {
                if (!value || value === "") {
                  return placeholder;
                }
                // If a custom renderValue is provided, use it
                if (props.renderValue) {
                  return props.renderValue(value);
                }
                // Otherwise, return the value as-is (string or number)
                return String(value);
              }
            : props.renderValue
        }
        {...props}
      >
        {props.children}
      </StyledSelect>
    </FormControl>
  );
}
