import React from 'react';
import SmallCard from './SmallCard';


function ContentRowMovies({infoUsers, infoProducts}){  
    if(infoUsers != undefined && infoProducts != undefined){
        console.log(infoUsers)
        let productsInDB = {
            title: 'Products in Data Base',
            color: 'primary', 
            cuantity: infoProducts.count,
            icon: 'fa-clipboard-list'
        }
        
        /* <!-- Total awards --> */
        
        /* <!-- Actors quantity --> */
        
        let usersInDB = {
            title:'Total users' ,
            color:'warning',
            cuantity: infoUsers.count,
            icon:'fa-user-check'
        }
        let cartProps = [productsInDB, usersInDB];
        return (    
            <div className="row">
                
                {cartProps.map( (movie, i) => {
    
                    return <SmallCard {...movie} key={i}/>
                
                })}
    
            </div>
        )
        
    } else {
        return <h2>Cargando...</h2> 
    }
}

export default ContentRowMovies;