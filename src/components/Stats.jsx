const Stats = () => {
  
    const stats = [
        {
            amount: '+15',
            type: 'años',
            message: 'Ayudando a pymes en su digitalización'
        },
        {
           amount: '+12.000',
           type: 'clientes',
           message: 'Han confiado ya en nosotros' 
        },
        {
            amount: '+40',
            type: 'personas',
            message: 'En un equipo multidisciplinar a tu servicio'
        }
    ]
  
  
    return (
    <section className="bg-violet-50" id="porquenosotros">
        <div className="container py-16 px-6 lg:px-0">
            <h1 className="text-center text-5xl font-semibold mb-3 text-violet-900">¿Por qué con nosotros?</h1>
            <p className="text-gray-500 max-w-sm text-center mx-auto">Son muchos los beneficios de escoger a captto como tu agente digitalizador.</p>
            <div className="grid lg:grid-cols-3 mt-12">
                {stats.map(({amount,type,message}, index) => (
                     <div className="flex flex-col gap-6 items-center" key={index}>
                        <h2 className="text-7xl lg:text-8xl font-semibold text-[#00DC93]">{amount}</h2>
                        <span className="text-[#00DC93] text-3xl font-semibold">{type}</span>
                        <p className="text-gray-500 text-xl text-center">{message}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats