import { useState } from 'react';

const times = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30", 
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00"
];
{/* This object simulates booked times for the next 7 days. In a real application, this data would likely come from a server. */}
const bookedTimes = {};
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);
  const dateString = date.toISOString().split('T')[0];
  bookedTimes[dateString] = [];
};



const BookingPage = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availTimes, setAvailTimes] = useState(times);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
  const maxDate = oneWeekFromNow.toISOString().split('T')[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'res-date') {
      const updTimes = times.filter(time => !props.bookedTimes[value].includes(time));
      setAvailTimes(updTimes);
      setDate(value);
    } else if (id === 'res-time') {
      setTime(value);
    } else if (id === 'guests') {
      setGuests(value);
    } else if (id === 'occasion') {
      setOccasion(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className="booking-page" style={{ padding: "20px", backgroundColor: "lightgrey", borderRadius: "15px" }}>
      <h1>Make A Reservation</h1>
      <p>Welcome to the booking page. Here you can make a reservation.</p>
      {/* Add booking form or details here */}

    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" onChange={handleChange} min={today} max={maxDate}/> {today}
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" onChange={handleChange}> 
    {availTimes.map((time) => {
      return <option key={time} value={time}>{time}</option>
    })};
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" onChange={handleChange}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" onSubmit={handleSubmit}/>
  </form>
    </div>
  );
}

export default BookingPage;