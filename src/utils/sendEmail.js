import { db } from "./firebase.conf";

const mailCollection = db.collection("mail");

export default async function sendEmail(
   email, name, subject, message
){
   "use server";
   return mailCollection.add({
      to: ["jesus.yacolca17@gmail.com"],
      name: name,
      from: email,
      message: {
         subject: subject,
         html: message
      }
   })
};