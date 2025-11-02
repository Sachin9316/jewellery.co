import React from 'react';

function CommonTitleHeader({title , description}: {title: string, description?: string} ) {
    return (
        <div>
            <div className="text-secondary sm:text-[55px] text-2xl tracking-widest font-sans font-light uppercase text-center">
                {title}
            </div>
            <div className="text-muted-foreground sm:text-[20px] text-sm font-light font-sans text-center">
                {description}
            </div>
        </div>
    );
}

export default CommonTitleHeader;