import * as React from "react";
import "./product-filter.scss";

interface Iprops {
  filterData?: any[];
  filterHeader?: string;
}

export class PromoFilterComponent extends React.Component<Iprops, any> {
  render() {
    const { filterData, filterHeader} = this.props;
    return (
      <div className="bt-promo-filter">
        <div className="bt-promo-filter__menu">
          <div className="bt-promo-filter__header">
            <p className="bt-typo-heading">{filterHeader}</p>
          </div>
          <div className="bt-promo-filter__body">
            {filterData.map((filterItem) => (
              <div className="bt-promo-filter__item" key={filterItem.id}>
                <a href={`#${filterItem.filterSection}`}>{filterItem.filterName}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PromoFilterComponent;
