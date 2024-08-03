import React from 'react';

function Slidecompet({ images }) {
    return (
        <div className="relative overflow-hidden w-full">
            <div className="flex justify-center">
                <div className="md:grid m:dgrid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 min-[320px]:flex min-[320px]:flex-col w-full min-[1440px]:w-3/5">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg glassmorphism shadow-lg ">
                            <img className="w-[122px] h-[122px] lg object-cover mb-3 rounded-md" src={image.image} alt={`Slide ${index}`} />
                            <p className="text-center text-lg font-medium">{image.titre}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .glassmorphism {
                    background: rgba(255, 255, 255, 0.4); /* Couleur de fond semi-transparente */
                    backdrop-filter: blur(10px); /* Flou d'arrière-plan */
                    border: 1px solid rgba(255, 255, 255, 0.2); /* Bordure semi-transparente */
                }
            `}</style>
        </div>
    );
}

export default Slidecompet;
