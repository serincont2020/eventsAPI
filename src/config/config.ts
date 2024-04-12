import * as dotenv from 'dotenv'

export abstract class ConfigServer {
    constructor(){
        const nodeName = this.creatPathEnv(this.nodeEnv)
    }

    public getEnvironment(k: string){
        return process.env[k]
    }

    public getNumber(k: string): number {
        return Number(this.getEnvironment)
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || ""
    }

    public creatPathEnv(path: string) : string {
        const arrEnv = ['env']
        if(path.length>0){
            const stringToArray = path.split(".")
            arrEnv.unshift(...stringToArray)
        }
        return '.' + arrEnv.join('.')
    }
}