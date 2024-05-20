

import SellerImage from '../assets/seller.jpg';
import Header from '../components/Header';
import Product001 from "../assets/myproduct-001.jpg";

const NFTDetail = () => {

    return (
        <>
            <Header/>
            <main className="py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6">

                        <div className="col-span-12  sm:col-span-6">
                        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                                <img src={Product001} alt="Product 001" />
          
                        </div>
                        </div> {/**col span 4 */}

                        <div className="col-span-12 sm:col-span-6">
                                {/**position 1 */}
                                    <div className="grid grid-cols-12 gap-4 sm:gap-6">
                                        <div className="col-span-6 flex items-center">
                                            <img src={SellerImage} alt="Seller" className='rounded-full overflow-hidden w-[30px] shadow-sm'/> <span className="seller-name ml-1">Seller Name</span>
                                        </div>
                                        <div className="col-span-6 text-right justify-self-end">
                                            <div className="share-link-wrapper border border-gray-200 p-1 bg-white rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <h4 className="product-name header-four-001">Galax on Earth</h4>
                                            <div className="product-text text-sm text-gray-500">12 Editions Minted</div>
                                        </div>
                                        <div className="col-span-12 mb-2 sm:mb-5">
                                            <div className="product-price-wrapper flex flex-1 justify-between shadow-lg p-6 border border-primary rounded-md">
                                                <div className="product-price-crypto text-2xl">1.2 ETH</div>
                                                <div className="product-price  text-2xl text-primary">$2500</div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 mb-2 sm:mb-5">
                                            <div className="btn btn-primary w-full block text-center">Buy Now</div>
                                        </div>
                                        <div className="col-span-12">
                                            <h5 className="product-description text-lg">Description</h5>
                                            <div className='product-description-content'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                            </div>
                                        </div>
                                    </div>
                                {/**end position 1 */}
                        </div>
                    </div> {/**row */}
                </div> {/**container */}
            </main>
        </>
    )
}

export default NFTDetail;