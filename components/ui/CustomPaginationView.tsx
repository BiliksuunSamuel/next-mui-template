import {
  alpha,
  Box,
  Pagination,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FileText, Layers } from "lucide-react";
import RowContainer from "./RowContainer";

interface IProps extends StackProps {
  totalPages: number;
  page: number;
  pageSize: number;
  totalCount: number;
  handlePage?: (_: any, p: number) => void;
}

export default function CustomPaginationView({
  totalPages,
  totalCount,
  page,
  pageSize,
  handlePage,
  ...others
}: IProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const startCount = Math.abs(page - 1) * pageSize;
  const endCount = totalCount > pageSize ? startCount + pageSize : totalCount;

  return (
    <Stack
      padding={2}
      marginTop={2}
      bgcolor={(theme) => alpha(theme.palette.background.paper, 0.6)}
      borderRadius={1.5}
      border={(theme) => `1px solid ${alpha(theme.palette.divider, 0.65)}`}
      sx={{
        backdropFilter: "blur(10px)",
      }}
      {...others}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "stretch" : "center"}
        justifyContent="space-between"
        spacing={2}
      >
        {/* Items Info */}
        <Stack direction="row" spacing={3} flexWrap="wrap">
          {/* Items Selected */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: theme.spacing(1, 1.5),
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              borderRadius: 1.5,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
            }}
          >
            <Typography variant="body2" fontWeight={500} color="text.secondary">
              Selected:
            </Typography>
            <Typography variant="body2" fontWeight={700} color="primary.main">
              {totalCount < pageSize ? totalCount : pageSize}
            </Typography>
          </Box>

          {/* Showing Range */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: theme.spacing(1, 1.5),
              bgcolor: alpha(theme.palette.info.main, 0.08),
              borderRadius: 1.5,
              border: `1px solid ${alpha(theme.palette.info.main, 0.15)}`,
            }}
          >
            <Typography variant="body2" fontWeight={500} color="text.secondary">
              Showing:
            </Typography>
            <Typography variant="body2" fontWeight={700} color="info.main">
              {startCount + 1} - {endCount}
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
              color="text.secondary"
            >
              of {totalCount}
            </Typography>
          </Box>
        </Stack>

        {/* Pagination Controls */}
        <Pagination
          color="primary"
          shape="rounded"
          size={isMobile ? "small" : "medium"}
          page={page}
          count={totalPages}
          onChange={handlePage}
          sx={{
            "& .MuiPaginationItem-root": {
              fontWeight: 600,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                bgcolor: alpha(theme.palette.primary.main, 0.12),
              },
              "&.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: "white",
                boxShadow: theme.shadows[2],
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              },
            },
            "& .MuiPaginationItem-ellipsis": {
              color: theme.palette.text.secondary,
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
