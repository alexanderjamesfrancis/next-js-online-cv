import Image from "next/image";

export default function MainHome() {
  return (
    <div class="flex flex-col brick py-6">
      <div class="container flex flex-col font-serif min-w-full h-screen bg-brick">
        <div class="flex flex-col space-y-6 mx-auto justify-center items-center py-4 p-6">
          <h2 class="font-semibold text-center text-4xl">
            Welcome to the CV of Alexander James Francis
          </h2>
          <h4 class="font-base text-2xl">Just Alex is fine though!</h4>
        </div>

        <div class="flex justify-center items-center mx-auto h-1/2 w-1/2 md:h-[400px] md:w-[400px]">
          <Image
            src="/images/alex_image-modified.png"
            width={100}
            height={100}
            class=""
            alt=""
          />
        </div>
        <div>
          <h5 class="text-lg mt-16 text-center font-semibold">
            An Aspiring Web Developer and Programmer
          </h5>
        </div>
      </div>
    </div>
  );
}
