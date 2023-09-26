import Header from "./Header";
import Home from "./Home";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="component">
                    <Routes>
                        <Route path="/Blog-App" element={<Home />} />
                        <Route path="/Blog-App/create" element={<Create />} />
                        <Route
                            path="/Blog-App/blog/:id"
                            element={<BlogDetails />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
