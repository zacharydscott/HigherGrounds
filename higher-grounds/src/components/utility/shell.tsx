import * as React from "react";

/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps {
  exampleProp: string;
}

export class ShellComponent extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    // remember to bind your functions here
  }

  public render() {
    return (
      <div>
        <p>Insert test here</p>
      </div>
    );
  }
}
