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





import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function reducer(state, action) {
    switch(action.type) {
        case 'toggle':
            return {autoplay: !state.autoplay}
        case 'slow':
            return {autoplay: 300}
        case 'fast':
            return {autoplay: 700}
        default:
            throw new Error('')
    }
}

const Slider = () => {
    const [slide, setSlide] = useState(0);
    const [autoplay, dispatch] = useReducer(reducer, {autoplay: false});

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>slow autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>fast autoplay</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider/>
    );
}

export default App;
