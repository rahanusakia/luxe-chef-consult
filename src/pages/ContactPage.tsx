
import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";

const ContactPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        backgroundImage="/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact", isCurrent: true }
        ]}
      />
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
