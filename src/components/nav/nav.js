import Nav from "react-bootstrap/Nav";

function AlignmentExample() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Guitars</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Ukuleles</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Strings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default AlignmentExample;
