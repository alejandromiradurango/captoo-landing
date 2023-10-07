import { useMemo, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IconCaptto } from '../assets/Icons'
import { ERROR_ALERT, SUCCESS_ALERT, sendForm } from '../services'
import { useEffect } from 'react'

const Contact = () => {
  const [showWidget, setShowWidget] = useState(false)

  const handleClick = () => setShowWidget(prevState => !prevState)

  return (
    <div className='fixed bottom-2 right-2'>
        {showWidget 
          ? <Widget handleClick={handleClick}/>
          : <button className='text-white px-4 py-2 bg-[#00DC93] rounded-full' onClick={handleClick}>
                Quiero que me llamen
            </button>
        }
    </div>
  )
}

const Widget = ({ handleClick }) => {

    const initialState = useMemo(() => ({
            tel: '',
            nombre: '',
            apellido: ''
    }), [])

    const [fields, setFields] = useState(initialState)

    const [alert, setAlert] = useState(false)

    const { tel, nombre, apellido } = fields

    const handleSubmit = async event => {
        event.preventDefault();

        const result = await sendForm({
            data: fields,
            handleAlert: setAlert,
            type: 'widget'
        })

        console.log(result)
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
            id: 1,
            label: 'Teléfono',
            name: 'tel',
            value: tel
        },
        {
            id: 2,
            label: 'Nombre',
            name: 'nombre',
            value: nombre
        },
        {
            id: 3,
            label: 'Apellido',
            name: 'apellido',
            value: apellido
        }
    ];

    return (
        <div className='bg-white mb-4 rounded-md overflow-hidden shadow-2xl w-[90%] mx-auto lg:w-auto'>
            <header className='p-5 flex items-center flex-col justify-center relative bg-gray-10 bg-gradient-to-t to-violet-100 from-violet-300'>
                <AiOutlineClose onClick={handleClick} className='absolute top-5 right-5 scale-125'/>
                <IconCaptto className="w-32" />
                <h5 className='font-semibold'>Solicita tu kit digital de 12.000&euro; ahora</h5>
            </header>
            {/* <pre>{JSON.stringify(fields, 0, 2)}</pre> */}
            <form onSubmit={handleSubmit}>
                <h6 className='p-4 border-b text-center lg:text-left'>Dejanos tu teléfono y te llamaremos en unos minutos</h6>
                <div className='max-w-sm mx-auto flex flex-col gap-3 p-4 [&>label>input]:w-full [&>label>input]:border [&>label>input]:rounded-full [&>label>input]:p-3 py-6'>
                    {alert 
                    ? <span className={`py-2 px-6 font-semibold text-center rounded text-white ${alert.type === ERROR_ALERT ? 'bg-red-500' : 'bg-green-500'}  block`}>{alert.message}</span>
                    : null
                    }
                    {inputs.map(({ id, label, name, value }) => (
                        <label htmlFor={name} key={id}>
                            <input type="text" id={name} name={name} placeholder={label} onChange={handleChange} value={value}/>
                        </label>
                    ))}
                    <input className='w-full rounded-full text-white bg-green-600 p-3 hover:bg-green-700 transition-all cursor-pointer' type="submit" value="Quiero que me llamen" />
                </div>
            </form>
    
        </div>
    )
}

export default Contact