import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type HttpMethods = "get" | "post" | "patch" | "delete" | "head" | "put";
export type HttpContentTypes = "application/json" | "multipart/form-data";
export type IconType =
  | OverridableComponent<SvgIconTypeMap<{}, "svg">>
  | ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
