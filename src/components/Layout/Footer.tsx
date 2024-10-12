'use client';
import './footer.css';
import {WixMediaImage} from "@/components/Image/WixMediaImage";
import {useRouter} from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('https://cd.sportspourtous.org/loire-atlantique');
  };
  return (
      <footer
          className="m-h-56 leading-7 sm:p-14 font-site"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="basis-2/3 bg-blue-site text-white p-14 sm:pl-44">
            <h2 className="text-2xl sm:text-3xl font-bold">CONTACTEZ-NOUS</h2>
            <div className="flex flex-col sm:flex-row text-sm font-helvetica">
              <div className="basis-1/3 border-b border-white pb-4">
                <p className="mt-10">
                  Veuillez nous contacter pour toute question ou préoccupation. Nous serons heureux d'avoir de vos nouvelles.
                </p>
                <p className="mt-10">Clubs
                  Sports pour Tous
                  DYNAMIXT
                </p>
              </div>
              <div className="basis-1/3"></div>
              <div className="basis-1/2 border-b border-white pb-4">
                <p className="mt-10">
                  38 RUE DE LA CROIX SOURDEAU

                  CHEZ CINDY GOURMELON

                  44230 ST SEBASTIEN SUR LOIRE
                </p>
                <p className="mt-10">Tél. 06 07 31 07 17</p>
              </div>
            </div>
            <p className="mt-10">presidentdynamixt44@gmail.com</p>
          </div>
          <div className="basis-1/3 bg-gray-200 p-14 text-center">
            <p className="mt-6 mb-6">Suivez nous sur nos reseaux sociaux</p>
            {/*
                <a
                    className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150 ml-1"
                    href={data.social.facebook}
                    target="_blank"
                >
                  <FaFacebookF
                      className="h-7 w-auto bg-blue-site-500 dark:bg-blue-site-400 hover:bg-blue-site-300"
                  />
                </a>
            )*/}

            <div onClick={handleClick} className="mt-20" style={{ cursor: 'pointer' }}>
              <WixMediaImage objectFit={undefined} media="/images/sportpourtous-la.png" />
            </div>
          </div>
        </div>
        <div className="mx-auto text-center sm:text-xs mt-6">
          <p className="font-default mb-10">
            © 2024 Dynamixt
          </p>
        </div>
      </footer>
  );
};

export default Footer;
