function volume_sphere() {
    // Get the radius value from the input field
    var radius = parseFloat(document.getElementById("radius").value);

    // Check if the input is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return false; // Prevent the form from being submitted
    }

    // Calculate the volume of the sphere
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the result in the volume field
    document.getElementById("volume").value = volume.toFixed(2); // Rounding to 2 decimal places

    return false; // Prevent the form from being submitted
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
