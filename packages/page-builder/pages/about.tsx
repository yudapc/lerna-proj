import Link from "next/link";

export const About = () => (
  <div>
    <h1>About</h1>
    <p>This is page About</p>
    <div>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
    </div>
  </div>
);
export default About;
