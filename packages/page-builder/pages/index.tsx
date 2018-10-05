import Link from "next/link";
import ContentEditable from "helpers/content-editable";
import Layout, { Header, Footer } from "components/layout";

export const Index = () => {
  const ContentBodyEditable = ContentEditable("div");
  const ImageEditable = ContentEditable("img");

  return (
    <Layout>
      <Header>Welcome</Header>
      <ContentBodyEditable value="Index Page!" />
      <br />
      <ImageEditable value="/static/images/promo.jpg" />
      <br />
      <br />
      <div>
        <Link href="/about">
          <a>Go to page About</a>
        </Link>
      </div>
      <div />
      <Footer>Copyright @ 2018</Footer>
    </Layout>
  );
};
export default Index;
