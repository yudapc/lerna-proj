import * as React from "react";

interface Iprops {
  children?: any;
  classMainLayout?: string;
}

export class LayoutBase extends React.Component<Iprops, any> {
  render() {
    const { children, classMainLayout } = this.props;
    return (
      <div className="bt-body-wrapper">
        <div className="bt-page-wrapper">
          <main className={classMainLayout}>
            {children}
          </main>
        </div>
      </div>
    );
  }
}

export default LayoutBase;
