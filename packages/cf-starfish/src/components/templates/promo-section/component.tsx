import * as React from "react";
import "./promo-section.scss";

interface Iprops {
  children?: any;
  promoSectionTitle?: string;
  promoSectionID?: string;
}

export class PromoSectionComponent extends React.Component<Iprops, any> {
  render() {
    const { children, promoSectionTitle, promoSectionID} = this.props;
    return (
      <div className="bt-promo-section" id={promoSectionID}>
        <h3 className="bt-typo-displaylarge bt-promo-section__title">{promoSectionTitle}</h3>
        <div className="bt-promo-section__wrapper">
          {children}
        </div>
      </div>
    );
  }
}

export default PromoSectionComponent;
