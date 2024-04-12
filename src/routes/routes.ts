import { Router } from "express"
// import { deleteEvent, getEvents, getOneEvent, updateEvents } from "../controllers/admin.controller";
import { AdminController } from "../controllers/admin.controller"
import { AdminService } from "../services/admin.services"
import { TicketController } from "../controllers/ticket.controller";
import { TicketService } from "../services/ticket.service";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.services";

export class EventRoutes{
    public readonly router = Router();
    private readonly adminController: AdminController;
    private readonly ticketController: TicketController;
    private readonly userController: UserController;

    constructor(
        adminService: AdminService, 
        ticketService: TicketService, 
        userServide: UserService
    ) {
        this.adminController = new AdminController(adminService)
        this.ticketController = new TicketController(ticketService)
        this.userController = new UserController(userServide)
        this.routes();
    }

    private routes(): void {
        // CRUD para gestionar eventos
        this.router.post('/events', (req, res) => this.adminController.createEvent(req, res))
        this.router.get('/events', (req, res) => this.adminController.getEvents(req, res))
        this.router.get('/events/:id', (req, res) => this.adminController.getOneEvent(req, res))
        this.router.put('/events/:id', (req, res) => this.adminController.updateEvents(req, res))
        this.router.delete('/events/:id', (req, res) => this.adminController.deleteEvent(req, res))

        // CRUD para gestionar tickets de eventos
        this.router.post('/tickets', (req, res) => this.ticketController.createTicket(req, res))
        this.router.get('/tickets', (req, res) => this.ticketController.getTickets(req, res))
        this.router.get('/tickets/:id', (req, res) => this.ticketController.getOneTicket(req, res))
        this.router.put('/tickets/:id', (req, res) => this.ticketController.updateTicket(req, res))
        this.router.delete('/tickets/:id', (req, res) => this.ticketController.deleteTicket(req, res))
        this.router.post('/tickets/send/:id', (req, res) => this.ticketController.sendTicket(req, res))

        // CRUD para gestionar perfil ADMIN
        this.router.post('/admin', (req, res) => this.adminController.createAdmin(req, res))
        this.router.get('/admin', (req, res) => this.adminController.getAdmins(req, res))
        this.router.get('/admin/:id', (req, res) => this.adminController.getOneAdmin(req, res))
        this.router.put('/admin/:id', (req, res) => this.adminController.updateAdmin(req, res))
        this.router.delete('/admin/:id', (req, res) => this.adminController.deleteAdmin(req, res))

        // CRUD para gestionar perfil USER
        this.router.post('/user', (req, res) => this.userController.createUser(req, res))
        this.router.get('/user', (req, res) => this.userController.getUsers(req, res))
        this.router.get('/user/:id', (req, res) => this.userController.getOneUser(req, res))
        this.router.put('/user/:id', (req, res) => this.userController.updateUser(req, res))
        this.router.delete('/user/:id', (req, res) => this.userController.deleteUser(req, res))

        // CRUD para gestionar la Asistencia del evento
        this.router.post('/assistant', (req, res) => this.userController.createAssistant(req, res))
        this.router.get('/assistant', (req, res) => this.userController.getAssistants(req, res))
        this.router.get('/assistant/:id', (req, res) => this.userController.getOneAssistant(req, res))
        this.router.put('/assistant/:id', (req, res) => this.userController.updateAssistant(req, res))
        this.router.delete('/assistant/:id', (req, res) => this.userController.deleteAssistant(req, res))
    }
}
