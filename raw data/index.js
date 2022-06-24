const axios = require('axios')
const fs = require('fs')

const getData = async (page = 1) => {
    try {
        const { data } = await axios.get(`https://www.ambitionbox.com/api/v2/companyListingInfo?page=${page}&sort=popularity`)
        const db = data.data.listing.map(x => {
            const {Awards, tags, About, first_location, industries, ...rest} = x;
            return rest;
        })
        return db;
    } catch (error) {
        console.log(error.response.data)
        console.log('==================')
        console.error('ERROR AT: ' + page)
        console.log('==================')
        return [];
    }
}

(async () => {
    const total = []
    for (let i = 1; i<=21439; i+=1 ) {
        const data = await getData(i)
        total.push(...data)
        if(data.length == 0) {
            console.log('==================')
            console.log('PAGE: ' + i)
            console.log('current total: ' + total.length)
            console.log('==================')
        }

        if(i % 100 == 0 || i == 21439) {
            fs.writeFileSync('db.json', JSON.stringify(total))
        }
    }
    fs.writeFileSync('./db.json', JSON.stringify(total))
})()