import Layout from "@/components/Layout";

import type { FC } from "react";
import {WixMediaImage} from "@/components/Image/WixMediaImage";

const Admin: FC = () => {
  return (
    <>
      <Layout>
          <div className="mx-auto relative sm:px-20 py-5">
              <div className="text-center w-full relative">
                  <div
                      className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
                  <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
                      <source
                          src="/videos/presentation.mp4"
                          type="video/mp4"
                      />
                  </video>
                  <div
                      className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
                      <h1 className="sm:text-[90px] sm:leading-[90px]">
                          L'inclusion sociale par le sport
                      </h1>
                      <h2 className="sm:text-4xl mb-4">ça fonctionne !</h2>
                  </div>
                  <div
                      className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
                      <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
                          Agissez pour nous aider à grandir
                      </h3>
                      <a
                          href="https://www.soutienstonclub.fr/events/ki0ooggn"
                          className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
                      >
                          faire un don
                      </a>
                  </div>
              </div>
              <div className="flex sm:mt-32 mb-12 sm:gap-12 flex-col sm:flex-row">
                  <div className="basis-1/3">
                      <div className="h-[370px] relative">
                          <WixMediaImage
                              media="/images/activity.jpg"
                              objectFit="cover"
                              sizes="50vw"
                              disableZoom={true}
                          />
                      </div>
                      <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
                          <h3 className="text-2xl font-site">Nos activités</h3>
                          <p className="my-6 text-sm">
                              La licence de 14 euros à l'année permet de faire l'ensemble des activités mis à part le
                              multisport du mardi soir et la gym bien-être et santé du dos du mercredi matin.
                          </p>
                          <a
                              href="/projects"
                              className="text-purple-site py-6 font-site"
                          >
                              En savoir plus
                          </a>
                      </div>
                  </div>
                  <div className="basis-2/3">
                      <div className="h-[370px] relative">
                          <WixMediaImage
                              media="/images/misson3.jpg"
                              objectFit="cover"
                              sizes="100vw"
                              disableZoom={true}
                          />
                      </div>
                      <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
                          <h3 className="text-2xl font-site">Notre mission</h3>
                          <p className="my-6 text-sm">
                              Le projet « inclusion sociale par l’activité physique » est destiné à accueillir les adultes
                              en situation de précarité de l’agglomération nantaise. L’idée est de proposer des activités
                              physiques qui correspondent aux besoins et envies de chacun, pour favoriser l’estime de soi,
                              s’orienter vers une pratique régulière, et s’impliquer dans l’organisation du projet.
                          </p>
                          <a href="/about" className="text-purple-site py-6 font-site">
                              En savoir plus
                          </a>
                      </div>
                  </div>
              </div>
              <div className="flex sm:mt-32 mb-12 sm:gap-12 flex-col sm:flex-row">
                  <div className="basis-2/3">
                      <div className="h-[370px] sm:h-[470px] relative">
                          <WixMediaImage
                              media="/images/mission.jpg"
                              objectFit="cover"
                              sizes="100vw"
                              disableZoom={true}
                          />
                      </div>
                      <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
                          <h3 className="text-2xl font-site">Actualités</h3>
                          <p className="my-6 text-sm">
                              Tenez-vous au courant de nos actualités récentes.
                          </p>
                          <a href="/news" className="text-purple-site py-6 font-site">
                              En savoir plus
                          </a>
                      </div>
                  </div>
                  <div className="basis-1/3">
                      <div className="h-[370px] sm:h-[470px] relative">
                          <WixMediaImage
                              media="/images/participate.jpg"
                              objectFit="cover"
                              sizes="50vw"
                              disableZoom={true}
                          />
                      </div>
                      <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
                          <h3 className="text-2xl font-site">Participer</h3>
                          <p className="my-6 text-sm">
                              Nous acceptons les contributions sous quelque forme qu’elles viennent. Que vous souhaitiez
                              consacrer de votre temps en tant que bénévole, nous rejoindre en tant que partenaire ou
                              faire don pour nous aider, il y a toujours une opportunité de faire une différence.
                          </p>
                          <a href="/contact" className="text-purple-site py-6 font-site">
                              En savoir plus
                          </a>
                      </div>
                  </div>
              </div>
              <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
                  2023 en chiffres
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
                  <div className="relative text-center sm:text-left">
                      <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">295</span>
                      <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]">Personnes<br/>participés</span>
                  </div>
                  <div className="relative text-center sm:text-left">
                      <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">152</span>
                      <span
                          className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-white">séances<br/>realisé
                    </span>
                  </div>
                  <div className="relative text-center sm:text-left">
                      <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">76</span>
                      <span
                          className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-white">don de<br/>matériel sportif
                    </span>
                  </div>
              </div>

          </div>
      </Layout>
    </>
  );
};

export default Admin;
