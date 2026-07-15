function showMessage() {
    alert("Welcome to Jamaica Curry! Experience the authentic taste of Jamaica.");
}

function changeDish(title, description, imageName) {
    let card = document.getElementById('dishCard');
    let cardTitle = document.getElementById('dishTitle');
    let cardText = document.getElementById('dishText');

    cardTitle.textContent = title;
    cardText.textContent = description;

    // Apply the background image path directly
    card.style.backgroundImage = "url('" + imageName + "')";
}

// Automatically load the first picture when the page opens
window.onload = function() {
    changeDish('Curry Chicken', 'Tender chicken cooked in authentic Jamaican curry.', 'curry-chicken.png');
};
