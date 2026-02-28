import { IconType } from "@/types";
import { alpha, Color, Grid, Stack, Typography } from "@mui/material";
import React from "react";
interface IStatCardProps {
  title: string;
  label?: string;
  icon: IconType;
  value: string;
  color?: any;
}
export default function StatCard({
  title,
  label,
  icon,
  value,
  color,
}: IStatCardProps) {
  return (
    <Grid
      size={{
        sm: 6,
        md: 4,
        lg: 3,
        xl: 3,
      }}
    >
      <Stack
        padding={2}
        borderRadius={2}
        bgcolor={alpha(color, 0.1)}
        spacing={2}
        border={`1px solid ${alpha(color, 0.2)}`}
        sx={(theme) => ({
          ":hover": {
            boxShadow: theme.shadows[4],
            cursor: "pointer",
            //ripple effect on hover
            transition: theme.transitions.create(["all"], {
              duration: theme.transitions.duration.short,
              easing: theme.transitions.easing.easeInOut,
              delay: 0,
            }),
          },
          transition: theme.transitions.create(["all"], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
            delay: 0,
          }),
        })}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              color="text.secondary"
              fontSize={(theme) => theme.spacing(1.5)}
              sx={{
                textTransform: "uppercase",
              }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={(theme) => theme.spacing(3)}
              color="text.primary"
            >
              {value}
            </Typography>
          </Stack>
          <Stack
            width={40}
            height={40}
            borderRadius={1}
            alignItems="center"
            justifyContent="center"
            bgcolor={alpha(color, 0.2)}
            color={color}
          >
            {React.createElement(icon, { size: 20 } as any)}
          </Stack>
        </Stack>
        {label && (
          <Typography
            color="text.secondary"
            fontSize={(theme) => theme.spacing(1.25)}
          >
            {label}
          </Typography>
        )}
      </Stack>
    </Grid>
  );
}
