import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='h-[66.5vh] flex flex-col items-center justify-center space-y-4'>
        <h1 className='text-4xl font-bold text-[#00DC93]'>Gracias por contactar con nosotros</h1>
        <p className='text-xl'>Nos pondremos en contacto a la mayor brevedad posible</p>
        <Link className='bg-[#00DC93] text-white rounded-md py-2 px-6' to='/'>Volver al inicio</Link>
    </div>
  )
}

export default Thanks