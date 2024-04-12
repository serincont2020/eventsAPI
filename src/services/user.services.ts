import { UserData } from "../entities/User.entiti";
import { AssistantData } from "../entities/Assistant.entiti";

export class UserService {
    constructor(){}

    // TODO: pendiente implementar interfaz de CRUD

    async createUser(dataUser:any){
        try {
            console.log(dataUser.body, ' req.body');
            const data = dataUser.body
    
            const { firstame, lastname, email, password, rol } = dataUser.body
    
            const user = new UserData()
    
            user.firstame = firstame
            user.lastname = lastname
            user.email = email
            user.password = password
            user.rol = rol
    
            const saveUser = await user.save()
    
            return user
    
        } catch (error) {
            throw new Error("error")
        }
    }

    async getUsers() {
        try {
            const users = await UserData.find()
            if(!users){throw new Error("Users not found");}
            return users
        } catch (error) {
            throw new Error("error")
        }
    }

    async getOneUser(id: string){
        try {
            const findUser = await UserData.findOne({ 
                where: { idUser: id }
            });
            
            if(!findUser){throw new Error("User not found");}
            return findUser
    
        } catch (error) {
            throw new Error("error")
        }
    }

    async updateUser(id:any, data:any) {
        try {
            // Primero busca usuario
            const findUser = await UserData.findOne({ 
                where: { idUser: id }
            });
            
            if(!findUser){throw new Error("User not found");}
    
            // actualiza user
            const updateUser = await UserData.update({idUser: id} , data)
    
            return 'User updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }

    async deleteUser(id: any){
        try {
            const findUser = await UserData.findOne({ 
                where: { idUser: id }, 
                // relations: ['attendees'] 
            });
            
            if(!findUser){throw new Error("User not found");}
    
            const deleteUser = await UserData.delete({ idUser: id });
    
            return 'The user has been deleted'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }


    // Generar registro de asistencia
    async createAssistant(dataAssistant:any){
        try {
            console.log(dataAssistant, ' req.body');
            const data = dataAssistant
    
            const { assistant, day } = dataAssistant
    
            const asist = new AssistantData()
    
            asist.assistant = assistant
            asist.day = day
    
            console.log(asist, ' cuerpo de asist');
            
            const saveAssistant = await asist.save()
    
            return asist
    
        } catch (error) {
            throw new Error(JSON.stringify(error))
        }
    }

    async getAssistants() {
        try {
            const asist = await AssistantData.find()
            if(!asist){throw new Error("Assistants not found");}
            return asist
        } catch (error) {
            throw new Error("error")
        }
    }

    async getOneAssistant(id: string){
        try {
            const findAssistant = await AssistantData.findOne({ 
                where: { idAssistant: id }
            });
            
            if(!findAssistant){throw new Error("Assistant not found");}
            return findAssistant
    
        } catch (error) {
            throw new Error("error")
        }
    }

    async updateAssistant(id:any, data:any) {
        try {
            // Primero busca usuario
            const findAssistant= await AssistantData.findOne({ 
                where: { idAssistant: id }
            });
            
            if(!findAssistant){throw new Error("Assistant not found");}
    
            // actualiza Assistant
            const updateAssistant = await AssistantData.update({idAssistant: id} , data)
    
            return 'Assistant updated successfully'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }

    async deleteAssistant(id: any){
        try {
            const findAssistant = await AssistantData.findOne({ 
                where: { idAssistant: id },
            });
            
            if(!findAssistant){throw new Error("Assistant not found");}
    
            const deleteAssistant = await AssistantData.delete({ idAssistant: id });
    
            return 'The Assistant has been deleted'
    
        } catch (error) {
            if (error instanceof Error) {
                throw new Error("error")
            }
        }
    }
}