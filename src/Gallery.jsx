import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { useGlobalContext } from './context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()

  const { isLoading, error, data } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`)
      return data
    },
  })

  if (isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )

  if (error)
    return (
      <section className="image-container">
        <h4>There was an error.</h4>
      </section>
    )

  const { results: images } = data
  console.log(images)

  if (images.length < 1)
    return (
      <section className="image-container">
        <h4>No Results Found..</h4>
      </section>
    )

  return (
    <section className="image-container">
      {images.map((image) => (
        <img
          src={image?.urls?.regular}
          key={image.id}
          alt={image.alt_description}
          className="img"
        />
      ))}
    </section>
  )
}

export default Gallery
