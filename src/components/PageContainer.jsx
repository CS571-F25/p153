import { Container } from "react-bootstrap";

export default function PageContainer({ children }) {
    return (
        <Container className="my-5">
        {children}
        </Container>
    );
}