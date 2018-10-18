import * as React from "react";
import { LayoutBase } from "../../layouts";
import { CatalogBanner } from "../../components/atoms/catalog-banner";
import { BrandHeader } from "../../components/molecules/brand-header";
import { BannerOneColumn } from "../../components/organisms/banner-one-column";
import { BannerTwoColumn } from "../../components/organisms/banner-two-column";
import { BannerFourColumn } from "../../components/organisms/banner-four-column";
import { BannerWithSKU } from "../../components/organisms/banner-with-sku";
import { BannerWithCarousel } from "../../components/organisms/banner-with-carousel";
import { ProductItemCarousel } from "../../components/organisms/product-item-carousel";
import { Container } from 'reactstrap';

const bodyPage = "bt-page";

export class PageBrandComponent extends React.Component<any, any> {
  componentDidMount() {
    document.body.classList.add(bodyPage);
  }
  componentWillUnmount() {
    document.body.classList.remove(bodyPage);
  }
  render() {
    const dataBannerOneColumn = [
      {
        id: 1,
        bannerImageUrl: "https://as.bhinneka.com/www/images/859616838e22304348715b6275a923d4.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      }
    ]
    const dataBannerTwoColumn = [
      {
        id: 1,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_big.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      },
      {
        id: 2,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_big.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      }
    ]
    const dataBannerFourColumn = [
      {
        id: 1,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_small.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      },
      {
        id: 2,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_small.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      },
      {
        id: 3,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_small.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      },
      {
        id: 4,
        bannerImageUrl: "http://stardes.bhinnekalocal.com/images/im_banner_brand_small.jpg",
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      }
    ]
    const dataBannerCategory= [
      {
        id: 1,
        bannerImageUrl: 'http://stardes.bhinnekalocal.com/images/im_brand_banner_tv.jpg',
        bannerLinkUrl: "http://www.bhinneka.com/",
        bannerLinkTarget: "_blank"
      }
    ]
    const dataProductCategory = [
      {
        id: 1,
        productName: 'SOUNDMAGIC In Ear Sound Isolating Earphone [SM E10C] - Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Sound-Isolating-Earphone-SM-E10C-Red-SKU07816823-2016816155533.jpg',
        productPriceDiscount: 'Rp 550.000',
        productPriceWeb: 'Rp 445.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 2,
        productName: 'SOUNDMAGIC Headphone [P11S] - Red/Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-Headphone-P11S-Red-Black-SKU02516783-2016427155727.jpg',
        productPriceWeb: 'Rp 206.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 3,
        productName: 'SOUNDMAGIC In Ear Monitor [ES18] - Black Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Monitor-ES18-Black-Red-SKU00112111-2017223134513.jpg',
        productPriceDiscount: 'Rp 155.000',
        productPriceWeb: 'Rp 122.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 4,
        productName: 'SONY Sports Bluetooth In Ear Headphones [MDR-XB50BS] - Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SONY-Sports-Bluetoot-In-Ear-Headphones-NY-MDR-XB50BS-Black-SKU12116387-2016102411853.jpg',
        productPriceDiscount: 'Rp 999.000',
        productPriceWeb: 'Rp 790.000',
        productLinkUrl: "http://www.bhinneka.com/"
      }
    ]
    const dataProducCarousel = [
      {
        id: 1,
        productName: 'SOUNDMAGIC In Ear Sound Isolating Earphone [SM E10C] - Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Sound-Isolating-Earphone-SM-E10C-Red-SKU07816823-2016816155533.jpg',
        productPriceDiscount: 'Rp 550.000',
        productPriceWeb: 'Rp 445.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 2,
        productName: 'SOUNDMAGIC Headphone [P11S] - Red/Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-Headphone-P11S-Red-Black-SKU02516783-2016427155727.jpg',
        productPriceWeb: 'Rp 206.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 3,
        productName: 'SOUNDMAGIC In Ear Monitor [ES18] - Black Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Monitor-ES18-Black-Red-SKU00112111-2017223134513.jpg',
        productPriceDiscount: 'Rp 155.000',
        productPriceWeb: 'Rp 122.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 4,
        productName: 'SONY Sports Bluetooth In Ear Headphones [MDR-XB50BS] - Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SONY-Sports-Bluetoot-In-Ear-Headphones-NY-MDR-XB50BS-Black-SKU12116387-2016102411853.jpg',
        productPriceDiscount: 'Rp 999.000',
        productPriceWeb: 'Rp 790.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 5,
        productName: 'SONY Wireless Noise Cancelling Headphones [WH-CH700N] Blue',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/5af25f89bdbe3.jpg',
        productPriceDiscount: 'Rp 2.999.000',
        productPriceWeb: 'Rp 1.775.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 6,
        productName: 'SONY Bluetooth In Ear Headphone [MDR-XB70BT] Blue',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/599be530b4c73.jpg',
        productPriceWeb: 'Rp 1.775.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 7,
        productName: 'SONY Sports Bluetooth In Ear Headphones [MDR-XB50BS] - Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SONY-Sports-Bluetoot-In-Ear-Headphones-NY-MDR-XB50BS-Red-SKU12116389-2016102411937.jpg',
        productPriceWeb: 'Rp 770.000',
        productLinkUrl: "http://www.bhinneka.com/"
      },
      {
        id: 8,
        productName: 'AUDIO-TECHNICA Wireless Over-Ear Headphones with Pure Digital Drive [ATH-DSR9BT]',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/59eebe4213677.jpg',
        productPriceDiscount: 'Rp 8.789.000',
        productPriceWeb: 'Rp 5.990.000',
        productLinkUrl: "http://www.bhinneka.com/"
      }
    ]
    return (
      <LayoutBase>
        <Container fluid>
          <CatalogBanner bannerImageUrl="https://as.bhinneka.com/www/images/859616838e22304348715b6275a923d4.jpg" />
        </Container>
        <BrandHeader 
          brandLogoUrl="https://static.bmdstatic.com/sf/assets/img/brands/samsung-logo.svg"  
          brandName="Samsung"
          brandTagline="Everyone’s Invited or Its hard to Imagine"
        />
        <Container fluid>
          <BannerTwoColumn bannerData={dataBannerTwoColumn} />
          <BannerFourColumn bannerData={dataBannerFourColumn} />
          <BannerWithSKU
            brandCategoryTitle="Televisi"
            bannerData={dataBannerCategory}
            productData={dataProductCategory}
          />
          <BannerWithSKU
            brandCategoryTitle="Mesin Cuci"
            bannerData={dataBannerCategory}
            productData={dataProductCategory}
          />
          <BannerOneColumn bannerData={dataBannerOneColumn} />
          <BannerWithCarousel 
            productCarouselTitle="Smartphone & Tablet" 
            productData={dataProducCarousel} 
            bannerImageUrl="http://stardes.bhinnekalocal.com/images/im_brand_banner_smartphone.jpg"
            bannerLinkUrl="https://www.bhinneka.com/"
          />   
          <ProductItemCarousel 
            productCarouselTitle="Microwaves" 
            productData={dataProducCarousel} 
          />   
          <ProductItemCarousel 
            productCarouselTitle="Best Seller" 
            productData={dataProducCarousel} 
          />   
        </Container>
      </LayoutBase>
    );
  }
}
export default PageBrandComponent;
