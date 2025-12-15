type DeveloperItem = {
  img: string;
  name: string;
  role: string;
};
type DeveloperProps = {
  data: DeveloperItem;
};

const Developer = ({ data }: DeveloperProps) => {
  return (
    <div
      className="rounded-full bg border border-[#1A1A1A] shadow-[0_0_100px_16px_rgba(26,26,26,0.5)]
            will-change-transform h-120 w-60 flex flex-col items-center justify-end gap-0.5 text-center p-10"
    >
      <p className="text-base font-bold ">{data.name}</p>
      <p className="text-text-muted text-base leading-tight">{data.role}</p>
    </div>
  );
};

export default Developer;
