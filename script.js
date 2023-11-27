function displayYearsOnMarket() {
    const foundingYear = 1916;
    const currentYear = new Date().getFullYear();
    const yearsOnMarket = currentYear - foundingYear;
    const yearsOnMarketDisplay = document.getElementById('yearsOnMarket');
    yearsOnMarketDisplay.textContent = `BMW has been on the market for ${yearsOnMarket} years.`;
  }

  function displayCreatora() {
    const bmwImage = document.getElementById('bmwImage');
    bmwImage.src = 'creator.jpg'; 
  }