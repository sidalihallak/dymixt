import {WixMediaImage} from "@/components/Image/WixMediaImage";

export default async function About() {
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
                <h1 className="text-center py-8 font-site">Qui somme nous</h1>
                <p className="py-6 max-w-3xl text-lg mx-auto">
                    <div>
                        <p>Cette association sportive est née en février 2017, elle est issue du projet "ISAP"
                        (Inclusion sociale par l'activité physique) que mène le comité régional Sports Pour tous depuis
                        10 ans, pour les adultes en situation de précarité.</p>
                        <p>L'association DYNAMIXT a été créée par un ensemble d'acteurs (adhérents, bénévoles,
                            professionnels du social et du sport) souhaitant donner une dimension plus participative au
                            projet ISAP.</p>
                        <p>Il s'agît, individuellement et collectivement, de prendre conscience des rapports sociaux et
                            de construire une force collective, apte à imaginer et à agir pour une transformation
                            sociale.</p>
                        <p>Les 3 domaines de l’association Dynamixt :</p>
                        <p>1. Le projet « inclusion sociale par l’activité physique » est destiné à accueillir les
                            adultes en situation de précarité de l’agglomération nantaise. L’idée est de proposer des
                            activités physiques qui correspondent aux besoins et envies de chacun, pour favoriser
                            l’estime de soi, s’orienter vers une pratique régulière, et s’impliquer dans l’organisation
                            du projet.</p>
                        <p>Chaque année, environ 300 personnes participe. Elles sont en général orientées par la
                            quinzaine de structures sociales qui adhèrent au projet.</p>
                        <p>Les activités : multisports, gym, marche, course, apprentissage vélo et natation, programme
                            sports et alimentation, événements…</p>
                        <p>2. Le cours du mardi soir (tout public) accueille des adultes qui ont envie de pratiquer une
                            activité de loisirs multisports, sans esprit de compète, dans la convivialité et l’échange,
                            et avec parfois de l’intensité.</p>
                        <p>Les adhérents de cette séance sont des « jeunes et des moins jeunes » entre 20 à 40 ans, pour
                            l’instant !</p>
                        <p>Vous êtes dans la vie active, sans emploi, vous venez du projet social cité ci-dessus ? Ce
                            cours a pour objectif de réunir tout le monde.</p>
                        <p>3. Les actions santé : une séance axée sur l’équilibre pour les seniors et d’une séance
                            bien-être et santé du dos.</p>
                        <p>&nbsp;</p>
                        <p>Notre association a pour objectif principal de favoriser l'inclusion sociale par l'activité
                            physique. Elle s'adresse donc à des personnes en situation de précarité, quelque soit sa
                            forme.&nbsp;Il s'agit aussi de rompre la solitude, créer du lien social, de développer de la
                            mixité et des relations de qualité entre tous.</p>
                        <p>A travers nos activités hebdomadaires nous cherchons à favoriser l’estime de soi chez les
                            participants, par la prise en main de sa santé, et par l’implication dans l’organisation du
                            projet. Nous proposons diverses activités : multisports, renforcement musculaire, marche,
                            sorties diverses...</p>
                        <p>Nous cherchons constamment à impliquer nos participants réguliers dans l'organisation de
                            l'association, cela va d'un accueil de nouveaux membres à l'intégration du conseil
                            d'administration.</p>
                        <p>La remobilisation de nos membres est un fondamental de notre activité.</p>
                    </div>
                </p>
            </div>
        </div>
    );
}
