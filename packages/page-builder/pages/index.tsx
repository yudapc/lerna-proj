import Link from "next/link";
import ContentEditable from "helpers/content-editable";
import Layout, { Header, Footer } from "components/layout";

export const Index = () => {
  const ContentBodyEditable = ContentEditable("div");

  return (
    <Layout>
      <Header>Welcome</Header>
      <ContentBodyEditable value="Index Page!" />
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
