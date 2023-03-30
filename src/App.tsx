import "./App.css"
import { NavBarMenu } from "./components/NavBarMenu"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contacts } from "./pages/Contacts"
import { GalleryPage } from "./pages/GalleryPage"


function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<GalleryPage/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
                <NavBarMenu />
            </BrowserRouter>
        </div>
    )
}

export default App
