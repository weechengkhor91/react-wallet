

import { Link } from "react-router-dom";


type MyProps = {
    img: string,
    title: string,
    subtitle?: string,
    content?:string,
    price?:number,
    btntext?: string,
    btnlink?: string,
    alllink?:string
}
const Card = ({img, title, subtitle, content, price, btntext="Detail", btnlink="", alllink}:MyProps) => {
    return <>
        {
            alllink ?
            <Link to={alllink} >
                <div className="card-wrapper overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg hover:shadow-primary/10  mb-6">
                    <div className="p-4">
                        <div className="card-image rounded-xl mb-1 overflow-hidden"><img src={img} alt="Brand"/></div>
                        <h4 className="card-title text-primary text-sm md:text-lg">{title}</h4>
                        <div className="card-category text-xs md:text-sm mb-4 text-gray-500">{subtitle}</div>
                        {
                            price && (<>
                            <div className="flex flex-start text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 417"  className="w-5 h-5">
                                <g fill="#62688F">
                                    <path d="M127.5 0l-4 12.2v274.8l4 4 127.5-75z"/>
                                    <path d="M127.5 0L0 216l127.5 75V0z"/>
                                    <path d="M127.5 322l-2.3 2.8v88.6l2.3 6.6 127.6-179z"/>
                                    <path d="M127.5 419.3v-97.3L0 234.5z"/>
                                    <path d="M127.5 291l127.5-75-127.5-59.5z"/>
                                    <path d="M0 216l127.5 75v-134.5z"/>
                                </g>
                            </svg>

                                <span className="">{price}</span>
                            </div>
                            </>)
                        }
                        { content && (
                            <>
                            <div className="card-content-title">Description</div>
                            <div className="card-content">{content}</div>
                            </>
                        )}
                         
                    </div>
                </div>
            </Link>
            :
            <div className="card-wrapper overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg hover:shadow-primary/10  mb-6">
            <div className="p-4">
                <div className="card-image rounded-xl mb-1 overflow-hidden"><img src={img} alt="Brand"/></div>
                <h4 className="card-title text-primary text-sm md:text-lg">{title}</h4>
                <div className="card-category text-xs md:text-sm mb-4 text-gray-500">{subtitle}</div>
                {
                    price && (<>
                    <div className="flex flex-start text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 417"  className="w-5 h-5">
                        <g fill="#62688F">
                            <path d="M127.5 0l-4 12.2v274.8l4 4 127.5-75z"/>
                            <path d="M127.5 0L0 216l127.5 75V0z"/>
                            <path d="M127.5 322l-2.3 2.8v88.6l2.3 6.6 127.6-179z"/>
                            <path d="M127.5 419.3v-97.3L0 234.5z"/>
                            <path d="M127.5 291l127.5-75-127.5-59.5z"/>
                            <path d="M0 216l127.5 75v-134.5z"/>
                        </g>
                    </svg>

                         <span className="">{price}</span>
                    </div>
                    </>)
                }
                { content && (
                    <>
                    <div className="card-content-title">Description</div>
                    <div className="card-content">{content}</div>
                    </>
                )}
                
                {btntext && btnlink  && <Link to={btnlink}><div className="card-btn btn btn-primary text-center">{btntext}</div></Link>}     
            </div>
         </div>
        }

    </>
}

export default Card;