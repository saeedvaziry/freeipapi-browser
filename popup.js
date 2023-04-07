fetch('https://freeipapi.com/api/json', {
    method: 'GET'
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('info-ipVersion').innerText = data.ipVersion;
        document.getElementById('info-ipAddress').innerText = data.ipAddress;
        document.getElementById('info-latitude').innerText = data.latitude;
        document.getElementById('info-longitude').innerText = data.longitude;
        document.getElementById('info-countryName').innerText = data.countryName;
        document.getElementById('info-countryCode').innerText = data.countryCode;
        document.getElementById('info-timeZone').innerText = data.timeZone;
        document.getElementById('info-zipCode').innerText = data.zipCode;
        document.getElementById('info-cityName').innerText = data.cityName;
        document.getElementById('info-regionName').innerText = data.regionName;
        document.getElementById('info').style.display = '';
    });
