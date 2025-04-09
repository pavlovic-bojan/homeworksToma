import VIDEOS from "../videos.json"

const SearchBar = () => {
    return (
        <>
            <form>
                <label>
                    Search
                    <input type="text" placeholder="Search..." onInput={e => SearchVideoByName(e.currentTarget.value)} />
                </label>
            </form>
        </>
    )
}

const SearchVideoByName = (name) => {
    const cleanedName = name.trim().toLowerCase()
    let found = false

    VIDEOS.forEach(video => {
        if (cleanedName === video.title.toLowerCase()) {
            found = true
        }
    })

    if (found) {
        console.log("Našli smo video")
    } else {
        console.log("Nismo našli video")
    }
}

export default SearchBar