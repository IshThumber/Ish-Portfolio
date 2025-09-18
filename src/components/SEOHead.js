import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title = "Ish Thumber - AWS Community Builder & DevTools Specialist",
  description = "AWS Community Builder specializing in cloud architecture, DevOps, and full-stack development. Expert in Terraform, Kubernetes, React, and modern web technologies.",
  keywords = "AWS Community Builder, Cloud Architecture, DevOps, Full-Stack Developer, Terraform, Kubernetes, React, Node.js, Python, DevTools",
  image = "/profile.png",
  url = "https://ishthumber.dev"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ish Thumber",
    jobTitle: "AWS Community Builder - DevTools",
    description: description,
    url: url,
    image: image,
    sameAs: [
      "https://github.com/IshThumber",
      "https://linkedin.com/in/ishthumber",
      "https://x.com/IshThumber",
      "https://medium.com/@ishthumber"
    ],
    knowsAbout: [
      "AWS Cloud Architecture",
      "DevOps Engineering",
      "Full-Stack Development",
      "Terraform",
      "Kubernetes",
      "React.js",
      "Node.js",
      "Python",
      "Generative AI",
      "LangChain"
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Community Builder",
        credentialCategory: "AWS Community Program"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Solutions Architect",
        credentialCategory: "AWS Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Terraform Associate",
        credentialCategory: "HashiCorp Certification"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ish Thumber" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ish Thumber Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@IshThumber" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
