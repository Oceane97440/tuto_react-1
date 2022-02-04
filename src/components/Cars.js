import React from "react";

//fonction flécher es6

//au lieux de passer obj props.color on passe obj dans la fonction
 const Car = ({children,color}) => {
console.log(children)

    /*const conditionIf = children ? (<p>Marque : {children}</p>) : (<p>Aucun data</p>);

    return(
        <div className="fonction" style={{backgroundColor:'green'}}>
            <p>Couleur : {color}</p>
            {conditionIf}
        </div>
    )*/

    
    if (children) {
        return(
            <div className="fonction" style={{border:'1px solid green'}}>
              
               <p>Marque : {children}</p>
               <p>Color : {color}</p>

            </div>
        )
    }else{
        return(
            <div className="fonction" style={{border:'1px solid green'}}>
               <p>Marque : Acune data</p>
               <p>Color : {color}</p>

            </div>
        )
    }

}

export default Car