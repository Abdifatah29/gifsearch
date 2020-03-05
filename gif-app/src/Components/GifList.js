import React from 'react';
import Gif from './Gif';
import NoGifts from './NoGifs';

const GifList = props => {

    const results = props.data;
    let gifs;
    if (results.length > 0 ) {
         gifs = results.map(gif =>
            <Gif url={gif.images.fixed_height.url} key={gif.id} />
        );
    } else {
        gifs = <NoGifts />
    }


    return (
        <ul className="gif-list">
            {gifs}
        </ul>
    );
}

export default GifList;
