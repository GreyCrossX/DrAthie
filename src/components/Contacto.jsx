import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Logo from "./Logo.astro";

const Contacto = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
  });

  const sendEmail = (data) => {
    emailjs
      .sendForm("service_3sl68hq", "template_tl0ft2f", form.current, {
        publicKey: "AaclBJOHWMOjE3xjH",
      })
      .then(
        () => {
          console.log("SUCCESS! Form info sent");
        },
        (error) => {
          console.log("SOMETHING WENT WRONG...", error.text);
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>

      <section id="Contacto" class=" top-0 z-0 h-auto w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-[#151a36]">
      <svg 

  viewBox="0 0 160 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-16 mb-10 text-center m-auto pt-10"
>
  <path d="M0 200L75 142L32 138L75 0L0 200Z" fill="currentColor" />
  <path d="M160 200L85 142L128 138L85 0L160 200Z" fill="currentColor" />

</svg>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contáctame
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            ¿Quieres preguntarme algo? ¿Necesitas una cita? Escribe un mensaje en el formulario
            debajo y nos pondremos en contacto contigo.
          </p>
          <div className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Este campo es requerido" })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Juan Pérez"
              />
              {errors.name && <span className="text-red-600">{errors.name.message}</span>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Este campo es requerido" })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="juan@greyx.dev"
              />
              {errors.email && <span className="text-red-600">{errors.email.message}</span>}
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                {...register("asunto", { required: "Este campo es requerido" })}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="¿En qué te puedo ayudar?"
              />
              {errors.asunto && <span className="text-red-600">{errors.asunto.message}</span>}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="mensaje"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Tu mensaje
              </label>
              <textarea
                id="mensaje"
                rows="6"
                {...register("mensaje", { required: "Este campo es requerido" })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Escribe tu comentario..."
              ></textarea>
              {errors.mensaje && <span className="text-red-600">{errors.mensaje.message}</span>}
            </div>
            <button
              type="submit"
              className="w-fit lg:text-lg font-medium no-underline px-5 py-3 border border-solid border-white text-white rounded-full uppercase bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Contacto;
