import { useEffect, useState } from 'react'
import { useGetAllCoursesQuery } from '../../Store/Service/Service'

export const useCourseInfo = () => {
  const { data: courseData, error, isLoading } = useGetAllCoursesQuery()

  const [COURSEINFO, SETCOURSEINFO] = useState([])

  useEffect(() => {
    if (!courseData) {
      return
    }
    const courseId = Object.keys(courseData)

    const COURSES = [
      {
        id: courseId[0],
        name: 'Cтретчинг',
        data: isLoading ? [] : courseData[courseId[0]] || [],
      },
      {
        id: courseId[1],
        name: 'Степ-аэробика',
        data: isLoading ? [] : courseData[courseId[1]] || [],
      },
      {
        id: courseId[2],
        name: 'Йога',
        data: isLoading ? [] : courseData[courseId[2]] || [],
      },
      {
        id: courseId[3],
        name: 'Танцевальный фитнес',
        data: isLoading ? [] : courseData[courseId[3]] || [],
      },
      {
        id: courseId[4],
        name: 'Бодифлекс',
        data: isLoading ? [] : courseData[courseId[4]] || [],
      },
    ]
    SETCOURSEINFO(COURSES)
  }, [courseData])

  return { courseData, error, COURSEINFO, isLoading }
}
