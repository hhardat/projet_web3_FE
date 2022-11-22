import ProductList from "../Product/ProductList";
import Navbar from "../NavBar/NavBar";
//import { Routes } from 'react-router-dom';

const Home = () => {
 
  
  
  return(
    <div>
      <Navbar></Navbar>
      <ProductList></ProductList>
    
      
 </div>
  )
   
 

  
}
  export default Home;
  /*
   items.map((item)=> (
    
   <Container>
   <Row className="justify-content-md-center">
    <Col xs={6}>
    
    <Card ClassName="h-100">
    <Card.Img variant="top" src={item.imgUrl}  height="400" style={{objectFit: "cover" }} />
    
    <Card.Body  className="d-flex flex-column">
    <Card.Title className="d-flex justify-content-between align-items-basline mb-4">

   <span className="fs-2"> <h1>{item.name}</h1> </span> 
   <span className="ms-2 text-muted"><h2>{item.price} $</h2></span>
    </Card.Title>
   
    </Card.Body>
    </Card>
   

    <Button variant="secondary" size="lg">
        BUY
      </Button>
      </Col>
      </Row>
   
    
      </Container>
    
  ));*/