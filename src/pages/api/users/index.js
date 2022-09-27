import User from 'model/users';
import { dbConnect } from 'utils/db';

require('dotenv').config();

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await User.find();
        return res.status(200).json(user);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      try {
        const newUser = new User(body);
        await newUser.save();
        // eslint-disable-next-line global-require
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: 'smtpout.secureserver.net',
          port: 465,
          secure: true,
          auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
          },
        });
        const mailData = {
          from: process.env.MAILER_USER,
          to: `${req.body.email}`,
          subject: `Acceso a Coiner 2020`,
          text: `Su pasword es: ${req.body.password} | Su usuario es: ${req.body.email}`,
          html: `
          <h1>Acceso a Coiner<sup>®</sup> 2022</h1>
          <h2>24,25,26 y 27 de noviembre 2022</h2>
          <p>Estimad@:${req.body.name} ${req.body.lastName}</p>
          <p>Su usuario es: ${req.body.email} y Su pasword es: ${req.body.password} </p>
          <p>Para ingresar a la plataforma de Coiner 2022, ingrese a la siguiente dirección: <a href="https://coiner.org/congreso">https://coiner.org/congreso</a></p>
          <p>Gracias por registrarse al CONGRESO INTERNACIONAL DE ENFERMEDADES RARAS 2022</p>
          
          `,
        };
        // eslint-disable-next-line func-names
        transporter.sendMail(mailData, function (err, info) {
          // eslint-disable-next-line no-console
          if (err) console.log(err);
          // eslint-disable-next-line no-console
          else console.log(info);
        });
        // eslint-disable-next-line no-console
        console.log(req.body);
        return res.redirect('/gracias');
      } catch (error) {
        return res.redirect('/error');
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}
