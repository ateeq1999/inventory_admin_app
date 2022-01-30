import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
// import Admin from 'App/Models/Admin'
import Manager from 'App/Models/Manager'

export default class AdminSeeder extends BaseSeeder {
  public async run () {
    // const admin = await Admin.create({
    //   email: 'admin@admin.com',
    //   password: 'password'
    // })

    // await admin.save()

    const manager = await Manager.create({
      email: 'manager@app.com',
      password: 'password',
      is_active: true,
      name: 'Manager User'
    })

    await manager.save()
  }
}
