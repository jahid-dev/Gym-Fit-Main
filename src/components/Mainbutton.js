
export default function Mainbutton({ text, icon }) {
  return (
    <div className='text-lg flex items-center justify-center mt-5'>
      <button className='flex items-center justify-center gap-3 p-3 border-2 z-10 bg-black text-white'>
        {text} {icon}
      </button>
    </div>
  );
}
