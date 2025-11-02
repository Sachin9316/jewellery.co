import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/utils/redux/store";
import {ChevronDown, ChevronUp} from "lucide-react";

const FooterColumn = ({title, links}: { title: string; links: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);

    return (
        <div>
            {/* Header with accordion behavior only on mobile */}
            <div
                className="flex justify-between items-center md:cursor-default cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className={`${isAuthenticated ? 'text-destructive' : 'text-primary'} font-normal tracking-widest mb-3`}>{title}
                </h3>
                <span className="md:hidden">
                  {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                </span>
            </div>

            <ul
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-full" : "max-h-0 md:max-h-full"
                } flex flex-col gap-3 text-sm md:max-h-full pb-1`}
            >
                {links.map((link, index) => (
                    <li key={index} className="cursor-pointer hover:underline tracking-widest text-muted-foreground">
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
        ;
};

export default React.memo(FooterColumn);