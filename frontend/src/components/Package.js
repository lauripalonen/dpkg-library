import React from 'react'
import Depency from './Depency'

const Package = ({ packageItem, packages, handleCloseDisplay, handleItemClick }) => {

  let depencies = packageItem.depencies.map(depId => <Depency depencyId={depId} key={depId} packages={packages} handleItemClick={handleItemClick} />)
  const alternatives = packageItem.alternatives.map(alt => <li key={alt} className="alt-depency"><button>{alt}</button></li>)
  let reverseDepencies = packageItem.dependants.map(depId => <Depency depencyId={depId} key={depId} packages={packages} handleItemClick={handleItemClick} />)

  if (depencies.length < 1) {
    depencies = "None"
  }

  if (reverseDepencies.length < 1) {
    reverseDepencies = "None"
  }

  return (
    <div>
      <div className="package-display">
        <h1>{packageItem.name}</h1>
        <h3>Description: </h3>
        <p>{packageItem.description}</p>
        <h3>Depencies: </h3>
        <div className="depency-list">
          <ul className="depency-list">{depencies}{alternatives}</ul>
        </div>
        <h3>Reverse depencies: </h3>
        <div className="depency-list">
          <ul className="depency-list">{reverseDepencies}</ul>
        </div>
        <div className="display-footer">
          <button onClick={handleCloseDisplay}>close</button>
        </div>
      </div>
    </div>
  )
}

export default Package