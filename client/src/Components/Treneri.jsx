import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../Images/svg/icon.svg'
import ten from '../Images/webp/img_ten.png'
import eleven from '../Images/webp/img_eleven.png'
import twelve from '../Images/webp/img_twelve.png'
import thirteen from '../Images/webp/img_thirteen.png'
import arrow from '../Images/svg/arrow-right.svg'
const Treneri = () => {
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
              <span>Бесплатная тренировка</span>
            </button>
          </div>
        </header>
     
       {/* Главный экран */}
       <section className="max-w-[1840px] mx-auto grid grid-cols-8 gap-5 mt-60">
            <div className="col-span-8 text-center">
      
              <h1 className="text-4xl font-Impact py-[100px] text-primary text-[300px] uppercase self-baseline">Тренеры</h1>
              <p className="text-3xl font-Unbounded py-[30px] text-white  text-center">Каждый тренер Xrun — это профессионал, который помогает вам комфортно, безопасно и <br /> эффективно достигать целей. Мы собрали команду специалистов, которые любят своё дело,<br /> поддерживают, мотивируют и создают дружелюбную атмосферу на каждой тренировке. 
               </p>
            </div>        
            <div className="col-span-8 grid grid-cols-8 gap-5 mt-[200px] items-start">
            </div>
        </section>
        </section>

        <div className="col-span-8 grid grid-cols-8 gap-4 mx-10 mt-[50px]">

            {/* Карточка тренера 1 */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={ten} 
                    alt="Тренер Артём Лебедев" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Артём Лебедев
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по силовым тренировкам
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300  group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 2 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={eleven} 
                    alt="Тренер Елена Миронова" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Елена Миронова
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по функциональному тренингу                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 3 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={thirteen} 
                    alt="Тренер Екатерина Иванова" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                    Екатерина Иванова
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                    Тренер по кардио программам
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 4 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={twelve} 
                    alt="Тренер Игорь Смирнов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Игорь Дубов
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по танцевальным тренировкам
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300  group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

          {/* Карточка тренера 5 */}
          <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={twelve} 
                    alt="Тренер Алексей Воронов" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Алексей Воронов
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Персональный тренер
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 6 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={thirteen} 
                    alt="Тренер Анна Кузнецова" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Анна Кузнецова
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по силовым занятиям
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 7 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={thirteen} 
                    alt="Тренер Мария Петрова" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                  Мария Петрова
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по йоге, пилатесу и растяжке
                  </h4>
                  <div className="w-full">
            
                    </div>
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>

             {/* Карточка тренера 8 */}
             <div className="col-span-2 group">
              <div className="relative overflow-hidden bg-white p-2 ">
                <div className="relative h-[500px] w-full overflow-hidden text-black">
                  <img 
                    src={ten} 
                    alt="Тренер Никита Волков" 
                    className="w-full h-full object-cover brightness-100 group-hover:brightness-100 scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                  
                  {/* Бейдж "10 лет стажа" */}
                  <div className="absolute top-3 right-3 text-black">
                    <div className="bg-white text-black font-Unbounded text-sm px-3 py-1  transform group-hover:scale-110 transition-transform duration-300">
                      10 лет стажа
                    </div>
                  </div>
                  
                  {/* Полупрозрачный оверлей при наведении */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
                
                {/* Информация о тренере */}
                <div className="pt-2">
                  <h3 className="text-black font-Impact text-4xl uppercase">
                 Никита Волков
                  </h3>
                  <h4 className="text-black/65 font-Unbounded text-base">
                  Тренер по релакс-йоге и восстановлению
                  </h4>
  
                </div>
                
              </div>
              <button className="flex w-full  items-center gap-3 bg-primary text-white font-Unbounded text-lg py-2 px-4 hover:bg-primary/70 transition-colors duration-300 group/btn">
              <img src={arrow} alt="Иконка" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform duration-300" />
              <span onClick={()=>navigate('/free')}>Записаться к тренеру</span>
            </button>
            </div>
        </div>


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

export default Treneri