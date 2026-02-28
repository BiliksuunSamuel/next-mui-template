import { MenuItem, MenuItemProps, alpha } from "@mui/material";

interface IProps extends MenuItemProps {
  active?: boolean;
  fontSize?: string | number;
  bgcolor?: any;
}
export default function CustomMenuItem({
  children,
  active = false,
  fontSize = 14,
  bgcolor,
  ...others
}: IProps) {
  return (
    <MenuItem
      sx={(theme) => ({
        "&.MuiMenuItem-root": {
          padding: theme.spacing(1.5, 2),
          bgcolor:
            bgcolor ?? active ? alpha(theme.palette.primary.main, 0.25) : "",
          fontSize,
        },
      })}
      {...others}
    >
      {children}
    </MenuItem>
  );
}
