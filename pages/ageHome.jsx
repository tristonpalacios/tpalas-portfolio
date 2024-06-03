import AgeNbar from "../components/ageNavBar";
import AgeAbout from "../components/ageAbout";
import AgeProjects from "../components/ageProjects";
import AgeContactForm from "../components/AgeContact";

export default function ageHome ({posts}) {


    return(
        <main className="AgeApp">
        <AgeNbar />
        <AgeAbout/>
        <div id="projects">
            <AgeProjects />
          </div>
          <div id="ContactForm">
            <AgeContactForm />
          </div>
          
        </main>) 
}