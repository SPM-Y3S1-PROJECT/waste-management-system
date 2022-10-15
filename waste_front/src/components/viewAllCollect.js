import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ViewAllCollect(){
    
    
    const [filter,selFilter]=useState('')
    ;


    const [collecteditems, setcollecteditems] = useState([]);

    useEffect(() => {
        callingCollectItemAPI();
    }, []);

    function callingCollectItemAPI() {
        try {
            axios.get("http://localhost:9090/itemCollected/").then((response) => {
                console.log("response " + JSON.stringify(response));
                if (response.status == '200') {
                    setcollecteditems(response.data);
                } else {
                    alert("somthing went wrong, please try again");
                }
            }).catch((err) => {
                console.log("axio calling error on callingCollectItemAPI " + err);
            });
        } catch (error) {
            console.log("error in funtion callingCollectItemAPI " + error);
        }
    }

    
    //delete collectedItems
async function removeCollectedItems (id) {
    try {
      console.log("url "+`http://localhost:9090/itemCollected/delete/${id}`);
      await axios.delete(`http://localhost:9090/itemCollected/delete/${id}`).then((response)=>{
         alert("succesfully delete "+JSON.stringify(response));
         callingCollectItemAPI();
      }).catch((err)=>{
         console.log("error "+err);
      });
    } catch (error) {
      console.log("error happen when delete cat info "+error);
    }
  }
    
    
    
    
    return(
        <div>
           <h1>All Collected Items</h1> 
           <div className="container">


           <form class="form-inline my-1 my-lg-0">
      <div className="serchbar">
      <input class="form-control mr-sm-1" type="search" placeholder="Search by name"value={filter} onChange={(e)=> selFilter(e.target.value)} />
      </div>
    </form>

<table class="table">
    <thead>
        <tr>
            <th>Date</th>
            <th>Contact No</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>

        {

            collecteditems.filter(rowit=>{
                return rowit.contactNo.includes(filter)
            }
            ).map((rowCollectedItems) => {
                return (
                    <tr>
                        <td>{rowCollectedItems.date}</td>
                        <td>{rowCollectedItems.contactNo}</td>
                        <td>{rowCollectedItems.Categoryname}</td>
                        <td>{rowCollectedItems.SubCategoryname}</td>
                        <td>{rowCollectedItems.weight}</td>
                        <td>{rowCollectedItems.price}</td>
                        <td>{rowCollectedItems.amount}</td>

                       <td><button type="button" class="btn btn-warning">Update</button></td> 
                       <td> <button type="button" name="save_cate" id="save_cate" className="btn btn-danger"  onClick={()=>{ removeCollectedItems(rowCollectedItems._id);}}> delete </button></td>

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