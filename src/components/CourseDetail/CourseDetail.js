import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllCoursesQuery } from '../../Store/Service/Service'

export default function CourseDetail() {
  const { id } = useParams()
  const [courseDetails, setCourseDetails] = useState(null)

  useEffect(() => {
    useGetAllCoursesQuery(id)
      .then((data) => {
        setCourseDetails(data)
      })
      .catch((error) => {
        console.error('Error fetching course details:', error)
      })
  }, [id])

  if (!courseDetails) {
    return <p>Loading...</p>
  }

  // Render the details of the course based on the fetched data
  return (
    <div>
      <h2>{courseDetails.title}</h2>
      <p>{courseDetails.description}</p>
      {/* Display other details of the course */}
    </div>
  )
}
