import React from 'react';
import LastMovieInDb from './LastMovieInDb';

function ContentRowCenter({infoProducts}){
    return (
        <div className="row">
            <LastMovieInDb infoProducts={infoProducts}/>
        </div>
    )
}

export default ContentRowCenter;