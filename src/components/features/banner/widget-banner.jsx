import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function WidgetBanner( props ) {
    const { addClass = '', src } = props;

    return (
        <div className={ `widget widget-banner ${ addClass }` }>
            <div className="banner banner-image">
                <Link to="#">
                    <div className="lazy-overlay bg-3"></div>

                    <LazyLoadImage
                        alt="banner"
                        src={ `${ process.env.PUBLIC_URL }/${ src }` }
                        threshold={ 500 }
                        effect="blur"
                        width={ 250 }
                        height={ 317 }
                    />
                </Link>
            </div>
        </div>
    )
}

export default React.memo( WidgetBanner );