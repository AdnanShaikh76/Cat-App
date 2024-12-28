export const getcatdetails = async () =>{
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_8q8SwKFFS5wnLkajjHPYkQRMgI37UF8eiIW1f01FhWGIwjjd1lkRY9fUJR9Fpzwr");

    return await response.json();
     
}    