import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {

  
  return (
    <button
      className={clsx(
        "px-[9px] py-[8.5px] text-[12px] lg:text-[14px] leading-none font-medium lg:px-[16.5px] lg:py-[18.5px] tracking-wide capitalize transition-colors duration-300 transform bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
 
export default Button;