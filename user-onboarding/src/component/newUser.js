import React from "react"


export default function UsersFunc ({details}) {


    if (!details) {
        return <h3>Fetching Users</h3>
    }
    


    return(
        <div>
            <div >
                <h2> </h2>
                <p>{details.first_name} {details.last_name} {details.email}</p>

            </div>
        </div>
    )
}



function Friend({ details }) {
    if (!details) {
      return <h3>Working fetching your friend&apos;s details...</h3>
    }
  
    return (
      <div className='friend container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
        <p>Civil: {details.civil}</p>
  
        {
          !!details.hobbies && !!details.hobbies.length &&
          <div>
            Hobbies:
            <ul>
              {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
            </ul>
          </div>
        }
      </div>
    )
  }
  

