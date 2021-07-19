import { Document } from 'mongoose'

export interface IPhone extends Document {
    id: string
    type: string
    serial: string
    color: string
}