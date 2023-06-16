
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <>
    <div className="container">
    <div className="row">
<div className="card col-8">

    <img className='contimg' src= 'images/contactUS.svg' alt="" />
</div>


    <div className="card col-4">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h1  >You can contact with us</h1>
        <Form.Label>Email addres's</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div></div>
    </div>
 </>
  );
}

export default TextControlsExample;