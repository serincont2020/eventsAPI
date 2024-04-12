import { Repository } from "typeorm";
import { EventData } from "../entities/Event.entiti";
import { TicketData } from "../entities/Tickets.entiti";
import { AdminData } from "../entities/Admin.entiti";
import { AssistantData } from "../entities/Assistant.entiti";

export class AdminService {
    constructor(){}

    // TODO: pendiente implementar interfaz de CRUD


    // Gestion de Admin
    async createAdmin(dataAdmin:any){
        try {
            const data = dataAdmin.body
    
            const { firstame, lastname, email, password, rol } = dataAdmin.body
    
            const admin = new AdminData()

            admin.firstame = firstame
            admin.lastname = lastname
            admin.email = email
            admin.password = password
            admin.rol = rol
    
            const saveAdmin = await admin.save()
    
            return admin
    
        } catch (error) {
            throw new Error(JSON.stringify(error))
        }
    }

    async getAdmins() {
        try {
            console.log(' prueba admin');
            
            const admins = await AdminData.find()
            if(!admins){throw new Error("Admins not found");}
            return admins
        } catch (error) {
            console.log(error, '   error');
            
            throw new Error("error")
        }
    }

    async getOneAdmin(id: string){
        try {
            const findAdmin = await AdminData.findOne({ 
                where: { idAdmin: id }, 
                // relations: ['attendees'] 
            });
            
            if(!findAdmin){throw new Error("Admin not found");}
            return findAdmin
    
        } catch (error) {
            throw new Error("error")
        }
    }


    async updateAdmin(id:any, data:any) {
        try {
            // Primero busca admin
            const findAdmin = await AdminData.findOne({ 
                where: { idAdmin: id }
            });
            
            if(!findAdmin){throw new Error("Admin not found");}
    
            // actualiza admin
            const updateAdmin = await AdminData.update({idAdmin: id} , data)
    
            return 'Admin updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }


    async deleteAdmin(id: any){
        try {
            const findAdmin = await AdminData.findOne({ 
                where: { idAdmin: id }, 
                // relations: ['attendees'] 
            });
            
            if(!findAdmin){throw new Error("Admin not found");}
    
            const deleteAdmin = await AdminData.delete({ idAdmin: id });
    
            return 'The admin has been deleted'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }




    // Gestion de eventos por ADMIN

    async createEvent(dataEvent:any){
        try {
            console.log(dataEvent.body, ' req.body');
            const data = dataEvent.body
    
            const { eventInfo, latitude, longitude, sitesInterest, idTicket, idAssistant, idAdmin } = data
            // const { ticketAvailable, ticketPrice } = data

            const event:any = new EventData()
            const ticket = new TicketData()
            const asist:any = new AssistantData()
    
            event.eventInfo = eventInfo
            event.latitude = latitude
            event.longitude = longitude
            event.sitesInterest = sitesInterest
            event.idTicket = idTicket
            
            // Se genera nuevo evento
            const saveEvent = await event.save()
            
            // Actualiza registro de Assistant con idEvent
            const findAssistant: any = await AssistantData.findOne({ 
                where: { idAssistant: idAssistant }
            })
            findAssistant.idEvent = saveEvent.idEvent
            const saveAssistant = await findAssistant.save()
    

            // Actualiza registro de Admin con idEvent
            const findAdmin: any = await AdminData.findOne({ 
                where: { idAdmin: idAdmin }
            })
            findAdmin.idEvent = saveEvent.idEvent
            const saveAdmin = await findAdmin.save()


            
    
            return event
    
        } catch (error) {
            console.log(error);
            
            throw new Error(JSON.stringify(error))
        }
    }

    async getEvents() {
        try {
            const events = await EventData.find({
                relations: ['idTicket', 'idAssistant'] 
            })
            if(!events){throw new Error("Events not found");}
            return events
        } catch (error) {
            throw new Error("error")
        }
    }

    async getOneEvent(id: string){
        try {
            const findEvent = await EventData.findOne({ 
                where: { idEvent: id }, 
                relations: ['idTicket', 'idAssistant'] 
            });
            
            if(!findEvent){throw new Error("Event not found");}
            return findEvent
    
        } catch (error) {
            throw new Error("error")
        }
    }


    async updateEvents(id:any, data:any) {
        try {
            // Primero busca evento
            const findEvent = await EventData.findOne({ 
                where: { idEvent: id }
            });
            
            if(!findEvent){throw new Error("Event not found");}
    
            // actualiza evento
            const updateEvent = await EventData.update({idEvent: id} , data)
    
            return 'Event updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }


    async deleteEvent(id: any){
        try {
            const findEvent = await EventData.findOne({ 
                where: { idEvent: id }, 
                // relations: ['attendees'] 
            });
            
            if(!findEvent){throw new Error("Event not found");}
    
            const deleteEvent = await EventData.delete({ idEvent: id });
    
            return 'The event has been deleted'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }
}