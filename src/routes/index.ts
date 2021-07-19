import { Router } from 'express'
import { getPhones, addPhone, updatePhone, deletePhone } from '../controllers/phones'
 
const router: Router = Router()

router.get('/contacts', getPhones)

router.post('/contacts', addPhone)

router.put('/contacts/:id', updatePhone)

router.delete('/contacts/:id', deletePhone)

export default router
