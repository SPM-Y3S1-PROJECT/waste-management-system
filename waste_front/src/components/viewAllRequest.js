import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ViewAllRequest(){
    
    
    const [requests, setrequests] = useState([]);

    useEffect(() => {
        callingConatactInfoAPI();
    }, []);

    function callingConatactInfoAPI() {
        try {
            axios.get("http://localhost:5000/Requestform/").then((response) => {
                console.log("response " + JSON.stringify(response));
                if (response.status == '200') {
                    setrequests(response.data);
                } else {
                    alert("somthing went wrong, please try again");
                }
            }).catch((err) => {
                console.log("axio calling error on callingContactusInfoApi " + err);
            });
        } catch (error) {
            console.log("error in funtion callingContactusInfoApi " + error);
        }
    }

    
    
    
    
    
    
    return(
        <div>
           <h1>All Requests</h1> 
           <div className="container">



<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Contact No</th>
            <th>Address</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Approx Weight</th>
            <th>Description</th>
          
        </tr>
    </thead>
    <tbody>

        {
            requests.map((rowContact) => {
                return (
                    <tr>
                        <td>{rowContact.name}</td>
                        <td>{rowContact.Contactnumber}</td>
                        <td>{rowContact.address}</td>
                        <td>{rowContact.Categoryname}</td>
                        <td>{rowContact.SubCategoryname}</td>
                        <td>{rowContact.approximatewaight}</td>
                        <td>{rowContact.description}</td>
                       
                        
<td><button type="button" class="btn btn-warning">Collect</button></td> 

                    </tr>
                )
            })
        }



    </tbody>
</table>


</div>
        </div>
    )
}
