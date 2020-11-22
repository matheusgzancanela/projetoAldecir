const mailer = require('nodemailer')

const config = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1d75c8d9dfddb7",
        pass: "eb31b5b66cdeea"
    }
}

const transporter = mailer.createTransport(config)

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const send = async(req, res) => {
        const email = {...req.body }

        try {
            existsOrError(email.email, "Email não declarado")
            existsOrError(email.subject, "Sujeito do email não declarado")
            existsOrError(email.text, "Caixa de texto vazia")

            transporter.sendMail({
                from: email.email,
                to: "522cc64514-640040@inbox.mailtrap.io",
                subject: email.subject,
                text: email.text
            })
        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    return { send }
}