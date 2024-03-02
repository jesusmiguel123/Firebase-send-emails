import { db } from "./firebase.conf";

const mailCollection = db.collection("mail");

export default async function sendEmail(
   email, name, subject, message
){
   "use server";
   return mailCollection.add({
      from: email,
      name: name,
      to: [email],
      message: {
         subject: subject,
         html: message
      }
   })
};