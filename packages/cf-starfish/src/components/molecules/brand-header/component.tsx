import * as React from "react";
import { Container } from 'reactstrap';
import { BrandLogo } from "../../atoms/brand-logo";
import { BrandTitle } from "../../atoms/brand-title";
import { BrandSocial } from "../../atoms/brand-social";

interface Iprops {
  brandLogoUrl?: string;
  brandName?: string;
  brandTagline?: string;
}

export class BrandHeaderComponent extends React.Component<Iprops, any> {

  render() {
    const { brandLogoUrl, brandName, brandTagline } = this.props;
    return (
      <div className="bt-brand-header">
        <Container fluid>
          <BrandLogo brandLogoUrl={brandLogoUrl} />
          <div className="bt-brand-header__text">
            <BrandTitle brandName={brandName} brandTagline={brandTagline} />
            <BrandSocial />
          </div>
        </Container>
      </div>
    );
  }
}

export default BrandHeaderComponent;
