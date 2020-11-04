import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import formatTime from "../../lib/formatTime";
import axios from "axios";

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://cdn.contentful.com/spaces/o5j01g0vn1o7/environments/master/entries?content_type=blogpost",
    {
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}` },
    }
  );

  return {
    props: {
      data,
    },
  };
};

const blogPage = ({ data }) => {
  const router = useRouter();
  return (
    <Layout>
      <Container className="blog-page-body">
        <Row>
          {data.items.map((item, index) => (
            <Col key={item.sys.id} md={6} lg={4}>
              <Card>
                <Card.Img
                  src={`${data.includes.Asset[index].fields.file.url}?fm=jpg&fl=progressive`}
                  alt={data.includes.Asset[index].fields.title}
                  style={{
                    borderRadius: 0,
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <Card.Title className="font-color-pink mt-4 px-3">
                  {item.fields.blogTitle}
                </Card.Title>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    {formatTime(item.fields.publishDate)}
                  </Card.Subtitle>
                  <Card.Text>{item.fields.summary}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="info"
                    onClick={() => router.push(`/blogs/${item.sys.id}`)}
                  >
                    Read More
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default blogPage;
