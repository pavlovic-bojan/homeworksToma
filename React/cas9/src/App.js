import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from "./components/Movies"


function App() {
    const [title, setTitle] = useState('')

    return (
        <div className="bg-dark text-white">
            <Movies />
        </div>
    )
}

export default App
