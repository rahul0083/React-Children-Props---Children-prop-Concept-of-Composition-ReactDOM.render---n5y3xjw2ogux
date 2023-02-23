import React from 'react'

const ChildComponent = (props) => {
//code here
  return (
    <div id="child">
      Find The Square <br/>
     {props.input}
    </div>
  )
}


export default ChildComponent;