import * as React from "react";

interface Iprops {
  bannerImageUrl?: string;
}

export class CatalogBannerComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerImageUrl } = this.props;
    return (
      <div className="bt-catalog-banner">
        <img src={bannerImageUrl} />
      </div>
    );
  }
}

export default CatalogBannerComponent;
