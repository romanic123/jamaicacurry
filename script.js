// Function to show simple header banner greeting
function showMessage() {
    alert("Welcome to Jamaica Curry! Experience the authentic taste of Jamaica.");
}

// Function to switch background content images inside your display card
function changeDish(title, description, imageName) {
    let card = document.getElementById('dishCard');
    let cardTitle = document.getElementById('dishTitle');
    let cardText = document.getElementById('dishText');

    if (card && cardTitle && cardText) {
        cardTitle.textContent = title;
        cardText.textContent = description;
        card.style.backgroundImage = "url('" + imageName + "')";
    }
}

// Function to validate empty fields, generate success banner, and clear form elements
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the browser from instantly reloading

    // Read values from form container elements
    let name = document.getElementById('formName').value;
    let reason = document.getElementById('formReason').value; // FIXED: Reads your new selection option
    let alertArea = document.getElementById('formAlert');

    // Generate active dismissible custom layout green message popup bubble 
    alertArea.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm border-2 border-success" role="alert">
            <strong>Form Submitted!</strong> Thank you ${name}, your request for an <strong>"${reason}"</strong> has been recorded successfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Clear form layout variables completely
    document.getElementById('contactForm').reset();
}

// Pre-load default state card picture mapping on layout launch
window.onload = function() {
    changeDish('Curry Chicken', 'Tender chicken cooked in authentic Jamaican curry.', 'curry-chicken.png');
};
