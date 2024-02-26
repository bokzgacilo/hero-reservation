import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function BigCalendar(props){
  const localizer = momentLocalizer(moment)

  const events = [
    {
      title: 'Event 1',
      start: new Date(2024, 1, 27, 10, 0), // Year, Month (0-11), Day, Hour, Minute
      end: new Date(2024, 1, 27, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2024, 1, 28, 13, 0),
      end: new Date(2024, 1, 28, 15, 0),
    }
  ]

  return(
    <div style={{ height: '80vh' }}>
      <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}