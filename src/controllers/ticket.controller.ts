import { Request, Response } from "express";
import { EventData } from "../entities/Event.entiti";
import { TicketData } from "../entities/Tickets.entiti";
import { TicketService } from "../services/ticket.service";


export class TicketController {
    private readonly ticketService: TicketService;

    constructor(ticketService: TicketService) {
        this.ticketService = ticketService;
    }

    async createTicket(req: Request, res: Response){
        try {
            const body = req
            const newTicket =  await this.ticketService.createTicket(body)
            res.status(200).status(201).json(newTicket)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el ticket" });
        }
    }

    async getTickets(req: Request, res: Response){
        try {
            const tickets = await this.ticketService.getTickets()
            res.status(200).json(tickets)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar tickets" });
        }
    }

    async getOneTicket(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const tickets = await this.ticketService.getOneTicket(id)
            res.status(200).json(tickets)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar ticket" });
        }
    }

    async updateTicket(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateTicket = await this.ticketService.updateTicket(id, data) 

            return res.status(200).json('Ticket updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }

    async deleteTicket(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const deleteTicket = await this.ticketService.deleteTicket(id);
    
            return res.status(200).json('The ticket has been deleted')
    
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }

    async sendTicket(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateTicket = await this.ticketService.sendTicket(id, data) 

            return res.status(200).json('Ticket updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }
}
