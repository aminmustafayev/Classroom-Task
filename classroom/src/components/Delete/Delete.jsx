import React from 'react'
import { deleteOne } from '../../API'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';


const Delete = ({id, data}) => {
  return (
    <button style={{border:"none"}} className='btn btn-outline-danger' onClick={async()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                await deleteOne("artist",id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }}>Delete</button>
  )
}

export default Delete