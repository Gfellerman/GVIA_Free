const mockVehicleData = [
    { id: 1, make: 'Ford', model: 'Transit', price: 35000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Ford+Transit', fuel_consumption: '8.5L/100km', warranty: '3 years / 100,000 km' },
    { id: 2, make: 'Mercedes-Benz', model: 'Sprinter', price: 42000, imageUrl: 'https://placehold.co/300x200/1E5F74/white?text=MB+Sprinter', fuel_consumption: '9.0L/100km', warranty: '3 years / 100,000 km' },
    { id: 3, make: 'Chevrolet', model: 'Express', price: 33000, imageUrl: 'https://placehold.co/300x200/A569BD/white?text=Chevy+Express', fuel_consumption: '14.0L/100km', warranty: '3 years / 60,000 km' },
    { id: 4, make: 'Ram', model: 'ProMaster', price: 34000, imageUrl: 'https://placehold.co/300x200/D35400/white?text=Ram+ProMaster', fuel_consumption: '12.0L/100km', warranty: '3 years / 60,000 km' },
    { id: 5, make: 'Toyota', model: 'Sienna', price: 38000, imageUrl: 'https://placehold.co/300x200/16A085/white?text=Toyota+Sienna', fuel_consumption: '7.5L/100km', warranty: '3 years / 60,000 km' },
    { id: 6, make: 'Honda', model: 'Odyssey', price: 37000, imageUrl: 'https://placehold.co/300x200/C0392B/white?text=Honda+Odyssey', fuel_consumption: '8.0L/100km', warranty: '3 years / 60,000 km' },
    { id: 7, make: 'Chrysler', model: 'Pacifica', price: 39000, imageUrl: 'https://placehold.co/300x200/8E44AD/white?text=Chr+Pacifica', fuel_consumption: '7.8L/100km', warranty: '3 years / 60,000 km' },
    { id: 8, make: 'Kia', model: 'Carnival', price: 36000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+Carnival', fuel_consumption: '8.2L/100km', warranty: '5 years / 100,000 km' },
    { id: 9, make: 'Ford', model: 'F-150', price: 45000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Ford+F-150', fuel_consumption: '11.0L/100km', warranty: '3 years / 60,000 km' },
    { id: 10, make: 'Chevrolet', model: 'Silverado', price: 44000, imageUrl: 'https://placehold.co/300x200/A569BD/white?text=Chevy+Silv', fuel_consumption: '11.5L/100km', warranty: '3 years / 60,000 km' },
    { id: 11, make: 'Ram', model: '1500', price: 46000, imageUrl: 'https://placehold.co/300x200/D35400/white?text=Ram+1500', fuel_consumption: '11.2L/100km', warranty: '3 years / 60,000 km' },
    { id: 12, make: 'Toyota', model: 'Tundra', price: 48000, imageUrl: 'https://placehold.co/300x200/16A085/white?text=Toyota+Tundra', fuel_consumption: '12.5L/100km', warranty: '3 years / 60,000 km' },
    { id: 13, make: 'GMC', model: 'Sierra', price: 47000, imageUrl: 'https://placehold.co/300x200/7D3C98/white?text=GMC+Sierra', fuel_consumption: '11.8L/100km', warranty: '3 years / 60,000 km' },
    { id: 14, make: 'Nissan', model: 'Titan', price: 43000, imageUrl: 'https://placehold.co/300x200/F1C40F/white?text=Nissan+Titan', fuel_consumption: '13.0L/100km', warranty: '5 years / 160,000 km' },
    { id: 15, make: 'Volkswagen', model: 'Golf', price: 28000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=VW+Golf', fuel_consumption: '6.5L/100km', warranty: '4 years / 80,000 km' },
    { id: 16, make: 'Toyota', model: 'Corolla', price: 25000, imageUrl: 'https://placehold.co/300x200/16A085/white?text=Toyota+Corol', fuel_consumption: '6.0L/100km', warranty: '3 years / 60,000 km' },
    { id: 17, make: 'Honda', model: 'Civic', price: 26000, imageUrl: 'https://placehold.co/300x200/C0392B/white?text=Honda+Civic', fuel_consumption: '6.2L/100km', warranty: '3 years / 60,000 km' },
    { id: 18, make: 'Hyundai', model: 'Elantra', price: 24000, imageUrl: 'https://placehold.co/300x200/2980B9/white?text=Hyundai+Elan', fuel_consumption: '6.4L/100km', warranty: '5 years / 100,000 km' },
    { id: 19, make: 'Mazda', model: '3', price: 27000, imageUrl: 'https://placehold.co/300x200/E74C3C/white?text=Mazda+3', fuel_consumption: '6.8L/100km', warranty: '3 years / unlimited km' },
    { id: 20, make: 'Kia', model: 'Forte', price: 23000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+Forte', fuel_consumption: '6.6L/100km', warranty: '5 years / 100,000 km' },
    { id: 21, make: 'BMW', model: '3 Series', price: 55000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=BMW+3+Series', fuel_consumption: '7.0L/100km', warranty: '4 years / 80,000 km' },
    { id: 22, make: 'Mercedes-Benz', model: 'C-Class', price: 58000, imageUrl: 'https://placehold.co/300x200/1E5F74/white?text=MB+C-Class', fuel_consumption: '7.2L/100km', warranty: '4 years / 80,000 km' },
    { id: 23, make: 'Audi', model: 'A4', price: 56000, imageUrl: 'https://placehold.co/300x200/9B59B6/white?text=Audi+A4', fuel_consumption: '7.1L/100km', warranty: '4 years / 80,000 km' },
    { id: 24, make: 'Lexus', model: 'IS', price: 54000, imageUrl: 'https://placehold.co/300x200/1ABC9C/white?text=Lexus+IS', fuel_consumption: '7.5L/100km', warranty: '4 years / 80,000 km' },
    { id: 25, make: 'Tesla', model: 'Model 3', price: 52000, imageUrl: 'https://placehold.co/300x200/E67E22/white?text=Tesla+Model+3', fuel_consumption: '15 kWh/100km', warranty: '4 years / 80,000 km' },
    { id: 26, make: 'Ford', model: 'Mustang Mach-E', price: 59000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Mustang+M-E', fuel_consumption: '17 kWh/100km', warranty: '3 years / 60,000 km' },
    { id: 27, make: 'Hyundai', model: 'Ioniq 5', price: 53000, imageUrl: 'https://placehold.co/300x200/2980B9/white?text=Ioniq+5', fuel_consumption: '16.7 kWh/100km', warranty: '5 years / 100,000 km' },
    { id: 28, make: 'Kia', model: 'EV6', price: 54000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+EV6', fuel_consumption: '16.5 kWh/100km', warranty: '5 years / 100,000 km' },
    { id: 29, make: 'Volkswagen', model: 'ID.4', price: 51000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=VW+ID.4', fuel_consumption: '17.2 kWh/100km', warranty: '4 years / 80,000 km' },
    { id: 30, make: 'Subaru', model: 'Solterra', price: 55000, imageUrl: 'https://placehold.co/300x200/34495E/white?text=Subaru+Solt', fuel_consumption: '17.5 kWh/100km', warranty: '3 years / 60,000 km' }
];

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filter-form');
    const powertrainAllCheckbox = document.getElementById('powertrain-all');
    const powertrainCheckboxes = document.querySelectorAll('input[name="powertrain"]');
    const transportGoodsCheckbox = document.getElementById('transport-goods');
    const goodsSpecificFilters = document.getElementById('goods-specific-filters');
    const countrySelect = document.getElementById('country');
    const maxMileageLabel = document.getElementById('max-mileage-label');
    const avgMileageLabel = document.getElementById('avg-mileage-label');

    function updateMileageLabels() {
        const selectedCountry = countrySelect.value;
        if (selectedCountry === 'us') {
            maxMileageLabel.textContent = 'Max Mileage (miles):';
            avgMileageLabel.textContent = 'Average Mileage per Year (miles):';
        } else {
            maxMileageLabel.textContent = 'Max Mileage (km):';
            avgMileageLabel.textContent = 'Average Mileage per Year (km):';
        }
    }

    countrySelect.addEventListener('change', updateMileageLabels);

    // Initial call to set labels based on default selection
    updateMileageLabels();

    transportGoodsCheckbox.addEventListener('change', () => {
        if (transportGoodsCheckbox.checked) {
            goodsSpecificFilters.style.display = 'block';
        } else {
            goodsSpecificFilters.style.display = 'none';
        }
    });

    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const selectedFilters = {};
        for (const [key, value] of formData.entries()) {
            if (selectedFilters[key]) {
                if (Array.isArray(selectedFilters[key])) {
                    selectedFilters[key].push(value);
                } else {
                    selectedFilters[key] = [selectedFilters[key], value];
                }
            } else {
                selectedFilters[key] = value;
            }
        }
        // For now, we ignore the filters and just display the mock data
        displaySearchResults(mockVehicleData);
    });

    const resultsContainer = document.getElementById('results-container');
    const moreResultsButton = document.getElementById('more-results');
    const RESULTS_PER_PAGE = 25;
    let currentResults = [];
    let displayedCount = 0;

    function renderResults(results) {
        results.forEach(vehicle => {
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card'; // Add a class for styling

            // Using template literals for easier HTML structure
            resultCard.innerHTML = `
                <img src="${vehicle.imageUrl}" alt="${vehicle.make} ${vehicle.model}" class="result-image">
                <div class="result-details">
                    <h3>${vehicle.make} ${vehicle.model}</h3>
                    <p><strong>Price:</strong> $${vehicle.price.toLocaleString()}</p>
                    <p><strong>Fuel Consumption:</strong> ${vehicle.fuel_consumption}</p>
                    <p><strong>Warranty:</strong> ${vehicle.warranty}</p>
                </div>
            `;
            resultsContainer.appendChild(resultCard);
        });
    }

    function displaySearchResults(results) {
        resultsContainer.innerHTML = '';
        currentResults = results;
        displayedCount = 0;

        const resultsToDisplay = currentResults.slice(displayedCount, displayedCount + RESULTS_PER_PAGE);
        renderResults(resultsToDisplay);
        displayedCount += resultsToDisplay.length;

        if (displayedCount >= currentResults.length) {
            moreResultsButton.style.display = 'none';
        } else {
            moreResultsButton.style.display = 'block';
        }
    }

    moreResultsButton.addEventListener('click', () => {
        const resultsToDisplay = currentResults.slice(displayedCount, displayedCount + RESULTS_PER_PAGE);
        renderResults(resultsToDisplay);
        displayedCount += resultsToDisplay.length;

        if (displayedCount >= currentResults.length) {
            moreResultsButton.style.display = 'none';
        }
    });

    powertrainAllCheckbox.addEventListener('change', () => {
        powertrainCheckboxes.forEach(checkbox => {
            checkbox.checked = powertrainAllCheckbox.checked;
        });
    });

    powertrainCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
                powertrainAllCheckbox.checked = false;
            } else {
                const allChecked = Array.from(powertrainCheckboxes).every(c => c.checked);
                if (allChecked) {
                    powertrainAllCheckbox.checked = true;
                }
            }
        });
    });
});
