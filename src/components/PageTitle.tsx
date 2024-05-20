

type MyProps = {
    title?: string
}
const PageTitle = ({title}:MyProps) => {
    return <>
    
    <section id="sec-page-title" className="py-4 bg-white/50">
        <div className="container">
            <div className="text-xl md:text-2xl text-primary ">{title}</div>
        </div>
    </section>
    
    </>
}

export default PageTitle;