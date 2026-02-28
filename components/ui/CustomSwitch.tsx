import { Switch, SwitchProps, styled } from "@mui/material";

interface IProps extends SwitchProps {}

const StyledSwitch = styled(Switch)<{ size?: "small" | "medium" }>(
  ({ theme, size = "medium" }) => {
    // Define sizes
    const sizes = {
      small: {
        width: 40,
        height: 22,
        thumbSize: 18,
        translateX: 18,
        padding: 2,
      },
      medium: {
        width: 52,
        height: 28,
        thumbSize: 24,
        translateX: 24,
        padding: 2,
      },
    };

    const currentSize = sizes[size];

    return {
      width: currentSize.width,
      height: currentSize.height,
      padding: 0,
      display: "flex",
      alignItems: "center",
      "& .MuiSwitch-switchBase": {
        padding: currentSize.padding,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: `translateX(${currentSize.translateX}px)`,
          color: theme.palette.common.white,
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: theme.palette.primary.main,
          border: `6px solid ${theme.palette.common.white}`,
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: theme.palette.grey[100],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.3,
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: currentSize.thumbSize,
        height: currentSize.thumbSize,
        boxShadow: theme.shadows[1],
        transition: theme.transitions.create(["box-shadow"], {
          duration: 300,
        }),
      },
      "& .MuiSwitch-track": {
        borderRadius: currentSize.height / 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[700],
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 300,
        }),
      },
    };
  }
);

export default function CustomSwitch({ size = "medium", ...others }: IProps) {
  return <StyledSwitch size={size} {...others} />;
}
