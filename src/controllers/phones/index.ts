import { Response, Request } from 'express'
import { IPhone } from './../../types/phone'
import Phone from '../../models/phone'

const getPhones = async (req: Request, res: Response): Promise<void> => {
    try {
        const phones: IPhone[] = await Phone.find({}, {_id: 0, __v: 0})
        res.status(200).json( phones )
    } catch (error) {
        throw error
    }
}

const addPhone = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IPhone, 'id' | 'type' | 'serial' | 'color'>
        const phone: IPhone = new Phone({
            id: body.id,
            type: body.type,
            serial: body.serial,
            color: body.color
        }) 

        const newPhone: IPhone = await phone.save()
        
        res.status(201).json(  {
            id: newPhone.id, 
            type: newPhone.type,
            serial: newPhone.serial,
            color: newPhone.color 
        } )
    } catch (error) {
        throw error
    }
}

const updatePhone = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updatePhone: IPhone | null = await Phone.findOneAndUpdate(
            { id: id },
            body,
            { new: true }
        )
        
        res.status(200).json({
            id: body.id, 
            type: body.type,
            serial: body.serial,
            color: body.color
        })
    } catch (error) {
        throw error
    }
}

const deletePhone = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedPhone: IPhone | null = await Phone.findOneAndDelete(
            {id: req.params.id}
        )
        res.status(200).json({})
    } catch (error) {
        throw error
    }
}

export { getPhones, addPhone, updatePhone, deletePhone }
