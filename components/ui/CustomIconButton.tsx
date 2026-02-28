import {
  CircularProgress,
  IconButton,
  IconButtonProps,
  Stack,
  alpha,
  styled,
} from "@mui/material";
import RowContainer from "./RowContainer";

interface IProps extends IconButtonProps {
  variant?: "contained" | "outlined" | "text";
  loading?: boolean;
}

const StyledIconButton = styled(IconButton)(({ theme, size }) => ({
  borderRadius: theme.spacing(0.85),
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(0.4, 1.25),
  height: size === "large" ? "45px" : "35px",
  color: theme.palette.common.white,
  fontSize: theme.spacing(1.85),
}));

export default function CustomIconButton({
  variant = "contained",
  children,
  loading = false,
  ...others
}: IProps) {
  return (
    <StyledIconButton
      sx={(theme) => ({
        background:
          variant === "contained"
            ? theme.palette.primary.main
            : theme.palette.common.white,
        border: loading
          ? `2px solid ${theme.palette.action.hover}`
          : variant !== "outlined"
          ? "none"
          : `1px solid ${theme.palette.primary.main}`,
        color:
          variant === "contained"
            ? theme.palette.common.white
            : theme.palette.primary.main,
        "&:hover": {
          bgcolor:
            variant === "contained"
              ? theme.palette.primary.dark
              : alpha(theme.palette.action.hover, 0.085),
        },
      })}
      disabled={loading}
      {...others}
    >
      {loading ? (
        <RowContainer spacing={1}>
          <span>loading</span>
          <Stack width="20px" height="20px">
            <CircularProgress color="inherit" size="small" />
          </Stack>
        </RowContainer>
      ) : (
        children
      )}
    </StyledIconButton>
  );
}
