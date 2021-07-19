import { IPhone } from './../types/phone'
import { model, Schema } from 'mongoose'

const phoneSchema: Schema = new Schema({
    id: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    serial: {
        type: String,
        required: true
    },

    color: {
        type: String,
        required: true
    }   

})


export default model<IPhone>('Phone', phoneSchema)