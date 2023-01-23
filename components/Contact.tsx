import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:ti.gabriel@gmail.com?subject=${data.subject}&body=Oi, meu nome é ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center z-50">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl border-line-projects">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Eu tenho exatamente o que você precisa.{" "}
          <span className="about-gradient">Vamos conversar.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#7F5AF0] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#7F5AF0] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7F5AF0] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto z-50"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nome"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Assunto"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Mensagem"
            className="contactInput"
          />
          <button
            className="bg-[#7F5AF0] py-5 px-10 rounded-md text-white font-bold  text-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
