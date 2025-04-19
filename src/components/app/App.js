// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// import AppHeader from "../appHeader/AppHeader";
// import Spinner from "../spinner/Spinner";
// import { lazy, Suspense} from "react";

// const Page404 = lazy(() => import('../pages/404'))
// const MainPage = lazy(() => import('../pages/MainPage'))
// const ComicsPage = lazy(() => import('../pages/ComicsPage'))
// const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <AppHeader />
//                 <main>
//                     <Suspense fallback={<Spinner />}>
//                         <Routes> 
//                             <Route path="/" element={
//                                 <>
//                                     <MainPage />
//                                 </>
//                             } />
//                             <Route path="/comics" element={
//                                 <>
//                                     <ComicsPage />
//                                 </>
//                             } />
//                             <Route path="/comics/id" element={
//                                 <>
//                                     <SingleComicPage />
//                                 </>
//                             } />
//                             <Route path="*" element={
//                                 <>
//                                     <Page404 />
//                                 </>
//                             } />
//                         </Routes>
//                     </Suspense>
//                 </main>
//             </div>
//         </Router>
//     );
// };

// export default App;






import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)

        useEffect(() => {
            setSlide(getData());
        }, [])

        function changeSlide(i) {
            setSlide(slide => slide + i);
        }
        return <BaseComponent 
                        {...props}
                        slide={slide} 
                        autoplay={autoplay} 
                        setSlide={setSlide} 
                        setAutoplay={setAutoplay} 
                        changeSlide={changeSlide} />
    }
}

const getDataFromFirstFetch = () => {return 10};
const getDataFromSecondFetch = () => {return 20};

const SliderFirst = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br/>{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)


function App() {
    return (
        <>
            <SliderWithFirstFetch />
            <SliderWithSecondFetch />
        </>
    );
}

export default App;