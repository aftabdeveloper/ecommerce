import Product from '../model/products.model.js'

export const create = async (req,res)=>{
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(424).json(err)
    }
}

export const fetch = async (req,res)=>{
    try {
        const products = await Product.find(req.query)
        res.status(200).json(products)
    }
    catch(err)
    {
        res.status(424).json(err)
    }
}   

export const update = async (req,res)=>{
    try {
        await Product.updateOne({_id: req.params.id},req.body)
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(424).json(err)
    }
}

export const remove = async (req,res)=>{
    try {
        await Product.deleteOne({_id: req.params.id})
        res.status(200).json({success: true})
    }
    catch(err)
    {
        res.status(424).json(err)
    }
}
