import { useCourseInfo } from './CoursDate'
import CardsSectionAll from './CourseList'

function CardsSection() {
  const { COURSEINFO } = useCourseInfo()

  return (
    <div>
      <CardsSectionAll coursedata={COURSEINFO} />
    </div>
  )
}

export default CardsSection
