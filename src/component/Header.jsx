import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Outlet, Link } from "react-router-dom";



function Header(){

return(


 <nav className="navbar navbar-expand-lg  mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Café Matinal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to={ '/'}className="nav-item text-danger"style={{ textDecoration: 'none'  }}>
          
          <a className="nav-link active" aria-current="page" to>Home</a>
        </Link>
        <Link to={ 'contacts'} className="nav-item " style={{ textDecoration: 'none' }}>
          <a className="nav-link" href="contacts">contact</a>
        </Link>
        <Link to={ 'store'} className="nav-item" style={{ textDecoration: 'none' }}>
          <a className="nav-link" href="store">store</a>
        </Link>
       
      </ul>
    </div>
  </div>
</nav>

)


}
export default Header;