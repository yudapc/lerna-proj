import Link from "next/link";
import Layout from "components/layout";
import ContentEditable from "helpers/content-editable";
import { Col, Row, ListGroup, ListGroupItem, CardImg, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const collectionIpad = {
  id: "ipad",
  data: [
    {
      title: "Collection 1 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/7940dc2e9fa4cd9cf2cc9af54622313e.jpg"
    },
    {
      title: "Collection 2 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/88ecc93bddf7bdf0087f8b78d21e59a7.jpg"
    },
    {
      title: "Collection 3 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/b0b6b1e6a61f0bffc5b6ca822a1256f3.jpg"
    },
    {
      title: "Collection 4 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/db417a0d0ee05d33c04f95d94528a0c7.jpg"
    },
    {
      title: "Collection 5 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/b0b6b1e6a61f0bffc5b6ca822a1256f3.jpg"
    },
    {
      title: "Collection 6 Title",
      url: "http://localhost:3003/custom",
      image:
        "https://as.bhinneka.com/www/images/db417a0d0ee05d33c04f95d94528a0c7.jpg"
    }
  ]
};

const collectionLeftMenu = {
  id: "leftMenu",
  title: "Akses Cepat",
  data: [
    {
      text: "About",
      link: "/about"
    },
    {
      text: "Galaxy Note & Tab",
      link: "http://localhost:3003/custom"
    },
    {
      text: "Galaxy J Series",
      link: "http://localhost:3003/custom"
    },
    {
      text: "Galaxy A Series",
      link: "http://localhost:3003/custom"
    },
    {
      text: "iPhone",
      link: "http://localhost:3003/custom"
    },
    {
      text: "iPad",
      link: "http://localhost:3003/custom"
    },
    {
      text: "OPPO Series",
      link: "http://localhost:3003/custom"
    },
    {
      text: "Vivo Series",
      link: "http://localhost:3003/custom"
    }
  ]
};

const responseApiCollection: any = (id: string) => {
  if (id === "ipad") return collectionIpad;
  if (id === "leftMenu") return collectionLeftMenu;
  return collectionIpad;
};

const jsonTemplate: any = {
  title: {
    element: "h2",
    text: "Edit This Title"
  },
  description: {
    element: "p",
    text: "Edit This Description section template. "
  },
  discount: {
    element: "strong",
    text: "Diskon 10%",
    style: {
      fontSize: 14,
      fontWeight: "500",
      marginBottom: 300,
      color: "red"
    }
  },
  content: {
    collection: "ipad"
  },
  leftMenu: {
    collection: "leftMenu"
  }
};

export const Custom = () => {
  const sections = Object.keys(jsonTemplate);
  const leftMenuCollection = responseApiCollection("leftMenu");
  return (
    <Layout>
      <Col lg="3" className="bt-promo-sidebar">
        <ListGroup>
          {leftMenuCollection.data.map(
            (menu: typeof leftMenuCollection.data[0], menuIndex: number) => (
              <ListGroupItem key={`uniq-${menuIndex}`}>
                <Link href={menu.link}>{menu.text}</Link>
              </ListGroupItem>
            )
          )}
        </ListGroup>
      </Col>
      <Col lg="9" className="bt-promo-main">
        {sections.map((section, sectionIndex) => {
          const element: any = jsonTemplate[section]["element"];
          const ComponentName: any = ContentEditable(element);
          const text: any = jsonTemplate[section]["text"];
          const style: any = jsonTemplate[section]["style"];

          const collection: any = jsonTemplate[section]["collection"];
          if (collection) {
            const response = responseApiCollection(collection);
            return (
              <Row key={`uniq-row-${sectionIndex}`}>
                {response.data.map(
                  (item: typeof response.data[0], itemIndex: number) => (
                    <Col sm="6" key={`res-data-uniq-${itemIndex}`}>
                      <Card style={{ paddingBottom: 10, border: 0 }}>
                        <CardImg src={item.image} />
                      </Card>
                    </Col>
                  )
                )}
              </Row>
            );
          }
          return (
            <ComponentName
              key={`uniq-${sectionIndex}`}
              style={style}
              value={text}
            />
          );
        })}
      </Col>
    </Layout>
  );
};
export default Custom;
