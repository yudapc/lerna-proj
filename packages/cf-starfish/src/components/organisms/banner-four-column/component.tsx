import * as React from "react";
import { ProductBanner } from "../../atoms/product-banner";
import { BannerSection } from "../../molecules/banner-section"

interface Iprops {
  children?: any;
  bannerData?: any[];
}

export class BannerFourColumnComponent extends React.Component<Iprops, any> {
  render() {
    const { bannerData } = this.props;
    return (
      <BannerSection bannerSize="bt-product-banner__small">
        {bannerData.map((banner) => (
          <ProductBanner key={banner.id} bannerColumnMD="3" bannerColumnXS="6" bannerImageUrl={banner.bannerImageUrl} bannerLinkUrl={banner.bannerLinkUrl} bannerLinkTarget={banner.bannerLinkTarget} />
        ))}
      </BannerSection>
    );
  }
}

export default BannerFourColumnComponent;
