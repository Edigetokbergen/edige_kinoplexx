const seats = document.querySelectorAll('.seat');
let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('taken')) {
            seat.classList.toggle('selected');
            const seatId = seat.getAttribute('data-id');
            if (seat.classList.contains('selected')) {
                selectedSeats.push(seatId);
            } else {
                selectedSeats = selectedSeats.filter(id => id !== seatId);
            }
            document.getElementById('selected-seats').textContent = selectedSeats.join(', ');
        }
    });
});
