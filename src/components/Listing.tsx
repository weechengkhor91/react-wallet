

const Listing = () => {
    return <>
                                    {/**position 1 */}
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-sm mb-4 p-4">
                                      

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
    </>
}

export default Listing;