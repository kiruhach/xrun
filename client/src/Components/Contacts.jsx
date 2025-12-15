import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../Images/svg/icon.svg'

const Contacts = () => {
  const navigate = useNavigate()
  const [openQuestions, setOpenQuestions] = useState([])

  // Функция для переключения состояния вопроса
  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(item => item !== index))
    } else {
      setOpenQuestions([...openQuestions, index])
    }
  }

  // Данные для FAQ
  const faqItems = [
    {
      id: 1,
      question: "Как записаться на первую тренировку?",
      answer: "Для записи на первую тренировку вы можете позвонить нам по телефону, написать в WhatsApp или заполнить форму на сайте. Первая тренировка бесплатна для новых клиентов!",
      isOpen: false
    },
    {
      id: 2,
      question: "Нужна ли предварительная запись на групповые тренировки?",
      answer: "Да, на все групповые тренировки необходима предварительная запись через приложение, телефон или у администратора клуба. Это помогает нам обеспечить комфортные условия для всех участников.",
      isOpen: false
    },
    {
      id: 3,
      question: "Можно ли заморозить абонемент?",
      answer: "Да, вы можете заморозить абонемент на срок от 7 до 30 дней. Для этого необходимо обратиться к администратору клуба. Услуга доступна 1 раз в год для абонементов от 6 месяцев.",
      isOpen: false
    },
    {
      id: 4,
      question: "Есть ли индивидуальные программы тренировок?",
      answer: "Да, наши тренеры разрабатывают индивидуальные программы тренировок с учетом ваших целей, физической подготовки и медицинских показаний. Персональные тренировки можно забронировать у любого тренера.",
      isOpen: false
    },
    {
      id: 5,
      question: "Можно ли приходить с другом на пробную тренировку?",
      answer: "Конечно! Приводите друга на пробную тренировку. Для него первое занятие также будет бесплатным. Просто предупредите нас заранее о вашем визите.",
      isOpen: false
    }
  ]

  return (
    <div className='bg-black'>
      <section className="bg-black">
        <header className="max-w-[1840px] mx-auto grid grid-cols-8 gap-5 py-3 px-4 bg-[#ffffff]">
          {/* Навигация */}
          <nav className="col-span-3 flex items-center gap-4 text-black">
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors cursor-pointer" onClick={()=>navigate('/')}>Главная</a>
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors cursor-pointer" onClick={()=>navigate('/treneri')}>Тренеры</a>
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors cursor-pointer" onClick={()=>navigate('/tarif')}>Абонементы</a>
            <a className="font-Unbounded text-xl hover:text-red-500 transition-colors cursor-pointer" onClick={()=>navigate('/contacts')}>Контакты</a>
          </nav>
          
          {/* Логотип */}
          <div className="col-span-2 flex justify-center items-center">
            <a href="/" className="text-5xl font-Impact text-black cursor-pointer">
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
            <h1 className="text-4xl font-Impact py-[100px] text-primary text-[300px] uppercase self-baseline">Контакты</h1>
            <p className="text-3xl font-Unbounded py-[30px] text-white text-center">
              Мы всегда рядом — свяжитесь с нами удобным способом.
            </p>
          </div>        
          <div className="col-span-8 grid grid-cols-8 gap-5 mt-[200px] items-start">
          </div>
        </section>
      </section>



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


      
      <section className="mt-[100px]">
        {/* Частые вопросы */}
        {faqItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div 
              className="grid grid-cols-8 gap-4 items-center group hover:bg-white/5 transition-colors duration-300 p-8 rounded-lg cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="col-span-1 flex justify-start">
                <div className="text-white font-Impact text-5xl leading-none group-hover:scale-125 transition-transform duration-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="col-span-6 flex flex-col items-center text-center px-12">
                <h3 className="text-white font-Impact text-4xl uppercase mb-4">
                  {item.question}
                </h3>
              </div>
              
              <div className="col-span-1 flex justify-end">
                <div className="text-primary font-Impact text-5xl leading-none transition-transform duration-400">
                  {openQuestions.includes(index) ? '−' : '+'}
                </div>
              </div>
            </div>
            
            {/* Скрытое содержимое */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openQuestions.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-8 pt-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-white font-Unbounded text-xl text-center">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
            
            <hr className='bg-white mx-[40px]' />
          </React.Fragment>
        ))}
      </section>

      {/* Подписка */}
      <section className="flex bg-white justify-center text-center container max-w-[1820px] mx-[40px] rounded-xl my-[100px]">
        <div className="my-[140px]">
          <h3 className="text-primary font-Impact text-4xl pt-10">Остались вопросы?</h3>
          <p className="text-m py-3 font-Unbounded">
            Если остались вопросы мы будем рады на них ответить! <br />   
            Оставляйте свой номер телефона и мы с Вами свяжемся в течение дня.
          </p>
          <div className="bg-[#b2b1b1a6] items-center text-center flex justify-center rounded-xl p-2">
            <input 
              type="text" 
              className="bg-[#d6d6d67b] border border-none w-[540px] h-[50px] rounded-[8px] text-black px-4" 
              placeholder='введите номер телефона'  
            />
            <button className="bg-black text-white w-[140px] h-[50px] rounded-[8px] ml-2 hover:bg-gray-800 transition-colors">
              Отправить
            </button>
          </div>
          <p className="text-m py-3 font-Unbounded">
            Я соглашаюсь с <span className='text-primary underline font-Unbounded cursor-pointer'>политикой конфиденциальности</span>
          </p>
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
              className="text-white/60 font-Unbounded hover:text-primary transition-colors duration-300 text-lg cursor-pointer"
            >
              ↑ Вверх
            </button>
          </div>

          {/* Навигация */}
          <div className="col-span-6 flex justify-center items-center gap-6">
            <a className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase cursor-pointer" onClick={()=>navigate('/uslugi')}>Услуги</a>
            <a className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase cursor-pointer" onClick={()=>navigate('/treneri')}>Тренеры</a>
            <a className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase cursor-pointer" onClick={()=>navigate('/tarif')}>Абонементы</a>
            <a className="text-white font-Unbounded text-lg hover:text-primary transition-colors duration-300 uppercase cursor-pointer" onClick={()=>navigate('/contacts')}>Контакты</a>
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

export default Contacts