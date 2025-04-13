import { useState } from 'react'

const SearchForm = ({ onSearch }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        onSearch(input.trim())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Unesi naziv filma"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Pretraži</button>
        </form>
    )
}

export default SearchForm
