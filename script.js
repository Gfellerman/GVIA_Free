document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filter-form');
    const powertrainAllCheckbox = document.getElementById('powertrain-all');
    const powertrainCheckboxes = document.querySelectorAll('input[name="powertrain"]');

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
