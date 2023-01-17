import {
  isSameDay,
  isAfter,
  isToday,
  endOfMonth,
  startOfMonth,
  isTuesday,
  addMonths,
  eachDayOfInterval,
  parseISO,
  intlFormatDistance,
  differenceInDays
} from 'date-fns'
import { range } from 'ramda'

const ignoredDates = [
  parseISO('2022-12-20')
]

const thirdTuesdayOfMonth = (dateInMonth: Date) =>
  eachDayOfInterval({
    start: startOfMonth(dateInMonth),
    end: endOfMonth(dateInMonth)
  })
    .filter(isTuesday).at(2)!

const isNotIgnoredDate = (date: Date) => !ignoredDates.some(d => isSameDay(d, date))

const format = (date: Date) => {
  const distance = differenceInDays(date, new Date())
  const abs = Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
  const rel = intlFormatDistance(date, new Date(), {
      locale: 'de',
      unit: 'day'
    })

  if (distance < 3) {
    return `${rel}, am ${abs}`
  }
  return `am ${abs}`
}

export const nextGroupDates = () => range(0, 100)
  .map(x => addMonths(new Date(), x))
  .map(thirdTuesdayOfMonth)
  .filter(isNotIgnoredDate)
  .filter(d => isToday(d) || !isAfter(new Date(), d!))

export const nextGroupDate = () => format(nextGroupDates().at(0)!)
