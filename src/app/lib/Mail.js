import nodemailer from 'nodemailer';
import mailConfig from '../../config/mails';

export default nodemailer.createTransport(mailConfig);