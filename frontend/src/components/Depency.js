import React from 'react'

const Depency = ({ depencyId, packages, handleItemClick }) => {
  const depency = packages.find(pkg => pkg.id === depencyId)

  return (
    <li className="depency-item" key={depencyId}>
      <button onClick={(event) => handleItemClick(depency, event)}>
        {depency.name}
      </button>
    </li>
  )
}

export default Depency