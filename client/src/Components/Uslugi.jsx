import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../Images/svg/icon.svg'
import arrow from '../Images/svg/arrow-right.svg'
import two from '../Images/webp/img_two.png'
import three from '../Images/webp/img_three.png'
import four from '../Images/webp/img_four.png'
import five from '../Images/webp/img_five.png'
const Uslugi = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black'>
      <section className="bg-black">
      <header className="max-w-[1840px] mx-auto grid grid-cols-8 gap-5 py-3 px-4 bg-[#ffffff]">
          {/* Навигация */}
          <nav className="col-span-3 flex items-center gap-4 text-black">
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors" onClick={()=>navigate('/')}>Главная</a>
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('/treneri')}>Тренеры</a>
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('/tarif')}>Абонементы</a>
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('/contacts')}>Контакты</a>
          </nav>
          
          {/* Логотип */}
          <div className="col-span-2 flex justify-center items-center">
            <a href="/" className="text-5xl font-Impact text-black">
              <span className="text-primary">X</span>run
            </a>
          </div>
          
          {/* Кнопка действия */}
          <div className="col-span-3 flex justify-end items-center">
            <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
              <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Бесплатная тренировка</span>
            </button>
          </div>
        </header>
     
       {/* Главный экран */}
       <section className="max-w-[1840px] mx-auto grid grid-cols-8 gap-5 mt-60">
            <div className="col-span-8 text-center">
      
              <h1 className="text-4xl font-Impact py-[100px] text-primary text-[300px] uppercase self-baseline">услуги</h1>
              <p className="text-3xl font-Unbounded py-[30px] text-white  text-center">В Xrun мы предлагаем разнообразные программы, чтобы каждая <br />
               тренировка была комфортной, полезной и интересной. Независимо от <br />
                вашего уровня подготовки, вы сможете выбрать занятия, которые подходят <br />
                 именно вам — от лёгкой разминки до интенсивного силового тренинга.</p>
            </div>        
            <div className="col-span-8 grid grid-cols-8 gap-5 mt-[200px] items-start">
            </div>
        </section>
        </section>
        {/*карточки услуг */}
        <section className="bg-white p-5 rounded-xl justify-between max-w-[1840px] mx-auto flex mt-[20px]">
          <div className="flex">
          <h1 className="text-3xl font-Impact p-2 text-red-600 uppercase ">
              ТРЕНАЖЕРНЫЙ ЗАЛ
            </h1>
          </div>
          <div className="">
            <ol className="py-2">
              <li className="text-m font-Unbounded">• Доступно для новичков и опытных <br /> спортсменов</li>
              <li className="text-m font-Unbounded">• Индивидуальные программы от <br /> тренеров</li>
              <li className="text-m font-Unbounded">• Развивает силу, выносливость и <br /> общую физическую форму</li>
              <li className="text-m font-Unbounded">• Идеально для тех, кто хочет <br /> тренироваться в удобном ритме и <br /> видеть результаты</li>
            </ol>
            <p className="text-m font-Unbounded pt-[34px]">
            Современный зал с разнообразным <br /> оборудованием для силовых и кардио <br /> тренировок.
            </p>
            <div className=" items-center py-4">
                <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-3 px-4 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
                  <span onClick={()=>navigate('/free')}>Бесплатная тренировка</span>
                  <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </button>
              </div>
          </div>

          <div className="">
            <img src={two} alt="" className='h-[428px] w-[428px] bg-cover rounded-xl' />
          </div>
        
        </section>
        <section className="bg-white p-5 rounded-xl justify-between max-w-[1840px] mx-auto flex mt-[20px]">
          <div className="flex">
          <h1 className="text-3xl font-Impact p-2 text-red-600 uppercase ">
              ТРЕНАЖЕРНЫЙ ЗАЛ
            </h1>
          </div>
          <div className="">
            <ol className="py-2">
              <li className="text-m font-Unbounded">• Доступно для новичков и опытных <br /> спортсменов</li>
              <li className="text-m font-Unbounded">• Индивидуальные программы от <br /> тренеров</li>
              <li className="text-m font-Unbounded">• Развивает силу, выносливость и <br /> общую физическую форму</li>
              <li className="text-m font-Unbounded">• Идеально для тех, кто хочет <br /> тренироваться в удобном ритме и <br /> видеть результаты</li>
            </ol>
            <p className="text-m font-Unbounded pt-[34px]">
            Современный зал с разнообразным <br /> оборудованием для силовых и кардио <br /> тренировок.
            </p>
            <div className=" items-center py-4">
                <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-3 px-4 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
                  <span onClick={()=>navigate('/free')}>Бесплатная тренировка</span>
                  <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </button>
              </div>
          </div>

          <div className="">
            <img src={three} alt="" className='h-[428px] w-[428px] bg-cover rounded-xl' />
          </div>
        
        </section>

        <section className="bg-white p-5 rounded-xl justify-between max-w-[1840px] mx-auto flex mt-[20px]">
          <div className="flex">
          <h1 className="text-3xl font-Impact p-2 text-red-600 uppercase ">
              ТРЕНАЖЕРНЫЙ ЗАЛ
            </h1>
          </div>
          <div className="">
            <ol className="py-2">
              <li className="text-m font-Unbounded">• Доступно для новичков и опытных <br /> спортсменов</li>
              <li className="text-m font-Unbounded">• Индивидуальные программы от <br /> тренеров</li>
              <li className="text-m font-Unbounded">• Развивает силу, выносливость и <br /> общую физическую форму</li>
              <li className="text-m font-Unbounded">• Идеально для тех, кто хочет <br /> тренироваться в удобном ритме и <br /> видеть результаты</li>
            </ol>
            <p className="text-m font-Unbounded pt-[34px]">
            Современный зал с разнообразным <br /> оборудованием для силовых и кардио <br /> тренировок.
            </p>
            <div className=" items-center py-4">
                <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-3 px-4 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
                  <span onClick={()=>navigate('/free')}> Бесплатная тренировка</span>
                  <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </button>
              </div>
          </div>

          <div className="">
            <img src={four} alt="" className='h-[428px] w-[428px] rounded-xl' />
          </div>
        
        </section>

        <section className="bg-white p-5 rounded-xl justify-between max-w-[1840px] mx-auto flex mt-[20px]">
          <div className="flex">
          <h1 className="text-3xl font-Impact p-2 text-red-600 uppercase ">
              ТРЕНАЖЕРНЫЙ ЗАЛ
            </h1>
          </div>
          <div className="">
            <ol className="py-2">
              <li className="text-m font-Unbounded">• Доступно для новичков и опытных <br /> спортсменов</li>
              <li className="text-m font-Unbounded">• Индивидуальные программы от <br /> тренеров</li>
              <li className="text-m font-Unbounded">• Развивает силу, выносливость и <br /> общую физическую форму</li>
              <li className="text-m font-Unbounded">• Идеально для тех, кто хочет <br /> тренироваться в удобном ритме и <br /> видеть результаты</li>
            </ol>
            <p className="text-m font-Unbounded pt-[34px]">
            Современный зал с разнообразным <br /> оборудованием для силовых и кардио <br /> тренировок.
            </p>
            <div className=" items-center py-4">
                <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-3 px-4 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
                  <span onClick={()=>navigate('/free')}>Бесплатная тренировка</span>
                  <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </button>
              </div>
          </div>

          <div className="">
            <img src={five} alt="" className='h-[428px] w-[428px] rounded-xl' />
          </div>
        
        </section>




        {/* Подвал */}
      <footer className="max-w-[1840px] mx-auto py-20 px-4">
        {/* 1 строка: навигация */}
        <div className="grid grid-cols-8 gap-4 items-center mb-5">
          {/* Ссылка наверх */}
          <div className="col-span-1">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/60 font-Unbounded hover:text-primary transition-colors duration-300 text-lg"
            >
              ↑ Вверх
            </button>
          </div>

          {/* Навигация */}
          <div className="col-span-6 flex justify-center items-center gap-6">
            <a  className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase" onClick={()=>navigate('/uslugi')}>Услуги</a>
            <a  className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase" onClick={()=>navigate('/treneri')}>Тренеры</a>
            <a  className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase" onClick={()=>navigate('/tarif')}>Абонементы</a>
            <a  className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase" onClick={()=>navigate('/contacts')}>Контакты</a>
          </div>

          {/* Телефон */}
          <div className="col-span-1 flex justify-end">
            <a 
              href="tel:+79242345678" 
              className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300"
            >
              +7 (924) 234-56-78
            </a>
          </div>
        </div>

        {/* 2 строка: логотип */}
        <div className="col-span-8 flex justify-center">
          <a href="/" className="text-white font-Impact text-[300px] leading-none transition-opacity duration-300">
            <span className='text-primary'>X</span>RUN
          </a>
        </div>

        {/* Копирайт */}
        <div className="col-span-8 text-center">
          <p className="text-white/40 font-Unbounded text-lg">
            © 2025 XRUN Fitness Club. Все права защищены.
          </p>
        </div>
      </footer>
      </div>
      
      
  

  )
}

export default Uslugi