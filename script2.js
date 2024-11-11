// en samling promises som vi skapat med hjälp av Promise-biblioteket
const getBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hämtat bröd')
    }, 4000)
})

const toastBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('rostat bröd')
    }, 2000)
})

const butterBread = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('smörat bröd')
    }, 3000)
})

const applyCheese = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ostat bröd')
    }, 2500)
})


//promise kedja. vi kör dom löftena vi vill ska hända i rätt ordning
/* getBread.then(res => {
    console.log(res)

    toastBread.then(res => {
        console.log(res)

        butterBread.then(res => {
            console.log(res)

            applyCheese.then(res => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }) .catch((error) => {
        console.log(error)
    })
}).catch(error => {
    console.log(error)
}) */

// vi kör våra promises i den ordningen vi vill dom ska hända i en async/await-funktion istället
const doMacka = async () => {
    try {
        console.log(await getBread)
        console.log(await toastBread)
        console.log(await butterBread)
        console.log(await applyCheese)
    }catch(error) {
        console.error(error)
    }
    
}
//doMacka()

//promise.all() tar emot en array med löften och skriver ut alla resultat i en ny array
/* Promise.all([getBread, toastBread, butterBread, applyCheese]).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
}) */

    // promise.race() tar emot en array med löften och returnerar den som blir klar först
/* Promise.race([getBread, toastBread, butterBread, applyCheese]).then(res => {
    console.log(res)
}) */



