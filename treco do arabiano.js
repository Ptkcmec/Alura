const api_key = "RGAPI-1bb84cce-7933-4ab2-bc98-5227e82db8fa"  
let nick = prompt("Qual seu nickname no lol?")
const [user,tag]=nick.split("#")
const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${tag}/${user}?api_key=${api_key}`
console.log(url)