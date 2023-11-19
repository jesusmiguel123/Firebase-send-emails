'use server'

import sendEmail from "@/utils/sendEmail";

export default async function emailAction(prevState, formData){
   const email = formData.get("email"),
         name = formData.get("name"),
         subject = formData.get("subject"),
         message = formData.get("message");
   try {
     await sendEmail(email, name, subject, message);
     return { message: "Email sended successfully!" };
   } catch(error){
     return { message: error };
   }
 }