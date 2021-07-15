import React from 'react';

import Carousel from '../features/carousel';
import Blog from './blog';

import posts from '../../mock-data/blog.json';
import { owlSetting7 } from '../../utils/settings';

function BlogSection () {
    let blogSlide = { ...owlSetting7, responsive: { 576: { items: 3 }, 768: { items: 4 } } }

    return (
        <Carousel addClass="blog-carousel" settings={ blogSlide }>
            {
                posts.slice( 4, 8 ).map( ( item, index ) => (
                    <Blog blog={ item } key={ "blog" + index } />
                ) )
            }
        </Carousel>
    )
}

export default React.memo( BlogSection );