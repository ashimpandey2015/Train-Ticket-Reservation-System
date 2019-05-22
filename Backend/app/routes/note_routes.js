var ObjectID = require('mongodb').ObjectID

module.exports=function (app, db) {


    app.get('/notes/:id',(req,res)=> {
        
        const id = req.params.id
        const details = {'_id':new ObjectID(id)};
        db.collection('notes').findOne(details,(err,item) =>{
            if (err){
                res.send({'error':'An error has occured'})
            }else{
                res.send(item)
            }
        });
    });





    app.post("/dialog", (req, res) => {

        const dialog = {
          mobilenumber: req.body.mobilenumber,
          pin: req.body.pin,
          amounts: req.body.amounts,
          name: req.body.name,
          email: req.body.email

        };  
    
        
    db.collection("dialogDetails").insert(dialog, (err, result) => {
        if (err) {
        res.send({
            error: "An  error has occured"
        });
        } else {
        res.send(result.ops[0]);
        }
    });
    });









    app.post("/sampath", (req, res) => {

        const sampath = {
          credit: req.body.credit,
          pin: req.body.pin,
          amounts: req.body.amounts,
          name: req.body.name,
          email: req.body.email

        };  
    
        
    db.collection("sampathDetails").insert(sampath, (err, result) => {
        if (err) {
        res.send({
            error: "An  error has occured"
        });
        } else {
        res.send(result.ops[0]);
        }
    });
    });
    
    




    

    app.post('/notes',(req,res)=>{
        const n1={route: req.body.route, time: req.body.time, cost:  req.body.cost };
       db.collection('notes').insert(n1,(err,result) =>{
        if (err){
            res.send({'error':'An error has occured'});
        }else{
            res.send(result.ops[0])
        }
       });
    });
};


