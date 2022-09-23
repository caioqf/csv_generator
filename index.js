import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import { faker } from '@faker-js/faker'

let header = `ID;NOME_DESTINATARIO;EMAIL_DESTINATARIO;TELEFONE_DESTINATARIO;ASSUNTO;DATA_EMAIL_ENVIO;DATA_EMAIL_ENTREGA;DATA_EMAIL_ABERTURA;DATA_SMS_ENVIO;DATA_SMS_ABERTURA;SMS_STATUS;EMAIL_STATUS;WHATSAPP_STATUS;LINK_EXTERNO\n`

for (let i = 1; i < 100000; i++) {
  let newLine = `${uuidv4()};${faker.name.fullName()};${faker.internet.email()};99839999999;AFFIANCE LIFE - NOTIFICAÇÃO DE CANCELAMENTO;;;;20/01/2022 18:24:16;;${faker.helpers.arrayElement(['Falha', 'Enviado'])};Falha - Email Inválido;;https://portal.ar-email.com.br/emails/info/public/ea5d8d47-9a64-4a4d-bc94-06cd228bdb29\n`
  header += newLine
}

await fs.writeFile('TESTE_CARGA-01.csv', header)