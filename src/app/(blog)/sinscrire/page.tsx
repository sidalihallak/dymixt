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
        <h1 className="text-center py-8 font-site">Nous rejoindre</h1>
              <div>
                  <p><strong>COMME USAGER:</strong></p>
                  <p>L'inscription se fait uniquement sur place avec un dossier papier contenant :</p>
                  <ol>
                      <li>La licence (donné sur place)</li>
                      <li>Un certificat médical ou l'attestation de non contre-indication à la pratique sportive (nous somme en partenariat avec un médecin si besoin)</li>
                      <li>Le règlement en espèce ou par chèque bancaire</li>
                  </ol>
                  <p>&nbsp;</p>
                  <p><strong>COMME BENEVOLE:</strong></p>
                  <p>DEVENIR BÉNÉVOLE, UN GESTE SIMPLE.<br/>
                      Vous souhaitez vous investir auprès de notre association et vous vous posez de nombreuses questions: Est-ce vraiment fait pour moi ? Puis-je concilier cet engagement avec mon emploi du temps ? Comment valoriser cette expérience ? Étudiants, salariés, retraités, demandeurs d’emploi… Rassurez-vous ! Tout le monde peut devenir bénévole, et c’est bien plus simple qu’on ne le pense.</p>
                  <p>VALORISER MON EXPÉRIENCE<br/>
                      Savez-vous que vous pouvez valoriser cette expérience dans de nombreuses situations ? Recherche d’emploi, acquisition d’un diplôme ou reconversion professionnelle, le bénévolat, c’est aussi une porte d’entrée vers de nombreuses opportunités…</p>
                  <p><strong>N'hésitez pas à prendre contact avec nous pour en savoir plus.</strong></p>
                  <p>&nbsp;</p>
              </div>
                  </div>
    </div>
  );
}
