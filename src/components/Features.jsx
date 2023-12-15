import left from '/public/home/left.svg';
import right from '/public/home/right.svg';
import bottomLeft from '/public/home/bottom-left.svg';
import bottomRight from '/public/home/bottom-right.svg';
import ShadowContainer from './ShadowContainer';

const Features = () => {
  const features = [
    {
      title: 'Screen Max',
      des: 'Get the most out of your screen space, automatically',
      borderClasses: '',
      borderImg: left
    },
    {
      title: 'Layout Pro',
      des: 'Create a custom layout profile from current table disposition at any time',
      borderClasses: 'right-0',
      borderImg: right
    },
    {
      title: 'Mouse Focus',
      des: 'Focus Tables Under Mouse for easier control and actions',
      borderClasses: 'bottom-0',
      borderImg: bottomLeft
    },
    {
      title: 'Table Control',
      des: 'Move Tables Around with Hotkeys or Drag & Drop Snap for precise control',
      borderClasses: 'bottom-0 right-0',
      borderImg: bottomRight
    }
  ];
  return (
    <ShadowContainer>
      <div className="absolute -z-10 w-[400px] h-[400px] rounded-full blur-[200px] opacity-50 bg-redBoxGradient -bottom-32 -left-36"></div>
      <div className="max-w-featuresWidth mx-4 md:mx-auto mt-28 lg:mt-48">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 lg:mb-8">Features</h2>
        <div className="grid gap-5 grid-cols-2">
          {features.map((feature, i) => {
            return (
              <div key={i} className="bg-cardBg rounded-lg relative">
                <img src={feature.borderImg.src} className={`absolute ${feature.borderClasses}`} />
                <div className="px-3.5 py-5 lg:p-8 max-md:text-center">
                  <img src={`/home/Icon${i + 1}.svg`} className="max-md:mx-auto w-8 md:w-12" />
                  <h2 className="text-lg md:text-2xl font-bold mt-3.5 mb-2 md:mt-6 md:mb-3.5">{feature.title}</h2>
                  <p className="text-sm md:text-lg font-normal">{feature.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ShadowContainer>
  );
};

export default Features;
