type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const BurgerButton = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      onClick={onToggle}
      className="flex flex-col w-fit h-fit "
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M11.6666 8.33337H28.3333"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66663 20H33.3333"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.6666 31.6666H28.3333"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default BurgerButton;
