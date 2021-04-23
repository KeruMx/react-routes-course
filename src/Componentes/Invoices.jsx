import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Invoices extends Component {
    render(){
        return(
            <div>
                Este es el componente invoices! <Link to="/">Volver a la raíz</Link>
            </div>
        )
    }
}

export default withRouter(Invoices);