import React,{useState,useEffect} from "react" //functional component ekk me add krnne
import axios from "axios";



export default function CollectItem(){



//create variables/states
     const [date,setDate]= useState("");
     const [contactNo,setContactNo]= useState("");
     const [Categoryname,setCatogy]= useState("");
     const [SubCategoryname,setSubCatogory]= useState("");
     const [weight,setweight]= useState("");
     const [price,setprice]= useState("");
     const [amount,setamount]= useState("");





     const [categories, setCategories] = useState([]);
     const [subCategories, setSubCategories] = useState([]);
    // const[Categoryname,setCatogy]=useState("");
//const[SubCategoryname,setSubCatogory]=useState("");

const[error,setError]=useState(false);


     useEffect(() => {
        async function getCategories() {
          const fetchedCategories = await axios.get('http://localhost:9090/Category');
          setCategories(fetchedCategories.data);
        }
        getCategories();
      }, []);







      






    function sendData(e){
      e.preventDefault();

   
      const newCollectForm = {date,contactNo,Categoryname,SubCategoryname,weight,price,amount};

      //error
      if(date.length==0||contactNo.length==0||Categoryname.length==0||SubCategoryname.length==0||weight.length==0||price.length==0||amount.length==0){

        setError(true);
      }
      
console.log(newCollectForm);

   //js object eka ethule states wla nam tika denwa
           //this
     const newItem={
        date,
        contactNo,
        Categoryname,
        SubCategoryname,
        weight,
        price,
        amount
      }

             //pass krnn ona backend url eka                     //this
             axios.post("http://localhost:9090/itemCollected/add",newItem).then(()=>{
              alert("Item Added")
      
              //save unta psse blank wenn fields
           //   setContactNo("");
        //   setCatogy("");
        //   setSubCatogory("");
           //   setweight("");
           //   setprice("");
           //   setamount("");
      
           }).catch((err)=>{
              alert(err)
            })
      

      
    }async function selectCategory(cat) {
       setCatogy(cat);





       const fetchedSubCategories = await axios.get('http://localhost:9090/SubCategory');
       console.log(fetchedSubCategories.data);
       const subCat = [];
       fetchedSubCategories.data.forEach((element) => {
         console.log(Categoryname);
         console.log(element.Categoryname);
         if (element.Categoryname === cat) {
           subCat.push(element);
         }
       });
       console.log(subCat);
       setSubCategories(subCat);
     }
     function selectSubCategory(sub) {
       console.log(sub);
       setSubCatogory(sub);
     
      


   


{/* state ekt value eka assign kranwa enter krddima - onchange eken
 setname eken name ekta value eka assign kranwa */}

      

    }
     return(


      
        <div className="container">
 <div className="card shadow mb-1">
 <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Collect Item</h6>
            </div>

     <form onSubmit={sendData}>
     <div className="card-body">
                    <div className="mb-3">

        <div className="form-group">

       
        
        <div>
        <label for="date">Date :  </label>
        <input type="date" className="form-control" onChange={(e)=>{
             setDate(e.target.value); }} ></input>
        </div>
        <br></br><br></br>

         <label for="contact">Contact No :</label>
         <input type="text" className="form-control" name="contactNo" id="cname" aria-describedby="emailHelp" placeholder="Enter contact number" onChange={(e)=>{
             setContactNo(e.target.value);
        }}></input>
        
        {error&&contactNo.length<=0? <label id="error" >contact number can not be empty</label>:""}
        <br></br><br></br>
    
  
        <div className='mb-3'>
              <select
                onChange={(e) => {
                  selectCategory(e.target.value);
                }}
                className='form-select'
              >
                <option defaultValue={'Select Item'}>Select Category</option>
                {categories.length > 0 &&
                  categories.map((category) => {
                    return (
                      <option key={category._id} value={category.Categoryname}>
                        {category.Categoryname}
                      </option>
                    );
                  })}


              </select>
            </div>

<div className='mb-3'>
              <select
                onClick={(e) => {
                  selectSubCategory(e.target.value);
                }}
                className='form-select'
              >
                {subCategories.length > 0 &&
                  subCategories.map((subCategory) => {
                    return (
                      <option key={subCategory._id} value={subCategory.SubCategoryname} required>
                        {subCategory.SubCategoryname}
                      </option>
                    );
                  })}
              </select>
            </div>



<label for="exampleInputEmail1">weight</label>
         <input type="text" className="form-control" name="weight" id="Contact" aria-describedby="emailHelp" onChange={(e)=>{
          setweight(e.target.value);
        }}></input>
         {error&&weight.length<=0? <label id="error">Weight can not be empty</label>:""}
         <br></br><br></br>

        
<label for="exampleInputEmail1">Price</label>
         <input type="text" className="form-control" name="price" id="Contact" aria-describedby="emailHelp" onChange={(e)=>{
          setprice(e.target.value);
        }}></input>
         {error&&price.length<=0? <label id="error">Price can not be empty</label>:""}
         <br></br><br></br>

        
<label for="exampleInputEmail1">Amount</label>
         <input type="text" className="form-control" name="amount" id="Contact" aria-describedby="emailHelp" onChange={(e)=>{
          setamount(e.target.value);
        }}></input>
         {error&&amount.length<=0? <label id="error">Amount can not be empty</label>:""}
         <br></br>

     </div>


     <br></br>
         <button type="submit" className="btn btn-primary">Submit</button>
         <br></br>
        

         </div></div>

</form>
</div>


</div>
       
     )



}