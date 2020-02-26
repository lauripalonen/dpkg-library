import React, { useState, useEffect } from 'react';
import Package from './components/Package'
import ListItem from './components/ListItem'

const App = () => {
  const [packages, setPackages] = useState([])
  const [display, setDisplay] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/api/packages')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Problem encountered...')
          } else {
            response.json().then(function (data) {
              data.sort(function (a, b) {
                if (a.name < b.name) {
                  return -1
                }

                if (a.name > b.name) {
                  return 1
                }

                return 0
              })

              setPackages(data)
            })
          }
        })

  }, [])

  const handlePkgClick = (pkg, event) => {
    event.preventDefault()
    const singleDisplay = <Package pkg={pkg}
      pkg_list={packages}
      handleCloseDisplay={handleCloseDisplay}
      handlePkgClick={handlePkgClick} />
    setDisplay(singleDisplay)
  }

  const handleCloseDisplay = (event) => {
    event.preventDefault()
    setDisplay('')
  }

  const pkgList = () => {
    if (packages.length < 1) {
      return (
        <div></div>
      )
    }

    return (
      <ul>
        {packages.map(pkg => <li key={pkg.id}>
          <ListItem pkg={pkg} handlePkgClick={handlePkgClick} />
        </li>)}
      </ul>
    )
  }

  return (
    <div className="App">
      <h1>dpkg package library</h1>
      {pkgList()}
      {display}
    </div>
  );
}

export default App;