import  { useState } from 'react'
import { Title,Text,Form } from './components/firstPage'
import { TextSecondPage,Ticket } from './components/secondPage';
function Application() {
<<<<<<< HEAD
  const [goToNext,setGoToNext] = useState(true)
  const [image,setImage] = useState(null);
  const [Username,setUsername] = useState('satevdvdbvbvbbchgfbf');
  const [UserAddress,setUserAddress] = useState('hhggrvgddbbhbgffgfggh');
  const [Github,setGithub] = useState("kkhjjgngvdvdbvfbbbnn,,,");
=======
  const [goToNext,setGoToNext] = useState(false)
  const [image,setImage] = useState(null);
  const [Username,setUsername] = useState('');
  const [UserAddress,setUserAddress] = useState('');
  const [Github,setGithub] = useState("");
>>>>>>> 490ca9ce88a35ac5d9448faadd7c942c86004664
  return (
    <div>
      <Title />
      <div hidden={goToNext}>
        <Text/>
        <Form setUsername={setUsername} setUserAddress={setUserAddress} setGithub={setGithub} setImage={setImage} setGoToNext={setGoToNext} />
      </div>
      <div hidden={!goToNext}  >
    <TextSecondPage Username={Username} UserAddress={UserAddress} />
    <Ticket Username={Username} UserAddress={UserAddress} Github={Github} image={image}/>
      </div>
    </div>
  )
}

export default Application