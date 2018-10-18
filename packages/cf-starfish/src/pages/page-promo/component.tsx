import * as React from "react";
import { LayoutBase } from "../../layouts";
import { PromoSection } from "../../components/templates/promo-section";
import { ProductItem } from "../../components/molecules/product-item";
import { PromoFilter } from "../../components/organisms/promo-filter";
import { CatalogBanner } from "../../components/atoms/catalog-banner";
import { CatalogHeader } from "../../components/molecules/catalog-header";
import { Row, Col } from 'reactstrap';

export class PagePromoComponent extends React.Component<any, any> {
  render() {
    const productData = [
      {
        id: 1,
        productName: 'SOUNDMAGIC In Ear Sound Isolating Earphone [SM E10C] - Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Sound-Isolating-Earphone-SM-E10C-Red-SKU07816823-2016816155533.jpg',
        productPriceDiscount: 'Rp 550.000',
        productPriceWeb: 'Rp 445.000'
      },
      {
        id: 2,
        productName: 'SOUNDMAGIC Headphone [P11S] - Red/Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-Headphone-P11S-Red-Black-SKU02516783-2016427155727.jpg',
        productPriceWeb: 'Rp 206.000'
      },
      {
        id: 3,
        productName: 'SOUNDMAGIC In Ear Monitor [ES18] - Black Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SOUNDMAGIC-In-Ear-Monitor-ES18-Black-Red-SKU00112111-2017223134513.jpg',
        productPriceDiscount: 'Rp 155.000',
        productPriceWeb: 'Rp 122.000'
      },
      {
        id: 4,
        productName: 'SONY Sports Bluetooth In Ear Headphones [MDR-XB50BS] - Black',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SONY-Sports-Bluetoot-In-Ear-Headphones-NY-MDR-XB50BS-Black-SKU12116387-2016102411853.jpg',
        productPriceDiscount: 'Rp 999.000',
        productPriceWeb: 'Rp 790.000'
      },
      {
        id: 5,
        productName: 'SONY Wireless Noise Cancelling Headphones [WH-CH700N] Blue',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/5af25f89bdbe3.jpg',
        productPriceDiscount: 'Rp 2.999.000',
        productPriceWeb: 'Rp 1.775.000'
      },
      {
        id: 6,
        productName: 'SONY Bluetooth In Ear Headphone [MDR-XB70BT] Blue',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/599be530b4c73.jpg',
        productPriceWeb: 'Rp 1.775.000'
      },
      {
        id: 7,
        productName: 'SONY Sports Bluetooth In Ear Headphones [MDR-XB50BS] - Red',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/SONY-Sports-Bluetoot-In-Ear-Headphones-NY-MDR-XB50BS-Red-SKU12116389-2016102411937.jpg',
        productPriceWeb: 'Rp 770.000'
      },
      {
        id: 8,
        productName: 'AUDIO-TECHNICA Wireless Over-Ear Headphones with Pure Digital Drive [ATH-DSR9BT]',
        productImageUrl: 'https://static.bmdstatic.com/pk/product/medium/59eebe4213677.jpg',
        productPriceDiscount: 'Rp 8.789.000',
        productPriceWeb: 'Rp 5.990.000'
      }
    ]
    const filterData = [
      {
        id: 1,
        filterSection: 'section1',
        filterName: 'Audiotechnica Special Price'
      },
      {
        id: 2,
        filterSection: 'section2',
        filterName: 'Sennheiser Earphone'
      },
      {
        id: 3,
        filterSection: 'section3',
        filterName: 'Soundmagic Headset'
      },
      {
        id: 4,
        filterSection: 'section4',
        filterName: 'Sony Headphone'
      },
      {
        id: 5,
        filterSection: 'section5',
        filterName: 'Wireless Headphones'
      }
    ]
    return (
      <LayoutBase classMainLayout="container-fluid">

        {/* Section Promo Banner */}
        <CatalogBanner bannerImageUrl="https://as.bhinneka.com/www/images/ed54526346f369bb4fc2bb5e24b97d8e.jpg" />

        {/* Section Promo Header */}
        <CatalogHeader 
          catalogHeaderTitle="Aksesori Gadget Dan Portable Audio" 
          catalogHeaderDescription="Dapatkan diskon 1 Jutaan untuk Headphones dan Aksesori sekarang" 
        />
        <Row>

          {/* Section Promo Filter */}
          <Col lg="2" className="bt-promo-sidebar">
            <PromoFilter 
              filterData={filterData} 
              filterHeader="Akses Cepat" 
            />
          </Col>

          {/* Section Promo List */}
          <Col lg="10" className="bt-promo-main">

            {/* Secton Promo Item */}
            <PromoSection promoSectionTitle="Audiotechnica Special Price" promoSectionID="section1">
              <ProductItem productData={productData} />
            </PromoSection>

            {/* Secton Promo Item */}
            <PromoSection promoSectionTitle="Sennheiser Earphone" promoSectionID="section2">
              <ProductItem productData={productData} />
            </PromoSection>
            
            {/* Secton Promo Item */}
            <PromoSection promoSectionTitle="Soundmagic Headset" promoSectionID="section3">
              <ProductItem productData={productData} />
            </PromoSection>
            
            {/* Secton Promo Item */}
            <PromoSection promoSectionTitle="Sony Headphone" promoSectionID="section4">
              <ProductItem productData={productData} />
            </PromoSection>

            {/* Secton Promo Item */}
            <PromoSection promoSectionTitle="Wireless Headphones" promoSectionID="section5">
              <ProductItem productData={productData} />
            </PromoSection>
          </Col>
        </Row>
      </LayoutBase>
    );
  }
}
export default PagePromoComponent;
