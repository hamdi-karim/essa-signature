import { Container, Image } from "react-bootstrap";

export function Home() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Image src="/imgs/cover.png" fluid />
    </Container>
  );
}
