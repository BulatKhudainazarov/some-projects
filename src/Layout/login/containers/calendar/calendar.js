import React from 'react'
import {Translate} from 'react-translated'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, {Draggable} from '@fullcalendar/interaction'
import {createEventId} from './event-utils'
import {addCalendarTask, getCalendarTasks, removeCalendarTask} from '../../../../request/apiRequests'
import './calendar.scss'
import './calendar.css'


/*

!! IMPORTANT !!

calendar works well only on versions
and you should install packages with --save flag
"@fullcalendar/core": "^5.0.0",
"@fullcalendar/daygrid": "^5.0.0",
"@fullcalendar/interaction": "^5.0.0",
"@fullcalendar/react": "^5.0.0",
"@fullcalendar/timegrid": "^5.0.0",

CHECK YOUR DEPENDENCIES BEFORE RUNNING

*/


function transformEvents(events, id) {
  if (!events) return {}

  if (!Array.isArray(events)) {
    const {_def, _instance, id} = events

    return {
      id: id,
      task_name: _def.title,
      allDay: _def.allDay,
      start: _instance.range.start.toISOString().slice(0,-2),
      end: _instance.range.end.toISOString().slice(0,-2),
      color: _def.ui.backgroundColor
    }
  } else {
    if (!events.length) return []

    return events.map(({_def, _instance}) => {
      return {
        id: _def.publicId || id,
        title: _def.title,
        allDay: _def.allDay,
        start: _instance.range.start,
        end: _instance.range.end,
        color: _def.ui.backgroundColor
      }
    })
  }
}


class Calendar extends React.Component {
  refToBtn = React.createRef()
  refToExtEvents = React.createRef()
  refToCalendar = React.createRef()
  state = {
    currentEvents: [],
    events: [],
    loading: true,
    dragEvents: [
      {title: 'Тест тапсыру', color: '#FF4141'},
      {title: 'Сабақ қарау', color: '#9D43FF'},
      {title: 'Үй тапсырмасын тексеру', color: '#00C0EF'},
      {title: 'Кураторға хабарласу', color: '#FFB800'},
      {title: 'Кітап оқу', color: '#00A65A'},
    ]
  }

  componentDidMount() {
    new Draggable(this.refToExtEvents.current, {
      itemSelector: '.calender__eventItem',
      eventData: eventEl => JSON.parse(eventEl.dataset.event)
    })


    getCalendarTasks()
      .then(response => {
        if (response.error) return console.log(response)
        if (response.data.schedule.length) {
          const events = response.data.schedule.map(item => ({...item, title: item.task_name}))
          this.setState(() => ({events: [...events]}))
        }
      })
  }


