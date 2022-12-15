const infoCountry = countryName => {
    axios

        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {

            const countryDetails = response.data
            console.log(response);

            countryDetails.forEach(country => {

                //console.log(country.name.common);
                console.log(country.cca3);
            });

            const countryName = document.getElementById('country-name')
            const flagCountry = document.getElementById('country-flag')



            for (let i = 0; i < countryDetails.length; i++) {
                //clearAll()
                let countryNames = document.createElement('h1')
                let flagsCountrys = document.createElement('img')
                let bordersCountry = document.createElement('h5')
                let fifaCountry = document.createElement('h6')


                document.querySelector('body').appendChild(countryNames)
                document.querySelector('body').appendChild(flagsCountrys)
                document.querySelector('body').appendChild(bordersCountry)
                document.querySelector('body').appendChild(fifaCountry)


                countryNames.innerText = countryDetails[i].name.common
                flagsCountrys.setAttribute('src', countryDetails[i].flags.png)
                bordersCountry.innerText = `Borders: ${countryDetails[i].borders}`
                fifaCountry.innerText = `FIFA: ${countryDetails[i].fifa}`


                //tratando de quitar las abreviaturas y convertirlos en nombres
                // if (fullTextCountry.innerText = bordersCountry.innerTex) {
                //     let fullCountry = document.createElement('h2')
                //     document.querySelector('body').appendChild(fullCountry)
                //     fullCountry.innerText = `${countryDetails[i].name.common}`
                //     //console.log(fullCountry.innerText);
                // }

            }



            // flagCountry.addEventListener('click', () => {
            //     getCountyInfo('morocco')
            // })
        })
    //.catch(err => console.error(err))
}


const countryBtn = document.querySelector('#get-country')

countryBtn.addEventListener('click', () => {

    const userInput = document.querySelector('#input-country').value

    infoCountry(userInput)

})