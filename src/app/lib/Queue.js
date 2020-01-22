import Queue from 'bull';
import redisConfig from '../../config/redis';

import * as jobs from '../jobs';
//Transforma os jobs em um array

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options
  }))

export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(q => q.name === name);
        return queue.bull.add(data, queue.options);
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log('JOB Fail ', queue.key, job.data);
                console.log(err);
            } );
        })
    }
}
/* import RegistrationMail from '../jobs/RegistrationMail';


const mailQueue = new Queue(RegistrationMail.key, redisConfig);

mailQueue.on('failed', (job, err) => {
    console.log('JOB Fail ', job.name, job.data);
    console.log(err);
} );

export default mailQueue; */
