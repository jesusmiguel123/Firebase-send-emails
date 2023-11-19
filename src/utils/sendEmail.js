import { db } from "./firebase.conf";

const mailCollection = db.collection("mail");

export default async function sendEmail(
   email, name, subject, message
){
   "use server";
   return mailCollection.add({
      from: email,
      name: name,
      to: ["jesus.yacolca17@gmail.com"],
      message: {
         subject: subject,
         html: message
      }
   })
};