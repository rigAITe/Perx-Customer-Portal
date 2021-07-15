import React from 'react';
import { Link } from 'react-router-dom';

function CategoryBanner( props ) {
    const { addClass = '', subClass = '', src, height, children } = props;
    return (
        <div className={ 'product-category ' + addClass } data-src={ `${ process.env.PUBLIC_URL }/` + src } style={ { minHeight: height } } >
            <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` }>
                <figure>
                    <img src={ `${ process.env.PUBLIC_URL }/` + src } alt="banner" width={ 220 } height={ 220 } />
                </figure>
            </Link>

            <div className={ `category-content ${ subClass }` }>
                { children }
            </div>
        </div>
    )
}
export default React.memo( CategoryBanner );

