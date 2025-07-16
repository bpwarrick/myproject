import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import { useReducer } from 'react';


const Main = () => {

    const fetchAPI = function(date) {
        let result = [];

        for(let i = 17; i <= 23; i++) {
            let random = Math.random();
            if(random < 0.5) {
                result.push(i + ':00');
            }
            if(random < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    /* This object simulates booked times for the next 7 days. In a real application, this data would likely come from a server. */
const bookedTimes = {};
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);
  const dateString = date.toISOString().split('T')[0];
  bookedTimes[dateString] = fetchAPI(bookedTimes[dateString]);
};

function updateTimes(state, date) {
    const times = fetchAPI(date);
    const booked = bookedTimes[date];
    if (booked) {
        return times.filter(time => !booked.includes(time));
    }
    return times;
};

const [state, dispatch] = useReducer(updateTimes, bookedTimes);

  return (
    <>
    <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage bookedTimes={bookedTimes}/>}></Route>
        </Routes>
    </main>
    </>
  );
}

export default Main;