import React from 'react'
import { href, Link } from 'react-router-dom'

const ListItem = ( {liClassName,href,ListInnerItem}) => {
  return (
    <li className={liClassName}>    
        <Link to={href}>
          {ListInnerItem}
        </Link>
    </li>
  )
}

export default ListItem