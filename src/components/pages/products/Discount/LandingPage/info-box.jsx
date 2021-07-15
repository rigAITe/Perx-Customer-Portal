import React from 'react';

function InfoBox( props ) {
    const { addClass = "", subClass = "", info, titleClass } = props;

    return (
        <div className={ "info-box " + addClass }>
            <i className={ info.name }></i>

            <div className={ "info-box-content " + subClass }>
                <h4 className={ titleClass } >{ info.title }</h4>
                <p>{ info.desc }</p>
            </div>
        </div>
    )
}

export default React.memo( InfoBox );