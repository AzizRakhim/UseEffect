import React from 'react'

function UsersTwo({item}) {
  console.log(item);
  return (
    <div className="card text-black" style={{width: '18rem'}}>
      <img src={item.avatar} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">{item.email}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

  )
}

export default UsersTwo;