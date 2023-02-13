import Image from "next/image";
import Link from "next/link";





export default function CardBuilder(data) {
    //console.log(data);

const {link,desktopImage,mobileImage,cardName,description} = data.data





  return (
    <div className="group item h-52 md:h-full md:w-full align-center hover:cursor-pointer">
      <Link href={link}>
        <Image
          src={desktopImage}
          className="hidden min-h-full duration-200 md:block group-hover:scale-110 object-cover aspect-[2/3]"
          width={300}
          height="3000"
          
          alt="placeholder"
        />

        <Image
          src={mobileImage}
          width="2000"
          height="2000"
          className="md:hidden object-fill h-full w-full"
          alt=""
        />

        <div className="item-gradient"></div>

        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
          {cardName}
        </h5>

        <div className="hidden group-hover:block transition duration-200 absolute px-6 group-hover:text-black  top-8 mx-auto text-center md:px-10">
          <p className="pb-6 text-sm md:text-xl">
            {description}
          </p>
        </div>
      </Link>
    </div>
    // <div></div>
  );
}
