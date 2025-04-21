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






import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
    const { show, onClose, setShowTrigger } = props; 
    const duration = 300;

    return (
        <CSSTransition
            in={show}
            timeout={duration}
            onEnter={() => setShowTrigger(false)}
            onExited={() => setShowTrigger(true)}
            classNames="modal"
            mountOnEnter
            unmountOnExit
        >
                <div className="modal mt-5 d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Typical modal window</h5>
                                <button onClick={() => onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body content</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => onClose(false)} type="button" className="btn btn-secondary">Close</button>
                                <button onClick={() => onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);

    return (
        <Container>
            <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            {showTrigger ?
                <button 
                    type="button" 
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>Open Modal</button> 
                : null}
        </Container>
    );
}

export default App;

