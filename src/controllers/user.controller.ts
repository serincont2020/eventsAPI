import { Request, Response } from "express";
import { UserService } from "../services/user.services";


export class UserController {
    private readonly userService: UserService

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async createUser(req: Request, res: Response){
        try {
            const body = req
            const newUser =  await this.userService.createUser(body)
            res.status(200).status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el user" });
        }
    }

    async getUsers(req: Request, res: Response){
        try {
            const users = await this.userService.getUsers()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar users" });
        }
    }

    async getOneUser(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const user = await this.userService.getOneUser(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar user" });
        }
    }

    async updateUser(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateUser = await this.userService.updateUser(id, data) 

            return res.status(200).json('User updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }

    async deleteUser(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const deleteUser = await this.userService.deleteUser(id);
    
            return res.status(200).json('The user has been deleted')
    
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }


    // Gestiona Asistencia
    async createAssistant(req: Request, res: Response){
        try {
            console.log(req.body, ' req assisntat');
            
            const body = req.body
            const newAssistant =  await this.userService.createAssistant(body)
            res.status(200).status(201).json(newAssistant)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el assistant" });
        }
    }

    async getAssistants(req: Request, res: Response){
        try {
            const assistant = await this.userService.getAssistants()
            res.status(200).json(assistant)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar users" });
        }
    }

    async getOneAssistant(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const assistant = await this.userService.getOneAssistant(id)
            res.status(200).json(assistant)
        } catch (error) {
            res.status(500).json({ message: "Error al retornar user" });
        }
    }

    async updateAssistant(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const data = req.body
            
            const updateAssistant = await this.userService.updateAssistant(id, data) 

            return res.status(200).json('Assistant updated successfully')

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }

    async deleteAssistant(req: Request, res: Response){
        try {
            const id:any = req.params.id
            const deleteAssistant = await this.userService.deleteAssistant(id);
    
            return res.status(200).json('The Assistant has been deleted')
    
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ errors: error.message })
            }
        }
    }

}
