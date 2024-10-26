import {WixMediaImage} from "@/components/Image/WixMediaImage";

export default async function Projects() {

    return (
        <div className="relative">
            <div className="w-full h-[400px] relative">
                <WixMediaImage
                    media="/images/activity.jpg"
                    alt="projects"
                    sizes="100vw"
                    objectFit="cover"
                    disableZoom={true}
                />
            </div>
            <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
                <h1
                    className="text-center py-8 font-site"
                >
                    Nos activités
                </h1>
                <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
                    Les activités proposées par Dynamixt:

                    (La licence de 14 euros à l'année permet de faire l'ensemble des activités mis à part le multisport
                    du mardi soir et la gym bien-être et santé du dos du mercredi matin.)
                </p>
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10"
                >
                    {/*items?.data.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 relative"
                        >
                            <div className="sm:w-[370px] h-[320px] relative">
                                <WixMediaImage
                                    media={item.attributes.cover.data ? "http://localhost:1337" + item.attributes?.cover?.data?.attributes?.url : "/images/placeholder.jpg"}
                                    alt={item.attributes?.title}
                                    objectFit="cover"
                                />
                            </div>
                            <div
                                className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                                <h2 className="mb-10 font-site">{item.attributes?.title}</h2>
                                {item.attributes?.description && <RichText content={item.attributes?.description}/>}
                            </div>
                        </div>
                    ))*/}
                </div>
            </div>
        </div>
    );
}
