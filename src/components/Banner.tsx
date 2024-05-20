import { Link } from "react-router-dom";


type MyProps = {
    title: string,
    content?:string,
    btntext?:string,
    btnlink?:string,
}
const Banner = ({title, content, btntext, btnlink="#"}:MyProps) => {
    return <>
        <div className="banner-wrapper mb-4">
            <div className="bg-banner flex  flex-wrap">
                <h3 className="header-three-001">{title}</h3>
                <div className="banner-content mb-5">{content}</div>

                <Link to={btnlink} className="inline-block" ><button className="btn btn-primary" type="submit">{btntext}</button></Link> 
            </div>
        </div>
    </>
}

export default Banner;