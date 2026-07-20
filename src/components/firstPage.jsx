import { useState } from "react"
import logoFull from "../assets/logo-full.svg";
import iconUpload from "../assets/icon-upload.svg";
import infoIcon from "../assets/icon-info.svg";
import infoIconRed from "../assets/icon-info-red.svg";
const inputDesign = "bg-white/10 border-white/50 border-2 rounded-md p-1 w-full"
export function Title(){
    return(
        <header className="mb-8">
            <div className="flex justify-center items-center">
                <img src={logoFull}  alt="the logo" className=""/>
                
            </div>
        </header>
    )
}

export function Text(){
    return(
        <div className="space-y-3">
            <p className="font-bold text-4xl text-white text-center ">Your Journey to Coding Conf <br /> 2025 Starts Here!</p>
            <p className="text-neutral-300">Secure your spot at next year's biggest coding conference.</p>
        </div>
    )
}
export function Form({setUsername,setUserAddress,setGithub,setImage,setGoToNext}){
    const [Ok,setOK] = useState(false);
    const [IsErrorText,setIsErrorText] = useState("");
    const [isError,setIsError]= useState(false);
    const [IsUploaded,setIsUploaded]= useState(false);
    const [newPhoto,setNewPhoto] = useState(null);
    const getPhoto = (e)=>{
        const file = e.target.files[0];
        const max = 500*1024;
        if(file && file.size<=max){
            if(file.type=="image/jpeg" || file.type=="image/png"){
                const imageURL = URL.createObjectURL(file);
                setNewPhoto(imageURL);
                setIsUploaded(true);
                console.log("Url crée");
                setIsError(false);
            }
            else{
                setIsError(true);
                setIsErrorText("Please upload a JPG or PNG file");
            }
        }
        else{
            setIsError(true);
            setIsErrorText("Please upload a file under of 500KB");
        }
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const nameValue = formData.get("name");
        const mailValue = formData.get("email"); 
        const githubValue = formData.get("github");
        if(nameValue.trim()==""|| githubValue.trim()=="" || newPhoto==null || Ok==false){
            alert("Please complete all fields");
            return;
        }
        setUsername(nameValue);
        setUserAddress(mailValue);
        setGithub(githubValue);
        setImage(newPhoto);
        setGoToNext(true);
        console.log(nameValue,mailValue,githubValue);
    }

    return(
        <form onSubmit={handleSubmit} action="#" className="text-white justify-center items-center p-10 space-y-5">
            <div>
                <span className="font-medium">Upload Avatar</span>
                <div className="">
                    <div className="bg-white/10 rounded-xl h-25 border-2 border-white/50 border-dashed hover:bg-white/20 " >
                        <label htmlFor="image" className="w-full" >
                            <div >
                                <div className="flex flex-col justify-center items-center  " hidden={IsUploaded}>
                                    <div className="bg-white/10 rounded-xl mt-2 "><img src={iconUpload} alt="" className="h-12 w-12"/></div>
                                    <div>
                                        <p>Drag and drop or click to upload </p>
                                    </div>
                                </div>
                                <div  className="flex flex-col justify-center items-center mt-2 "  hidden={!IsUploaded}>
                                    {newPhoto &&(
                                        <div className="bg-white/10 rounded-xl mb-2  "><img src={newPhoto} alt="Avatar" className="h-12 w-12 "/></div>
                                    )}
                                    <div className="flex gap-4 ">
                                        <button className="bg-white/15 px-1 rounded-md hover:underline " type="button" onClick={()=>setNewPhoto(null)}>Remove image</button>
                                        <button className="bg-white/15 px-1 rounded-md hover:underline "type="button" onClick={()=>document.getElementById('image').click()}>Change image</button>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <input type="file" id="image" name="image"  onChange={getPhoto} hidden />
                    </div>
                </div>
                <div className="flex gap-1 justify-start items-center" hidden={isError} >
                    <div className="flex">
                        <img src={infoIcon} alt="icon-info" className="" />
                    </div>
                    <div className="text-sm">Upload your photo (JPG or PNG, max size: 500KB).</div>
                </div>
                <div className="flex gap-1 justify-start items-center" hidden={!isError}>
                    <div className="flex "><img src={infoIconRed} alt="" /></div>
                    <div className=" text-sm  text-red-600">{IsErrorText} </div>
                </div>
            </div>
            <GetName />
            <GetEmail/>
            <GetGithub setOK={setOK} />
            <BtnSubmit />
        </form>
    )
}
const GetName = ()=>{

    return(
        <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-xl ">Full Name</label>
            <div>
                <input type="text" id="name" name="name" className={inputDesign} />
            </div>
        </div>
    )
}
const GetEmail = ({setOK})=>{
    const [IsErrorText,setIsErrorText] = useState("");
    const [error,setError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmailChange = (event) => {
        const userValue = event.target.value;

        setEmail(userValue); 
        setIsErrorText("");
        setError(false) 

        
        if (userValue.length > 0 && !emailRegex.test(userValue)) {
            setError(true);
            setIsErrorText("Please enter a valid email address");
        }
        else{
            setError(false);
            setOK(true):
            
            
        }
    };
    return(
        <div className="flex flex-col "> 
            <label htmlFor="email" className=" font-medium text-xl ">Email Address </label>
            <div >
                <input type="text" id="email" name="email" className={`bg-white/10 ${error ? "border-white/50" : "border-red-600" } border-2 rounded-md p-1 w-full `} onChange={handleEmailChange} placeholder="example@email.com"/>
            </div>
            
            {error &&
            (<div className="flex gap-0.5 items-center"  >
                <img src={infoIconRed} alt="info-icon" className="h-4"/>
                <p className="text-sm text-red-600">{IsErrorText}</p>
            </div>)}
        </div>
    )
}
const GetGithub = ()=>{

    return(
        <div className="flex flex-col">
            <label htmlFor="github" className="font-medium text-xl ">Github Username</label>
            <div className="hover:border-white/50">
                <input type="text" id="github" name="github" className={inputDesign}  placeholder="@yourusername"/>
            </div>
        </div>
    )
}
const BtnSubmit = ()=>{
    
    return(
        <div className="flex justify-center mt-5 ">
            <button type="submit" className="bg-[var(--Orange-700)] hover:bg-[var(--Orange-500)]  p-2  rounded-md disabled:bg-gray-700 " >Generate My Ticket</button>
        </div>
    )
} 
