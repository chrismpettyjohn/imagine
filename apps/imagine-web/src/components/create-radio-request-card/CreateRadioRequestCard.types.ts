import { RadioRequestFragment } from "@imagine-cms/client";

export interface CreateRadioRequestCardProps {
  onCreation(newRadioRequest: RadioRequestFragment): void;
}