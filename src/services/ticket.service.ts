import { TicketData } from "../entities/Tickets.entiti";
import { UserData } from "../entities/User.entiti";

export class TicketService {
    constructor(){}

    // TODO: pendiente implementar interfaz de CRUD

    async createTicket(dataTicket:any){
        try {
            console.log(dataTicket.body, ' req.body');
            const data = dataTicket.body
    
            const { ticketPrice, ticketAvailable, ticketSold } = dataTicket.body
    
            const ticket = new TicketData()
    
            ticket.ticketAvailable = ticketAvailable
            ticket.ticketPrice = ticketPrice
            ticket.ticketSold = ticketSold

            const saveTicket = await ticket.save()
    
            return ticket
    
        } catch (error) {
            throw new Error("error")
        }
    }

    async getTickets() {
        try {
            const tickets = await TicketData.find()
            if(!tickets){throw new Error("Tickets not found");}
            return tickets
        } catch (error) {
            throw new Error("error")
        }
    }

    async getOneTicket(id: string){
        try {
            const findTicket = await TicketData.findOne({ 
                where: { idTicket: id }, 
                relations: ['idEvent'] 
            });
            
            if(!findTicket){throw new Error("Ticket not found");}
            return findTicket
    
        } catch (error) {
            throw new Error("error")
        }
    }


    async updateTicket(id:any, data:any) {
        try {
            // Primero busca ticket
            const findTicket = await TicketData.findOne({ 
                where: { idTicket: id }
            });
            
            if(!findTicket){throw new Error("Ticket not found");}
    
            // actualiza ticket
            const updateTicket = await TicketData.update({idTicket: id} , data)
    
            return 'Ticket updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }

    async sendTicket(id:any, data:any) {
        try {
            // Primero busca ticket
            const findTicket = await TicketData.findOne({ 
                where: { idTicket: id }
            });

            console.log(findTicket,' findTicket send');
            
            
            if(!findTicket){throw new Error("Ticket not found");}
    
            if(findTicket.ticketAvailable === 0){
                throw new Error("Ticket not available")
            }

            findTicket.ticketAvailable -= 1;
            findTicket.ticketSold += 1;

            // actualiza ticket
            const updateUserTicket = await findTicket.save()//await TicketData.update({idTicket: id} , data)

            // Actualiza registro de Assistant con idEvent
            const findUser: any = await UserData.findOne({ 
                where: { idUser: data.idUser }
            })
            findUser.idEvent = data.idEvent
            findUser.idTicket = id
            const saveAssistant = await findUser.save()

    
            return 'Ticket updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }


    async deleteTicket(id: any){
        try {
            const findTicket = await TicketData.findOne({ 
                where: { idTicket: id }, 
                // relations: ['attendees'] 
            });
            
            if(!findTicket){throw new Error("EveTicketnt not found");}
    
            const deleteTicket = await TicketData.delete({ idTicket: id });
    
            return 'The ticket has been deleted'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }
}