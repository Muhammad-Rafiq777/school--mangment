import formModel from '../model/form.js'


const createForm=async(req,res)=>{
    const {name,email,number,gender,message}=req.body
    try{
        const form=await formModel.create({name,email,number,gender,message})
        res.status(201).json({success:true,message:'Form submitted successfully',form})
    }catch(error){
        res.status(500).json({ success:false,message:'Form submission failed',error:error.message})
    }
}
export default createForm