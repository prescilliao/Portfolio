// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.send(
//             'service_0x5h3i8', // Replace with your EmailJS service ID
//             'template_64pqvpo', // Replace with your EmailJS template ID
//             formData,
//             'I5I6cQ3YLiaO6Qxhv' // Replace with your EmailJS user ID
//         )
//             .then((response) => {
//                 console.log('SUCCESS!', response.status, response.text);
//                 alert("Votre message a été envoyé avec succès!");
//             }, (err) => {
//                 console.log('FAILED...', err);
//                 alert("Échec de l'envoi du message. Veuillez réessayer.");
//             });

//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };

//     return (
//         <div className="flex justify-center items-center ">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Contactez-moi</h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                         Nom
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#99E2B4]"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         E-mail
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#99E2B4]"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows="5"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#99E2B4]"
//                     ></textarea>
//                 </div>
//                 <div className="flex justify-center">
//                     <button
//                         type="submit"
//                         className="bg-[#99E2B4] hover:bg-[#469D89] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#469D89]"
//                     >
//                         Envoyer
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;
