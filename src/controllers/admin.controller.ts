import { Request, Response } from "express";
import { EventData } from "../entities/Event";
import { TicketData } from "../entities/Tickets";

export const createEvent = async (req: Request, res: Response) => {
    try {
        console.log(req.body, ' req.body');
        const data = req.body

        const { nameEvent, ticketPrice, startDate, location, coordinates, artists, quantityDays, ticketAvailable } = req.body

        const event = new EventData()
        const ticket = new TicketData()

        event.nameEvent = nameEvent
        event.ticketPrice = ticketPrice
        event.startDate = startDate
        event.location = location
        event.coordinates = coordinates
        event.artists = artists
        event.quantityDays = quantityDays
        ticket.ticketAvailable = ticketAvailable
        ticket.ticketPrice = ticketPrice
        console.log(event, ' event eventevent');

        const saveEvent = await event.save()
        const saveTicket = await ticket.save()


        return res.json({ event, ticket })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ errors: error.message })
        }
    }

}


export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await EventData.find()

        return res.json(events)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ errors: error.message })
        }
    }
}


export const getOneEvent = async (req: Request, res: Response) => {
    try {
        const findEvent = await EventData.findOne({ 
            where: { idEvent: req.params.id }, 
            // relations: ['attendees'] 
        });
        
        if(!findEvent){throw new Error("Event not found");}

        return res.status(200).json(findEvent)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ errors: error.message })
        }
    }
}


export const updateEvents = async (req: Request, res: Response) => {
    try {
        // Primero busca evento
        const findEvent = await EventData.findOne({ 
            where: { idEvent: req.params.id }
        });
        
        if(!findEvent){throw new Error("Event not found");}

        // actualiza evento
        const updateEvent = await EventData.update({idEvent: req.params.id} , req.body)

        return res.status(200).json('Event updated successfully')

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ errors: error.message })
        }
    }
}


export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const findEvent = await EventData.findOne({ 
            where: { idEvent: req.params.id }, 
            // relations: ['attendees'] 
        });
        
        if(!findEvent){throw new Error("Event not found");}

        const deleteEvent = await EventData.delete({ idEvent: req.params.id });

        return res.status(200).json('The event has been deleted')

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ errors: error.message })
        }
    }
}