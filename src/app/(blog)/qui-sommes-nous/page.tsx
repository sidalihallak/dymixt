import {WixMediaImage} from "@/components/Image/WixMediaImage";
import aboutUsContent from "@/lib/about-us-page";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "@/components/MDXContent";

export default async function About() {
    const source = await serialize(aboutUsContent.content)
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
                <h1 className="text-center py-8 font-site">{aboutUsContent.title}</h1>
                <p className="py-6 max-w-3xl text-lg mx-auto">
                    <MDXContent source={source} />
                </p>
            </div>
        </div>
    );
}
