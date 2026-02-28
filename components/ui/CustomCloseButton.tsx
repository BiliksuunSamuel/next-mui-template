import { IconButton, IconButtonProps } from "@mui/material";
import { X } from "lucide-react";

interface IProps extends IconButtonProps {}
export default function CustomCloseButton({ children, ...others }: IProps) {
  return (
    <IconButton size="small" {...others}>
      {children ?? <X />}
    </IconButton>
  );
}
