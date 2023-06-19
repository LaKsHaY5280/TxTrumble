import React from 'react'



export default function Alert(props) {



    const Capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }



    return (
<<<<<<< HEAD
        <div style={{ height: '60px' }} >{
            props.alert &&
      <div>
=======
        <div style={{ height: '50px'}} >{
            props.alert &&
            <div>
>>>>>>> f0248fae949052d217e6e693f223791bfdb2e7b5
          <div className={`alert alert-${props.alert.type } alert-dismissible fade show`} role="alert">
              <strong>{Capitalize(props.alert.type)}   </strong> {props.alert.msg }
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
<<<<<<< HEAD
    }
        </div>
=======
    }</div>
>>>>>>> f0248fae949052d217e6e693f223791bfdb2e7b5
  )
}
