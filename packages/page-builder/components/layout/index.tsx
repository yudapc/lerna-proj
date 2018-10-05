import { StatelessComponent } from "react";
import ContentEditable from "helpers/content-editable";

const TitleEditable = ContentEditable("h1");
const FooterTitleEditable = ContentEditable("p");

interface IStatelessComponent {
  children?: any;
}
export const Layout: StatelessComponent = (props: IStatelessComponent) => (
  <div className="container">{props.children}</div>
);

Layout.defaultProps = {
  titlePage: "",
  footerPage: ""
};

interface HeaderProps {
  children?: any;
}
export const Header = (props: HeaderProps) => (
  <div>
    <TitleEditable value={props.children} />
  </div>
);

interface FooterProps {
  children?: any;
}
export const Footer = (props: FooterProps) => (
  <div>
    <FooterTitleEditable value={props.children} />
  </div>
);

export default Layout;
