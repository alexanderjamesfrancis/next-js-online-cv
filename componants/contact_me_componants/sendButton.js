import Image from "next/image";

export default function SendButton(props) {
  return (props.click === false ?
    
      <div className="flex flex-row space-x-2 bg-white hover:bg-gray-600 transition ease-in hover:text-white border-2 m-4 px-6 py-2 border-black rounded-full">
        <button className="" type="submit">
          Send
        </button>
        <Image
          width="20"
          height="20"
          src="/icons/envelope-solid.svg"
          alt="msg-img"
        />
      </div>

   : 
      <div className="flex flex-row space-x-2 bg-gray-600 transition ease-in text-white border-2 m-4 px-6 py-2 border-black rounded-full">
        <p>
          Message Sent
        </p>
      </div>
  )}

