import React, { useRef, useState } from 'react'
import { LuTrash, LuUpload, LuUser } from "react-icons/lu";
const Profile = () => {
    const [image, setImage] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const inputRef = useRef(null)

    const handleImageChange =(e)=>{
      const file= e.target.file[0];
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
        className='hidden' />
        {!image ? (
            <div>
                <LuUser />
                <button type='button' onClick={onChooseFile}>
                    <LuUpload/>
                </button>
            </div>
        ):(
            <div>
                <img src={previewUrl} alt="profile pic" />
                <button type='button' onClick={handleImageRemove}><LuTrash/></button>
            </div>
        )}
    </div>
  )
}

export default Profile