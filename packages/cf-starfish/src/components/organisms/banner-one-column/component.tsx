import * as React from "react";
import { ProductBanner } from "../../atoms/product-banner";
import { BannerSection } from "../../molecules/banner-section"

interface Iprops {
  children?: any;
  bannerData?: any[];
}

export class BannerOneColumnComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerData } = this.props;
    return (
      <BannerSection bannerSize="bt-product-banner__full">
        {bannerData.map((banner) => (
          <ProductBanner key={banner.id} bannerImageUrl={banner.bannerImageUrl} bannerLinkUrl={banner.bannerLinkUrl} bannerLinkTarget={banner.bannerLinkTarget} />
        ))}
      </BannerSection>
    );
  }
}

export default BannerOneColumnComponent;
