import React from 'react'

const ListItem = ({ pkg, handleItemClick }) => {
  return (
    <li onClick={(e) => handleItemClick(pkg, e)} className="package-list-item" key={pkg.id}>{pkg.name}</li>
  )
}

export default ListItem