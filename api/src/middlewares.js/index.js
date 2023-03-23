const validate = (req,res, next)=>{
    const { name, description, released, rating, platforms,genres }= req.body;
    
    if(!name) return res.status(400).json({error:"missing name"});
    if(!description) return res.status(400).json({error:"missing description"});
    if(!released) return res.status(400).json({error:"missing released"});
    if(!rating) return res.status(400).json({error:"missing rating"});
    if(!platforms) return res.status(400).json({error:"missing platforms"});
    if(!genres) return res.status(400).json({error:"missing genres"});
    next();
};
 
module.exports= {validate}