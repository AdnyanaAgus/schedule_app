import React from 'react';
import classNames from 'classnames';

export const MobileView = ({ children, darkMode }) => {
    return(
        <div className={`mobile-view sm:hidden h-full w-full duration-200 ${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'} min-w-[260px]`}>
            { children }
        </div>
    )
}


export const LargerView = ({ children }) => {

    return(
        <div className="larger-view hidden sm:block h-full min-w-[260px]">
            { children }
        </div>
    )
}
