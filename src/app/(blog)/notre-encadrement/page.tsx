import {WixMediaImage} from "@/components/Image/WixMediaImage";



export default async function Team() {

    return (
        <div className="relative">
            <div className="w-full h-[400px] relative">
                <WixMediaImage
                    media="/images/about.jpg"
                    alt="projects"
                    sizes="100vw"
                    objectFit="cover"
                    disableZoom={true}
                />
            </div>
            <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
                <h1 className="text-center py-8 text-site font-site">Notre encadrement</h1>
                <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
                    Dynamixt est plus qu'une organisation. C'est une famille de gens passionnées et dévouées qui
                    partagent une vision et une mission communes : l'inclusion sociale par l'activité physique.
                    Rencontrez certains des membres exceptionnels de notre équipe ci-dessous et apprenez-en davantage
                    sur leurs rôles.
                </p>
                <div
                    className="grid grid-cols-1 sm:grid-cols-4 gap-5 grid-flow-row mt-10"
                >
                    {/*team?.data.map((item) => (
                        <div key={item.id} className="p-4 relative">
                            <div className="w-[300px] h-[220px] relative">
                                <WixMediaImage
                                    media={item.attributes.image.data ? "http://localhost:1337" + item.attributes?.image?.data?.attributes?.url : "/images/placeholder.jpg"}
                                    alt={item?.attributes?.name}
                                    objectFit="cover"
                                />
                            </div>
                            <div
                                className="bg-white sm:mt-[-48px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                                <h2 className="mb-10 font-site">{item?.attributes?.name}</h2>
                                <p className="text-sm mb-6">{item?.attributes?.about}</p>
                                <span>{item?.attributes?.email}</span>
                            </div>
                        </div>
                    ))
                    */}
                </div>
                <h1 className="text-center py-8 text-blue-site mt-8 font-site">
                    Organigramme
                </h1>
                <WixMediaImage media="/images/organigrame.png" />

            </div>
        </div>
    );
}
