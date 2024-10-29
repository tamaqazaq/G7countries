// olymp.js

document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const medalTable = document.getElementById('medalTable');
    const tableRows = medalTable.querySelectorAll('tbody tr');

    // Load filter value from local storage
    const savedFilter = localStorage.getItem('countryFilter');
    if (savedFilter) {
        filterInput.value = savedFilter;
        filterTable(savedFilter);
    }

    // Event listener for filtering
    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();
        localStorage.setItem('countryFilter', filterValue); // Save filter to local storage
        filterTable(filterValue);
    });

    function filterTable(filterValue) {
        tableRows.forEach(row => {
            const countryCell = row.querySelector('td').textContent.toLowerCase();
            if (countryCell.includes(filterValue)) {
                row.style.display = ''; // Show row
            } else {
                row.style.display = 'none'; // Hide row
            }
        });
    }
});
