import { Request, Response } from "express";


export class EventController {

    getEvents(req: Request, res: Response){
        console.log('Hello WORD!!!');
        res.status(200).json({
            user: 'Sebastian Rincon'
        })
    }
}