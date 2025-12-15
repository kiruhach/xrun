import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../Images/svg/icon.svg'
const Tarif = () => {
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
      
              <h1 className="text-4xl font-Impact py-[100px] text-primary text-[300px] uppercase self-baseline">Абонементы</h1>
              <p className="text-3xl font-Unbounded py-[30px] text-white  text-center">Каждый тренер Xrun — это профессионал, который помогает вам комфортно, безопасно и <br /> эффективно достигать целей. Мы собрали команду специалистов, которые любят своё дело,<br /> поддерживают, мотивируют и создают дружелюбную атмосферу на каждой тренировке. 
               </p>
            </div>        
            <div className="col-span-8 grid grid-cols-8 gap-5 mt-[200px] items-start">
            </div>
        </section>
      </section>

      {/* Секция Абонементы */}
      <section className="max-w-[1840px] mx-auto py-40 px-4">

        {/* Карточка абонемента 1*/}
        <div className="col-span-8 space-y-5">
          {/* Заголовок и время работы */}
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <h2 className="text-primary font-Impact text-5xl uppercase leading-tight">
                Тренажёрный зал
              </h2>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-[2px] bg-[#7d7d7d77]"></div>

          {/* Детали абонемента */}
          <div className="grid grid-cols-8 gap-4">
            {/* Время работы */}
            <div className="col-span-2">
              <p className="text-white font-Unbounded text-xl">
                Пн – вс: 07:00 — 23:00
              </p>
            </div>

            {/* Названия тарифов */}
            <div className="col-span-1 col-start-4 flex flex-col gap-8">
              <p className="text-white/70 font-Unbounded text-xl">Месяцный</p>
              <p className="text-white/70 font-Unbounded text-xl">Полугодовой</p>
              <p className="text-white/70 font-Unbounded text-xl">Годовой</p>
            </div>

            {/* Цены */}
            <div className="col-span-1 col-start-6 flex flex-col gap-8">
              <p className="text-white/70 text-xl font-Unbounded">2000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">6000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">10000/рублей</p>
            </div>

            {/* Кнопки покупки */}
            <div className="col-span-1 col-start-8 flex flex-col gap-8">
              {/* Кнопка 1 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 2 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 3 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Карточка абонемента 2*/}
        <div className="col-span-8 space-y-5 pt-5">
          {/* Заголовок и время работы */}
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-3">
              <h2 className="text-primary font-Impact text-5xl uppercase leading-tight">
                Групповые тренировки
              </h2>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-[2px] bg-[#7d7d7d77]"></div>

          {/* Детали абонемента */}
          <div className="grid grid-cols-8 gap-4">
            {/* Время работы */}
            <div className="col-span-2">
              <p className="text-white font-Unbounded text-xl">
                Пн – вс: 07:00 — 23:00
              </p>
            </div>

            {/* Названия тарифов */}
            <div className="col-span-1 col-start-4 flex flex-col gap-8">
              <p className="text-white/70 font-Unbounded text-xl">Месяцный</p>
              <p className="text-white/70 font-Unbounded text-xl">Полугодовой</p>
              <p className="text-white/70 font-Unbounded text-xl">Годовой</p>
            </div>

            {/* Цены */}
            <div className="col-span-1 col-start-6 flex flex-col gap-8">
              <p className="text-white/70 text-xl font-Unbounded">6000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">12000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">18000/рублей</p>
            </div>

            {/* Кнопки покупки */}
            <div className="col-span-1 col-start-8 flex flex-col gap-8">
              {/* Кнопка 1 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 2 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 3 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Карточка абонемента 3*/}
        <div className="col-span-8 space-y-5 pt-5">
          {/* Заголовок и время работы */}
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-3">
              <h2 className="text-primary font-Impact text-5xl uppercase leading-tight">
                Персональные занятия
              </h2>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-[2px] bg-[#7d7d7d77]"></div>

          {/* Детали абонемента */}
          <div className="grid grid-cols-8 gap-4">
            {/* Время работы */}
            <div className="col-span-2">
              <p className="text-white font-Unbounded text-xl">
                Пн – вс: 07:00 — 23:00
              </p>
            </div>

            {/* Названия тарифов */}
            <div className="col-span-1 col-start-4 flex flex-col gap-8">
              <p className="text-white/70 font-Unbounded text-xl">Месяцный</p>
              <p className="text-white/70 font-Unbounded text-xl">Полугодовой</p>
              <p className="text-white/70 font-Unbounded text-xl">Годовой</p>
            </div>

            {/* Цены */}
            <div className="col-span-1 col-start-6 flex flex-col gap-8">
              <p className="text-white/70 text-xl font-Unbounded">5000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">10000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">15000/рублей</p>
            </div>

            {/* Кнопки покупки */}
            <div className="col-span-1 col-start-8 flex flex-col gap-8">
              {/* Кнопка 1 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 2 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 3 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Карточка абонемента 4*/}
        <div className="col-span-8 space-y-5 pt-5">
          {/* Заголовок и время работы */}
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-3">
              <h2 className="text-primary font-Impact text-5xl uppercase leading-tight">
                SPA / Йога
              </h2>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-[2px] bg-[#7d7d7d77]"></div>

          {/* Детали абонемента */}
          <div className="grid grid-cols-8 gap-4">
            {/* Время работы */}
            <div className="col-span-2">
              <p className="text-white font-Unbounded text-xl">
                Пн – вс: 07:00 — 23:00
              </p>
            </div>

            {/* Названия тарифов */}
            <div className="col-span-1 col-start-4 flex flex-col gap-8">
              <p className="text-white/70 font-Unbounded text-xl">Месяцный</p>
              <p className="text-white/70 font-Unbounded text-xl">Полугодовой</p>
              <p className="text-white/70 font-Unbounded text-xl">Годовой</p>
            </div>

            {/* Цены */}
            <div className="col-span-1 col-start-6 flex flex-col gap-8">
              <p className="text-white/70 text-xl font-Unbounded">4000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">10000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">20000/рублей</p>
            </div>

            {/* Кнопки покупки */}
            <div className="col-span-1 col-start-8 flex flex-col gap-8">
              {/* Кнопка 1 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 2 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 3 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

                {/* Карточка абонемента 4*/}
        <div className="col-span-8 space-y-5 pt-5">
          {/* Заголовок и время работы */}
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-3">
              <h2 className="text-primary font-Impact text-5xl uppercase leading-tight">
                all-in
              </h2>
            </div>
          </div>

          {/* Разделитель */}
          <div className="h-[2px] bg-[#7d7d7d77]"></div>

          {/* Детали абонемента */}
          <div className="grid grid-cols-8 gap-4">
            {/* Время работы */}
            <div className="col-span-2">
              <p className="text-white font-Unbounded text-xl">
                Пн – вс: 07:00 — 23:00
              </p>
            </div>

            {/* Названия тарифов */}
            <div className="col-span-1 col-start-4 flex flex-col gap-8">
              <p className="text-white/70 font-Unbounded text-xl">Месяцный</p>
              <p className="text-white/70 font-Unbounded text-xl">Полугодовой</p>
              <p className="text-white/70 font-Unbounded text-xl">Годовой</p>
            </div>

            {/* Цены */}
            <div className="col-span-1 col-start-6 flex flex-col gap-8">
              <p className="text-white/70 text-xl font-Unbounded">12000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">20000/рублей</p>
              <p className="text-white/70 text-xl font-Unbounded">30000/рублей</p>
            </div>

            {/* Кнопки покупки */}
            <div className="col-span-1 col-start-8 flex flex-col gap-8">
              {/* Кнопка 1 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 2 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Кнопка 3 */}
              <a 
                onClick={()=>navigate('/Free')}
                href="/free" 
                className="group flex items-center justify-end gap-2 text-primary font-Unbounded text-base font-medium hover:text-red-600 transition-colors duration-300"
              >
                купить абонемент
                <svg 
                  className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
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

export default Tarif