import React, {useState} from "react"

interface CityData {
    temperature: number
    country: string
}

interface CityInterface {
    [cityName: string]: CityData
}

const citys: CityInterface = {
    'London': {temperature: 30, country: 'UK'},
    'Bec': {temperature: 11, country: 'Austria'},
    'Zagreb': {temperature: 20, country: 'Croatia'},
    'Podgorica': {temperature: 26, country: 'Montenegro'},
}

function City() {
    const [search, setSearch] = useState<string>("")
    const [searchResult, setSearchResult] = useState<boolean | null>(null)
    const [newCityName, setNewCityName] = useState("")
    const [newCityTemperature, setNewCityTemperature] = useState<number>(0)
    const [newCityCountry, setNewCityCountry] = useState<string>("")
    const [editingCityName, setEditingCityName] = useState<string | null>(null)
    const [cityList, setCityList] = useState<CityInterface>(citys)

    function updateCityList(callback: (citys: CityInterface) => CityInterface) {
        setCityList((prev) => callback({...prev}))
    }

    function searchField(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setSearch(value)

        const exists = Object.keys(cityList).some(
            (city) => city.toLowerCase() === value.toLowerCase()
        )
        setSearchResult(value ? exists : null)
    }

    function deleteCity(cityName: string) {
        updateCityList((citys) => {
            delete citys[cityName]
            return citys
        })
    }

    function deleteAllCity() {
        updateCityList(() => ({}))
    }

    function startEditingCity(cityName: string, cityData: CityData) {
        setNewCityName(cityName)
        setNewCityTemperature(cityData.temperature)
        setNewCityCountry(cityData.country)
        setEditingCityName(cityName)
    }

    function saveCity() {
        if (
            newCityName.trim() !== "" &&
            newCityCountry.trim() !== "" &&
            !isNaN(newCityTemperature)
        ) {
            updateCityList((citys) => {
                if (editingCityName && editingCityName !== newCityName) {
                    delete citys[editingCityName]
                }

                citys[newCityName] = {
                    temperature: newCityTemperature,
                    country: newCityCountry,
                }
                return citys
            })

            setNewCityName("")
            setNewCityTemperature(0)
            setNewCityCountry("")
            setEditingCityName(null)
        } else {
            alert("Please provide a valid city name, temperature, and country.")
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3">Add or Edit City</h1>

            <div className="mb-3 w-50">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="City Name"
                    value={newCityName}
                    onChange={(e) => setNewCityName(e.target.value)}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="City Temperature"
                    value={newCityTemperature}
                    onChange={(e) => setNewCityTemperature(Number(e.target.value))}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Country"
                    value={newCityCountry}
                    onChange={(e) => setNewCityCountry(e.target.value)}
                />

                <button className="btn btn-success w-100" onClick={saveCity}>
                    Save City
                </button>
                <button className="btn btn-danger w-100 mt-3" onClick={deleteAllCity}>
                    Delete All Cities
                </button>

                <hr/>
                <h2 className="mb-4">Search City</h2>
                {searchResult !== null && (
                    <div
                        className={`alert ${searchResult ? "alert-success" : "alert-danger"}`}
                        role="alert"
                    >
                        {searchResult
                            ? "You have successfully found the city."
                            : "You did not find the city."}
                    </div>
                )}
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Insert city name for search"
                    value={search}
                    onChange={searchField}
                />
                <hr/>
            </div>

            <div className="d-flex flex-wrap justify-content-center w-100">
                {Object.entries(cityList).map(([name, data]: [string, CityData], index) => (
                    <div key={index} className="card m-3 p-3" style={{width: "18rem"}}>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Temperature: {data.temperature}°C</p>
                        <p className="card-text">Country: {data.country}</p>
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-primary"
                                onClick={() => startEditingCity(name, data)}
                            >
                                Edit
                            </button>
                            <button className="btn btn-danger" onClick={() => deleteCity(name)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default City
