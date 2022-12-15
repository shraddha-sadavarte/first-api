import express from 'express';

const app=express();
app.use(express.json());

app.get('/ping' ,(req, res)=>{
    res.json({
        message:"pong"
    })
})

app.post('/tea',(req,res)=>{

    
    const update=req.body.update;
    const tableNo=req.body.tableNo;

    res.json({
       orderDetails: `hi table ${tableNo} ${update}`
    })
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})