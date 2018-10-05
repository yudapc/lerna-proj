import Link from "next/link";
import Layout from "components/layout";

export const About = () => (
  <Layout>
    <h1>About</h1>
    <p>This is page About</p>
    <div>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
    </div>
  </Layout>
);
export default About;
