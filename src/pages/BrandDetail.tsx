import Header from '../components/Header';
import Card from "../components/Card";
import Product001 from "../assets/starbucks-001.jpg";
import MarketIcon from '../components/icons/MarketIcon';
import { useParams } from "react-router-dom";
import Banner from '../components/Banner';

const BRANDITEMS_DATA = [
    {
        id:"1",
        image: Product001,
        title: "Item 2001",
        subtitle:"Category 001",
        price:0.0066
    },
    {
        id:"2",
        image: Product001,
        title: "Item 2002",
        subtitle:"Category 002",
        price:0.0088
    },
    {
        id:"3",
        image: Product001,
        title: "Item 2003",
        subtitle:"Category 003",
        price:0.0099
    },
    {
        id:"4",
        image: Product001,
        title: "Item 2004",
        subtitle:"Category 001",
        price:0.0066
    },
    {
        id:"5",
        image: Product001,
        title: "Item 2005",
        subtitle:"Category 002",
        price:0.0088
    },
    {
        id:"6",
        image: Product001,
        title: "Item 2006",
        subtitle:"Category 003",
        price:0.0099
    },
]

const BrandDetail = () => {

    const params = useParams();
    console.log("params", params.id)
    return <>
    <Header/>
    <main className="py-6">
                <section id="sec-brand-page">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-6">


                            <div className="col-span-12 sm:col-span-4">

                                <div className="overflow-hidden rounded-xl bg-white border border-primary shadow-sm mb-4 p-4">
             
                                        <div className="group relative flex items-center gap-x-6 rounded-lg text-sm">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-primary">
                                                    <MarketIcon/>
                                            </div>
                                            <div className="flex-auto">
                                                <div className="block font-semibold text-base text-gray-900">
                                                    {params.id}
                                                <span className="absolute inset-0"></span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">                    
                                                     Food & Beverages
                                                </div>
                                            </div>
                 
                                        </div>
                            
         
                                </div>

                                        <Banner title={`Claim a free coffee on your next visit for owning XYZ NFT`}  content="Unlock a complimentary coffee on your next visit by owning XYZ NFT. Experience the perks of ownership today!" btntext="Redeem"/>
                             
                            </div> {/**col span 4 */}

                            <div className="col-span-12 sm:col-span-8">
                                <h3 className="header-three-001 mb-4">Our Products</h3>
                                    {/**position 1 */}
                                        <div className="grid grid-cols-12 gap-x-6">

                                                    {
                                                        BRANDITEMS_DATA.map((item) => {
                                                            return (
                                                                <div className="col-span-6 sm:col-span-6 md:col-span-4" key={item.id}>
                                                                    <Card img={item.image} title={item.title} subtitle={item.subtitle} price={item.price}   />
                                                                </div>

                                                            )
                                                        })
                                                    }
                                        </div>
                                    {/**end position 1 */}
                            </div>
                        </div> {/**row */}
                    </div> {/**container */}
                </section>
            </main>
    </>
}

export default BrandDetail;
