export const handleImg = (item) => {
  switch (item.name) {
    case 'Стретчинг':
      return '/img/course-banner/Стретчинг.png'
    case 'Бодифлекс':
      return '/img/course-banner/Бодифлекс.png'
    case 'Йога':
      return '/img/course-banner/Йога.png'
    case 'Танцевальный фитнес ':
      return '/img/course-banner/Танцевальный фитнес.png'
    case 'Степ-аэробика':
      return '/img/course-banner/Степ-аэробика.png'
    default:
      return '/img/course-banner/Степ-аэробика.png'
  }
}
