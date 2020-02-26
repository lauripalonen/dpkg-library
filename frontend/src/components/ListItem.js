import React from 'react'

const ListItem = ({ pkg, handlePkgClick }) => {
  return (
      <button onClick={(e) => handlePkgClick(pkg, e)}>
        {pkg.name}
      </button>
  )
}

export default ListItem