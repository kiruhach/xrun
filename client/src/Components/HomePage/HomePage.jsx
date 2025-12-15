import React from 'react'
import './input.css'
import icon from '../../Images/svg/icon.svg'
import img_two from '../../Images/webp/img_two.png'
import img_three from '../../Images/webp/img_three.png'
import img_four from '../../Images/webp/img_four.png'
import img_five from '../../Images/webp/img_five.png'
import img_six from '../../Images/webp/img_six.jpg'
import img_seven from '../../Images/webp/img_seven.png'
import img_eight from '../../Images/webp/img_eight.png'
import img_nine from '../../Images/webp/img_nine.png'
import img_ten from '../../Images/webp/img_ten.png'
import img_eleven from '../../Images/webp/img_eleven.png'
import img_twelve from '../../Images/webp/img_twelve.png'
import img_thirteen from '../../Images/webp/img_thirteen.png'
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#101010]'>
      {/* Главный Экран */}
      <main className="bg-[url('../../Images/webp/main.webp')] h-screen">
        {/* Header */}
        <header className="max-w-[1840px] mx-auto grid grid-cols-8 gap-5 py-3 px-4 bg-[#2B2B2B55]">
          {/* Навигация */}
          <nav className="col-span-3 flex items-center gap-4 text-white ">
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors" onClick={()=>navigate('/uslugi')}>Услуги</a>
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('/treneri')}>Тренеры</a>
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('tarif')}>Абонементы</a>
            <a  className="font-Unbounded text-xl hover:text-red-500 transition-colors"onClick={()=>navigate('/contacts')}>Контакты</a>
          </nav>
          
          {/* Логотип */}
          <div className="col-span-2 flex justify-center items-center">
            <a href="/" className="text-5xl font-Impact text-white">
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
              <p className="text-white mb-2 font-Impact text-6xl uppercase">Фитнес клуб</p>
              <h1 className="text-4xl font-Impact py-[100px] text-primary text-[300px] uppercase self-baseline">xrun</h1>
            </div>        
            <div className="col-span-8 grid grid-cols-8 gap-5 mt-[200px] items-start">

              <div className="col-span-2">
                <p className='text-xl text-white font-Unbounded'>
                  Современный тренажёрный зал, профессиональные тренеры и программы для любого уровня подготовки.
                </p>
              </div>
              
              <div className="col-start-7 col-span-2 flex justify-end">
                <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-4 px-8 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
                  <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                  <span onClick={()=>navigate('/free')}>Бесплатная тренировка</span>
                </button>
              </div>
            </div>
        </section>
      </main>

      {/* Секция услуг */}
      <section className="max-w-[1840px] mx-auto grid grid-cols-8 gap-4 pt-40">
        <div className="col-span-3">
          <h2 className="text-white font-Impact text-6xl uppercase leading-tight">
            <span className='text-primary'>Тренировки Xrun</span> — от рассвета до полуночи
          </h2>
        </div>
        
        <div className="col-span-3 col-start-6">
          <p className="text-white text-xl font-Unbounded">
            Тренировки Xrun — это комфорт, свобода и результат. Занимайся в любое время и находи свой ритм вместе с городом.
          </p>
        </div>

        <div className="col-span-8 grid grid-cols-8 gap-4 mt-6">

          {/* Карточка 1 */}
          <div className="col-span-2">
            <div className="relative h-[582px] overflow-hidden group">
              <div className="absolute inset-0 bg-gray-700">
                <img 
                  src={img_two} 
                  alt="Тренажерный зал" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 px-2 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <p className="font-Impact text-4xl">(01)   Тренажёрный</p>
                  <p className="font-Impact text-4xl text-right">зал</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="col-span-2">
            <div className="relative h-[582px] overflow-hidden group">
              <div className="absolute inset-0 bg-gray-700">
                <img 
                  src={img_three} 
                  alt="Групповые тренировки" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 px-2 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <p className="font-Impact text-4xl">(02)   Групповые</p>
                  <p className="font-Impact text-4xl text-right">тренировки</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="col-span-2">
            <div className="relative h-[582px] overflow-hidden group">
              <div className="absolute inset-0 bg-gray-700">
                <img 
                  src={img_four} 
                  alt="Персональные тренировки" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 px-2 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <p className="font-Impact text-4xl">(03)   Персональные</p>
                  <p className="font-Impact text-4xl text-right">занятия</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="col-span-2">
            <div className="relative h-[582px] overflow-hidden group">
              <div className="absolute inset-0 bg-gray-700">
                <img 
                  src={img_five} 
                  alt="SPA и Йога" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 px-2 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <p className="font-Impact text-4xl">(04)   SPA/</p>
                  <p className="font-Impact text-4xl text-right">/Йога</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="max-w-[1840px] mx-auto py-40 px-4">
        <div className="col-span-8 mb-24">
          <h2 className="font-Impact text-6xl uppercase text-center text-primary">
            преимущества <span className="text-white">XRUN</span>
          </h2>
        </div>

        {/* Преимущество 1 */}
        <div className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg">
          <div className="col-span-1 flex justify-start">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(A)</div>
          </div>
          
          <div className="col-span-6 flex flex-col items-center text-center px-12">
            <h3 className="text-primary font-Impact text-4xl uppercase mb-4">
              Современные тренажёры
            </h3>
            <p className="text-white font-Unbounded text-lg max-w-3xl">
              Все тренажёры и зоны в Xrun соответствуют современным стандартам. 
              Они безопасны, удобны и подходят как для новичков, так и для опытных спортсменов.
            </p>
          </div>
          
          <div className="col-span-1 flex justify-end">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(A)</div>
          </div>
        </div>

        {/* Преимущество 2 */}
        <div className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg">
          <div className="col-span-1 flex justify-start">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(B)</div>
          </div>
          
          <div className="col-span-6 flex flex-col items-center text-center px-12">
            <h3 className="text-primary font-Impact text-4xl uppercase mb-4">
              Опытные тренеры
            </h3>
            <p className="text-white font-Unbounded text-lg max-w-3xl">
              Наши тренеры помогают правильно выполнять упражнения, составляют индивидуальные программы и поддерживают на каждом занятии.
            </p>
          </div>
          
          <div className="col-span-1 flex justify-end">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(B)</div>
          </div>
        </div>

        {/* Преимущество 3 */}
        <div className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg">
          <div className="col-span-1 flex justify-start">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(С)</div>
          </div>
          
          <div className="col-span-6 flex flex-col items-center text-center px-12">
            <h3 className="text-primary font-Impact text-4xl uppercase mb-4">
              Удобное расположение
            </h3>
            <p className="text-white font-Unbounded text-lg max-w-3xl">
              НКлуб находится на улице Батарейная во Владивостоке. До нас легко добраться на машине или общественном транспорте, рядом есть парковка и остановки.
            </p>
          </div>
          
          <div className="col-span-1 flex justify-end">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(С)</div>
          </div>
        </div>

        {/* Преимущество 4 */}
        <div className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg">
          <div className="col-span-1 flex justify-start">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(D)</div>
          </div>
          
          <div className="col-span-6 flex flex-col items-center text-center px-12">
            <h3 className="text-primary font-Impact text-4xl uppercase mb-4">
              Разнообразие тренировок
            </h3>
            <p className="text-white font-Unbounded text-lg max-w-3xl">
            Силовые, кардио, функциональный тренинг, йога, пилатес и растяжка — каждый может выбрать подходящий стиль занятий и сохранять интерес к тренировкам.
            </p>
          </div>
          
          <div className="col-span-1 flex justify-end">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(D)</div>
          </div>
        </div>

        {/* Преимущество 5 */}
        <div className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg">
          <div className="col-span-1 flex justify-start">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(I)</div>
          </div>
          
          <div className="col-span-6 flex flex-col items-center text-center px-12">
            <h3 className="text-primary font-Impact text-4xl uppercase mb-4">
              Видимые результаты
            </h3>
            <p className="text-white font-Unbounded text-lg max-w-3xl">
            С Xrun вы заметите силу, выносливость и улучшение самочувствия. Программы создаются так, чтобы результат был заметен постепенно, но уверенно.
            </p>
          </div>
          
          <div className="col-span-1 flex justify-end">
            <div className="text-primary font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">(I)</div>
          </div>
        </div>

      </section>

      {/* Секция История */}
      <section className="max-w-[1840px] mx-auto grid grid-cols-8 pt-40 px-4">

        <div className="col-start-2 col-span-4 mb-8">
          <h2 className="text-white font-Impact text-9xl uppercase tracking-[-3%]">
            <span className='text-primary'>История</span> XRUN
          </h2>
        </div>

        <div className="col-start-3 col-span-5 mb-16">
          <h2 className="text-white font-Impact text-9xl uppercase tracking-[-3%]">
            путь <span className='text-primary'>к настоящему</span>
          </h2>
        </div>

        <div className="col-span-8 grid grid-cols-8 gap-4 items-start">
          <div className="col-span-2 col-start-2">
            <p className="text-white font-Unbounded text-lg tracking-[-3%]">
              Xrun открыл свои двери на улице Батарейная во Владивостоке, чтобы создать фитнес-пространство, где каждый мог бы заниматься с комфортом и удовольствием. Мы начали с небольшой команды энтузиастов, которые верили: тренировки должны быть доступными, эффективными и вдохновляющими.
            </p>
          </div>


          <div className="col-span-2 ">
                <img src={img_six} alt="Тренировка" className='h-[400px] bg-auto' />
          </div>

          <div className="col-span-2">
            <p className="text-white font-Unbounded text-lg tracking-[-3%] ">
              С первого дня мы сделали ставку на современное оборудование, разнообразные программы и дружелюбную атмосферу, чтобы новички и опытные спортсмены чувствовали себя уверенно. Сегодня Xrun — клуб, где можно выбрать индивидуальные занятия, групповые тренировки или просто лёгкую разминку.
            </p>
          </div>
        </div>
      </section>

      {/* Секция Абонементы */}
      <section className="max-w-[1840px] mx-auto pt-40 px-4">

        <div className="col-span-8 mb-8">
          <h2 className="text-white font-Impact text-6xl uppercase text-center">
            <span className='text-primary'>Присоединяйся</span> к XRUN
          </h2>
        </div>

        <div className="col-span-8 mb-20 flex justify-center">
          <p className="text-white font-Unbounded text-xl text-center max-w-[540px]">
            Приобретайте абонемент с разными преимуществами и наслаждайтесь тренировками
          </p>
        </div>

        {/* Карточка абонемента 1 */}
        <div className="col-span-8 grid grid-cols-8 gap-4 items-start">
          <div className="col-span-1">
              <p className="text-white font-Impact text-3xl uppercase">
                (БАЗОВЫЙ)
              </p>
          </div>

          <div className="col-span-3 col-start-3">
              <img src={img_seven} alt="" />
          </div>

          <div className="col-span-3 col-start-6">
            <h3 className="text-white font-Impact text-5xl uppercase mb-6">
              ТРЕНАНЁРНЫЙ ЗАЛ
            </h3>
            
            <p className="text-white/65 font-Unbounded text-lg mb-8 leading-relaxed">
              Для новичков и тех, кто только начинает: доступ к тренажёрному залу, 
              2 групповые тренировки в неделю и возможность бесплатного пробного занятия.
            </p>

          <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-4 px-8 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
            <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
            <span onClick={()=>navigate('/free')}>Узнать стоимость</span>
          </button>
          </div>
        </div>

        {/* Карточка абонемента 2 */}
        <div className="col-span-8 grid grid-cols-8 gap-4 pt-10 items-start">
          <div className="col-span-1">
              <p className="text-white font-Impact text-3xl uppercase">
                (Средний)
              </p>
          </div>

          <div className="col-span-3 col-start-3">
              <img src={img_eight} alt="" />
          </div>

          <div className="col-span-3 col-start-6">
            <h3 className="text-white font-Impact text-5xl uppercase mb-6">
              SPA / Йога
            </h3>
            
            <p className="text-white/65 font-Unbounded text-lg mb-8 leading-relaxed">
              Оптимальный вариант для регулярных тренировок: неограниченный доступ к залу, 4 групповые тренировки в неделю и персональная программа от тренера.
            </p>

            <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-4 px-8 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
              <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Узнать стоимость</span>
            </button>
          </div>
        </div>

        {/* Карточка абонемента 3 */}
        <div className="col-span-8 grid grid-cols-8 gap-4 pt-10 items-start">
          <div className="col-span-1">
              <p className="text-white font-Impact text-3xl uppercase">
                (высокий)
              </p>
          </div>

          <div className="col-span-3 col-start-3">
              <img src={img_nine} alt="" />
          </div>

          <div className="col-span-3 col-start-6">
            <h3 className="text-white font-Impact text-5xl uppercase mb-6">
              All-in
            </h3>
            
            <p className="text-white/65 font-Unbounded text-lg mb-8 leading-relaxed">
              Для тех, кто хочет максимальный результат: полный доступ к залу и группам, индивидуальные тренировки с тренером, дополнительные мастер-классы и консультации.
            </p>

            <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg py-4 px-8 hover:bg-primary/70 transition-colors duration-300 justify-center group/btn">
              <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Узнать стоимость</span>
            </button>
          </div>
        </div>
      </section>

      {/* Секция Тренерский штаб */}
      <section className="max-w-[1840px] mx-auto grid grid-cols-8 gap-4 pt-40 px-4">
          <div className="col-span-3 mb-16">
            <h2 className="text-white font-Impact text-6xl uppercase leading-tight">
              <span className='text-primary'>тренерский штаб</span> XRUN
            </h2>
          </div>

          <div className="col-span-3 col-start-6 mb-16">
            <p className="text-white font-Unbounded text-xl leading-relaxed">
              Каждый тренер Xrun — опытный специалист, который поможет достичь ваших целей. 
              Они не только показывают упражнения, но и мотивируют, поддерживают и создают 
              комфортную атмосферу на каждой тренировке.
            </p>
          </div>


          <div className="col-span-8 grid grid-cols-8 gap-4">

            {/* Карточка тренера 1 */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden">
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img 
                    src={img_ten} 
                    alt="Тренер Игорь Смирнов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-white font-Unbounded text-sm px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-white font-Impact text-2xl uppercase">
                    Игорь Смирнов
                  </h3>
                  <h4 className="text-white/65 font-Unbounded text-base">
                    Тренер по кардио и групповым программам
                  </h4>
                </div>
              </div>
            </div>

            {/* Карточка тренера 2 */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden">
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img 
                    src={img_eleven} 
                    alt="Тренер Игорь Смирнов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-white font-Unbounded text-sm px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      7 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-white font-Impact text-2xl uppercase">
                    Анна Кузнецова
                  </h3>
                  <h4 className="text-white/65 font-Unbounded text-base">
                    Тренер по силовым тренировкам и функциональному тренингу.
                  </h4>
                </div>
              </div>
            </div>

            {/* Карточка тренера 3 */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden">
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img 
                    src={img_twelve} 
                    alt="Тренер Игорь Смирнов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-white font-Unbounded text-sm px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      9 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-white font-Impact text-2xl uppercase">
                    Алексей Воронов
                  </h3>
                  <h4 className="text-white/65 font-Unbounded text-base">
                    Тренер по персональным и силовым тренировкам.
                  </h4>
                </div>
              </div>
            </div>

            {/* Карточка тренера 4 */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden">
                <div className="relative h-[500px] w-full overflow-hidden">
                  <img 
                    src={img_thirteen} 
                    alt="Тренер Игорь Смирнов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-white font-Unbounded text-sm px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-white font-Impact text-2xl uppercase">
                    Мария Петрова
                  </h3>
                  <h4 className="text-white/65 font-Unbounded text-base">
                    Тренер по йоге, пилатесу и растяжке
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-start-3 col-span-4 flex justify-center mt-8">
              <button className="flex items-center gap-3 bg-primary text-white font-Unbounded text-lg px-8 py-4 hover:bg-primary/70 transition-colors duration-300 w-full max-w-md justify-center group/btn">
                <img src={icon} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                <span onClick={()=>navigate('/treneri')}>Смотреть всех тренеров</span>
              </button>
            </div>

          </div>
      </section>

      {/* Секция Контакты */}
      <section className="max-w-[1840px] mx-auto py-40 px-4">
        {/* Заголовок */}
        <div className="col-span-8 mb-16">
          <h2 className="text-white font-Impact text-6xl uppercase text-center">
            <span className='text-primary'>КОНТАКТЫ</span> XRUN
          </h2>
        </div>

        <div className="grid grid-cols-8 gap-4">
          {/* Интерактивная карта*/}
          <div className="col-span-5">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-gray-900">
              {/* Минималистичная карта с фокусом на адресе */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">

                {/* Адрес*/}
                <div className="text-center mb-8">
                  <p className="text-white font-Unbounded text-3xl mb-2">ул. Батарейная, 8</p>
                  <p className="text-white/80 font-Unbounded text-xl">Владивосток</p>
                </div>

              </div>
              
              {/* Кнопка для открытия карты */}
              <a 
                href="https://yandex.ru/maps/75/vladivostok/house/batareynaya_ulitsa_8/ZUoHaA9nQUICWkJuYGJwc3xlZAE=/?ll=131.878756%2C43.120610&z=17.2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-primary text-white font-Unbounded text-lg px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-xl w-64 text-center"
              >
                Открыть карту
              </a>
            </div>
          </div>

          {/* Блоки информации*/}
          <div className="col-span-3 grid grid-rows-4 gap-4">
            {/* Блок 1: Адрес */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-Impact text-xl uppercase mb-2">Адрес</h3>
                  <p className="text-white font-Unbounded">г. Владивосток,<br />ул. Батарейная, 8</p>
                </div>
              </div>
            </div>

            {/* Блок 2: Время работы */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-Impact text-xl uppercase mb-2">Время работы</h3>
                  <p className="text-white font-Unbounded">
                    Пн-Пт: 7:00 - 23:00<br />
                    Сб-Вс: 8:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Блок 3: Телефон */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-Impact text-xl uppercase mb-2">Телефон</h3>
                  <p className="text-white font-Unbounded">
                    <a href="tel:+79242345678" className="hover:text-primary transition-colors duration-300">
                      +7 (924) 234-56-78
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Блок 4: Почта */}
            <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-Impact text-xl uppercase mb-2">Почта</h3>
                  <p className="text-white font-Unbounded">
                    <a href="mailto:info@xrun.fit" className="hover:text-primary transition-colors duration-300">
                      info@xrun.fit
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="col-span-8 mt-4 grid grid-cols-8 gap-4">
          {/* Блок с транспортом */}
          <div className="col-span-4 bg-white/5 rounded-2xl p-6">
            <h3 className="text-white font-Impact text-2xl uppercase mb-4">Как добраться</h3>
            <ul className="text-white font-Unbounded space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">А</span>
                Автобусы: 7, 15, 23, 31 - остановка "Батарейная"
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">Т</span>
                Троллейбусы: 5, 8 - остановка "Спортивная"
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs">П</span>
                Парковка: 50 мест, первые 2 часа бесплатно
              </li>
            </ul>
          </div>

          {/* Блок с соцсетями */}
          <div className="col-span-4 bg-white/5 rounded-2xl p-6">
            <h3 className="text-white font-Impact text-2xl uppercase mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-white font-Unbounded">VK</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-white font-Unbounded">TG</span>
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

export default HomePage
