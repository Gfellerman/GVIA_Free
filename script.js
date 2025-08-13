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
        // Instead of filtering mock data, fetch from API
        fetchVehicleData(selectedFilters);
    });

    function fetchVehicleData(filters) {
        // 1. Construct the API URL from filters
        const baseUrl = 'https://www.carqueryapi.com/api/0.3/';
        let apiUrl = `${baseUrl}?callback=handleCarQueryResponse&cmd=getTrims`;

        // Map our filter names to API parameter names
        // Note: This is a simplified mapping. CarQuery might not support all our filters directly.
        if (filters['vehicle-class']) {
            const vehicleClass = Array.isArray(filters['vehicle-class']) ? filters['vehicle-class'][0] : filters['vehicle-class'];
            apiUrl += `&body=${vehicleClass}`;
        }
        if (filters['powertrain']) {
            const powertrain = Array.isArray(filters['powertrain']) ? filters['powertrain'][0] : filters['powertrain'];
            apiUrl += `&fuel_type=${powertrain}`;
        }
        if (filters['max-years']) {
             const minYear = new Date().getFullYear() - parseInt(filters['max-years'], 10);
             apiUrl += `&min_year=${minYear}`;
        }

        // 2. Create a script tag for the JSONP request
        const script = document.createElement('script');
        script.src = apiUrl;
        document.body.appendChild(script);

        // 3. Clean up the script tag after it's loaded/failed
        script.onload = () => {
            document.body.removeChild(script);
        };
        script.onerror = () => {
             alert('Error: Could not fetch data from the API.');
             document.body.removeChild(script);
        };
    }

    // 4. Define the global callback function that the API will call
    window.handleCarQueryResponse = function(data) {
        console.log('Received data from CarQuery API:', data);
        if (data.Trims && data.Trims.length > 0) {
            // Step 1: Transform the raw API data into our app's format
            const transformedVehicles = transformApiData(data.Trims);

            // Step 2: Get the current filters from the form to apply client-side
            const formData = new FormData(document.getElementById('filter-form'));
            const selectedFilters = {};
            for (const [key, value] of formData.entries()) {
                if(selectedFilters[key]) {
                    if(!Array.isArray(selectedFilters[key])) {
                        selectedFilters[key] = [selectedFilters[key]];
                    }
                    selectedFilters[key].push(value);
                } else {
                    selectedFilters[key] = value;
                }
            }

            // Step 3: Apply our detailed client-side filters to the API results
            const finalVehicles = filterVehicles(selectedFilters, transformedVehicles);
            console.log(`Applied client-side filters. ${finalVehicles.length} vehicles remaining.`);

            displaySearchResults(finalVehicles);
        } else {
            displaySearchResults([]); // Handle no results from API
        }
    }

    function transformApiData(apiTrims) {
        if (!apiTrims) return [];
        return apiTrims.map(trim => {
            const price = Math.floor(Math.random() * (70000 - 20000 + 1)) + 20000;
            const bodyType = trim.model_body?.toLowerCase() || '';
            const isPerson = ['sedan', 'hatchback', 'wagon', 'suv', 'crossover', 'minivan', 'coupe', 'roadster'].includes(bodyType);

            // Randomly generate data for fields not in the API
            const randomOrientation = Math.random() < 0.5 ? 'powerful' : 'economic';
            const randomColor = Math.random() < 0.5 ? 'bright' : 'dark';
            const randomTripRange = Math.random() < 0.5 ? 'long' : 'short';
            const randomMileage = Math.floor(Math.random() * 100000);

            let vehicleClass = 'medium';
            if (price < 30000) vehicleClass = 'basic';
            if (price > 55000) vehicleClass = 'luxury';

            let originMap = { 'USA': 'na', 'Germany': 'eu', 'Japan': 'jp', 'Korea': 'kr', 'China': 'cn', 'UK': 'eu' };

            return {
                // Data from API
                id: trim.model_id,
                make: trim.make_display,
                model: `${trim.model_name} ${trim.model_trim}`.trim(),
                year: parseInt(trim.model_year, 10),
                body: bodyType,
                powertrain: trim.model_engine_fuel?.toLowerCase().split(' ')[0], // e.g. "Gasoline - unleaded 95" -> "gasoline"
                fuel_consumption: trim.model_lkm_mixed ? `${trim.model_lkm_mixed} L/100km` : 'N/A',
                origin: originMap[trim.make_country] || 'other',

                // Generated/Placeholder Data
                price: price,
                imageUrl: `https://placehold.co/300x200/555/fff?text=${trim.make_display}+${trim.model_name}`,
                warranty: 'N/A',
                mileage: randomMileage,
                transportType: isPerson ? 'person' : 'goods',
                tripRange: randomTripRange,
                vehicleClass: vehicleClass,
                orientation: randomOrientation,
                color: randomColor,
                tonnageCapacity: isPerson ? null : (Math.random() * (2 - 0.5) + 0.5).toFixed(1),
                cubicMeterCapacity: isPerson ? null : Math.floor(Math.random() * (15 - 5 + 1)) + 5,
                towingCapacity: isPerson ? null : Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000,
            };
        });
    }

    function filterVehicles(filters, vehicles) {
        let filteredVehicles = [...vehicles];

        const checkboxFilters = {
            'transport-type': 'transportType', 'trip-range': 'tripRange',
            'vehicle-class': 'vehicleClass', 'vehicle-orientation': 'orientation',
            'color-preference': 'color', 'origin': 'origin',
            'powertrain': 'powertrain', 'body': 'body'
        };

        for (const filterName in checkboxFilters) {
            const vehicleProperty = checkboxFilters[filterName];
            if (filters[filterName] && filters[filterName].length > 0) {
                const selectedValues = Array.isArray(filters[filterName]) ? filters[filterName] : [filters[filterName]];
                filteredVehicles = filteredVehicles.filter(v => selectedValues.includes(v[vehicleProperty]));
            }
        }

        if (filters['max-mileage']) {
            filteredVehicles = filteredVehicles.filter(v => v.mileage <= parseInt(filters['max-mileage'], 10));
        }

        if (filters['max-years']) {
            const minYear = new Date().getFullYear() - parseInt(filters['max-years'], 10);
            filteredVehicles = filteredVehicles.filter(v => v.year >= minYear);
        }

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
