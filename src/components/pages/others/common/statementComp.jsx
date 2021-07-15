import React from 'react'


const StatementComp = ({ transaction, date, description, credit, debit, balance }) => {

  // const {data, current_page, per_page, total} = newData

  return (
    <tr>
      <th scope="row">{date}</th>
      <td>{transaction}</td>
      <td>{description}</td>
      <td>{credit}</td>
      <td>{debit}</td>
      <td>{balance}</td>
    </tr>
  )

}

export default StatementComp
