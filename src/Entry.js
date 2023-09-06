import React from "react";


function Entry(props){

    return <div className="entry">

        <table>
            <tbody>
                <tr>
                    <td>{props.make}</td>
                    <td>{props.model}</td>
                    <td>{props.price}</td>
                </tr>
            </tbody>
        </table>
    </div>

}



export default Entry;