import React, { useState, useEffect } from 'react';
import Package from './components/Package'
import PackageList from './components/packageList'

const App = () => {
  const [packages, setPackages] = useState([])
  const [display, setDisplay] = useState('')

  useEffect(() => {

    fetch('https://dpkg-library.herokuapp.com/api/packages')
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Problem encountered...')
          } else {
            response.json().then(function (data) {
              setPackages(data)
            })
          }
        })

  }, [])

  const handleItemClick = (packageItem, event) => {
    event.preventDefault()

    const singleDisplay = <Package packageItem={packageItem}
      packages={packages}
      handleCloseDisplay={handleCloseDisplay}
      handleItemClick={handleItemClick} />

    setDisplay(singleDisplay)
  }

  const handleCloseDisplay = (event) => {
    event.preventDefault()
    setDisplay('')
  }

  return (
    <div className="main-content">
      <div className="top-bar"><h1>dpkg library</h1></div>
      <div className="list-container">
        <PackageList packages={packages} handleItemClick={handleItemClick} />
      </div>
      {display}
    </div>
  );
}

export default App;