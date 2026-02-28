import { Typography, TypographyProps } from "@mui/material";

interface IProps extends TypographyProps {}
export default function Label({ children, ...others }: IProps) {
  return (
    <Typography
      variant="body2"
      fontSize={(theme) => theme.spacing(1.85)}
      sx={{ color: "#99B5C2" }}
      {...others}
    >
      {children}
    </Typography>
  );
}
