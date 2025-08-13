const mockVehicleData = [
    // Goods Vehicles (Vans, Trucks)
    { id: 1, make: 'Ford', model: 'Transit', price: 35000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Ford+Transit', fuel_consumption: '8.5L/100km', warranty: '3 years / 100,000 km', transportType: 'goods', tripRange: 'long', vehicleClass: 'medium', mileage: 20000, year: 2022, orientation: 'economic', color: 'dark', origin: 'na', powertrain: 'diesel', body: '5door', tonnageCapacity: 1.5, cubicMeterCapacity: 10, towingCapacity: 2000 },
    { id: 2, make: 'Mercedes-Benz', model: 'Sprinter', price: 42000, imageUrl: 'https://placehold.co/300x200/1E5F74/white?text=MB+Sprinter', fuel_consumption: '9.0L/100km', warranty: '3 years / 100,000 km', transportType: 'goods', tripRange: 'long', vehicleClass: 'luxury', mileage: 15000, year: 2023, orientation: 'powerful', color: 'bright', origin: 'eu', powertrain: 'diesel', body: '5door', tonnageCapacity: 2, cubicMeterCapacity: 12, towingCapacity: 2500 },
    { id: 3, make: 'Chevrolet', model: 'Express', price: 33000, imageUrl: 'https://placehold.co/300x200/A569BD/white?text=Chevy+Express', fuel_consumption: '14.0L/100km', warranty: '3 years / 60,000 km', transportType: 'goods', tripRange: 'short', vehicleClass: 'basic', mileage: 50000, year: 2021, orientation: 'powerful', color: 'dark', origin: 'na', powertrain: 'petrol', body: '3door', tonnageCapacity: 1.8, cubicMeterCapacity: 11, towingCapacity: 2200 },
    { id: 4, make: 'Ram', model: 'ProMaster', price: 34000, imageUrl: 'https://placehold.co/300x200/D35400/white?text=Ram+ProMaster', fuel_consumption: '12.0L/100km', warranty: '3 years / 60,000 km', transportType: 'goods', tripRange: 'short', vehicleClass: 'medium', mileage: 40000, year: 2022, orientation: 'economic', color: 'bright', origin: 'na', powertrain: 'petrol', body: '5door', tonnageCapacity: 1.7, cubicMeterCapacity: 13, towingCapacity: 2100 },
    { id: 9, make: 'Ford', model: 'F-150', price: 45000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Ford+F-150', fuel_consumption: '11.0L/100km', warranty: '3 years / 60,000 km', transportType: 'goods', tripRange: 'long', vehicleClass: 'medium', mileage: 30000, year: 2022, orientation: 'powerful', color: 'dark', origin: 'na', powertrain: 'hybrid', body: '5door', tonnageCapacity: 1, cubicMeterCapacity: 4, towingCapacity: 5000 },
    { id: 10, make: 'Chevrolet', model: 'Silverado', price: 44000, imageUrl: 'https://placehold.co/300x200/A569BD/white?text=Chevy+Silv', fuel_consumption: '11.5L/100km', warranty: '3 years / 60,000 km', transportType: 'goods', tripRange: 'long', vehicleClass: 'medium', mileage: 35000, year: 2021, orientation: 'powerful', color: 'dark', origin: 'na', powertrain: 'diesel', body: '5door', tonnageCapacity: 1.2, cubicMeterCapacity: 4.5, towingCapacity: 5500 },
    { id: 11, make: 'Ram', model: '1500', price: 46000, imageUrl: 'https://placehold.co/300x200/D35400/white?text=Ram+1500', fuel_consumption: '11.2L/100km', warranty: '3 years / 60,000 km', transportType: 'goods', tripRange: 'long', vehicleClass: 'luxury', mileage: 25000, year: 2023, orientation: 'powerful', color: 'bright', origin: 'na', powertrain: 'petrol', body: '5door', tonnageCapacity: 1.1, cubicMeterCapacity: 4.2, towingCapacity: 5200 },

    // Person Vehicles (Minivans, Sedans, Hatchbacks)
    { id: 5, make: 'Toyota', model: 'Sienna', price: 38000, imageUrl: 'https://placehold.co/300x200/16A085/white?text=Toyota+Sienna', fuel_consumption: '7.5L/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 22000, year: 2022, orientation: 'economic', color: 'bright', origin: 'jp', powertrain: 'hybrid', body: '5door' },
    { id: 6, make: 'Honda', model: 'Odyssey', price: 37000, imageUrl: 'https://placehold.co/300x200/C0392B/white?text=Honda+Odyssey', fuel_consumption: '8.0L/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 28000, year: 2021, orientation: 'economic', color: 'dark', origin: 'jp', powertrain: 'petrol', body: '5door' },
    { id: 7, make: 'Chrysler', model: 'Pacifica', price: 39000, imageUrl: 'https://placehold.co/300x200/8E44AD/white?text=Chr+Pacifica', fuel_consumption: '7.8L/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 18000, year: 2023, orientation: 'economic', color: 'bright', origin: 'na', powertrain: 'hybrid', body: '5door' },
    { id: 8, make: 'Kia', model: 'Carnival', price: 36000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+Carnival', fuel_consumption: '8.2L/100km', warranty: '5 years / 100,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 10000, year: 2023, orientation: 'economic', color: 'dark', origin: 'kr', powertrain: 'petrol', body: '5door' },
    { id: 15, make: 'Volkswagen', model: 'Golf', price: 28000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=VW+Golf', fuel_consumption: '6.5L/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'short', vehicleClass: 'medium', mileage: 45000, year: 2020, orientation: 'economic', color: 'bright', origin: 'eu', powertrain: 'petrol', body: 'hatchback' },
    { id: 16, make: 'Toyota', model: 'Corolla', price: 25000, imageUrl: 'https://placehold.co/300x200/16A085/white?text=Toyota+Corol', fuel_consumption: '6.0L/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'short', vehicleClass: 'basic', mileage: 60000, year: 2019, orientation: 'economic', color: 'dark', origin: 'jp', powertrain: 'petrol', body: 'sedan' },
    { id: 17, make: 'Honda', model: 'Civic', price: 26000, imageUrl: 'https://placehold.co/300x200/C0392B/white?text=Honda+Civic', fuel_consumption: '6.2L/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'short', vehicleClass: 'basic', mileage: 55000, year: 2020, orientation: 'economic', color: 'bright', origin: 'jp', powertrain: 'petrol', body: 'sedan' },
    { id: 18, make: 'Hyundai', model: 'Elantra', price: 24000, imageUrl: 'https://placehold.co/300x200/2980B9/white?text=Hyundai+Elan', fuel_consumption: '6.4L/100km', warranty: '5 years / 100,000 km', transportType: 'person', tripRange: 'short', vehicleClass: 'basic', mileage: 65000, year: 2019, orientation: 'economic', color: 'dark', origin: 'kr', powertrain: 'petrol', body: 'sedan' },
    { id: 19, make: 'Mazda', model: '3', price: 27000, imageUrl: 'https://placehold.co/300x200/E74C3C/white?text=Mazda+3', fuel_consumption: '6.8L/100km', warranty: '3 years / unlimited km', transportType: 'person', tripRange: 'short', vehicleClass: 'medium', mileage: 40000, year: 2021, orientation: 'powerful', color: 'bright', origin: 'jp', powertrain: 'petrol', body: 'hatchback' },
    { id: 20, make: 'Kia', model: 'Forte', price: 23000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+Forte', fuel_consumption: '6.6L/100km', warranty: '5 years / 100,000 km', transportType: 'person', tripRange: 'short', vehicleClass: 'basic', mileage: 70000, year: 2018, orientation: 'economic', color: 'dark', origin: 'kr', powertrain: 'petrol', body: 'sedan' },
    { id: 21, make: 'BMW', model: '3 Series', price: 55000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=BMW+3+Series', fuel_consumption: '7.0L/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 30000, year: 2022, orientation: 'powerful', color: 'dark', origin: 'eu', powertrain: 'petrol', body: 'sedan' },
    { id: 22, make: 'Mercedes-Benz', model: 'C-Class', price: 58000, imageUrl: 'https://placehold.co/300x200/1E5F74/white?text=MB+C-Class', fuel_consumption: '7.2L/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 25000, year: 2023, orientation: 'powerful', color: 'bright', origin: 'eu', powertrain: 'petrol', body: 'sedan' },
    { id: 23, make: 'Audi', model: 'A4', price: 56000, imageUrl: 'https://placehold.co/300x200/9B59B6/white?text=Audi+A4', fuel_consumption: '7.1L/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 28000, year: 2022, orientation: 'powerful', color: 'dark', origin: 'eu', powertrain: 'petrol', body: 'sedan' },
    { id: 25, make: 'Tesla', model: 'Model 3', price: 52000, imageUrl: 'https://placehold.co/300x200/E67E22/white?text=Tesla+Model+3', fuel_consumption: '15 kWh/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 32000, year: 2022, orientation: 'powerful', color: 'bright', origin: 'na', powertrain: 'electric', body: 'sedan' },
    { id: 26, make: 'Ford', model: 'Mustang Mach-E', price: 59000, imageUrl: 'https://placehold.co/300x200/233E8B/white?text=Mustang+M-E', fuel_consumption: '17 kWh/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'luxury', mileage: 20000, year: 2023, orientation: 'powerful', color: 'bright', origin: 'na', powertrain: 'electric', body: '5door' },
    { id: 27, make: 'Hyundai', model: 'Ioniq 5', price: 53000, imageUrl: 'https://placehold.co/300x200/2980B9/white?text=Ioniq+5', fuel_consumption: '16.7 kWh/100km', warranty: '5 years / 100,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 15000, year: 2023, orientation: 'economic', color: 'dark', origin: 'kr', powertrain: 'electric', body: 'hatchback' },
    { id: 28, make: 'Kia', model: 'EV6', price: 54000, imageUrl: 'https://placehold.co/300x200/2C3E50/white?text=Kia+EV6', fuel_consumption: '16.5 kWh/100km', warranty: '5 years / 100,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 12000, year: 2023, orientation: 'powerful', color: 'bright', origin: 'kr', powertrain: 'electric', body: 'hatchback' },
    { id: 29, make: 'Volkswagen', model: 'ID.4', price: 51000, imageUrl: 'https://placehold.co/300x200/3498DB/white?text=VW+ID.4', fuel_consumption: '17.2 kWh/100km', warranty: '4 years / 80,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 18000, year: 2022, orientation: 'economic', color: 'dark', origin: 'eu', powertrain: 'electric', body: '5door' },
    { id: 30, make: 'Subaru', model: 'Solterra', price: 55000, imageUrl: 'https://placehold.co/300x200/34495E/white?text=Subaru+Solt', fuel_consumption: '17.5 kWh/100km', warranty: '3 years / 60,000 km', transportType: 'person', tripRange: 'long', vehicleClass: 'medium', mileage: 10000, year: 2023, orientation: 'economic', color: 'bright', origin: 'jp', powertrain: 'electric', body: '5door' }
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

        // Validation for required fields
        const country = document.getElementById('country').value;
        const transportTypes = document.querySelectorAll('input[name="transport-type"]:checked').length;

        if (!country) {
            alert('Please select a country.');
            return;
        }

        if (transportTypes === 0) {
            alert('Please select at least one Type of Transport.');
            return;
        }

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
        const filteredVehicles = filterVehicles(selectedFilters, mockVehicleData);
        displaySearchResults(filteredVehicles);
    });

    function filterVehicles(filters, vehicles) {
        let filteredVehicles = vehicles;

        // Helper for checkbox groups
        const applyCheckboxFilter = (key, property) => {
            if (filters[key] && filters[key].length > 0) {
                const selected = Array.isArray(filters[key]) ? filters[key] : [filters[key]];
                filteredVehicles = filteredVehicles.filter(v => selected.includes(v[property]));
            }
        };

        // Apply all checkbox filters
        applyCheckboxFilter('transport-type', 'transportType');
        applyCheckboxFilter('trip-range', 'tripRange');
        applyCheckboxFilter('vehicle-class', 'vehicleClass');
        applyCheckboxFilter('vehicle-orientation', 'orientation');
        applyCheckboxFilter('color-preference', 'color');
        applyCheckboxFilter('origin', 'origin');
        applyCheckboxFilter('powertrain', 'powertrain');
        applyCheckboxFilter('body', 'body');

        // Apply max-mileage filter
        if (filters['max-mileage']) {
            filteredVehicles = filteredVehicles.filter(v => v.mileage <= parseInt(filters['max-mileage'], 10));
        }

        // Apply max-years filter
        if (filters['max-years']) {
            const minYear = new Date().getFullYear() - parseInt(filters['max-years'], 10);
            filteredVehicles = filteredVehicles.filter(v => v.year >= minYear);
        }

        // Apply goods-specific filters (only if 'goods' is selected)
        const transportType = filters['transport-type'];
        const isGoodsSelected = transportType && (Array.isArray(transportType) ? transportType.includes('goods') : transportType === 'goods');

        if (isGoodsSelected) {
            if (filters['tonnage-capacity']) {
                filteredVehicles = filteredVehicles.filter(v => (v.tonnageCapacity || 0) >= parseFloat(filters['tonnage-capacity']));
            }
            if (filters['cubic-meter-capacity']) {
                filteredVehicles = filteredVehicles.filter(v => (v.cubicMeterCapacity || 0) >= parseFloat(filters['cubic-meter-capacity']));
            }
            if (filters['towing-capacity']) {
                filteredVehicles = filteredVehicles.filter(v => (v.towingCapacity || 0) >= parseFloat(filters['towing-capacity']));
            }
        }

        return filteredVehicles;
    }

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
