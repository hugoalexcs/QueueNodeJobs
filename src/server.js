import 'dotenv/config';//configura e disponibiliza todas as variaveis do arquivo .env
import express from 'express';
import UserController from './app/controllers/userControllers';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';
//dotenv.config({ path: '../config.env' });

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull)); //Retorna apenas o queue bull
app.use(express.json()); //Para api entender que a requisção está sendo enviad no formato de JSON

app.post('/users', UserController.store);
app.use('/admin/queues', BullBoard.UI);

app.listen(3333, () => {
    console.log('Start com sucesso! port 3333')
})