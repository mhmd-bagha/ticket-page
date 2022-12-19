import {Route, Routes} from "react-router-dom";
import Index from "./containers/ticket";

function App() {
    return (
        <>
            <Routes>
                <Route path='*' element={<Index/>}/>
            </Routes>
        </>
    );
}

export default App;