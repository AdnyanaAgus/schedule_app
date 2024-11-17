import React, { useState, useRef, useEffect} from 'react';
import Calendar from 'react-calendar';
import classNames from 'classnames';
import styled from 'styled-components';
import { MobileView, LargerView } from '../Components/ScreenViewComponents';
function MyApp() {

  // =====================Variable=======================
  const [rawData, setRawData] = useState([ 
    {
      priority: "low",
      title: "meeting to discuss how to steal mama heart",
      description: "description1",
      start_date: new Date("2024-11-16T08:30:00"),
      end_date: new Date("2024-11-27T14:00:00"),
      location: "location1",
      participants: [
        "AgusKurniawan@gmail.com",
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      priority: "high",
      title: "get information about mama",
      description: "description14",
      start_date: new Date("2024-11-16T08:30:00"),
      end_date: new Date("2024-11-27T14:00:00"),
      location: "location1",
      participants: [
        "AgusKurniawan@gmail.com",
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      priority: "medium",
      title: "AGGGGGGGGGGGGGGGGGGGGGGGG MAMA CUTE AGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGH",
      description: "description15",
      start_date: new Date("2024-11-16T14:30:00"),
      end_date: new Date("2024-11-27T16:00:00"),
      location: "location1",
      participants: [
        "AgusKurniawan@gmail.com",
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      priority: "medium",
      title: "title2",
      description: "description2",
      start_date: new Date("2024-11-19T15:00:00"),
      end_date: new Date("2024-11-27T16:00:00"),
      location: "location1",
      participants: [
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, adipiscing elit",
    },
    {
      priority: "high",
      title: "title22",
      description: "description2",
      start_date: new Date("2024-11-19T10:00:00"),
      end_date: new Date("2024-11-27T14:00:00"),
      location: "location1",
      participants: [
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, adipiscing elit",
    },
    {
      priority: "high",
      title: "title23",
      description: "Pengembangan proyek calendar app",
      start_date: new Date("2024-11-27T10:00:00"),
      end_date: new Date("2024-11-27T14:00:00"),
      location: "location1",
      participants: [
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, adipiscing elit",
    },
    {
      priority: "high",
      title: "title3",
      description: "description2",
      start_date: new Date("2025-11-19T08:00:00"),
      end_date: new Date("2025-11-27T14:00:00"),
      location: "location1",
      participants: [
        "Urnia@gmail.com",
        "Agnian@gmail.com",
      ],
      notification_by: "email",
      event_type: "schedule",
      notes: "Lorem Ipsum dolor sit amet, adipiscing elit",
    }
        ]),
        [data, setData] = useState(calendarUtils.processData(rawData)),
        // pop up event variable
        [isPopupOpen, setIsPopupOpen] = useState(false),
        [tileOptionOpen, setTileOptionOpen] = useState(false),
        [addPopUpOpen, setAddPopupOpen] = useState(false),
        [editPopUpOpen, setEditPopupOpen] = useState(false),
        [popupPosition, setPopupPosition] = useState({top:0, left:0}),
        // click event variable
        [hasClicked, setHasClicked] = useState(false),
        [doubleClick, setDoubleClick] = useState(1),
        [tileClicked, setTileClicked] = useState(false),
        [addScheduleClick, setAddScheduleClick] = useState({event: null}),
        // other variable
        [selectedDate, setSelectedDate] = useState(null),
        [scheduleInfo, setScheduleInfo] = useState(undefined),
        [darkMode, setDarkMode] = useState(false),
        [gearOpen, setGearOpen] = useState(false),
        [barHeight, setBarHeight] = useState(0),
          // time picker variables
        [openStartAt, setOpenStartAt] = useState(false),
        [openEndAt, setOpenEndAt] = useState(false),
        [startAt, setStartAt] = useState({hour: 8, minute: 0, periode: "AM"}),
        [endAt, setEndAt] = useState({hour: 9, minute: 0, periode: "AM"}),
        [reccurence, setREcurrence] = useState("none"),
        // Reference variable
        calendarRef = useRef(),
        toStart = useRef();
        
  // process the raw data
  // useEffect(() => {
  //   setData(calendarUtils.processData(rawData));
  // }, [rawData]);
  // close tile option after 5 second
  useEffect(() => {
    const closeOption = setTimeout(() => {
      setTileOptionOpen(false);
    }, 5000);
    return () => {
      clearTimeout(closeOption);
    }
  }, [tileOptionOpen, tileClicked]);
  // set tileClicked to false after 100 milisecond
  useEffect(() => {
    setTimeout(() => {
      setTileClicked(false);
    }, 100);
  }, [tileClicked]);
  // set scheduleInfo for the first time
  // useEffect(() => {
    // setScheduleInfo(
    //   calendarUtils.findData(
    //     data, calendarUtils.dateToString()
    //   )
    // );
  // }, []);
// ===========================Function======================
// Calendar Function{
  const handleTileClick = (date, event) => {
    const dateKey = calendarUtils.dateToString(date, ["fullDate"]);
    setTileOptionOpen(true);
    setTileClicked(true);
    setSelectedDate(date);
    // Double Click{
    // const rectTile = event.target.getBoundingClientRect();
    // setPopupPosition({
    //   top: rectTile.top + window.scrollY + rectTile.height,
    //   left: rectTile.left + window.scrollX,
    // });
    // if(date.getDate() !== selectedDate)
    // {
    //   setDoubleClick(1)
    //   setIsPopupOpen(false);
    // }else{
    //   setDoubleClick(doubleClick + 1);
    //   if(doubleClick === 1){
    //     setIsPopupOpen(true);
    //     setDoubleClick(0);
    //     setTimeout(() => setIsPopupOpen(false), 5000);
    //   }
    // }
    // Set coresponding data by clicked tile {
    setScheduleInfo(calendarUtils.findData(data, dateKey));
    // }
    
    // scroll to first info bar view{
    // setTimeout(() => {
    //   if(toView.current !== undefined && toView.current !== null){
    //     toView.current.scrollIntoView({
    //       block: 'start',
    //       behavior: 'smooth',
    //     });
    //   }else{ 
    //     toStart.current.scrollIntoView({
    //       block: 'start',
    //       behavior: 'smooth',
    //     });
    //   }
    // }, 1000);
  };
  const tileContent = ({ date, view }) => {
    const dateKey = calendarUtils.dateToString(date, ["fullDate"]);
    // add pin for each tile according to marked date {
    if(view === "month"){
      const events = data[dateKey];
      if(events && events.length > 0){
        return (
          <>
            <img className='absolute w-5 top-0 right-0' src="/assets/images/pin_mark.png"></img>
          </>
        )
      }
      return null;
    }
    // }
  };
// }
// Other Function{
  function gearOpenFunc(){
    setHasClicked(true);
    gearOpen ? setGearOpen(false) : setGearOpen(true);
  }
  function changeDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  const addClass = (function(){
    let prevElement = undefined;
    let removedClass = undefined;

    return function(el, classname, removeClass) {
      if(prevElement === undefined){
        prevElement = el;
      }
      // remove class in previous element and add to the current one
      prevElement.target.classList.remove(classname);
      el.target.classList.add(classname);
      // update previous element
      prevElement = el;
    }
  })();
// }
// Main Content
  return (
    <div className="h-full">
      <MobileView darkMode={darkMode}>
        <div className="calendar flex flex-col justify-center h-full">
          <CalendarContainer
            $darkMode={darkMode}
          >
            <Calendar
            className="text-[11px] font-open_sans p-2"
            calendarType="gregory"
            onClickDay={handleTileClick}
            tileContent={tileContent}
            tileClassName={["relative"]}
            defaultValue={(new Date())}
            />
          </CalendarContainer>
          
          <div className={`
            schedule-info-container relative border 
            ${darkMode ? "border-white" : "border-black"} ${darkMode ? "bg-slate-800" : "bg-slate-100"} 
            h-[100%] m-[0.7rem] mt-0 overflow-y-auto
            `}>
          <CalendarSchedule
            darkMode={darkMode}
            scheduleInfo={scheduleInfo}
            utility={calendarUtils}
            now={selectedDate}
          >
          </CalendarSchedule>
              {/* <CalendarTimeline
                darkMode={darkMode}
                toStart={toStart}
                toView={toView}
                scheduleInfo={scheduleInfo}
              >
              </CalendarTimeline> */}

          </div>
        </div>
        {/* Gear Menu */}
        <div className="gear-menu">
          <img onClick={gearOpenFunc} className={`gear z-[71] ${!hasClicked? "" : gearOpen ? 'open' : 'close'} fixed right-[-1.5rem] bottom-[-1.5rem] h-[5rem]`} src="/assets/images/setting.svg" alt="" />

          <div className={`menu-list z-[70] ${!hasClicked? "" : gearOpen ? 'open' : 'close'} fixed right-0 bottom-0 h-[2.5rem] ${darkMode ? "bg-slate-800" : "bg-slate-100"} w-3/6 border border-3 ${darkMode ? "border-white" : "border-black"} rounded-s-md overflow-hidden translate-x-[100%] grid grid-cols-5`}>
            <div className="w-5/6 m-1 grid content-center">
              {
                darkMode ? 
                <button onClick={changeDarkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </button> : 
                <button onClick={changeDarkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </button>
              }
            </div>
          </div>

        </div>
        {/* Tile Menu */}
        <div className={`tile-menu z-10 fixed bottom-0 left-0 w-5/6 h-[2rem] grid grid-cols-4 pl-1 pr-1 duration-700 ${tileOptionOpen ? "translate-y-[0rem]" : "translate-y-[10rem]"}
          `}>
          <button className={`border rounded-t-lg border-black ${darkMode ? "bg-black" : "bg-white"} text-center z-50 drop-shadow-md`} onClick={() => {setAddPopupOpen(true)}}>
            <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>Add</p>
            </div>
          </button>
        </div>
        {/* Add PopUp */}
        <PopUp 
          isPopUpOpen={addPopUpOpen} 
          stateUpdater={setAddPopupOpen}
          popUpTitle="Add Schedule"
        >
          <div className={`add_schedule w-full h-full m-2 rounded-md ${darkMode ? "bg-slate-700 text-white dark" : "bg-white text-black"}`}>
            {/* form */}
            <form className="grid grid-cols-11 h-full w-full pt-4 overflow-hidden text-inherit bg-inherit">
              <div className="icon-container grid grid-rows-14 col-span-1 justify-center items-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
              <div></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              </div>
              <div className="form-container grid grid-rows-14 col-span-10 text-inherit bg-inherit items-center">
                {/* add title */}
                <input type="text" className="form-control text-lg outline-none border-b-2 border-slate-200 w-5/6" placeholder='Add Title' autoFocus/>
                {/* schedule type */}
                <div className="schedule-type w-5/6 pt-1 pb-1 flex gap-x-2">
                  <p className={`duration-200 p-1 pl-2 pr-2 ${darkMode ? "bg-black text-white dark" : "bg-white text-black"} rounded-md cursor-pointer text-inherit event`} onClick={(e) => (addClass(e,"add-selected"))}>Event</p>
                  <p className={`duration-200 p-1 pl-2 pr-2 ${darkMode ? "bg-black text-white dark" : "bg-white text-black"} rounded-md cursor-pointer text-inherit task`} onClick={(e) => (addClass(e,"add-selected"))}>Task</p>
                </div>
                {/* open coresponding form by schedule type */}
                {/* event type */}
                <div className="selected-container mt-2">
                  {
                    selectedDate === null ? "" : 
                    [...Array(1)].map((_, i) => {
                      
                      const weekday = selectedDate.toLocaleString('default', {weekday: "short"});
                      const day = selectedDate.toLocaleString('default', {day: "numeric"});
                      const month = selectedDate.toLocaleString('default', {month: "short"});
                      const year = selectedDate.toLocaleString('default', {year: "numeric"});
                      return(
                        // date
                        <div key={`date${i}`} className="text-[0.7rem] font-bold">
                          <div>
                            {/* form value will get submited */}
                            <input type="hidden" name="year" value={selectedDate.getFullYear()} />
                            <input type="hidden" name="month" value={selectedDate.getMonth()} />
                            <input type="hidden" name="day" value={selectedDate.getDate()} />
                            <input type="hidden" name="start_hour" value={startAt.hour}/>
                            <input type="hidden" name="start_minute" value={startAt.minute}/>
                            <input type="hidden" name="end_hour" value={endAt.hour}/>
                            <input type="hidden" name="end_minute" value={endAt.minute}/>
                          </div>

                          <div className="grid grid-cols-6 justify-center text-center align-middle w-[95%]">
                            <div className="date col-span-2 flex justify-start items-center">
                              <p>{`${weekday}, ${day} ${month} ${year}`}</p>
                            </div>
                            <div className="time col-span-4 grid grid-cols-5 justify-center cursor-pointer">
                              <div onClick={() => {setOpenStartAt(true)}} className="col-span-2  flex justify-center items-center">
                                <TimePicker
                                  clicked={openStartAt}
                                  close={setOpenStartAt}
                                  stateUpdater={setStartAt}
                                  timeFormat={"12"}
                                  darkMode={darkMode}
                                />
                                <p>{`${(startAt.hour > 12 ? startAt.hour - 12 : startAt.hour).toString().padStart(2, "0")} : ${startAt.minute.toString().padStart(2, "0")} ${startAt.periode}` }</p>
                              </div>
                              <div className="col-span-1 flex justify-center cursor-default">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                              </svg>

                              </div>
                              <div onClick={() => {setOpenEndAt(true)}} className="col-span-2  flex justify-center items-center cursor-pointer">
                                <TimePicker
                                  clicked={openEndAt}
                                  close={setOpenEndAt}
                                  stateUpdater={setEndAt}
                                  timeFormat={"12"}
                                  darkMode={darkMode}
                                />
                                <p>{`${(endAt.hour > 12 ? endAt.hour - 12 : endAt.hour).toString().padStart(2, "0")} : ${endAt.minute.toString().padStart(2, "0")} ${endAt.periode}` }</p>
                              </div>
                            </div>
                          </div>
                          <div className="w-3/6 grid grid-cols-5 justify-center">
                            <ReccurencePicker 
                              darkMode={darkMode}
                            />
                            <p className="col-span-2">Recurrence</p>
                            <div onClick={() => {alert("test")}} className="col-span-3 flex justify-center border rounded bg-slate-200">{reccurence}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </form>
          </div>
        </PopUp>
      </MobileView>
    </div>
  );
}
export default MyApp;
// ===================================================
const calendarUtils = {
  dateToString: function(dates, retrieve = []){
    if(!(dates instanceof Date)){return;};
    if(typeof retrieve !== "object"){return "second parameter not an array"};
    if(retrieve.length === 0){
      const year = dates.getFullYear(),
            month = (dates.getMonth()+1).toString().padStart(2, "0"),
            date = dates.getDate().toString().padStart(2, "0"),
            hour = dates.getHours().toString().padStart(2, "0"),
            minute = dates.getMinutes().toString().padStart(2, "0"),
            second = dates.getSeconds().toString().padStart(2, "0");
      const result = `${year}-${month}-${date}T${hour}:${minute}:${second}`;
      return result;
    };
    if(retrieve.length > 0){
      let result;
      if(retrieve.length !== 1){
        result = [];
      }else{
        result = "";
      }
      retrieve.forEach((value, i) => {
        switch(value){
          case "fullDate":
            retrieve.length !== 1 ? 
            result["fullDate"] = `${dates.getFullYear()}-${dates.getMonth()}-${dates.getDate()}` : 
            result = `${dates.getFullYear()}-${dates.getMonth()}-${dates.getDate()}`;
            break;
          case "fullTime":
            retrieve.length !== 1 ? 
            result["fullTime"] = `${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}` : 
            result = `${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`;
            break;
          case "year":
            retrieve.length !== 1 ? result["year"] = dates.getFullYear() : result = dates.getFullYear();
            break;
          case "month":
            retrieve.length !== 1 ? result["month"] = dates.getMonth() : result = dates.getMonth();
            break;
          case "date":
            retrieve.length !== 1 ? result["date"] = dates.getDate() : result = dates.getDate();
            break;
          case "hour":
            retrieve.length !== 1 ? result["hour"] = dates.getHours() : result = dates.getHours();
            break;
          case "minute":
            retrieve.length !== 1 ? result["minute"] = dates.getMinutes() : result = dates.getMinutes();
            break;
          case "second":
            retrieve.length !== 1 ? result["second"] = dates.getSeconds() : result = dates.getSeconds();
            break;
          default:
            retrieve.length !== 1 ? 
            result["error"] = "option not available/incorrect! available option:\nfullDate\nfullTime\nyear\nmonth\ndate\nhour\nminute \nand second" : 
            result = "option not available/incorrect! type lowercase. available option:\nfullDate\nfullTime\nyear\nmonth\ndate\nhour\nminute\nand second";
        }
      })
      return result;
    }
  },
  getTime: (date) => {
    const periode = date.getHours() >= 12 ? "PM" : "AM";
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")} ${periode}`;
  },
  processData: function(data){
    const eventDict = {};

    data.forEach((event) => {
      const eventDate = calendarUtils.dateToString(event.start_date, ["fullDate"]);
      if(!eventDict[eventDate]){eventDict[eventDate] = []}
      eventDict[eventDate].push(event);
    });
    return eventDict;
  },
  findData: (arrayData, find) => {
    return arrayData[find];
  },
  cleanObjNullData: function(objectData) {
    // // Is objectData and object?
    if(typeof objectData !== 'object'){
      return "Given data is invalid object"
    }
    // // is object empty?
    if(Object.keys(objectData).length === 0){
      return "Given data is empty";
    }
    // return new data with removed null or undefined value
    return Object.entries(objectData).reduce((data, [key, value]) => {
      // filter
      if(value !== null && value !== undefined) {
        data[key] = typeof value === 'object' ? value : this.cleanObjNullData(value);
      }
      return data;
    },{});
  }
};
// ===================================================
const PopUp = ({children, isPopUpOpen, stateUpdater, popUpTitle}) => {
  return(
    <div className={`absolute top-0 left-0 w-[100svw] h-[100svh] min-w-[270px] z-50 grid grid-cols-1 grid-rows-12 ${isPopUpOpen ? "visible" : "invisible"}`} style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
      <div className="pop-up_header bg-slate-700 relative border border-1">
        <div className="w-full h-full text-white flex justify-center items-center">
          <p className="">{popUpTitle}</p>
        </div>
        <div className="absolute top-0 right-0 h-[100%] flex justify-center items-center cursor-pointer hover:bg-slate-800" onClick={() => stateUpdater(false)}>
          <svg className="h-full w-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div onClick={e => {e.stopPropagation()}} className="pop-up_body row-span-11 flex justify-center items-center relative">
        { isPopUpOpen ? children : ""}
      </div>
    </div>
  )
}
// ===================================================
const TimePicker = ({clicked, close, stateUpdater, timeFormat = "24", darkMode}) => {
  if(!clicked){return ""};
  // observer
  const hoursRef = useRef(null),
        minutesRef = useRef(null),
        periodeRef = useRef(null),
        [changeText, setChangeText] = useState(0);
  let hoursScroll = 0,
      minutesScroll = 0,
      resultHour = 0,
      resultMinute = 0,
      counter = 0;

  useEffect(() => {
    
    const hoursObserver = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if(entries[i].isIntersecting){
          resultHour = parseInt(entry.target?.getAttribute("data-value"));
          periodeRef.current.scrollTop = hoursScroll;
          stateUpdater({hour: resultHour, minute: resultMinute, periode: resultHour === 24 ? "AM" : resultHour >= 12 ? "PM" : "AM"});
        }else{
          return;
        }
      });
      
      setChangeText(resultHour);
    }, {
      root: hoursRef.current,
      threshold: 1,
    });
    const minutesObserver = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if(entries[i].isIntersecting){
          resultMinute = parseInt(entry.target?.getAttribute("data-value"));
          stateUpdater({hour: resultHour, minute: resultMinute, periode: resultHour === 24 ? "AM" : resultHour >= 12 ? "PM" : "AM"});
        }else{
          return;
        }
      });
    }, {
      root: minutesRef.current,
      threshold: 1,
    });

    hoursRef.current?.querySelectorAll(".snap-center").forEach(el => {hoursObserver.observe(el)});
    minutesRef.current?.querySelectorAll(".snap-center").forEach(el => {minutesObserver.observe(el)});

    // scroll behaviour
    const handleHoursScroll = (event) => {
      event.preventDefault();
      if(hoursRef.current){
        hoursScroll += event.deltaY > 0 ? 100 : hoursScroll < 0 ? hoursScroll = 0 : -100;
        hoursRef.current.scrollTop = hoursScroll;
      }
    }
    const handleMinutesScroll = (event) => {
      event.preventDefault();
      if( minutesRef.current){
        minutesScroll += event.deltaY > 0 ? 100 : minutesScroll < 0 ? minutesScroll = 0 : -100;
        minutesRef.current.scrollTop = minutesScroll;
      }
    }
    hoursRef.current?.addEventListener("wheel", handleHoursScroll);
    minutesRef.current?.addEventListener("wheel", handleMinutesScroll);

    return() => {
      //observer 
      hoursRef.current?.querySelectorAll(".snap-center").forEach(el => {hoursObserver.unobserve(el)});
      minutesRef.current?.querySelectorAll(".snap-center").forEach(el => {minutesObserver.unobserve(el)});

      // scroll behaviour
      hoursRef.current?.removeEventListener("wheel", handleHoursScroll);
      minutesRef.current?.removeEventListener("wheel", handleMinutesScroll);
    }

}, []);

const handleClosing = () => {
  close(false);
}
  return(
    <div onClick={e => {handleClosing(); e.stopPropagation()}} className="tp-container fixed top-0 left-0 h-full w-full flex justify-center items-center">
      <div className="grid grid-cols-3 h-[100px] w-4/6 translate-y-[-150px] drop-shadow-lg">
        <div className="col-span-2 grid grid-cols-11 h-[100px]">
          <div onClick={e => {e.stopPropagation()}} ref={hoursRef} className={`tp1 col-span-5 grid justify-center h-full w-full rounded overflow-y-scroll snap-mandatory snap-y no-scrollbar ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            {
              [...Array(24)].map((_, i) => {
                counter++;
                timeFormat.toString() === "12" ? counter > 12 ? counter = 1 : "" : "";
                return(
                  <div key={`hour${i}`} data-value={i + 1} className="w-full h-[98px] text-[3rem] font-bold flex justify-center items-center snap-center">
                  {counter.toString().padStart(2, "0")}
                  </div>
                )
              })
            }
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <p className="translate-y-[-0.3rem] text-[3rem]">:</p>
          </div>
          <div onClick={e => {e.stopPropagation()}} ref={minutesRef} className={`tp1 col-span-5 grid justify-center h-full w-full rounded overflow-y-scroll snap-mandatory snap-y no-scrollbar ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            {
              [...Array(60)].map((_, i) => {
                return(
                  <div key={`minute${i}`} data-value={i} className="w-full h-[98px] text-[3rem] font-bold flex justify-center items-center snap-center">
                  {(i).toString().padStart(2, "0")}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div ref={periodeRef} className={`periode grid justify-center h-full w-full rounded overflow-y-scroll snap-mandatory snap-y no-scrollbar ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
          <p className={`w-full h-[98px] text-[3rem] font-bold flex justify-center items-center snap-center  ${darkMode ? "bg-black" : "bg-white"}`}>{changeText === 24 ? "AM" : changeText >= 12 ? "PM" : "AM"}</p>
        </div>
      </div>
    </div>
  )
}
// ===================================================
const ReccurencePicker = ({darkMode}) => {
  const [stopAtDate, setStopAtDate] = useState(new Date((new Date()).setDate((new Date()).getDate() + 1))),
        [openDatePicker, setOpenDatePicker] = useState(false),
        cNIR = useRef(null),
        cRENI = useRef(null);

  const repeatEvery = {date: null, weekDay: null};
  const repeatOn = null;
  const repeatEnd = null;

  const inputNumber = {
    up: (el) => {
      el.current?.stepUp();
    },
    down: (el) => {
      el.current?.stepDown();
    },
  };

  return(
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className={`recurrence-container relative h-3/6 xsm:w-5/6 w-4/6 p-3 border border-2 drop-shadow-md rounded-lg ${darkMode ? "bg-slate-600 text-white" : "bg-white"}`}>
        <p className="text-[0.7rem] text-center">Custom Reccurence</p>
        {/* ====================================================== */}
        <div className="repeat-every grid grid-cols-5 mt-6">
          <p className='col-span-2'>Repeat every</p>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            <div className="col-span-1 grid grid-cols-4 border">
              <button type="button" onClick={() => {inputNumber.up(cRENI)}} className="col-span-1 border">+</button>
              <input ref={cRENI} type="number" min="1" className={`custom-number-input col-span-2 text-center ${darkMode && "bg-slate-600"}`}/>
              <button type="button" onClick={() => {inputNumber.down(cRENI)}} className="col-span-1 border">-</button>
            </div>
            <select name="reccurence-weekday" id="reccurence-weekday" className={`col-span-2 drop-shadow-md ${darkMode && "bg-slate-600"}`}>
              <option selected value="day">Day</option>
              <option value="week">Week</option>
              <option value="week">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        {/* ====================================================== */}
        <div className="repeat-on mt-6">
          <p>Repeat on</p> 
          <div className="grid grid-cols-7 w-4/6">
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>S</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>M</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>T</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>W</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>T</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>F</p>
            </div>
            <div className={`flex justify-center items-center h-[1.2rem] items-center w-[1.2rem] border ${darkMode? "border-white" : "border-black"} rounded-full cursor-pointer`}>
              <p>M</p>
            </div>
          </div>
        </div>
        {/* ====================================================== */}
        <div className="repeat-end mt-6 h-2/5">
          <p>End</p>
          <div className="grid grid-cols-1 grid-rows-3 h-full">
            <div className="grid grid-cols-5">
              <div className="grid grid-cols-5 items-center col-span-2">
                <div className={`col-span-1 h-[1.2rem] items-center w-[1.2rem] border ${darkMode ? "border-white" : "border-black"} rounded-full`}></div>
                <p className="col-span-4">Never</p>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid grid-cols-5">
              <div className="grid grid-cols-5 items-center col-span-2">
                <div className={`col-span-1 h-[1.2rem] items-center w-[1.2rem] border ${darkMode ? "border-white" : "border-black"} rounded-full`}></div>
                <p className="col-span-4">Stop At</p>
              </div>
              <div className="col-span-3 grid items-center cursor-pointer">
                <DatePicker
                  darkMode={darkMode}
                  open={{ value: openDatePicker, stateUpdater: setOpenDatePicker }}
                  stateUpdater={setStopAtDate}
                />
                <div onClick={() => { setOpenDatePicker(true) }} className="h-3/6 flex justify-center items-center border rounded">
                  <p>{
                  !stopAtDate ? "" : `${stopAtDate.toLocaleString('default', {weekday: "short"})}, ${stopAtDate.toLocaleString('default', {day: "numeric"})} ${stopAtDate.toLocaleString('default', {month: "short"})} ${stopAtDate.toLocaleString('default', {year: "numeric"})}`}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="grid grid-cols-5 items-center col-span-2">
                <div className={`col-span-1 h-[1.2rem] items-center w-[1.2rem] border ${darkMode ? "border-white" : "border-black"} rounded-full`}></div>
                <p className="col-span-4">On</p>
              </div>
              <div className="col-span-3 grid items-center cursor-pointer">
                <div className="h-4/6 grid grid-cols-7 items-center border rounded">
                    <button onClick={() => { inputNumber.up(cNIR) }} type="button" className="col-span-1 h-full border font-bold text-[1rem]">+</button>
                   <input ref={cNIR} type="number" min="1" name="" id="" className={`custom-number-input col-span-2 h-full text-center ${darkMode && "bg-slate-600"}`}/>
                   <button onClick={() => {inputNumber.down(cNIR)}} type="button" className="col-span-1 h-full border font-bold text-[1rem]">-</button>
                   <p className="col-span-3 text-center">occurence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// ===================================================
const DatePicker = ({darkMode, open = { value: false, stateUpdater: null } ,stateUpdater}) => {
  if(!open.value){return ""};

  const [datePickerResult ,setDatePickerResult] = useState(null);
  const setDate = (date, view) => {
    setDatePickerResult(date);
    if(open.stateUpdater){
      setTimeout(() => {
        open.stateUpdater(false)
      }, 1000);
    }
  }
  useEffect(() => {
    stateUpdater(datePickerResult)
  } , [datePickerResult]);

  return(
    <div className="date-picker_bgcover fixed top-0 left-0 h-full w-full bg-white flex justify-center items-center">
      <CalendarContainer
        $darkMode={darkMode}
      >
        <Calendar 
          calendarType="gregory"
          onClickDay={setDate}
        />
      </CalendarContainer>
    </div>
  )
}
// ===================================================
const NumberPicker = ({clicked, range = {from: 0, to: 0, recount: 1}, stateUpdater, returnState, customize = {zIndex: 50}}) => {
  if(!clicked){return "";}
  let count = 0;
  const nc = useRef(null);
  const containerStyle = classNames(
    `fixed top-0 left-0 h-full w-full flex justify-center items-center`,
    `z-[${customize.zIndex}]`
  );
  const handleClosing = () => {
    stateUpdater(false);
  }
  
  useEffect(() => {
    // scroll Behavior and observer
    let scrollValue = 0;
    const handleScroll = (event) => {
      event.preventDefault();
      if(nc.current){
        scrollValue += event.deltaY > 0 ? 100 : scrollValue < 0 ? scrollValue = 0 : -100;
        nc.current.scrollTop = scrollValue;
      }
    };
    if(nc.current){
      nc.current.addEventListener("wheel", handleScroll, {passive: false});
    }
    // 
    // observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if(entries[i].isIntersecting){
          const value = entry.target.getAttribute("data-value");
          returnState(value);
        }else{
          return;
        }
      });
      }, {
        root: nc.current,
        threshold: 0.9,
      });
    const elements = nc.current.querySelectorAll(".snap-center");
    elements.forEach(el => observer.observe(el));
    // ===========
    return () => {
      elements?.forEach(el => {observer.unobserve(el)});
      if(nc.current){
        nc.current.removeEventListener("wheel", handleScroll);
      }
    }
  }, []);


  return(
    <div onClick={e => {handleClosing(); e.stopPropagation()}} className={containerStyle}>
      <div ref={nc} onClick={e => {e.stopPropagation()}} className="number-container bg-white shadow-lg border w-3/6 h-[110px] translate-y-[-5rem] overflow-y-scroll no-scrollbar rounded text-[3rem] font-bold snap-mandatory snap-y">
        {
          [...Array(range.to)].map((_, i) => {
            count++;
            if(count === range.recount + 1){
              count = range.from;
            }
            return(
            <div key={i} data-value={i + 1} className="flex justify-center items-center h-[110px] bg-black snap-center border rounded text-white">
              {`${count}`}
            </div>
            )
          })
        }
      </div>
    </div>
  )
}
// ===================================================
const Section = ({children, sectionName}) => {

}
// ===================================================
const CalendarTimeline = ({darkMode, toStart, toView, scheduleInfo}) => {
  return(
    <>
    <div className={`schedule-info__title top-0 z-40 ${darkMode ? "bg-slate-800" : "bg-slate-100"} border border-inherit flex justify-center p-1`}>
      Schedule Information
    </div>
    <div className="schedule-timeline-container grid grid-cols-9 border-inherit">
      <div className="schedule-info__times border border-t-0 border-inherit col-span-2 grid grid-cols-10 gap-1">
        <div className='col-span-1  grid grid-cols-1 border-inherit border-r-0'>
          {
            [...Array(720)].map((_, i) => (
              <span key={i} ref={ i == 0 ? toStart : undefined} className={`border border-inherit border-t-0 border-l-0 border-r-0 h-3`}></span>
            ))
          }
        </div>
        <div className='col-span-9 grid grid-cols-1'>
          {
            [...Array(96)].map((_, i) => {
              let hour = (Math.floor(i/4)) +1;
              let minute = (i%4) * 15;
              let period = hour >= 12 ? "PM" : "AM";
              hour === 24 ? hour = 0 : "";
              return(
                <span key={i} className="text-[0.7rem] h-3 mt-[0.4rem] flex items-center">
                  {`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`}
                </span>
              );
            })
          }
        </div>
      </div>
      <div className="schedule-info__task relative border-inherit col-span-7 m-0 mt-[12px] flex flex-col items-center text-wrap">
        {
          scheduleInfo === undefined ? <span>No schedule</span> : scheduleInfo.map( (data, i) => {
            const sumPosition = (((data.start_date.getHours() - 1) * 60) + data.start_date.getMinutes()) * (12 / 2);
            const sumDuration = (((data.end_date.getHours() - data.start_date.getHours()) * 60) +
              data.end_date.getMinutes() - data.start_date.getMinutes()) * 6;
            let colour = "";
            data.priority === "high" ? colour = "red" : data.priority === "medium" ? colour = "yellow" : data.priority === "low" ? colour = "green" : "";
            return(
              <div key={i} ref={ i == 0 ? toView : undefined} className="absolute w-[95%] border border-3 grid grid-cols-11 gap-1 shadow-md" style={{height: sumDuration + "px", top: sumPosition + "px"}}>
                <div className="cols-span-1 border" style={{ backgroundColor: colour }}></div>
                <div className="cols-span-10">
                  tes
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
    </>
  )
}
// ===================================================
const CalendarSchedule = ({darkMode, scheduleInfo, utility, now}) => {
  const titleRef = useRef([]),
        [oldSelected, setOldSelected] = useState({el: undefined, now: 0}),
        [infoData, setInfoData] = useState(null),
        handleClick = (event, i) => {
          if(!event){return};
          setInfoData(scheduleInfo[i]);
          event.target.classList.add("selected");
          oldSelected.el !== undefined && oldSelected.el.classList.remove("selected");
          setOldSelected({el: event.target, now: now});
        };
  useEffect(() => {
    setOldSelected({el: undefined, now: now })
  }, [now]);
  useEffect(() => {
    const handleMarquee = () => {
      const cleanedData = calendarUtils.cleanObjNullData(titleRef.current);
      if(typeof cleanedData !== 'object'){return}
      if(cleanedData[0] === undefined || cleanedData[0] === null){return};
      Object.entries(cleanedData).forEach(([key, value]) => {
        const parentWitdh = value.parentNode.clientWidth;
        value.parentNode.classList.add("show");
        if(value.clientWidth >= parentWitdh){
          value.classList.add("marquee");
        }
      });
    };
    const animationId = requestAnimationFrame(handleMarquee)
    return () => cancelAnimationFrame(animationId);
  }, [now]);
  return(
    <div className="grid grid-rows-10 grid-cols-1 w-full h-full bg-inherit border-inherit">
      <div className="schedule-header border bg-inherit border-inherit grid grid-cols-10">
        <div className="schedule-list-header grid justify-center items-center border bg-inherit border-inherit">
          Schedule
        </div>
        <div className="schedule-info-header grid justify-center items-center border bg-inherit border-inherit">
          Info
        </div>

      </div>
      <div className="schedule-content border bg-inherit border-inherit grid grid-cols-10">
        <div className="schedule-list border-box flex flex-col border bg-inherit border-inherit shadow-lg shadow-inner p-1 overflow-hidden">
          {
            scheduleInfo === undefined ? 
            <div className="schedule-items-none h-full m-1 flex justify-center">
              No Schedule
            </div> :
            scheduleInfo.map((data, i) => {
              return(
              <div key={i} onClick={(e) => { handleClick(e, i) }} className={`schedule-items i-${i} si-${now} grid grid-rows-4 gap-1 justify-center relative border rounded h-11 m-1 overflow-hidden bg-inherit`}>
                <p ref={el => titleRef.current[i] = el} className={`schedule-title relative t-${now}  row-span-2 flex justify-center text-sm`}>
                  {data.title}
                </p>
                <small className="schedule-title relative row-span-1 flex justify-center text-[9px]">
                  { 
                    utility.getTime(data.start_date) + " => " + utility.getTime(data.end_date)
                  }
                </small>
              </div>
              )
            })
          }
        </div>
        <div className="schedule-info border bg-inherit border-inherit">
        </div>
      </div>
    </div>
  )
}
const CalendarContainer = styled.div.attrs((props) => ({
  darkMode: undefined,
}))`
    min-width: 260px;
    font-family: Roboto, sans-serif;
    margin: 0.7rem;
    box-shadow: 0px 1px 4px ${(props) =>
      props.$darkMode
        ? "white"
        : "black"};
    border: 1px solid ${(props) =>
      props.$darkMode
        ? "white"
        : "black"};
// ==========Calendar Navigation Styles===============
.react-calendar__navigation{
    position: relative;
    
}
.react-calendar__navigation .react-calendar__navigation__arrow{
    position: absolute;
    font-weight: bold;
}
.react-calendar__navigation .react-calendar__navigation__next2-button{
    right: 3%;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 1px 1px 3px;
}
.react-calendar__navigation .react-calendar__navigation__next-button{
    right: 8%;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 1px 1px 3px;
}
.react-calendar__navigation .react-calendar__navigation__prev-button{
    right: 19%;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 1px 1px 3px;
}
.react-calendar__navigation .react-calendar__navigation__prev2-button{
    right: 24%;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 1px 1px 3px;
}
.react-calendar__navigation__label{
    position: relative;
    left: 5%;
    font-weight: bold;
}
.react-calendar__navigation__label::before{
    content: "> "
}
.react-calendar__navigation__label::after{
    content: " <"
}
// =================Month View========================
.react-calendar__month-view{
 position: relative;
}
 .react-calendar__month-view__weekdays{
    justify-content: center;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: capitalize;

 }
 .react-calendar__month-view__weekdays__weekday > abbr{
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
 }
// ===================Tiles=============================
.react-calendar__tile{
    padding: 1px;
    font-weight: bold;
}
.react-calendar__month-view__days__day.react-calendar__tile--now{
    background-image: ${(props) =>
      props.$darkMode
        ? "url('/assets/images/today_dark_bg.svg')"
        : "url('/assets/images/today_light_bg.svg')"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
}
.react-calendar__month-view__days__day.react-calendar__tile--active{
    background-image: ${(props) =>
      props.$darkMode
        ? "url('/assets/images/dark_mode_bg.svg')"
        : "url('/assets/images/light_mode_bg.svg')"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
    color: ${(props) => (props.$darkMode ? "black" : "White")};
    box-shadow: 0px 0px 0px black;
}
.react-calendar__month-view__days__day--neighboringMonth > abbr{
  opacity: 0.5;
}
.react-calendar__month-view__days__day--weekend{
  color: red;
}
`;