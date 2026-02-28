"use client";
import {
  FormControl,
  InputLabel,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";

interface IProps {
  label?: string;
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  format?: string;
  minTime?: Dayjs;
  maxTime?: Dayjs;
  slotProps?: any;
  required?: boolean;
  ampm?: boolean;
}

const StyledTimePicker = styled(TimePicker)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.5),
  },

  // Target the root input base
  "& .MuiPickersInputBase-root": {
    borderRadius: theme.spacing(1.05),
    position: "relative",
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

  // Remove the default notched outline
  "& .MuiPickersOutlinedInput-notchedOutline": {
    border: "none !important",
  },

  // Target the sections container
  "& .MuiPickersInputBase-sectionsContainer": {
    padding: "0 !important",
    fontSize: theme.spacing(1.65),
  },

  // Target individual sections
  "& .MuiPickersSectionList-section": {
    fontSize: theme.spacing(1.65),
  },

  // Target section content
  "& .MuiPickersInputBase-sectionContent": {
    fontSize: theme.spacing(1.65),
  },

  // Hidden input field
  "& .MuiPickersInputBase-input": {
    padding: "0 !important",
  },

  // Target the clock icon adornment
  "& .MuiInputAdornment-root": {
    marginLeft: "0 !important",
    marginRight: "10px !important",
  },

  // Target the icon button
  "& .MuiIconButton-root": {
    padding: "0 !important",
    marginLeft: `${theme.spacing(0.5)} !important`,
  },

  // Target the clock icon
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.disabled,
    fontSize: theme.spacing(2),
  },
})) as typeof TimePicker;

export default function CustomTimePicker({ label, ampm = true, ...props }: IProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl sx={{ flex: 1 }} fullWidth={isMobile} variant="standard">
        {label && (
          <InputLabel
            sx={(theme) => ({
              fontWeight: 500,
              fontSize: theme.spacing(2),
            })}
            shrink
            htmlFor={props.name ?? "custom-time-picker"}
          >
            {label}{" "}
            {props.required && (
              <span style={{ color: theme.palette.error.main }}>*</span>
            )}
          </InputLabel>
        )}
        <StyledTimePicker
          {...props}
          ampm={ampm}
          slotProps={{
            ...props.slotProps,
            textField: {
              ...props.slotProps?.textField,
              id: props.name ?? "custom-time-picker",
              variant: "outlined",
            },
          }}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