  render() {

    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
          <FullCalendar
            ref={this.refToCalendar}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            views={{
              dayGridMonth: {
                type: 'dayGridMonth',
                buttonText: 'Ай'
              },
              timeGridWeek: {
                type: 'timeGridWeek',
                buttonText: 'Апта'
              },
              timeGridDay: {
                type: 'timeGridDay',
                buttonText: 'Күн'
              }
            }}
            droppable={true}
            allDaySlot={true}
            lazyFetching={true}
            initialView='dayGridMonth'
            editable={true}
            loading={false}
            selectable={true}
            selectMirror={true}
            eventBackgroundColor={'blue'}
            dayMaxEvents={true}
            // initialEvents={INITIAL_EVENTS}
            events={this.state.events} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={eventInfo => renderEventContent(eventInfo, this.handleEventClick)} // custom render function
            // eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
            eventReceive={info => {
              const maxIndex = Math.max.apply(Math, this.state.events.map(function(o) { return o.id }))
              const event = transformEvents({...info.event, id: maxIndex + 1})
              addCalendarTask(event)
                .then(res => console.log('res', res.data.message))
                .catch(err => {
                  const message = err.message || (err.response.data && err.response.data.message) ? err.response.data.message : null
                  alert(`Error:, ${message}`)
                })
            }}
            eventChange={info => {
              addCalendarTask(transformEvents(info.event))
                .then(res => console.log('res', res.data.message))
                .catch(err => {
                  const message = err.message || (err.response.data && err.response.data.message) ? err.response.data.message : null
                  alert(`Error:, ${message}`)
                })
            }}
            // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar calender__content'>

        <div className="calender__column">

          <h2 className="calender__sidebarTitle"><Translate text="Calendar"/></h2>

        </div>

        <div ref={this.refToExtEvents} className='calender__eventContent calender__column' id='external-events'>

          <h2 className='calender__eventTitle'><Translate text="Тапсырмалар"/></h2>

          {this.state.dragEvents.map((item, index) => {

            return (
              <div key={index}
                   data-event={JSON.stringify(item)}
                   style={{background: item.color}}
                   className='calender__eventItem'>
                <div className='fc-event-main'>{item.title}</div>
              </div>
            )

          })}
        </div>

        <div className="calender__eventAdd calenderAdd calender__column">

          <h2 className="calenderAdd__title"><Translate text="Жаңа тапсырма"/></h2>

          <ul onClick={this.colorPickerHandler} className="calenderAdd__colors">
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#FFE15A'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#FF5773'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#04CC00'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#8BCAFF'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#8581D2'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#FFBB6E'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#FFA2B2'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#D3DCFB'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#70D7E5'}}/>
            </li>
            <li className="calenderAdd__eventColor">
              <i className="calenderAdd__boxColor" style={{background: '#D478FF'}}/>
            </li>


          </ul>

          <div className="calenderAdd__wrapper">

            <form onSubmit={this.addColorItem}>
              <input
                className="calenderAdd__input input__noFocus"
                placeholder="Тапсырма атауы"
                name="title"
                type="text"
              />
              <button
                ref={this.refToBtn}
                className="calenderAdd__button btn__shadowFromNull"
              >Қосу
              </button>
            </form>

          </div>

        </div>
      </div>
    )
  }

  // onClose = info => {
  //
  //   console.log('info', info)
  //
  // }

  addColorItem = event => {
    event.preventDefault()
    const {value} = event.target.title

    if (value && value.trim()) {
      const bg = window.getComputedStyle(this.refToBtn.current).backgroundColor

      this.setState(prev => ({
        ...prev,
        dragEvents: [
          ...prev.dragEvents,
          {title: value, color: bg}
        ]
      }))
    }
  }

  colorPickerHandler = event => {

    if (event.target.classList.contains('calenderAdd__boxColor')) {
      const bg = event.target.style.background

      this.refToBtn.current.style.background = bg
      this.refToBtn.current.style.borderColor = bg

    }
  }

  handleDateSelect = (selectInfo) => {

    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      addCalendarTask({
        id: createEventId(),
        task_name: title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        color: '#0000FF'
      })
        .then(data => {
          if (!data.error) {
            return this.setState(prevState => ({
              events: [...prevState.events, {
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
              }]
            }))
          }
        })
    }
  }

  handleEventClick = (clickInfo) => {

    removeCalendarTask(clickInfo.event._def.publicId)
      .then(res => {
        if (res.status === 200) {
          clickInfo.event.remove()
          console.log('success:', res)
        }
      })
      .catch(err => {
        const message = err.message || (err.response.data && err.response.data.message) ? err.response.data.message : null
        window.alert(`Error: ${message}`)
      })
  }

  handleEvents = eventsData => {
    const events = transformEvents(eventsData)
    this.setState(() => ({currentEvents: events}))
  }


}

function renderEventContent(eventInfo, onHide) {

  return (
    <>
      <button className="calendar__closeBtn" onClick={() => onHide(eventInfo)}>&#10005;</button>
      <b>{eventInfo.timeText}</b>
      <i style={{
        maxWidth: '84%',
        overflow: 'hidden'
      }}>{eventInfo.event.title}</i>
    </>
  )
}


export default Calendar
