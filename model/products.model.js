import mongoose from 'mongoose'
const {Schema} = mongoose

const productModel = Schema({
    title: {type: String, required: [true, 'Title is required']},
    description: {type: String, required: [true, 'Description is required']},
    price: {type: Number, required: [true, 'Price is required']},
    sizes: [String],
    colors: [String],
    images: [String],
    discount: {type: Number, required: [true, 'Discount is required'], default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Product = mongoose.model('Product', productModel)
export default Product