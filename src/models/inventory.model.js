//!dmbg
const {model,Schema,Types} = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Inventory'
const COLLECTION_NAME = 'Inventories'


const inventorySchema = new Schema({
    inven_productId : {
        type : Types.ObjectId,
        ref : 'Product'
    },
    inven_location : {
        type : String,
       default :'Unknown'
    },
    inven_stock : {
        type : Number,
        required : true
    },
    inven_shopId : {
        type : Types.ObjectId,
        ref : 'Shop'
    },
    inven_reservations : {
        type : Array,
        default : []
    },
},{
    timestamps : true,
    collection : COLLECTION_NAME
}
)

module.exports = {
    inventoryModel : model(DOCUMENT_NAME,inventorySchema)
}