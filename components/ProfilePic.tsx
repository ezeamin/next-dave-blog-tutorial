import Image from "next/image"

const ProfilePic = () => {
  return (
    <Image 
        src="/images/profilePic.png"
        width={200}
        height={200}
        alt="Ezequiel Amin"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    />
  )
}

export default ProfilePic