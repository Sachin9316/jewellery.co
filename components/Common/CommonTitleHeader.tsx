import React from 'react';

function CommonTitleHeader({title , description}: {title: string, description?: string} ) {
    return (
        <>
            <div className="text-secondary text-[55px] tracking-widest font-sans font-light uppercase">
                {title}
            </div>
            <span className="text-muted-foreground text-[20px] font-light font-sans">
                {description}
            </span>
        </>
    );
}

export default CommonTitleHeader;