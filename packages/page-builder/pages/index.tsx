import Link from "next/link";
import ContentEditable from "../helpers/content-editable";

export const Index = () => {
  const TitleEditable = ContentEditable("h1");
  const AddressEditable = ContentEditable("div");

  return (
    <div>
      <TitleEditable value="Welcome" />
      <AddressEditable value="Index Page!" />
      <br />
      <div>
        <Link href="/about">
          <a>Go to page About</a>
        </Link>
      </div>
      <div />
    </div>
  );
};
export default Index;
