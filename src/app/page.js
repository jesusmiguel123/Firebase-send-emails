'use client'

import { useFormState, useFormStatus } from "react-dom";
import emailAction from "./actions/emailAction";

export default function Home() {
  const [state, formAction] = useFormState(emailAction);
  const { pending } = useFormStatus();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className='items-center justify-itens flex flex-col' action={formAction} >
        {!pending ? <p className="border-slate-700 border rounded p-2">{state?.message}</p> : <></>}
        <fieldset className='flex flex-row gap-3'>
          <legend>De</legend>
          <div>
            Correo: <input type='email' name='email' placeholder='abc@gmail.com' />
          </div>
          <div>
            Nombre: <input type='text' name='name' placeholder='Juan' />
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <legend>Subject</legend>
            <input className="w-full" type='text' name='subject' placeholder='subject' />
        </fieldset>
        <fieldset className='w-full'>
          <legend>Mensaje</legend>
          <textarea className='w-full' name='message'></textarea>
        </fieldset>
        <button className='p-1 rounded bg-green-800 hover:bg-slate-400 text-white hover:text-slate-700' aria-disabled={pending}>Enviar</button>
      </form>
    </main>
  )
}
