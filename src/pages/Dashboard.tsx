
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from "../components/Card";
import Product001 from "../assets/myproduct-001.jpg";
import FeatureBox from '../components/FeatureBox';
import DashboardIcon from '../components/icons/DashboardIcon';
import MarketIcon from '../components/icons/MarketIcon';
import PageTitle from '../components/PageTitle';
import { RootState } from '../store';
import UserIcon from '../components/icons/UserIcon';


const PRODUCTS_DATA = [
    {
        id:"1",
        image: Product001,
        title: "Item 001",
        subtitle:"Category 001",
        price:0.0066
    },
    {
        id:"2",
        image: Product001,
        title: "Item 002",
        subtitle:"Category 002",
        price:0.0088
    },
    {
        id:"3",
        image: Product001,
        title: "Item 003",
        subtitle:"Category 003",
        price:0.0099
    },
    {
        id:"4",
        image: Product001,
        title: "Item 004",
        subtitle:"Category 001",
        price:0.0066
    },
    {
        id:"5",
        image: Product001,
        title: "Item 005",
        subtitle:"Category 002",
        price:0.0088
    },
    {
        id:"6",
        image: Product001,
        title: "Item 006",
        subtitle:"Category 003",
        price:0.0099
    },
]

const Dashboard = () => {
    const username = useSelector((state:RootState) => state.auth.username);

    return (
        <>

            <Header/>
            <PageTitle title="Dashboard" />
            <main className="py-6">
                <section id="sec-dashboard">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-6">


                            <div className="col-span-12 sm:col-span-4">

                                <div className="overflow-hidden rounded-xl bg-white shadow-sm mb-4 p-4">
             
                                        <div className="group relative flex items-center gap-x-6 rounded-lg text-sm">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-50">

                                                <UserIcon/>

                                            </div>
                                            <div className="flex-auto">
                                                <div className="block font-semibold text-base text-gray-900">
                                                    {username}
                                                <span className="absolute inset-0"></span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">                    
                                                     <span className="w-2 h-2 bg-green-500 rounded-full mr-1 "></span>Active
                                                </div>
                                            </div>
                 
                                        </div>
                            
         
                                </div>

                                <div className="overflow-hidden rounded-xl bg-white shadow-sm mb-4 p-4">
             
                                    <div className="group relative flex flex-col items-center gap-x-6 rounded-lg text-sm">
                                        <div className="text-lg mb-1">Total Balance</div>
                                        <div className="text-xl font-bold mb-1">2800.02</div>
                                        <div className=" text-gray-500 flex items-center mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>&nbsp;ETH
                                        </div>
                                        <div><w3m-button /></div>


                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                                    <div className="p-4">

                                        <FeatureBox icon={<DashboardIcon/>} title="Dashboard" link="#"/>
                                        <FeatureBox icon={<MarketIcon/>} title="Market" link="#"/>

                                    </div>
                                </div>

                            </div> {/**col span 4 */}

                            <div className="col-span-12 sm:col-span-8">
                                <h3 className="header-three-001 mb-4">My Products</h3>
                                    {/**position 1 */}
                                        <div className="grid grid-cols-12 gap-x-6">                
                                                    {
                                                        PRODUCTS_DATA.map((item)=>{
                                                            return (
                                                                 <div className="col-span-6 sm:col-span-6 md:col-span-4" key={item.id}>
                                                                     <Card img={item.image} title={item.title} subtitle={item.subtitle} price={item.price} alllink={`detail/${item.id}`}  />
                                                                </div>
                                                            )
                                                        })
                                                    }  
                                        </div>
                                    {/**end position 1 */}
                            </div>{/**col span 8 */}


                        </div> {/**row */}
                    </div> {/**container */}
                </section>
            </main>
        </>
    )
}

export default Dashboard;