import { Tools_List } from '../../../util/helper/constants';

export type ToolboxButtonPropsType = {
  onClick: (buttonId: Tools_List) => void;
  buttonId: Tools_List;
  icon?: string;
  toolName?: string;
  class?: string;
  disabled?: boolean;
};

export type ToolboxButtonClickFunction = (buttonId: Tools_List) => void;
