import sendEmail from "../utils/sendEmail";

export default function Home() {
  async function handleSubmit(formData){
    'use server'
    const email = formData.get("email"),
          name = formData.get("name"),
          subject = formData.get("subject"),
          message = formData.get("message");
    try {
      await sendEmail(email, name, subject, message);
      console.log("Email sended successfully!");
    } catch(error){
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className='items-center flex flex-col' action={handleSubmit} >
        <fieldset className='flex flex-row gap-3'>
          <legend>De</legend>
          <div>
            Correo: <input type='email' name='email' placeholder='abc@gmail.com' />
          </div>
          <div>
            Nombre: <input type='text' name='name' placeholder='Juan' />
          </div>
        </fieldset>
        <fieldset className='flex flex-row gap-3'>
          <legend>Subject</legend>
            <input type='text' name='subject' placeholder='subject' />
        </fieldset>
        <fieldset className='w-full'>
          <legend>Mensaje</legend>
          <textarea className='w-full' name='message'></textarea>
        </fieldset>
        <button className='p-1 rounded bg-green-800 hover:bg-slate-400 text-white hover:text-slate-700'>Enviar</button>
      </form>
    </main>
  )
}
