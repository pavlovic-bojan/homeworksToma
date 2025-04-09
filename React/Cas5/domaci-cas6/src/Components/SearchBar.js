const SearchBar = ({books,onSearchBook}) => {
    return (
        <>
            <form>
                <label>
                    Search
                    <input
                        type="text"
                        placeholder="Search..."
                        onInput={e => SearchVideoByName(e.currentTarget.value,books,onSearchBook)}
                    />
                </label>
            </form>
        </>
    )
}

const SearchVideoByName = (name,books,onSearchBook) => {
    const cleanedName = name.trim().toLowerCase()
    let found = false
    let foundBooks = []
    books.forEach(book => {
        const videoTitle = book.title.toLowerCase()
        if (videoTitle.includes(cleanedName) && cleanedName !== "") {
            found = true
            foundBooks.push(book)
        }
    })
    onSearchBook(foundBooks)

    if (found) {
        console.log("We found the book.")
    } else {
        console.log("We didn't find the book.")
    }
}

export default SearchBar