// Function to hide the welcome page and show the restaurant selection page
function enterRestaurantSelection() {
    // Hide the welcome page
    document.getElementById('welcome-page').style.display = 'none';
    
    // Show the restaurant page
    document.getElementById('restaurant-page').style.display = 'block';
}

// Function to handle restaurant selection
function selectRestaurant(restaurantName) {
    // Display a message or perform some action after selecting a restaurant
    alert('You have selected ' + restaurantName + ' for booking a table!');
    
    // Example: Redirect to a booking page (you can customize this part)
    // window.location.href = 'booking-page.html';
}
