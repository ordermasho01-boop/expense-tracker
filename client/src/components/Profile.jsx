import React, { useRef, useState } from 'react'
import { LuTrash, LuUpload, LuUser } from "react-icons/lu";
const Profile = () => {
    const [image, setImage] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const inputRef = useRef(null)

    const handleImageChange =(event)=>{
      const file= event.target.files[0];
      if(file){
        //update image state
        setImage(file);
        //generate preview url
        const preview = URL.createObjectURL(file)
        setPreviewUrl(preview);
      }
    };
   
    const handleImageRemove =()=>{
        setImage(null)
        setPreviewUrl(null)
    }
    const onChooseFile =()=>{
        inputRef.current.click();
    }
  return (
    <div className='flex justify-center mb-6'>
        <input type="file" accept='image/*'
       
        onChange={handleImageChange}
        className='hidden' ref={inputRef} />
        {!image ? (
            <div className=' flex flex-col justify-center items-center w-20 h-20 rounded-full bg-white'>
                <LuUser className='h-10 w-10 bg-white '/>
                <button type='button' onClick={onChooseFile} className='h-10 w-10 -mb-8 '>
                    <LuUpload className='h-10 w-10 bg-gray-200 rounded-full p-2'/>
                </button>
            </div>
        ):(
            <div className='flex items-center '>
                <img src={previewUrl} alt="profile pic" className='w-20 h-20 rounded-full object-cover ' />
                <button type='button' onClick={handleImageRemove} className='-mb-16 -ml-8 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center p-0 -pb-§ '><LuTrash className='bg-transparent text-white font-bold '/></button>
            </div>
        )}
    </div>
  )
}

export default Profile