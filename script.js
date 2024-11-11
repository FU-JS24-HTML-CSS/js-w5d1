// skapa ett promise att någonting ska ske när funktionen är klar
const myPromise = new Promise((resolve, reject) => {
    //vi vill göra någonting

    setTimeout(() => {

        // om något går fel. som till exempel om adressen vi försöker nå i vårt anrop inte finns eller är felstavat osv
        if(false) {
            reject("något gick fel. du fick inte tag på informationen du ville ha")
        }

        // när allt går felfritt så skickar vi informationen vi får tillbaka till användaren
        resolve("allt gick bra. här har du informationen du ville ha")

        
    }, 2000)
})



// här får vi resultatet från vår promise i en promise-kedja
// blir något fel (när reject skickas) så fångas det upp i vår catch
/* myPromise.then((resolve) => {
    console.log(resolve)
}).catch((reject) => {
    console.log(reject)
}) */


async function myAsyncFun() {
    let myPromiseMessage = ''

    try {
        myPromiseMessage = await myPromise
        // så länge inget går fel så kan vi fortsätta göra det vi vill göra med datan från myPromise!

    }catch(error) {
        console.log(error)
        //gör allt annat som vi vill göra om något går fel, till exempel anropa vår server och säga att vi fick ett fel med det här felmeddelandet
    }
    

    //console.log(myPromiseMessage)
}

myAsyncFun()

// exempel med att hämta data från ett api
const myFetch = async () => {

    try{
        const poke = await fetch('https://pokeapki.co/api/v2/pokemon/ditto')
    const pokeData = await poke.json()

    console.log(pokeData)
    }catch(error) {
        console.log(error)
    }
    
}

myFetch()
