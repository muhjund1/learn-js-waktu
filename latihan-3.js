const utc = new Date()
 
const wib = new Date(utc.getTime() + 7 * 60 * 60 * 1000)
const mekkah = new Date(utc.getTime() + 3 * 60 * 60 * 1000)
 
console.log(wib, mekkah)