import * as React from "react";
import { Col, Popover, PopoverBody } from 'reactstrap';

interface Iprops {
  children?: any;
  promoSectionTitle?: string;
  promoSectionID?: string;
}

export class PromoSectionComponent extends React.Component<Iprops, any> {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { children, promoSectionTitle, promoSectionID} = this.props;
    return (
      <div className="bt-promo-section" id={promoSectionID}>
        <h3 className="bt-typo-displaylarge bt-promo-section__title" id="Popover2" onClick={this.toggle}>{promoSectionTitle}</h3>
        <Popover className="popover-list-action popover-black" placement="top-start" isOpen={this.state.popoverOpen} target="Popover2" toggle={this.toggle}>
          <PopoverBody>
            <ListPopoverAction />
          </PopoverBody>
        </Popover>
        <div className="bt-promo-section__wrapper">
          {children}
        </div>
      </div>
    );
  }
}

const ListPopoverAction = () => (
  <ul className="popover-list-action">
    <li><span className="pt-icon-standard pt-icon-bold"></span></li>
    <li><span className="pt-icon-standard pt-icon-italic"></span></li>
    <li><span className="pt-icon-standard pt-icon-underline"></span></li>
  </ul>
);

export default PromoSectionComponent;
