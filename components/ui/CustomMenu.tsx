import { Menu, MenuProps } from "@mui/material";

interface IProps extends MenuProps {
  width?: string | number;
}
export default function CustomMenu({
  width = "150px",
  children,
  ...others
}: IProps) {
  return (
    <Menu
      sx={(theme) => ({
        ".MuiPaper-root": {
          borderRadius: theme.spacing(1.5),
          padding: 0,
          width,
        },
        ".MuiList-root": {
          padding: 0,
        },
      })}
      {...others}
    >
      {children}
    </Menu>
  );
}
