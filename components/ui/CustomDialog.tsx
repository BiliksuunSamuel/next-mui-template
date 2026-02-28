import { Dialog, DialogContent, DialogProps, alpha } from "@mui/material";

interface IDialogProps extends DialogProps {
  showCloseIcon?: boolean;
}
export default function CustomDialog({
  showCloseIcon = false,
  children,
  onClose,
  ...others
}: IDialogProps) {
  return (
    <Dialog
      sx={(theme) => ({
        zIndex: 1001,
        borderRadius: theme.spacing(2),
        ".MuiDialog-scrollPaper": {
          bgcolor: alpha(theme.palette.common.black, 0.18),
          padding: theme.spacing(2),
          justifyContent: "center",
          alignItems: "center",
        },
        ".MuiPaper-root": {
          borderRadius: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
        },
        justifyContent: "center",
        alignItems: "center",
      })}
      maxWidth="md"
      fullWidth
      disableEscapeKeyDown
      {...others}
    >
      <DialogContent
        sx={(theme) => ({
          borderRadius: theme.spacing(1),
        })}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
