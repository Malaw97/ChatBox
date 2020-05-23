const myform = document.getElementsByClassName('login100-form validate-form')[0];

myform.addEventListener('submit', onsubmit);

async function login(){
    await wallet.requestSignIn(null, "near-api-js client-side challenge");
}

function onsubmit(button1){
    button1.preventDefault();
    if (wallet.isSignedIn()==true){
        //Passthrough to next page
        window.open('https://wallet.testnet.near.org/login/?title=NEAR+Guest+Book&contract_id=dev-1590275483536&success_url=http%3A%2F%2F192.81.216.47%3A1234%2F&failure_url=http%3A%2F%2F192.81.216.47%3A1234%2F&app_url=http%3A%2F%2F192.81.216.47%3A1234&public_key=ed25519%3A5WFr9DEJZAfkQ1Q1nxnJYu8GUBnMHN2Ko11oHDwndkHK')
    }
    else{
        //Proceed to testnet login page
        login()
    }
};