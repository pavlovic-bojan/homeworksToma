import VIDEOS from "../videos.json"

const SearchBar = () => {
    return (
        <>
            <form>
                <label>
                    Search
                    <input
                        type="text"
                        placeholder="Search..."
                        onInput={e => SearchVideoByName(e.currentTarget.value)}
                    />
                </label>
            </form>
        </>
    )
}

const SearchVideoByName = (name) => {
    const cleanedName = name.trim().toLowerCase()
    let found = false

    VIDEOS.forEach(video => {
        const videoTitle = video.title.toLowerCase()
        if (videoTitle.includes(cleanedName) && cleanedName !== "") {
            found = true
        }
    })

    if (found) {
        console.log("We found the video.")
    } else {
        console.log("We didn't find the video.")
    }
}

export default SearchBar