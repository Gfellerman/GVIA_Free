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
        console.log('Selected Filters:', selectedFilters);
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
