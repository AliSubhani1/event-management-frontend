import React, { ReactNode } from 'react';
import { ButtonColor } from '../../Utils/constants';

type CustomButtonProps = {
  id?: string;
  className?: string;
  colorClass?: ButtonColor;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  type?: 'submit' | 'button';
};

const CustomButton: React.FC<CustomButtonProps> = ({
  id,
  onClick,
  disabled,
  className,
  colorClass,
  children,
  type = 'button',
}) => {
  return (
    <button
      id={id}
      className={`rounded-[10px] px-2 py-2 min-w-[140px] text-sm ${className} ${colorClass} ${
        disabled ? 'opacity-40 hover:!opacity-40' : ''
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center justify-center space-x-2">{children}</div>
    </button>
  );
};

export default CustomButton;
