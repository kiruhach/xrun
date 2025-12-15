import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../Images/svg/icon.svg'
const ContactFormPage = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '', middleName: '', agree: false });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email обязателен';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Введите корректный email';
    if (!formData.firstName) newErrors.firstName = 'Имя обязательно';
    if (!formData.lastName) newErrors.lastName = 'Фамилия обязательна';
    if (!formData.agree) newErrors.agree = 'Необходимо согласие';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Данные формы:', formData);
      setShowModal(true);
      setFormData({ email: '', firstName: '', lastName: '', middleName: '', agree: false });
      setErrors({});
    } else setErrors(validationErrors);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-black text-white p-4 ">
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
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-primary/30">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">×</button>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-Impact text-center mb-4  text-primary">Спасибо!</h3>
            <p className="text-center text-gray-300 mb-8 font-Unbounded">Ваше сообщение успешно отправлено.<br />Мы свяжемся с вами в ближайшее время!</p>
            <button onClick={closeModal} className="w-full py-3 bg-primary text-white rounded-xl hover:opacity-90 font-Unbounded">Понятно</button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl  mb-6 font-Impact text-primary">Хотите знать больше?</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-Unbounded">Напишите нам и мы с радостью ответим на все ваши вопросы</p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-6 md:p-10 border border-gray-700">
          <h2 className="text-2xl md:text-3xl  mb-8 text-center font-Impact">Напишите нам</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-Unbounded">Email <span className="text-primary">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-Unbounded ${errors.email ? 'border-red-500' : 'border-gray-700'}`} placeholder="your@email.com" />
              {errors.email && <p className="text-red-400 text-sm mt-1 font-Unbounded">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-Unbounded">Имя <span className="text-primary">*</span></label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-Unbounded ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`} placeholder="Алексей" />
              {errors.firstName && <p className="text-red-400 text-sm mt-1 font-Unbounded">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-Unbounded">Фамилия <span className="text-primary">*</span></label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-Unbounded ${errors.lastName ? 'border-red-500' : 'border-gray-700'}`} placeholder="Иванов" />
              {errors.lastName && <p className="text-red-400 text-sm mt-1 font-Unbounded">{errors.lastName}</p>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-Unbounded">Отчество</label>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-Unbounded" placeholder="Сергеевич" />
            </div>

            <div className="pt-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mt-1 w-5 h-5 text-primary bg-gray-800 border-gray-700 rounded focus:ring-primary" />
                <span className="text-gray-300 font-Unbounded">Я соглашаюсь на обработку персональных данных <span className="text-primary">*</span></span>
              </label>
              {errors.agree && <p className="text-red-400 text-sm mt-1 font-Unbounded">{errors.agree}</p>}
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full py-4 px-6 bg-primary text-white  rounded-xl hover:opacity-90 font-Impact text-lg">Отправить сообщение</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;