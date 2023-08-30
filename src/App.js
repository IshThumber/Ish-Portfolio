import React from "react";
import Wrapper from "./Wrapper";
import Resume from "./sections/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Wrapper />} />
                    <Route path="/rs" element={<Resume />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
