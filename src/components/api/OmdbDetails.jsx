import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const OmdbDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}&plot=full`
                )
                if (res.data.Response === 'True') {
                    setMovie(res.data)
                } else {
                    setError(res.data.Error || 'Movie not found')
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    if (loading) {
        return <div style={{ textAlign: 'center' }}>Loading...</div>
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', color: 'red' }}>
                <p>Error: {error}</p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        )
    }

    if (!movie) {
        return null
    }

    return (
        <div style={{ padding: '1rem', maxWidth: '800px', margin: 'auto' }}>
            <button onClick={() => navigate(-1)}>← Back</button>
            <h1>
                {movie.Title} ({movie.Year})
            </h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {movie.Poster && movie.Poster !== 'N/A' && (
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        style={{ maxWidth: '250px', width: '100%', height: '50%', borderRadius: '4px' }}
                    />
                )}
                <div style={{ flex: 1, minWidth: '250px' }}>
                    <p>
                        <strong>Genre:</strong> {movie.Genre}
                    </p>
                    <p>
                        <strong>Director:</strong> {movie.Director}
                    </p>
                    <p>
                        <strong>Writer:</strong> {movie.Writer}
                    </p>
                    <p>
                        <strong>Actors:</strong> {movie.Actors}
                    </p>
                    <p>
                        <strong>Plot:</strong> {movie.Plot}
                    </p>
                    <p>
                        <strong>Language:</strong> {movie.Language}
                    </p>
                    <p>
                        <strong>Country:</strong> {movie.Country}
                    </p>
                    <p>
                        <strong>Awards:</strong> {movie.Awards}
                    </p>
                    <p>
                        <strong>Runtime:</strong> {movie.Runtime}
                    </p>
                    <p>
                        <strong>IMDB Rating:</strong> {movie.imdbRating}
                    </p>
                    <p>
                        <strong>Metascore:</strong> {movie.Metascore}
                    </p>
                    {movie.Ratings && movie.Ratings.length > 0 && (
                        <div>
                            <strong>Ratings:</strong>
                            <ul>
                                {movie.Ratings.map((r) => (
                                    <li key={r.Source}>
                                        {r.Source}: {r.Value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p>
                        <strong>Type:</strong> {movie.Type}
                    </p>
                    <p>
                        <strong>BoxOffice:</strong> {movie.BoxOffice}
                    </p>
                </div>
            </div>
        </div>
    )
}
