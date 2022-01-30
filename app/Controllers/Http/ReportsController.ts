import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Doctor from 'App/Models/Doctor'
import Equipment from 'App/Models/Equipment'
import Order from 'App/Models/Order'

export default class ReportsController {
	public async index ({ response }: HttpContextContract) {
		const equipments_number = await (await Equipment.all()).length

		const doctors_number = await (await Doctor.all()).length
		
		const orders_number = await (await Order.all()).length

		return response.status(200).json({
			equipments_number,
			doctors_number,
			orders_number
		})
	}
}
