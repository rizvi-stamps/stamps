async function loadCountries() {
    try {
        const response = await fetch("countries.csv");
        const data = await response.text();

        const rows = data.trim().split("\n").slice(1); // Skip the header row
        const dropdown = document.getElementById("countrySelect");

        rows.forEach(row => {
            const [countryName, page] = row.split(",");
            if (countryName && page) {
                const option = document.createElement("option");
                option.value = page.trim();
                option.textContent = countryName.trim();
                dropdown.appendChild(option);
            }
        });
    } catch (error) {
        console.error("Error loading countries:", error);
    }
}

function goToCountryPage() {
    const country = document.getElementById("countrySelect").value;
    if (country) {
        window.location.href = `country.html?country=${country}`;
    }
}

loadCountries();
