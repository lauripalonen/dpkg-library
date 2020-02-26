import React from 'react'

const Package = ({ pkg, pkg_list, handleCloseDisplay, handlePkgClick }) => {
  const depencies = pkg.depencies.map(dep =>
    <li style={{ display: 'inline' }} key={dep}>
      <button
        onClick={(e) => handlePkgClick(pkg_list[dep], e)}> {pkg_list[dep].name}
      </button>
    </li>
  )
  const reverseDepencies = pkg.dependants.map(dep =>
    <li style={{ display: 'inline' }} key={dep}>
      <button
        onClick={(e) => handlePkgClick(pkg_list[dep], e)}> {pkg_list[dep].name}
      </button>
    </li>
  )

  const divstyling = {
    position: "absolute",
    zIndex: "100",
    backgroundColor: "lightgrey",
    top: "100px",
    width: "100%"
  }

  return (
    <div style={divstyling}>
      <ul>
        <li>NAME: {pkg.name}</li>
        <li>DESCRIPTION: {pkg.description}</li>
        <ul>DEPENCIES: {depencies}</ul>
        <ul>REVERSE DEPENCIES: {reverseDepencies}</ul>
      </ul>
      <button onClick={handleCloseDisplay}>close</button>
    </div>
  )
}

export default Package