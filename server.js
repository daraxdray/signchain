const http = require('http')
const reqModule = require("request")

http.createServer((inReq, inRes)=>{
        inRes.end(
            `Hello from my first web server ${prac_proj_config_test}`
        )

    // reqModule("http://worldtimeapi.org/api/timezone/America/New_York",function(inErr,inResp,inBody){
    //     inRes.end(
    //         `Hello from my first web server ${inBody} ${npm_package_config_test}`
    //     )
    // })

}).listen(890);

