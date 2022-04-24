 import "./Category.css"

 function Category({image, lable}){
     return <div>
    
        
         <div className="category">
            
             <img src={image} alt=""></img>
             <b>{lable}</b>
         </div> 
     </div>
 }

 export {Category}