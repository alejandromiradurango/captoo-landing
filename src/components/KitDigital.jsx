import {BiCheckCircle} from 'react-icons/bi'

const KitDigital = () => {
  
  const requirements = [
    " Ser pequeña empresa, microempresa o persona en situación de autoempleo de conformidad con las definiciones del Anexo I del Reglamento (UE) n.º 651/2014. ", 
    " No tener la consideración de empresa en crisis conforme a lo dispuesto en el artículo 2.18 del citado reglamento. ", 
    "Estar al corriente de pagos de las obligaciones tributarias y con la Seguridad Social.", 
    " No estar incurso en ninguna otra de las prohibiciones previstas en la Ley General de Subvenciones. ", 
    " Estar inscrito en el Censo de empresarios, profesionales y retenedores de la Agencia Estatal de Administración Tributaria o en el censo equivalente de la Administración Tributaria Foral. ", 
    " No estar sujeto a una orden de recuperación pendiente tras una decisión previa de la Comisión Europea. ", 
    " No superar el límite de ayudas de mínimos (de pequeña cuantía). ", 
  ]
  
    return (
    <section className="my-12">
        <div>
            <h1 className="font-semibold text-4xl text-violet-900 text-center py-10">¿Conoces el kit digital?</h1>
            <p className="max-w-4xl mx-auto text-center text-gray-500">Es un programa de ayudas que pone a disposición el Ministerio de Asuntos Económicos y Transformación Digital cuyo objetivo es financiar los costes de transformación digital de las pequeñas y medianas empresas en todo el territorio nacional. Descarga aquí la guía.</p>
        </div>
        <div className="container flex flex-col lg:flex-row mt-10 justify-center gap-12 lg:gap-12 px-6 lg:px-0">
            <div className="lg:w-2/6">
                <img className="rounded-full" src="https://www.captto.com/wp-content/uploads/2023/07/img-conoces_kit_digital.webp" alt="" />
            </div>
            <div className='lg:w-2/5'> 
                <h1 className="font-semibold text-[#00DC93] text-3xl mb-6">Requisitos</h1>   
                <ul>
                {requirements.map((requirement, index) => (
                    <li key={index} className='flex items-center gap-2 mb-5'>
                        <span className='text-2xl text-violet-900 font-bold'>
                            <BiCheckCircle/>
                        </span>
                        <span className='text-gray-500 text-sm'>
                        {requirement}
                        </span>
                    </li>
                ))}
                </ul>
                <a href="#formulario" className='bg-[#73AF44] py-3 px-6 rounded-full text-white text-sm'>Quiero saber más</a>
            </div>
        </div>
    </section>
  )
}

export default KitDigital