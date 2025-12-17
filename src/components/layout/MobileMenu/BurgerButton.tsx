import { motion, MotionConfig } from "framer-motion";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const BurgerButton = ({ isOpen, onToggle }: Props) => {
  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onToggle}
        className="relative h-10 w-10 flex flex-col justify-center items-center gap-2.5"
        aria-label="Toggle menu"
      >
        <motion.span
          className="h-[1.5px] bg-white rounded-full w-4.25"
          variants={{
            open: {
              y: 11.5,
              rotate: 45,
              width: 28,
            },
            closed: {
              y: 0,
              rotate: 0,
              width: 17,
            },
          }}
        />
        <motion.span
          className="h-[1.5px] bg-white rounded-full w-6.75"
          variants={{
            open: {
              opacity: 0,
            },
            closed: {
              opacity: 1,
            },
          }}
        />
        <motion.span
          className="h-[1.5px] bg-white rounded-full w-4.25"
          variants={{
            open: {
              y: -11.5,
              rotate: -45,
              width: 28,
            },
            closed: {
              y: 0,
              rotate: 0,
              width: 17,
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default BurgerButton;
