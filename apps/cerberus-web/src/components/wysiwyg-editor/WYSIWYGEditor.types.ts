import { RawDraftContentState } from "draft-js";

export interface WYSIWYGEditorProps {
  defaultContent: string;
  onChanges(newContent: RawDraftContentState): void;
}