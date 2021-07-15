import React from 'react';

import { removeXSSAttacks } from '../../utils';

function FeatureBox( props ) {
    const { feature } = props;

    return (
        <div className="feature-box px-sm-5 feature-box-simple text-center">
            <i className={ feature.icon }></i>

            <div className="feature-box-content" dangerouslySetInnerHTML={ removeXSSAttacks( feature.content ) }>
            </div>
        </div>
    )
}

export default React.memo( FeatureBox );