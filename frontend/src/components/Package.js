import React from 'react'
import Depency from './Depency'

const Package = ({ packageItem, packages, handleCloseDisplay, handleItemClick }) => {

  let depencies = packageItem.depencies.map(depId => <Depency depencyId={depId} packages={packages} handleItemClick={handleItemClick} />)
  const alternatives = packageItem.alternatives.map(alt => <li>{alt}</li>)
  let reverseDepencies = packageItem.dependants.map(depId => <Depency depencyId={depId} packages={packages} handleItemClick={handleItemClick} />)

  if (depencies.length < 1) {
    depencies = "None"
  }

  if (reverseDepencies.length < 1) {
    reverseDepencies = "None"
  }

  return (
    <div className="package-display">
      <ul>
        <li>NAME: {packageItem.name}</li>
        <li>DESCRIPTION: {packageItem.description}</li>
      </ul>
      <ul className="depency-list">DEPENCIES: {depencies}{alternatives}</ul>
      <ul className="depency-list">REVERSE DEPENCIES: {reverseDepencies}</ul>
      <button onClick={handleCloseDisplay}>close</button>
    </div>
  )
}

export default Package