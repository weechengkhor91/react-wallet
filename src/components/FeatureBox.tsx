
import React from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
    icon?:React.ReactNode,
    title:string,
    content?:string,
    link?:string
}
const FeatureBox = ({icon, title, content, link}:MyProps) => {
    return <>
        <div className="group relative flex items-center gap-x-2 rounded-lg p-2 mb-3 text-sm leading-6 bg-gray-50 hover:bg-gray-100">
            { icon &&
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary">
                {icon}
            </div>
            }
            <div className="flex-auto">
                { link ? 
                    (<>
                        <Link to={link} className="block font-semibold text-gray-900">
                        {title}
                        <span className="absolute inset-0"></span>
                    </Link>
                    </>):
                    <>
                        {title} <span className="absolute inset-0"></span>
                    </>
                }
            </div>
            
            <div className="flex-auto">
                {content}
            </div>
        </div>
    </>
}

export default FeatureBox;