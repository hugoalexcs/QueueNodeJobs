import Queue from '../lib/Queue';

export default {
    async store (req, res) {
        const { name, email, password } = req.body;
        
        const user = {
            name,
            email, 
            password
        }

        // Adicionar Job RegistrationMal na fila
        await Queue.add('RegistrationMail',{ user });

        //Job UserReport
        await Queue.add('UserReport', { user });
     
        return res.json(user);
    }

}