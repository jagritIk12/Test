// token1 for auth
const token1 = function(req,res,next){
    let x = true;
    if(x){
        next();
    }
    else{
        res.status(401).send({MessagePort: "unauthorized token1"})
    }
}

//token2 for auth

const token2 = function(req,res,next){
    let y = true;
    if(y){
        next();
    }
    else{
        res.status(401).send({Message: "unauthorized token2"})
    }
}

module.exports = {
    token1,
    token2
}
