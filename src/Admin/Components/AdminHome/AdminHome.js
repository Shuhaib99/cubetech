import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminHome.css'
function AdminHome() {
   
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/admin')
          }
    })

    return (
        <div>
            <div className='adminPanel'>
            <div className='dixed-top  bg-dark text-white w-100 h-50'><h4>CUBETECH</h4>
            <button className="btn btn-secondary ms-4" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <span className='bg-white'> </span>
                  <i className="fa-solid fa-bars"></i>
                </button>                
                <h5 className='text-center'>Administrator</h5>
            </div>
                

                <div className="offcanvas offcanvas-start bg-dark text-white " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header bg-danger">
                        <h5 className="offcanvas-title ms-5 " id="offcanvasExampleLabel">Admin Panel</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body  p-5">
                        <div>
                            <p className='p-2' onClick={()=>{
                                navigate('/applicationlist')
                            }}><i className="fa-solid fa-user"></i> Application List</p>
                            <p className='p-2' onClick={()=>{
                                navigate('/record')
                            }}><i className="fa-solid fa-calendar-days"></i> Record Track</p>
                            <p className='p-2' onClick={()=>{
                                navigate('/slots')
                            }}><i className="fa-solid fa-check-to-slot"></i> Booking Slots</p>
                            <p className='p-2'><i className="fa-solid fa-clipboard-list"></i> Schedule Events</p>
                            <p className='p-2'><i className="fa-solid fa-film"></i> Videos</p>
                            <p className='p-2'><i className="fa-solid fa-money-check"></i> Payments</p>
                            <p className='p-2' onClick={()=>{
                                localStorage.removeItem('AdminEmail') 
                                 navigate('/admin')
                            }}><i className="fa-solid fa-right-from-bracket"></i> Logout</p>
                            </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome
