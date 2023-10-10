import { FurnitureFragment } from "@imagine-cms/client";

export interface FurnitureValueGridContainerProps {
  furniture: FurnitureFragment;
}

export interface FurnitureValueSales {
  lastWeek: number;
  thisWeek: number;
  difference: number;
  differencePercent: string;
}