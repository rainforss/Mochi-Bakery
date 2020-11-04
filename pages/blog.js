import { getSession } from "next-auth/client";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { connectToDatabase } from "../lib/mongodb";
import formatTime from "../lib/formatTime";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const { db } = await connectToDatabase();
  const content = await db.collection("blogs").find({}).toArray();

  return {
    props: {
      session,
      blogs: JSON.parse(JSON.stringify(content)),
    },
  };
};

const blog = ({ session, blogs }) => {
  console.log(blogs);

  return (
    <Layout>
      {session && <Button variant="danger">Add Comment</Button>}
      <Container>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} sm={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Subtitle>{formatTime(blog.date)}</Card.Subtitle>
                  <Card.Text>{blog.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default blog;
