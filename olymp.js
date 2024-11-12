

document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');
    const medalTable = document.getElementById('medalTable');
    const tableRows = medalTable.querySelectorAll('tbody tr');

    
    const savedFilter = localStorage.getItem('countryFilter');
    if (savedFilter) {
        filterInput.value = savedFilter;
        filterTable(savedFilter);
    }

    
    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();
        localStorage.setItem('countryFilter', filterValue); 
        filterTable(filterValue);
    });

    function filterTable(filterValue) {
        tableRows.forEach(row => {
            const countryCell = row.querySelector('td').textContent.toLowerCase();
            if (countryCell.includes(filterValue)) {
                row.style.display = ''; 
            } else {
                row.style.display = 'none'; 
            }
        });
    }
});
