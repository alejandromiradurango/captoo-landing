import { logosKitDigital } from "../assets";
import { FeatureFour, FeatureOne, FeatureThree, FeatureTwo } from '../assets/Icons';

const Feature = ({img, text}) => (
    <div className="flex flex-col items-center gap-4">
         {img}
        <span className="font-semibold text-violet-900 text-lg">{text}</span>
    </div>
)

const Form = () => {

    const inputs = [
        {
            label: 'Nombre',
            id: 'nombre'
        },
        {
            label: 'Apellido',
            id: 'apellido'
        },
        {
            label: 'Email',
            id: 'email'
        },
        {
            label: 'Teléfono',
            id: 'telefono'
        },
        {
            label: 'Soy',
            id: 'soy',
            options: ["Empresa", "Autonomo", "Particular"]
        },
    ];

    return (
        <div className="bg-gray-700 w-full h-full py-8 px-14">
            <h2 className="text-[#00DC93] font-semibold text-center text-3xl">Escríbenos</h2>
            <form action="" className="flex flex-col gap-4 my-4" id='formulario'>
                {inputs.map((input, index) => (
                    <div key={index} className="">
                        <label htmlFor={input.id} className="block text-white font-semibold mb-1">{input.label}<span className="text-red-600"> *</span></label>
                        {!input.options ? (
                            <input type="text" id={input.id} className="p-2 w-full rounded-sm"/>
                        ) : (
                            <select className="p-3 w-full rounded-sm" id={input.id}>
                                <option value="" disabled selected>Seleccione</option>
                                {input.options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <div>
                    <input type="checkbox" name="" id="politica-de-privacidad" />
                    <label htmlFor='politica-de-privacidad' className="text-white ml-2 text-sm">He leído y acepto la <a href="https://www.acelerakitdigital.com/politica-privacidad/" className="underline text-[#00DC93]">politica de privacidad</a><span className="text-red-600">*</span></label>
                </div>
                <div>
                    <input type="checkbox" name="" id="notificaciones" />
                    <label htmlFor='notificaciones' className="text-white ml-2 text-sm">Acepto recibir otras comunicaciones de Publicidad Digital Multimedia Internacional, S.L..<span className="text-red-600">*</span></label>
                </div>
                <button type="submit" className="bg-[#00DC93] text-white font-semibold py-3 rounded-sm">Contacta</button>
            </form>
        </div>
    )
}

const Hero = () => {

  const features = [
    {
        img: <FeatureOne className="w-32 h-32"/>,
        text: 'Diseño web'
    },
    {
        img: <FeatureTwo className="w-32 h-32"/>,
        text: 'Comercio electrónico'
    },
    {
        img: <FeatureThree className="w-32 h-32"/>,
        text: 'SEO'
    },
    {
        img: <FeatureFour className="w-32 h-32"/>,
        text: 'Redes sociales'
    },
  ];

  return (
    <section className="container flex flex-col lg:flex-row mt-6 lg:mt-12 lg:mb-24">
        <div className="lg:w-4/6 lg:h-96 mb-12 lg:mb-0 px-6 lg:px-0 flex flex-col gap-12 2xl:gap-48" id="soluciones">
            <div>
                <p className="mb-8 lg:text-xl">SOMOS UNA <b className="font-semibold">AGENCIA DE MARKETING</b> CON MÁS DE 15 AÑOS DE EXPERIENCIA</p>
                <h1 className="text-3xl lg:text-5xl 2xl:text-6xl mb-6">Nos ocupamos de tramitar tu <b className="font-semibold">kit digital</b> de hasta <b className="font-semibold">12.000€.</b></h1>
                <p className="text-lg">Ponte en contacto con nosotros y cuéntanos en qué servicios estás interesado.</p>
            </div>
            <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-4 my-8 gap-y-8 lg:gap-y-0">
                    {features.map(({img, text}, index) => (
                        <Feature key={index} img={img} text={text}/>
                    ))}
                </div>
                <img src={logosKitDigital} alt="" />
            </div>
        </div>
        <div className="lg:w-2/6 px-6 lg:px-0">
            <Form />
        </div>
    </section>
  )
}

export default Hero