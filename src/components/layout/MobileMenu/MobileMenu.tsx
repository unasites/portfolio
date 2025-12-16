import NavLinks from "@/components/navigation/NavLinks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md">
      <div className="flex flex-col gap-6 p-6">
        <NavLinks onClick={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
