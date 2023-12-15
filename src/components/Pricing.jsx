import React from 'react';

const Pricing = () => {
  const packages = [
    {
      name: 'Month',
      price: '12',
      cardOpacity: true,
      options: ['Unlimited folders & ranges', 'Unlimited colors for cells', 'Assigning weights for hands', 'Import from Flopzilla, Equilab, Pio, HRC and more', 'Range Trainer']
    },
    {
      name: 'Year',
      price: '100',
      cardOpacity: false,
      options: ['Unlimited folders & ranges', 'Unlimited colors for cells', 'Assigning weights for hands', 'Import from Flopzilla, Equilab, Pio, HRC and more', 'Range Trainer']
    }
  ];
  return (
    <section className="max-w-featuresWidth mx-4 md:mx-auto mt-32">
      <h2 class="font-bold text-2xl md:text-5xl text-center mb-3.5">Pricing</h2>
      <p class="text-sm md:text-2xl text-center mb-6 md:mb-8">Download & Start a Trial. No Register Required</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {packages.map((pack, i) => {
          return (
            <div key={i} class={`bg-cardBg ${pack.cardOpacity ? 'opacity-50' : ''} rounded-lg p-5 md:p-8`}>
              <div class="flex justify-between md:mb-8 mb-5">
                <h2 class="text-2xl md:text-3xl font-bold">{pack.name}</h2>
                <p class="text-priceColor text-[24px] font-bold pt-1 text-xl">${pack.price}</p>
              </div>
              {pack.options.map((option, i) => {
                return (
                  <div key={i} class="flex gap-3.5 mb-2 md:mb-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.54998 18.0001L3.84998 12.3001L5.27498 10.8751L9.54998 15.1501L18.725 5.9751L20.15 7.4001L9.54998 18.0001Z" fill="#4CB033" />
                    </svg>
                    <p class="text-lg">{option}</p>
                  </div>
                );
              })}
              <div class="text-center">
                <button class="text-lg bg-buttonGradient cursor-pointer py-3.5 px-16 rounded-full mx-auto mt-3 md:mt-5 hover:opacity-80">Buy License</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
