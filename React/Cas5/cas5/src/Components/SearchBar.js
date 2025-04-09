const SearchBar = ({videos,onSearchVideo}) => {
    return (
        <>
            <form>
                <label>
                    Search
                    <input
                        type="text"
                        placeholder="Search..."
                        onInput={e => SearchVideoByName(e.currentTarget.value,videos,onSearchVideo)}
                    />
                </label>
            </form>
        </>
    )
}

const SearchVideoByName = (name,videos,onSearchVideo) => {
    const cleanedName = name.trim().toLowerCase()
    let found = false
    let foundVideos = []
    videos.forEach(video => {
        const videoTitle = video.title.toLowerCase()
        if (videoTitle.includes(cleanedName) && cleanedName !== "") {
            found = true
            foundVideos.push(video)
        }
    })
    onSearchVideo(foundVideos)

    if (found) {
        console.log("We found the video.")
    } else {
        console.log("We didn't find the video.")
    }
}

export default SearchBar