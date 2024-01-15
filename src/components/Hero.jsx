import { useState } from "react";
import { logosKitDigital } from "../assets";
import {
  FeatureFour,
  FeatureOne,
  FeatureThree,
  FeatureTwo,
} from "../assets/Icons";
import HubSpotForm from 'react-hubspot-form';
import { useNavigate } from 'react-router-dom';

const Feature = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-4">
    {icon}
    <span className="font-semibold text-violet-900 text-lg">{text}</span>
  </div>
);

const Form = () => {
  const navigate = useNavigate()

  const [phone, setPhone] = useState('')
  const [formSended, setFormSended] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
        telefono: phone
    }

    const response = await fetch('https://eo3kdq0qabeo5sb.m.pipedream.net', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    // toast.success('Nos comunicaremos en un momento. Gracias!')
    navigate('gracias')

    setPhone('')
    setFormSended(true)
    
    const result = await response.json();

    console.log(result)
  };

  return (
    <div className="[grid-area:form] relative lg:top-[-160px]">
      <div className={`${formSended ? 'hidden' : 'block'}`}>
        <div className='flex flex-col items-center gap-2 py-4 bg-[#00DC93] text-white'>
          <h1 className="text-2xl font-medium">Llámanos gratis</h1>
          <a className="text-3xl font-semibold text-purple-700 hover:underline" href="tel:910889029">91 088 90 29</a>
        </div>
        <div className="py-4 bg-purple-800 text-white flex flex-col items-center">
          <h2 className="text-2xl mb-4">Te llamamos <strong>GRATIS</strong></h2>
          <form className="w-8/12 mx-auto text-black flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" className="w-full rounded-full p-2" name="telefono" placeholder="Teléfono" value={phone} required onChange={e => setPhone(e.target.value)}/>
              <label htmlFor="" className="text-white">
                  <input type="checkbox" name="acceptPolicy" id="" required/> Acepta la politica de privacidad para que te podamos llamar
              </label>
              <button type="submit" className="py-3 w-full rounded-full bg-[#00dc93] text-white">Solicitar llamada</button>
          </form>
        </div>
      </div>
      <div className={`bg-gray-700 w-full h-auto py-4 ${!formSended ? 'pl-12' : 'px-8 py-20'}`}>
        {formSended 
          ? <>
              <h2 className="text-[#00DC93] font-semibold text-center text-3xl mb-3">Gracias por contactar con nosotros</h2>
              <p className='text-white text-center'>Nos pondremos en contacto a la mayor brevedad posible</p>
            </>
          : null
        }
        <div className={`${formSended ? 'hidden' : 'block'}`}>
          <h2 className="text-[#00DC93] font-semibold text-center text-3xl mb-3">
            Escríbenos
          </h2>  
          <div className="w-full bg-gray">
              <HubSpotForm
                  region='eu1'
                  portalId='25596625'
                  formId='f2b750db-38ea-4336-98fc-90380b7bacf2'
              />
          </div>
        </div>

      </div>
    </div>
  );
};

const Hero = () => {
  const features = [
    {
      icon: <FeatureOne className="w-32 h-32" />,
      text: "Diseño web",
    },
    {
      icon: <FeatureTwo className="w-32 h-32" />,
      text: "Comercio electrónico",
    },
    {
      icon: <FeatureThree className="w-32 h-32" />,
      text: "SEO",
    },
    {
      icon: <FeatureFour className="w-32 h-32" />,
      text: "Redes sociales",
    },
  ];

  return (
    <section className="container mt-6 lg:mt-12 px-6 lg:-mb-24" id="soluciones">
      <div className="[grid-area:text]">
        <p className="mb-8 lg:text-xl">
          MÁS DE 15 AÑOS DIGITALIZANDO EL SECTOR DE LAS PYMES
        </p>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl mb-6">
          <b className="font-semibold">Kit digital</b> para autonómos y pymes con una subvención de hasta{" "}
          <b className="font-semibold">12.000€.</b>
        </h1>
      </div>
      <div className='[grid-area:features] relative lg:top-[-100px]'>
        <div className='text-2xl'>
          <h2 className='text-purple-800 font-semibold'>Promoción Enero</h2>
          <p>1 mes GRATIS del servicio contratado</p>
          <p>Tramitación por <span className='line-through'>120 euros</span> <span className='text-4xl font-bold text-[#00DC93]'>0 euros</span></p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 my-8 gap-y-8 lg:gap-y-0">
        {features.map(({ icon, text }, index) => (
          <Feature key={index} icon={icon} text={text} />
        ))}
        </div>
      </div>
      <img
        className="[grid-area:image] relative lg:top-[-370px] 2xl:top-[-250px]"
        src={logosKitDigital}
        alt=""
        width={1091}
        height={117}
      />
      <Form />
    </section>
  );
};

export default Hero;
