import * as React from "react";

interface Iprops {
  brandLogoUrl?: string;
}

export class BrandLogoComponent extends React.Component<Iprops, any> {
  render() {
    const { brandLogoUrl } = this.props;
    return (
      <div className="bt-brand-header__logo">
        <div className="bt-brand-logo">
          <img src={brandLogoUrl} />
        </div>
      </div>
    );
  }
}

export default BrandLogoComponent;
