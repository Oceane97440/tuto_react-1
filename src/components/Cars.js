import React from "react";

//fonction flécher es6

//au lieux de passer obj props.color on passe obj dans la fonction
//marque est propose , color /years/age sont des stat
const Car = ({marque,color,years,age}) => {
console.log(marque)

    /*const conditionIf = children ? (<p>Marque : {children}</p>) : (<p>Aucun data</p>);

    return(
        <div className="fonction" style={{backgroundColor:'green'}}>
            <p>Couleur : {color}</p>
            {conditionIf}
        </div>
    )*/

    
        return(
            <div className="fonction" style={{border:'1px solid green'}}>
              
               <p>Marque : {marque}</p>
               <p>Color : {color}</p>
               <p>Années : {years}</p>
               <p>Age : {age}</p>



            </div>
        )
    
}

export default Car