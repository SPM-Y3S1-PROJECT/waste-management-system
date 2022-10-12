
import React, { useState ,useEffect} from "react"
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import {Chart,Tooltip, Title,ArcElement,Legend} from 'chart.js';
Chart.register(
Tooltip,Title,ArcElement,Legend

);









function Report(){

    const data = {
        datasets: [{
            data: [10, 20, 30,30,40],
            backgroundColor:[
                'Red',
                'Yellow',
                'Blue','green','pink'
             
            ]
        },
    
    ],
    
        
        labels: [
            'Red',
            'Yellow',
            'Blue',
            'green','pink'
             
        ]
    };



    useEffect(()=>{
        callingCategoryinfoAPI();
    
    },[]);
    const[Categorylist,setCategorylist]=useState([]);




    function callingCategoryinfoAPI (){
        const fetchData=()=>{
            fetch('http://localhost:9090/SubCategory').then(data =>{
                const res=data.json();
                return res
            
            }).catch(e => {
                console.log("errr",e)
            })
        }
     
    fetchData();
    
     }




    



















    return( 
        
        <div className="container">

            
     <div className="reportbr" style={{ width:'50%',height:'50%'}}>
     
     <Pie data={data}/>
     
     
     </div>
     </div>
     
    )
}
export default Report;
