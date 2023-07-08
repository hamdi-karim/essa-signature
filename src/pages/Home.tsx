import { Container, Image } from "react-bootstrap";

export function Home() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Image src="public/imgs/cover.png" fluid />
    </Container>
  );
}
