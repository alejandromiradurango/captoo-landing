import { useEffect, useMemo, useState } from 'react';
import { logosKitDigital } from "../assets";
import { FeatureFour, FeatureOne, FeatureThree, FeatureTwo } from '../assets/Icons';
import { ERROR_ALERT, SUCCESS_ALERT, sendForm } from '../services';

const Feature = ({icon, text}) => (
    <div className="flex flex-col items-center gap-4">
         {icon}
        <span className="font-semibold text-violet-900 text-lg">{text}</span>
    </div>
)

const Form = () => {

    const initialState = useMemo(() => ({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        soy: ''
    }), []);

    const [fields, setFields] = useState(initialState)
    const [alert, setAlert] = useState(null);
    const [notifications, setNotifications] = useState(false)
    const [policy, setPolicy] = useState(false);

    const { nombre, apellido, email, telefono, soy } = fields;

    const handleSubmit = async event => {
        event.preventDefault();

        const result = await sendForm({
            data: fields,
            handleAlert: setAlert,
            type: 'heroForm'
        })

        console.log(result)

        setFields(initialState);
        
    }

    useEffect(() => {
        if(alert?.type === SUCCESS_ALERT){
            setFields(initialState)
        }
    }, [alert, initialState])

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name] : e.target.value
        })
    }

   

    const inputs = [
        {
            label: 'Nombre',
            id: 'nombre',
            value: nombre
        },
        {
            label: 'Apellido',
            id: 'apellido',
            value: apellido 
        },
        {
            label: 'Email',
            id: 'email',
            value: email
        },
        {
            label: 'Teléfono',
            id: 'telefono',
            value: telefono
        },
        {
            label: 'Soy',
            id: 'soy',
            value: soy,
            options: ["Empresa", "Autonomo", "Particular"]
        },
    ];

    return (
        <div className="bg-gray-700 w-full h-full py-8 px-14">
            <h2 className="text-[#00DC93] font-semibold text-center text-3xl">Escríbenos</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4" id='formulario'>
                {alert 
                  ? <span className={`py-2 px-6 font-semibold text-center rounded text-white ${alert.type === ERROR_ALERT ? 'bg-red-500' : 'bg-green-500'}  block`}>{alert.message}</span>
                  : null
                }
                {inputs.map(({ id, label, value, options}) => (
                    <div key={id}>
                        <label htmlFor={id} className="block text-white font-semibold mb-1">{label}<span className="text-red-600"> *</span></label>
                        {!options ? (
                            <input type="text" name={id} id={id} className="p-2 w-full rounded-sm" value={value} onChange={handleChange}/>
                        ) : (
                            <select className="p-3 w-full rounded-sm" id={id} name={id} defaultValue={value} onChange={handleChange}>
                                <option value="" disabled >Seleccione</option>
                                {options.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <div>
                    <input defaultChecked={policy} onChange={() => setPolicy(!policy)} type="checkbox" name="" id="politica-de-privacidad" />
                    <label htmlFor='politica-de-privacidad' className="text-white ml-2 text-sm">He leído y acepto la <a href="https://www.acelerakitdigital.com/politica-privacidad/" className="underline text-[#00DC93]">politica de privacidad</a><span className="text-red-600">*</span></label>
                </div>
                <div>
                    <input defaultChecked={notifications} onChange={() => setNotifications(!notifications)} type="checkbox" name="" id="notificaciones" />
                    <label htmlFor='notificaciones' className="text-white ml-2 text-sm">Acepto recibir otras comunicaciones de Publicidad Digital Multimedia Internacional, S.L..<span className="text-red-600">*</span></label>
                </div>
                <button type="submit" className="bg-[#00DC93] text-white font-semibold py-3 rounded-sm disabled:cursor-not-allowed disabled:brightness-75 transition-all" disabled={!(notifications && policy)}>Contacta</button>
            </form>
        </div>
    )
}

const Hero = () => {

  const features = [
    {
        icon: <FeatureOne className="w-32 h-32"/>,
        text: 'Diseño web'
    },
    {
        icon: <FeatureTwo className="w-32 h-32"/>,
        text: 'Comercio electrónico'
    },
    {
        icon: <FeatureThree className="w-32 h-32"/>,
        text: 'SEO'
    },
    {
        icon: <FeatureFour className="w-32 h-32"/>,
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
                    {features.map(({icon, text}, index) => (
                        <Feature key={index} icon={icon} text={text}/>
                    ))}
                </div>
                <img src={logosKitDigital} alt="" width={1091} height={117} />
            </div>
        </div>
        <div className="lg:w-2/6 px-6 lg:px-0">
            <Form />
        </div>
    </section>
  )
}

export default Hero