declare module "react-aria-modal" {
  import * as React from "react";

  interface BaseProps {
    className?: string;
    mounted?: boolean;
    focusDialog?: boolean;
    underlayClickExits?: boolean;
    underlayClass?: string;
    verticallyCenter?: boolean;
    includeDefaultStyles?: boolean;
    dialogClass?: string;
    dialogId?: string;
    onExit?: () => void;
  }

  interface PropsWithTitleId extends BaseProps {
    titleId: string;
  }

  interface PropsWithTitleText extends BaseProps {
    titleText: string;
  }

  export type Props = PropsWithTitleId | PropsWithTitleText;

  export default class AriaModal extends React.Component<Props> {}
}
