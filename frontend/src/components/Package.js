import React from 'react'
import Dependency from './Dependency'

const Package = ({ packageItem, packages, handleCloseDisplay, handleItemClick }) => {

  let dependencies = packageItem.dependencies.map(depId => <Dependency dependencyId={depId} key={depId} packages={packages} handleItemClick={handleItemClick} />)
  const alternatives = packageItem.alternatives.map(alt => <li key={alt} className="alt-dependency"><button>{alt}</button></li>)
  let reverseDependencies = packageItem.dependants.map(depId => <Dependency dependencyId={depId} key={depId} packages={packages} handleItemClick={handleItemClick} />)

  if (dependencies.length < 1) {
    dependencies = "None"
  }

  if (reverseDependencies.length < 1) {
    reverseDependencies = "None"
  }

  return (
    <div>
      <div className="package-display">
        <h1>{packageItem.name}</h1>
        <h3>Description: </h3>
        <p>{packageItem.description}</p>
        <h3>Dependencies: </h3>
        <div className="dependency-list">
          <ul className="dependency-list">{dependencies}{alternatives}</ul>
        </div>
        <h3>Reverse dependencies: </h3>
        <div className="dependency-list">
          <ul className="dependency-list">{reverseDependencies}</ul>
        </div>
        <div className="display-footer">
          <button onClick={handleCloseDisplay}>close</button>
        </div>
      </div>
    </div>
  )
}

export default Package