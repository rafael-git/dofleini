import React from 'react';
import { IconDashboard } from './Icons';

const IconCard = (props) => {
    const {
        svg
    } = props;

    return (
        <div className='icon-card'>
            <IconDashboard svgType={svg} />
        </div>
    );
};

export default IconCard;