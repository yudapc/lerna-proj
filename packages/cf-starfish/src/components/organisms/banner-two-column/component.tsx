import * as React from "react";
import { ProductBanner } from "../../atoms/product-banner";
import { BannerSection } from "../../molecules/banner-section"

interface Iprops {
  children?: any;
  bannerData?: any[];
}

export class BannerTwoColumnComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerData } = this.props;
    return (
      <BannerSection bannerSize="bt-product-banner__big">
        {bannerData.map((banner) => (
          <ProductBanner key={banner.id} bannerColumnMD="6" bannerImageUrl={banner.bannerImageUrl} bannerLinkUrl={banner.bannerLinkUrl} bannerLinkTarget={banner.bannerLinkTarget} />
        ))}
      </BannerSection>
    );
  }
}

export default BannerTwoColumnComponent;
