import React from 'react';

function CommonTitleHeader({title , description}: {title: string, description?: string} ) {
    return (
        <div>
            <div className="text-secondary text-[55px] tracking-widest font-sans font-light uppercase text-center">
                {title}
            </div>
            <div className="text-muted-foreground text-[20px] font-light font-sans text-center">
                {description}
            </div>
        </div>
    );
}

export default CommonTitleHeader;