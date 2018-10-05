import Link from "next/link";

export const Index = () => (
  <div>
    <h1>Welcome</h1>
    <p>Index Page</p>
    <div>
      <Link href="/about">
        <a>Go to page About</a>
      </Link>
    </div>
  </div>
);
export default Index;
