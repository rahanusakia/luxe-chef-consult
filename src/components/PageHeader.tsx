import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: {
    label: string;
    href: string;
    isCurrent?: boolean;
  }[];
}
const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs
}: PageHeaderProps) => {
  return <div className="relative bg-cover bg-center py-28" style={{
    backgroundImage: `url("${backgroundImage}")`
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-chef-darker/95 to-chef-darker/90"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title.split(" ").map((word, i, arr) => i === arr.length - 1 ? <span key={i}><span className="text-gold-light">{word}</span></span> : <span key={i}>{word} </span>)}
        </h1>
        {subtitle && <p className="text-white/70 max-w-3xl mx-auto mb-6">{subtitle}</p>}
        <div className="flex items-center justify-center text-sm md:text-base text-white/80 space-x-2">
          {breadcrumbs.map((item, index) => {})}
        </div>
      </div>
    </div>;
};
export default PageHeader;