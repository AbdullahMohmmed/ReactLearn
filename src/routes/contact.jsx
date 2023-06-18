import Form from "react-bootstrap/Form";
import useAos from "../component/PartSystem/hooks/useAos";

function TextControlsExample() {
  useAos();
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-up"
            className="card col-sm-4 col-md-4	col-lg-4	col-xl-4	col-xxl-4"
          >
            <img className="contimg" src="images/contactUS.svg" alt="" />
          </div>

          <div
            data-aos="fade-up"
            className="card col-sm-4 col-md-8	col-lg-	col-xl-8	col-xxl-8"
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <h1>
                  You can contact with{" "}
                  <span id="span">
                    <strong>Café Matinal</strong>
                  </span>
                </h1>
                <Form.Label>Email addres's</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextControlsExample;
