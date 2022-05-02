const dataPath = './json-db/user.json'
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
//---------------------------------------------
app.get("/user", (req, res) => {
    const accounts = getAccountData();
    res.send(accounts);
});
//---------------------------------------------

let date_ob = new Date();

let d = ("0" + date_ob.getDate()).slice(-2);
let m = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let y = date_ob.getFullYear();
let h = date_ob.getHours();
let i = date_ob.getMinutes();
let s = date_ob.getSeconds();
let time = new Date().getTime();
function tgl_a(hr=''){
    return d+hr+m+hr+y;
}
function tgl_b(hr=''){
    return y+hr+m+hr+d;
}
function jam_a(hr=''){
    return h+hr+i+hr+s;
}
function jam_b(hr=''){
    return h+hr+i;
}



function timestamp(){
    function pad(n) {return n<10 ? "0"+n : n}
    d=new Date()
    dash="-"
    colon=":"
    return d.getFullYear()+dash+
    pad(d.getMonth()+1)+dash+
    pad(d.getDate())+" "+
    pad(d.getHours())+colon+
    pad(d.getMinutes())+colon+
    pad(d.getSeconds())
  }



  
// let Cinfo = new ClientInfo();
// const medata =  client.getLabels((res)=>{
//   console.log(res);
// });
// setInterval(me,3000);
// function me(){
// console.log(medata);
// }
//---------------------------------------------
// const { spawn } = require('child_process');

// (function main() {
//   if (process.env.process_restarting) {
//     delete process.env.process_restarting;
//     // Give old process one second to shut down before continuing ...
//     setTimeout(main, 1000);
//     return;
//   }
//   // Restart process ...
//   spawn(process.argv[0], process.argv.slice(1), {
//     env: { process_restarting: 1 },
//     stdio: 'ignore',
//   }).unref();
// })();
//---------------------------------------------