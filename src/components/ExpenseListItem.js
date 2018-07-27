import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item_title">{description}</h3>
      <span className="list-item_subtitle">{moment(createdAt).format("DD/MM/YYYY")}</span>
    </div>

    <div>
      <h3 className="list-item_data">£{numeral(amount / 100).format("0,0.00")}</h3>
    </div>
  </Link>
)

export default ExpenseListItem
