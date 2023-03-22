import style from "./Videos.module.css";
import Video from "./Video";
import { Row, Col, Container } from "react-bootstrap";

const Videos = ({ videos = [] }) => {
  return (
    <Container>
      <Row>
      {videos.map((video) => (
        <Col sm={6} md={3}>
          <Video video={video}/>
        </Col>
      ))}
      </Row>
      <br></br>
    </Container>
  );
};

export default Videos;
