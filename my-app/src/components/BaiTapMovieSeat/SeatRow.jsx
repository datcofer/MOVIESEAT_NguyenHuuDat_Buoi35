import React from 'react';
import './../../CSS/seatrow.css';

const SeatRow = ({ rowLabel, seats, reservedSeats, selectedSeats, seatsDisabled, onSeatClick }) => {
    return (
        <tr>
            <td className="p-4 text-white font-bold">{rowLabel}</td>
            {seats.map((seat, index) => (
                <td key={index} className="py-1">
                    <input
                        type="checkbox"
                        className={`seat-checkbox ${reservedSeats.includes(seat) ? 'bg-red-500' : selectedSeats.includes(seat) ? 'bg-green-600' : 'bg-white'}`}
                        value={seat}
                        disabled={reservedSeats.includes(seat) || seatsDisabled}
                        checked={selectedSeats.includes(seat)}
                        onChange={() => onSeatClick(seat)}
                    />
                </td>
            ))}
        </tr>
    );
}

export default SeatRow;
