
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/index';
import { useDispatch } from 'react-redux';
import { actionLogin } from './store/login.tsx';
import LoadingIcon from './components/icons/LoadingIcon.tsx';



//pages - react lazy()
const PageLogin = lazy(() => import('./pages/Login.tsx'));
const PageDashboard = lazy(() => import('./pages/Dashboard.tsx'));
const PageNFTDetail = lazy(()=>import('./pages/NFTDetail.tsx'));
const PageBrands = lazy(()=>import('./pages/Brands.tsx'));
const PageBrandDetail = lazy(()=>import('./pages/BrandDetail.tsx'));

const App = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state:RootState) => state.auth.token);

  //routes
  let routes;


  if(token){
    //pages after login
    routes = (
      <Routes>
        <Route path="/detail/:id" element={<PageNFTDetail/>} />
        <Route path="/brands" element={<PageBrands/>} />
        <Route path="/brands/:id" element={<PageBrandDetail/>} />
        <Route path="/" element={<PageDashboard/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    )
  
  }else {
    routes = (
      <Routes>
        <Route path="/" element={<PageLogin/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    )
  
  }

  useEffect(()=>{
    let storedData;
    const localStorageData = localStorage.getItem("userData");
    if(localStorageData){
      storedData = JSON.parse(localStorageData);
    }
    if(storedData && storedData.token && storedData.expiration){
      //console.log("storedData",storedData);
      const data = {
        uid: storedData.userId, 
        displayName: storedData.username,
        accessToken: storedData.token, 
        expirationTimeISOString: new Date(storedData.expiration).toISOString()
      }
        dispatch(actionLogin.login({...data}));
    }


  },[dispatch]);  



  return (
    <>
    <Suspense fallback={<LoadingIcon fullheight />}>
      {routes}
    </Suspense>
    </>
  )
}

export default App;
