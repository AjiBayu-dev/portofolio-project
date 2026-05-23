import { FaBan } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { useLanguage } from "@/context/LanguageContext";

const ErrorPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex gap-5 justify-center items-center animate__animated animate__fadeInUp animate__faster">
      <FaBan className="text-4xl md:text-6xl " />
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
        {t("error.title")}
      </h1>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

export default ErrorPage;
