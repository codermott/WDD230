document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-discovery-view');
    var directoryWrapper = document.querySelector('.directory-wrapper');
  
    toggleButton.addEventListener('click', function() {
      var currentView = toggleButton.getAttribute('data-current-view');
  
      if (currentView === 'list') {
        toggleButton.innerHTML = 'Switch to List View';
        directoryWrapper.classList.add('tile-view');
        directoryWrapper.classList.remove('list-view');
        toggleButton.setAttribute('data-current-view', 'tile');
      } else {
        toggleButton.innerHTML = 'Switch to Card View';
        directoryWrapper.classList.add('list-view');
        directoryWrapper.classList.remove('tile-view');
        toggleButton.setAttribute('data-current-view', 'list');
      }
    });
  
    fetch('data.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var directoryItems = '';
  
        data.forEach(function(company) {
          var companyContent = '';
          if (toggleButton.getAttribute('data-current-view') === 'list') {
            companyContent = `
              <div class="card-tile">
                <h2>${company.name}</h2>
              </div>
            `;
          } else {
            companyContent = `
              <div class="card-tile">
                <h2>${company.name}</h2>
                <em>Est: ${company.established}</em>
                <p>${company.businessType}</p>
                <img src="./images/directory/${company.logo}" alt="${company.name}'s logo" loading="lazy">
                <a href="${company.website}">link to website</a>
                <ul>
                  <li>Business Address: ${company.address}</li>
                  <li>Contact Person: ${company.contactPerson}</li>
                  <li>Phone: ${company.phone}</li>
                </ul>
              </div>
            `;
          }
          directoryItems += companyContent;
        });
  
        directoryWrapper.innerHTML = directoryItems;
      });
  });
  