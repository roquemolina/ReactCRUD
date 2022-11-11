import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>House chores</h3>
            <table >
                <thead>
                    <tr>
                        <th>Chore</th>
                        <th>Person</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                    <tr>
                        <td colSpan="3">No data</td>
                    </tr>) : (
                        data.map( el =>
                    <CrudTableRow 
                    key={el.id}
                    el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData} /> ))}
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable;