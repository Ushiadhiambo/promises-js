//Question 1
//Create a  variable called reminder and give it a true
//create a function called emailreminder which takes in email as the parameter and returns a promise on sending an email
//if the reminder is true the function waits for five seconds and resolves the promise and if it is false it waits for 5 second  and rejects the promise 
//create another async function  called sendreminder  that takes in email as a paremeter and used try-catch block to handle the promise 
//inside the try block if the reminder is true it logs the result and in the catch ,if there is an error it logs the error message
//call the function with three users email addresses
const reminder=true;

function emailReminder(email){
    return new Promise((resolve,reject)=>{
    if(reminder){
        setTimeout(()=>{
            resolve(`Reminder sent to ${email}`)
        },5000);
    }else{
        setTimeout(()=>{
            reject("Kindly register first")
        },5000);
    }
   });

}
async function sendReminder(email){
    try{
        const result=await emailReminder(email);
        console.log({result})
    }catch(error){
        console.log({error})
    }

}
sendReminder("ushiadhiambo@gmail.com");
sendReminder("adhiamboushi9@gmail.com");
sendReminder("ushiadhiambo200@gmail.com");



//Question 2
//create a function called tryLogin to stimulate user login attempts
//Create the number of attempts required with a maximum of three attempts
//Use a while loop to stimulate the login attempts and in every attempt wait for a second to go to the next attempt
//For each attempt increement the attempt ...if the number of attempt is less than the maximum attempt log "login failed" and if the maximum is reached log "login successfull"
//after the loop log "login failed/succeful  after three attempts" depending on the logins result
//call the function

 async function tryLogin(){
    let attempts=0;
    const maxAttempts=3;
    while(attempts<maxAttempts){
        await new Promise(resolve=>
            setTimeout(resolve,1000)
        );
        attempts++;
        if(attempts<maxAttempts){
            console.log("Login failed")
        }else{
            console.log("Log in successful")
        }
        
    }
    if (attempts===maxAttempts){
        console.log("Login failed after 3 attempts ")
    }


}
tryLogin();

//Question3
//create a function called countdowntimer
//Create  a count from 5-0 and use a loop to count down till 0 after count has been made wait for one second before proceeding to the next count
//if the countdown reaches 0 leave a message the "time is up"
//call the function
async function countdownTimer(){
    for(let count=5; count>0;count--){
        console.log(count);
        await new Promise(resolve=>
            setTimeout(resolve,1000)
        );
    }
    console.log("Time is up!");
}
countdownTimer();


//Question 4
//Create a function called loadpage
//start by logging the first message for the header,then wait for one second and log the second message which is the content
//wait for another two second to to log the third message which id the footer and lastly log the final message which is the page 
//call the function
async function loadPage(){
    console.log("Loading header....");
    await new Promise (resolve=>
        setTimeout(resolve,1000)
    );
    console.log("Loading content....");
    await new Promise(resolve=>
        setTimeout(resolve,2000)
    );
    console.log("Loading footer....");
    await new Promise(resolve=>
        setTimeout(resolve,1000)
    );
    console.log("Page fully loaded.")
}
loadPage();

//Question 5
//Create a function called fetchprice that takes in symbol as a parameter
//Wait for two seconds to fetch the stock price and then return the message that the price of that sysmbol has been retrived
//create another function called fetchstockprice that will call the two different types of stock symbol and log the message from each call you made
//call the function
async function fetchPrice(symbol){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Price for ${symbol} retrieved`);
        },2000);
    });
}
async function fetchStockPrice(){
    const aaplPrice=await fetchPrice("AAPL");
    console.log(aaplPrice);
    const googPrice=await fetchPrice("GOOG");
    console.log(googPrice);
}
fetchStockPrice();
