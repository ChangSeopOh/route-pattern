import React, { Component } from 'react' ;
import {NavLink, Link} from 'react-router-dom'; 
//NavLink allows activeLink. 

class Navbar extends Component{
    render(){ 
        const dogLinks = this.props.dogs.map(dog=>(
            <li className="nav-item" key={dog.name}>
                <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
                {dog.name}
                </NavLink>
            </li>
        ));
        return( 
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <Link className="navbar-brand" to="/dogs">Dog App</Link>

               <button className="navbar-toggler" 
                       type="button" 
                       data-toggle='collapse' 
                       data-target="#navbarNav" 
                       aria-controls="navbarNav" 
                       aria-expanded="false" 
                       aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to='/dogs' key="Home">
                                Home
                            </NavLink>
                        </li> 
                        {dogLinks}
                    </ul>
                </div>
           </nav>
        );
    }

}

export default Navbar;