import * as React from "react";

interface Iprops {
  brandFBUrl?: string;
  brandTWUrl?: string;
  brandIGUrl?: string;
  brandYTUrl?: string;
}

export class BrandSocialComponent extends React.Component<Iprops, any> {
  render() {
    const { brandFBUrl, brandTWUrl, brandIGUrl, brandYTUrl } = this.props;
    return (
      <div className="bt-brand-social">
        <ul className="list-line">
          <li>
            <a href={brandFBUrl}><img src="http://stardes.bhinnekalocal.com/images/facebook.svg" /></a>
          </li>
          <li>
            <a href={brandTWUrl}><img src="http://stardes.bhinnekalocal.com/images/twitter.svg" /></a>
          </li>
          <li>
            <a href={brandIGUrl}><img src="http://stardes.bhinnekalocal.com/images/instagram.svg" /></a>
          </li>
          <li>
            <a href={brandYTUrl}><img src="http://stardes.bhinnekalocal.com/images/youtube.svg" /></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BrandSocialComponent;
