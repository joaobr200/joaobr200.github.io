import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import certificates from "./certificates";
import { FaMedal } from "react-icons/fa";
import {
  Container,
  CertificateContent,
  CertificateWrapper,
  CertificateIcon,
} from "./styles";

const Certificates: React.FC = () => {
  const router = useRouter();
  function handleClickNavigateToCertificate(url: string) {
    router.push(url, "certificado", { shallow: true });
  }

  return (
    <Container className="container">
      <div>
        <h1 className="title">Certificados</h1>
      </div>
      <CertificateContent>
        {certificates.map(({ name, school, imageUri, url }) => (
          <CertificateWrapper
            key={name}
            onClick={() => handleClickNavigateToCertificate(url)}
          >
            <header>
              {imageUri ? (
                <Image
                  src={imageUri}
                  alt="certificate"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Image
                  src={"/assets/sample-certificate.svg"}
                  alt="certificate"
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              )}
            </header>
            <div className="body">
              <p className="school">{school}</p>
              <p>{name}</p>
            </div>
            <CertificateIcon>
              <FaMedal fontSize={32} />
            </CertificateIcon>
          </CertificateWrapper>
        ))}
      </CertificateContent>
    </Container>
  );
};

export default Certificates;
