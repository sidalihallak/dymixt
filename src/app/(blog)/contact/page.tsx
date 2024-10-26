import {WixMediaImage} from "@/components/Image/WixMediaImage";

const initialState = {
    message: null,
}

export default async function Page() {

    return (
        <div className="relative">
            <div className="w-full h-[400px] relative">
                <WixMediaImage
                    media="/images/participate.jpg"
                    alt="projects"
                    sizes="100vw"
                    objectFit="cover"
                    disableZoom={true}
                />
            </div>
            <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
                <h1 className="text-center py-8 font-site">Contact</h1>
                <div className="max-w-4xl mx-auto">
                    <form className="border-2 border-blue-site p-8">
                        <div className="flex flex-col sm:flex-row sm:gap-12">
                            <div className="basis-1/2">
                                <label className="text-xs" htmlFor="name">
                                    Prénom *
                                </label>
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    required={true}
                                />
                                <label className="text-xs" htmlFor="email">
                                    Email *
                                </label>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    required={true}
                                />
                            </div>
                            <div className="basis-1/2">
                                <label className="text-xs" htmlFor="lastName">
                                    Nom
                                </label>
                                <input
                                    className="input"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                />
                                <label className="text-xs" htmlFor="phone">
                                    Téléphone
                                </label>
                                <input
                                    className="input"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                />
                            </div>
                        </div>
                        <label className="text-xs" htmlFor="message">
                            Message *
                        </label>
                        <textarea className="input" required={true} name="message" id="message"/>
                        <button className="btn-main w-full mt-6 text-xl" type="submit">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
