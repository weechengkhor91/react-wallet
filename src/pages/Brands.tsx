import Card from "../components/Card";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

import Brand001 from "../assets/brand-001.jpg";
import Brand002 from "../assets/brand-002.jpg";
import Brand003 from "../assets/brand-003.jpg";
import Brand004 from "../assets/brand-004.jpg";

const BRANDS_DATA = [
    {
        image: Brand001,
        title:"Starbuck",
        subtitle: "Food & Beverage",
        btnlink:"/brands/starbucks-001"
    },
    {
        image: Brand002,
        title:"Coffee Bean",
        subtitle: "Food & Beverage",
        btnlink:"/brands/coffee-bean"
    },
    {
        image: Brand003,
        title:"ZUS Coffee",
        subtitle: "Food & Beverage",
        btnlink:"/brands/zus-coffee"
    },
    {
        image: Brand004,
        title:"YaKun",
        subtitle: "Food & Beverage",
        btnlink:"/brands/yakun"
    },
]

const Brands = () => {
    return <>
        <Header/>
        <PageTitle title="Brands" />
        <main>
            <section id="sec-brands" className="py-10">
                <div className="container">   
                    <div className="grid grid-cols-12 gap-x-6">
                        
                            {
                                BRANDS_DATA.map((item,index) => {
                                    return (
                                        <div className="col-span-12 sm:col-span-6" key={index}>
                                            <Card img={item.image} title={item.title} subtitle={item.subtitle} btntext="Detail" btnlink={item.btnlink} />
                                        </div>
                                    )
                                })
                            }      
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Brands;