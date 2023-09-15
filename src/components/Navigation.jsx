const Navigation = () => {
  return (
    <nav className="bg-violet-900">
        <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-4 mt-8 py-4 lg:py-1 flex-wrap px-6 lg:px-0">
            <a href="#porquenosotros" className="text-white uppercase font-semibold text-lg">¿Por qué nosotros?</a>
            <a href="#soluciones" className="text-white uppercase font-semibold text-lg">Nuestras soluciones</a>
            <a href="#kitdigital" className="text-white uppercase font-semibold text-lg">¿Qué es el kit?</a>
        </div>
    </nav>
  )
}

export default Navigation