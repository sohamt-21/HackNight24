import React from 'react'
import { Link, useActionData, useNavigate } from "react-router-dom";

function Retrive() {
    const auth = localStorage.getItem("user");
//   const navigate = useNavigate();
  return (
    <div>
      Harshal
      <ul>
      <li>
 
      {JSON.parse(auth).name}
</li>
<li>{JSON.parse(auth).currentsaving}</li>
<li>{JSON.parse(auth).Annualsaving}</li>
<li>{JSON.parse(auth).Goal}</li>
      </ul>
      
    </div>
  )
}

export default Retrive
