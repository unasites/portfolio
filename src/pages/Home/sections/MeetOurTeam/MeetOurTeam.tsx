import PageContainer from "@/layout/PageContainer";
import Developer from "./Developer";

const MeetOurTeam = () => {
  const developers = [
    { img: "", name: "Vladyslav Bukator", role: "Web Designer & Developer" },
    { img: "", name: "Luca Mimmo", role: "Web Developer" },
    { img: "", name: "Luisa Cerin", role: "Web Developer" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col py-20">
        <h2 className="text-4xl sm:text-5xl font-normal text-center ">
          Meet our <span className="bg-primary-gradient font-bold bg-clip-text text-transparent">team</span>
        </h2>

        <PageContainer className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-wrap w-full justify-between  gap-12">
            {developers.map((dev) => (
              <Developer key={dev.name} data={dev} />
            ))}
          </div>
        </PageContainer>
    </section>
  );
};

export default MeetOurTeam;
