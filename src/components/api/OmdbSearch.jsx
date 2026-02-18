import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const OmdbSearch = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [searchParam, setSearchParam] = useState("Batman")

    const getMovies = async () => {
        if (!searchParam.trim()) {
            return
        }
        try {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`)
            console.log(res.data)
            setMovies(res.data.Search || [])
        } catch (err) {
            console.error(err)
            setMovies([])
        }
        setSearchParam("")
    }


    // fetch default results on mount
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div style={{ textAlign: "center" }} >
            <h1>OMDB SEARCH</h1>
            <div style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={searchParam}
                    placeholder="Search movies"
                    onChange={(e) => setSearchParam(e.target.value)}
                />
                <button onClick={getMovies} style={{ marginLeft: '0.5rem' }}>
                    Search
                </button>
            </div>
            <table className="table table-dark table-hover table-striped" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>imdbID</th>
                        <th>Type</th>
                        <th>Poster</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie) => {
                            return <tr>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>{movie.imdbID}</td>
                                <td>{movie.Type}</td>
                                <td>
                                    <img src={movie.Poster} style={{ height: "100px", width: "100px", objectFit: 'cover' }} alt="poster" />
                                </td>
                                <td>
                                    <button onClick={() => navigate(`/omdb/${movie.imdbID}`)}>
                                        Get Details
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


