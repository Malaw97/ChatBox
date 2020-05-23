const myform = document.getElementsByClassName('login100-form validate-form')[0];

myform.addEventListener('submit', onsubmit);

async function login(){
    await wallet.requestSignIn(null, "near-api-js client-side challenge");
}

function onsubmit(button1){
    button1.preventDefault();
    if (wallet.isSignedIn()==true){
        //Passthrough to next page
        window.open('http://192.81.216.47:40967/')
    }
    else{
        //Proceed to testnet login page
        login()
    }
};