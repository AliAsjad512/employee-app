import React from 'react';

const TableRow = ({ employee, index, click }) => {

    return (
        <tr onClick={click}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
        </tr>
    );
}

export default TableRow;
