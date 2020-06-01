import React from 'react'

const Dependency = ({ dependencyId, packages, handleItemClick }) => {
  const dependency = packages.find(pkg => pkg.id === dependencyId)

  return (
    <li className="dependency-item" key={dependencyId}>
      <button onClick={(event) => handleItemClick(dependency, event)}>
        {dependency.name}
      </button>
    </li>
  )
}

export default Dependency