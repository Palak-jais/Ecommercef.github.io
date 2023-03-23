import React,{useContext,useEffect}from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import {Link} from 'react-router-dom'
function OrderHistory(){
    const state=useContext(GlobalState)
    const [history,setHistory]=state.UserAPI.history
    const [isAdmin]=state.UserAPI.isAdmin
    const[token]=state.token

    useEffect(()=>{
        if(token){
            const getHistory=async()=>{
                if(isAdmin){
                    const res=await axios.get('/api/payment',{
                        headers:{Authorization:token}
                    })
                    setHistory(res.data)

                }
                else
                {
                    const res=await axios.get('/user/history',{
                        headers:{Authorization:token}
                    })
                    setHistory(res.data)

                }
               
            }
            getHistory()
        }
    },[token,isAdmin,setHistory])


    return(
        <div className='history-page'>
          <h2>history</h2>
          <h4>You have {history.length} orders</h4>

    
            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        <th><Link to={'/history/${items._id}'}>View</Link></th>
                    </tr>

                </thead>
                <tbody>
                   {
                    history.map(items=>{
                        <tr key={items._id}>
                            <td>{items.paymentID}</td>
                            <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                            <td><Link to={'/history/${items._id}'}>View</Link></td>
                        </tr>
                    })
                   }
                </tbody>
            </table>
          
        </div>
    )
}
export default OrderHistory