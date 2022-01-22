import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserLoginValidator from 'App/Validators/UserLoginValidator'

export default class ManagerAuthController {
    public async login ({ request, auth }: HttpContextContract) {
        const data = await request.validate(UserLoginValidator)

        const token = await auth.use("staff").attempt(data.phone, data.password)

        const staff = await auth.use("staff").user
            
        return {token: token.token, staff}
        
    }

    public async logout ({ auth, response }: HttpContextContract) {
        
        await auth.use("staff").logout()

        return response.json({
            msg: "you have loged out"
        })
    }

    public async me ({ auth, response }: HttpContextContract) {
        let staff = await auth.use('staff').user
        
        return response.status(200).json(staff)
    }
}