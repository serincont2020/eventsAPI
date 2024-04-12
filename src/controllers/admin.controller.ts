import { Request, Response } from "express";
import { EventData } from "../entities/Event.entiti";
import { TicketData } from "../entities/Tickets.entiti";
import { AdminService } from "../services/admin.services";


export class AdminController {
    private readonly adminService: AdminService;

    constructor(adminService: AdminService) {
        this.adminService = adminService;
    }

    // Gestion de perfil ADMIN
    async createAdmin(req: Request, res: Response){
        try {
            const body = req
            const newAdmin =  await this.adminService.createAdmin(body)
            res.status(200).status(201).json(newAdmin)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el admin" });
        }
    }

    async getAdmins(req: Request, res: Response){
        try {
            const admin = await this.adminService.getAdmins()
            res.status(200).json(admin)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar admin" });
        }
    }

    async getOneAdmin(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const admin = await this.adminService.getOneAdmin(id)
            res.status(200).json(admin)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar admin" });
        }
    }

    async updateAdmin(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateAdmin = await this.adminService.updateAdmin(id, data) 

            return res.status(200).json('Admin updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }


    async deleteAdmin(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const deleteAdmin = await this.adminService.deleteAdmin(id);
    
            return res.status(200).json('The admin has been deleted')
    
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }



    // Gestion de EVENTOS por perfil ADMIN
    async createEvent(req: Request, res: Response){
        try {
            const body = req
            const newEvent =  await this.adminService.createEvent(body)
            res.status(200).status(201).json(newEvent)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el evento" });
        }
    }

    async getEvents(req: Request, res: Response){
        try {
            const events = await this.adminService.getEvents()
            res.status(200).json(events)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar eventos" });
        }
    }

    async getOneEvent(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const events = await this.adminService.getOneEvent(id)
            res.status(200).json(events)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar evento" });
        }
    }

    async updateEvents(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateEvent = await this.adminService.updateEvents(id, data) 

            return res.status(200).json('Event updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }


    async deleteEvent(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const deleteEvent = await this.adminService.deleteEvent(id);
    
            return res.status(200).json('The event has been deleted')
    
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }
}
