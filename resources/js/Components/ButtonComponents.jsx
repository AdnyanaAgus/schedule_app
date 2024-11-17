import React from 'react';
import { dropdownClosedItemStyle } from '../PredefineStyle/style';

export const Dropdown = ({buttonName, menu}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={`w-full transition inline-block`}>
            <button onClick={handleOpen} className=' relative z-40 w-full p-1 border border-1 border-slate-800 bg-slate-400'>{buttonName}</button>
            <ul className="inline-block w-full">
            {open ? 
                <>
                {menu.map((menuItem, index) => (
                    <li 
                        key={index} 
                        className="transition bg-slate-100 p-1 translate-y-[0rem]"
                    >
                        {menuItem}
                    </li>
                ))}
                </>
                : 
                <>
                {menu.map((menuItem, index) => (
                    <li 
                        key={index} 
                        className={dropdownClosedItemStyle["style" + (index + 1)]}
                        >
                        {menuItem}
                    </li>
                ))}
                </>
            }
            </ul>
            {open ? <div>Is Open</div> : <div>Is Close</div>}
        </div>
    );
}
