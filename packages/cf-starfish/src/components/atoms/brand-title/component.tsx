import * as React from "react";

interface Iprops {
  brandName?: string;
  brandTagline?: string;
}

export class BrandTitleComponent extends React.Component<Iprops, any> {
  render() {
    const { brandName, brandTagline } = this.props;
    return (
      <div className="bt-brand-title">
        <h1 className="bt-typo-displaylarge bt-brand-title__name">{brandName}</h1>
        <p className="bt-typo-body bt-brand-title__tagline">{brandTagline}</p>
      </div>
    );
  }
}

export default BrandTitleComponent;
