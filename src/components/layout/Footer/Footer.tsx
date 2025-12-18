import Logo from "@/components/icons/Logo";
import PageContainer from "@/layout/PageContainer";

const Footer = () => {
  const utilityLinks = [
    { name: "Contacts", href: "" },
    { name: "FAQ", href: "" },
    { name: "Social", href: "" },
  ];

  const dataLinks = [
    { name: "Terms of Service", href: "" },
    { name: "Privacy Policy", href: "" },
  ];

  return (
    <footer className="h-auto md:h-80 w-screen py-10 md:py-20 flex flex-col justify-between gap-10 md:gap-0">
      <div className="flex flex-col w-full items-center">
        <Logo size={120} />
      </div>
      <PageContainer className="max-w-none w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex gap-6 md:gap-10 flex-wrap justify-center md:justify-start">
          {utilityLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-normal text-base text-text-muted hover:text-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-6 md:gap-10 flex-wrap justify-center md:justify-end">
          {dataLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-normal text-base text-text-muted hover:text-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
