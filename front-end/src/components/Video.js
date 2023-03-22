import styles from "./Video.module.css";
import { Row, Col, Card } from "react-bootstrap";

const Video = ({ video = {} }) => {
  return (
    <div className={styles.main}>
      <Card className={`my-3 p-3 rounded main ${styles.main}`}>
        <Card.Img variant="top" src={video.Poster} />
        <Card.Body>
          <Card.Title>{video.Title}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6} >CinemaWorld</Col>
              <Col md={6} className={ video.cinemaWorldPrice < video.filmWorldPrice ? styles.hightPrice : ""  }>{video.cinemaWorldPrice}$</Col>
            </Row>
          </Card.Text>
          <Card.Text>
            <Row>
              <Col md={6}>Filmworld</Col>
              <Col md={6} className={ video.cinemaWorldPrice > video.filmWorldPrice ? styles.hightPrice : ""  }>{video.filmWorldPrice}$</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Video;
