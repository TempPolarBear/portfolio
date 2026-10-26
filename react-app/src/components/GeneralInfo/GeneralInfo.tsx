import PersonalInfo from './PersonalInfo'
import Availability from './Availability'
import Contacts from './Contacts'
import SocialMedia from './SocialMedia'
import Languages from './Languages'

function GeneralInfo() {
  return (
    <div>
        <PersonalInfo />
        <Availability />
        <Contacts />
        <SocialMedia />
        <Languages />
    </div>
  )
}

export default GeneralInfo