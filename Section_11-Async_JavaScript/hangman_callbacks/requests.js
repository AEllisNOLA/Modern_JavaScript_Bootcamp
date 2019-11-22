const getPuzzle = (wordCount, callback) => {
    // Making an HTTP Request 
    const request = new XMLHttpRequest()

    // add Event Listener to get data
    request.addEventListener('readystatechange', (e) => {
        // If the request is finished (4) and everything went well (200)
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // callback function calls undefined for error since this is the working case

            callback(undefined, data.puzzle)
            // If the request is finished (4) but things didn't go well
        } else if (e.target.readyState === 4) {
            // callback function calls undefined for success since this is the error case
            callback('An error has taken place', undefined)
        }
    })

    // Use GET method to connect to URL and retrieve data
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

}







const getCountry = (countryCode, callback) => {
    const requestCountry = new XMLHttpRequest()
    // const countryCode = 'US'

    requestCountry.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((el) => el.alpha2Code === countryCode
            )
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('Error!', undefined)
        }
    })


    requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
    requestCountry.send()


}