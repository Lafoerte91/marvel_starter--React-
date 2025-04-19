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




import {useState, memo, Component, createContext, useContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
})

const {Provider, Consumer} = dataContext

const Form = memo((props) => {
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
})

const InputComponent = () => {
    const context = useContext(dataContext)
    return(
        <input 
            value={context.mail} 
            type="email" 
            className='form-control' 
            placeholder="name@example.com" 
        />
    )
}

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
