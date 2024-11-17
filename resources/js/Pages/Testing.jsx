import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { MobileView } from '../Components/ScreenViewComponents';

const Testing = () => {

    return(
    <>
        <MobileView>
        <CalenderContainer>
            <Calendar
              className="text-sm p-2"
              
            >
                
            </Calendar>
        </CalenderContainer>
        </MobileView>
    </>
    );
}
export default Testing;

// Function and Variable
const CalendarContainer = styled.div`
/* ~~~ container styles ~~~ */
box-sizing: border-box;
margin: 0.7rem;
padding: 10px;
box-shadow: 0px 2px 2px;
border: 2px solid;
border-radius: 3px;

/* ~~~ navigation styles ~~~ */
.react-calendar__navigation {
  display: flex;
  box-shadow: 3px 2px 6px;
  margin-bottom: 1rem;
}
.react-calendar__navigation__arrow {
  transition: 0.5s linear;
  padding:3px;
  margin:1px;
  flex-grow: 0.333;
}
.react-calendar__navigation__prev2-button,
.react-calendar__navigation__prev-button {
  box-shadow: 1px 2px 4px
}
.react-calendar__navigation__next2-button,
.react-calendar__navigation__next-button {
  box-shadow: -1px 2px 4px
}
.react-calendar__navigation__arrow:hover {
  background-color:#b3b3b3;
}
/* ~~~ Dates styles ~~~ */
.react-calendar__month-view {
  box-shadow: inset 0px 3px 6px;
}
.react-calendar__month-view__weekdays {
  border: 1px solid;
  text-align: center;
}
.react-calendar__month-view button {
  transition: 0.7s;
  border: 1px solid;
  padding: 1px;
}
.react-calendar__month-view button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 6px black;
}
/* ~~~ Tiles styles ~~~ */
.react-calendar__tile--active {
  background-image: linear-gradient(to bottom right, white, black) !important;
  background-size: cover !important;
  border: solid 3px;
  color: white !important;
}
.react-calendar__tile--now {
  background-image: url("/assets/images/today-dark.svg");
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: center;
  font-weight: bold;
}
.react-calendar__month-view__days__day--neighboringMonth{
  color:inherit;
  background-color: rgba(0,0,0, 0.2);
  opacity: 0.5;
}
.react-calendar__month-view__days__day--neighboringMonth img{
  opacity:0.5;
}
`;