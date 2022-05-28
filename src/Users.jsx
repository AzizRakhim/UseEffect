import React from 'react'

function Users({item}) {
  return (
    <div className="card text-black" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-title">{item.address.city}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

  )
}

export default Users
