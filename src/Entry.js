import React from "react";
import { Link } from "react-router-dom";


function Entry(props){

    return <div className="entry">

        <table>
            <tbody>
                <tr>
                    <Link to={props.make}>
                        <td>{props.make}</td>
                    </Link>
                    
                    <td>{props.model}</td>
                    <td>{props.price}</td>
                </tr>
            </tbody>
        </table>
    </div>

}



export default Entry;