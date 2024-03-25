import { Router } from "express"
import { createEvent, deleteEvent, getEvents, getOneEvent, updateEvents } from "../controllers/admin.controller";

const router = Router()

router.get('/', getEvents)

router.post('/events', createEvent)

router.get('/events/:id', getOneEvent)

router.put('/events/:id', updateEvents)

router.delete('/events/:id', deleteEvent)

export default router