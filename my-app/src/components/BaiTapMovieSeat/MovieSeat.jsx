import React, { useState } from 'react';
import SeatRow from './SeatRow';
import InputField from './InputField';

const MovieSeat = () => {
  const [userName, setUserName] = useState("");
  const [userSeats, setUserSeats] = useState("");
  const [reservedSeats, setReservedSeats] = useState(['A1', 'A2', 'B3', 'C4']);
  const [formDisabled, setFormDisabled] = useState(false);
  const [seatsDisabled, setSeatsDisabled] = useState(true);
  const [notification, setNotification] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmationDetails, setConfirmationDetails] = useState({
    name: "",
    numberOfSeats: "",
    seats: []
  });
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 12 }, (_, i) => i + 1);

  const takeData = () => {
    if (userName.length === 0 || userSeats.length === 0) {
      alert("Vui lòng nhập họ tên và số lượng ghế");
    } else {
      setFormDisabled(true);
      setSeatsDisabled(false);
      setNotification("Vui lòng chọn ghế của bạn NGAY BÂY GIỜ!");
    }
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length < parseInt(userSeats, 10)) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        alert(`Bạn chỉ có thể chọn ${userSeats} ghế.`);
      }
    }
  };

  const confirmSelection = () => {
    setConfirmationDetails({
      name: userName,
      numberOfSeats: userSeats,
      seats: selectedSeats
    });
  };

  return (
    <div className='container m-0 p-0 h-full min-h-screen'>
      <div className='bg-movie-bg bg-cover bg-center bg-no-repeat'>
        <h1 className='font-bold text-black text-5xl uppercase text-center mb-3'>movie seat selection</h1>
        <div className='m-10'>
          <div className='movieSeat bg-gray-500 bg-opacity-50 p-5 rounded-lg'>
            <div className='inputForm flex justify-between gap-5'>
              <div className='formLeft w-5/12'>
                <h3 className='font-bold text-red-600 text-base capitalize my-5'>fill the required details below and select your seats</h3>
                <div className='inputForm gap-8'>
                  <InputField 
                    label="Name" 
                    id="userName" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    disabled={formDisabled} 
                    required 
                  />
                  <InputField 
                    label="Number of seats" 
                    id="userSeats" 
                    value={userSeats} 
                    onChange={(e) => setUserSeats(e.target.value)} 
                    disabled={formDisabled} 
                    required 
                  />
                </div>
                <div className='mt-5'>
                  <button 
                    className='capitalize px-5 py-2 text-base cursor-pointer text-red-500 rounded-lg bg-slate-100'
                    onClick={takeData}
                    disabled={formDisabled}
                  >
                    start selecting
                  </button>
                </div>
                <ul className='note flex justify-center mt-8 gap-10 mb-10'>
                  <li className='flex justify-center gap-1 items-center'>
                    <div className='smallBox greenBox w-4 h-4 mr-3 bg-green-600'></div>
                    <span>Selected Seat</span>
                  </li>
                  <li className='flex justify-center gap-1 items-center'>
                    <div className='smallBox redBox w-4 h-4 mr-3 bg-red-600'></div>
                    <span>Reserved Seat</span>
                  </li>
                  <li className='flex justify-center gap-1 items-center'>
                    <div className='smallBox blackBox w-4 h-4 mr-3 bg-white'></div>
                    <span>Empty Seat</span>
                  </li>
                </ul>
                <div className='flex justify-center'>
                  <button 
                    className='capitalize px-5 py-2 text-base cursor-pointer text-red-500 rounded-lg bg-slate-100 mb-10'
                    onClick={confirmSelection}
                  >
                    confirm selection
                  </button>
                </div>
                <div className='infoSeat overflow-x-auto'>
                  <table className='infoSeatTable'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Number of seat</th>
                        <th>Seats</th>
                      </tr>
                      <tr>
                        <td>
                          <textarea value={confirmationDetails.name} disabled></textarea>
                        </td>
                        <td>
                          <textarea value={confirmationDetails.numberOfSeats} disabled></textarea>
                        </td>
                        <td>
                          <textarea value={confirmationDetails.seats.join(', ')} disabled></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='selectSeat text-center w-7/12'>
                <p id='notification' className='text-red-600 font-bold'>{notification}</p>
                <table id='seatsBlock' className='mx-auto bg-black bg-opacity-50 rounded-lg p-5'>
                  <tbody>
                    <tr>
                      <td className='px-1 py-1 '></td>
                      {columns.map((col) => (
                        <td className='text-left pl-2 text-white font-bold' key={col}>{col}</td>
                      ))}
                    </tr>
                    {rows.map((row) => (
                      <SeatRow
                        key={row}
                        rowLabel={row}
                        seats={columns.map((col) => `${row}${col}`)}
                        reservedSeats={reservedSeats}
                        selectedSeats={selectedSeats}
                        seatsDisabled={seatsDisabled}
                        onSeatClick={handleSeatClick}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSeat;
