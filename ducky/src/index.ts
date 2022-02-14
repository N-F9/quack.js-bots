import 'dotenv/config'
import { QuackJS, QuackJSUtils } from '@n-f9/quack.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { DataTypes } from 'sequelize'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const Quack = new QuackJS(process.env.TOKEN as string, {
	backups: [
		{
			file: 'database.sqlite',
			scheduling: '0 0 23 * * *',
		},
	],
	logsFolder: true,
})

const Users = Quack.sequelize?.define('User', {
	discord: DataTypes.STRING,
	ducks: DataTypes.NUMBER,
	points: DataTypes.NUMBER,
	factories: DataTypes.JSON,
	cooldowns: DataTypes.JSON,
})

if (Users) Quack.AddModel('user', Users)

const files = QuackJSUtils.GetFiles('./out/modules')

const getModules = async () => {
	for (const file of files) {
		const execute = (await import(path.join(__dirname, '../', file))).default
		await execute(Quack)
	}
}

await getModules()
await Quack.Start(Quack)
