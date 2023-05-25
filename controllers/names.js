
const provideName=(req, res)=>{
    const name=req.params.reqName;
    res.send(name);
}
const deleteName=(req, res)=>{
    const id=req.query.id;   
    res.send(req.query);
}
const updateName=(req, res)=>{
    const body=req.body;
    let b=req.params.number;    
    res.send([b, body]);
}



export {provideName, deleteName, updateName}