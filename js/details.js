// Get the form element
const form = document.querySelector("#reservation-form");

// Add an event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get the values from the form data
  const fullName = formData.get("name");
  const phoneNumber = formData.get("phone_number");
  const roomType = formData.get("room_type");
  const checkIn = formData.get("arrival_date");
  const checkOut = formData.get("departure_date");
  const numGuests = formData.get("number_of_guests");
  const numAdults = formData.get("number_of_adults");
  const numChildren = formData.get("number_of_children");

  // Calculate the total price
  const roomPrices = {
    Normal: 130,
    Normal_Standard: 150,
    Standard: 180,
    Deluxe: 200,
    Deluxe_Standard: 250,
    Executive: 300,
  };

  const oneDay = 24 * 60 * 60 * 1000;
  const pricePerNight = roomPrices[roomType];
  const startDate = new Date(Date.parse(checkIn));
  const endDate = new Date(Date.parse(checkOut));
  const numNights = Math.ceil((endDate - startDate) / oneDay);

  let totalPrice;
  if (numNights === 0) {
    totalPrice = pricePerNight;
  } else {
    totalPrice = parseInt(pricePerNight * numNights);
  }

  // Display the values in the console (for testing purposes)
  console.log("Full Name:", fullName);
  console.log("Phone Number:", phoneNumber);
  console.log("Room Type:", roomType);
  console.log("Check-In:", checkIn);
  console.log("Check-Out:", checkOut);
  console.log("Number of Guests:", numGuests);
  console.log("Number of Adults:", numAdults);
  console.log("Number of Children:", numChildren);

  // Redirect to the booking details page with the form data as URL parameters
  window.location.href = `./booking-details.html?room_type=${roomType}&number_of_nights=${numNights}&arrival_date=${checkIn}&departure_date=${checkOut}&number_of_guests=${numGuests}&number_of_adults=${numAdults}&number_of_children=${numChildren}&total_price=${totalPrice}&name=${fullName}&number_of_nights=${numNights}&phone_number=${phoneNumber}`;
});
