import  { useState } from 'react'
import { Title,Text,Form } from './components/firstPage'
import { TextSecondPage,Ticket } from './components/secondPage';
function Application() {
  const [goToNext,setGoToNext] = useState(false)
  const [image,setImage] = useState(null);
  const [Username,setUsername] = useState('');
  const [UserAddress,setUserAddress] = useState('');
  const [Github,setGithub] = useState("");
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