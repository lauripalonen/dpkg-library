import React from 'react'
import ListItem from './ListItem'

const packageList = ({packages, handleItemClick}) => {
  if (packages.length < 1) {
    return null
  }

  return (
    <ul className="package-list">
      {packages.map(pkg =>
          <ListItem pkg={pkg} key={pkg.id} handleItemClick={handleItemClick} />
      )}
    </ul>
  )
}

export default packageList