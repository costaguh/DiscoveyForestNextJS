import Image from "next/image";

export function Images() {
  return (
    <section className="mt-14">
      <div className="flex">
        <Image
          className="pl-14 mb-10"
          src="/1.png"
          width={350}
          height={300}
          alt="1"
        />
        <Image
          className="pl-8 mt-20"
          src="/2.png"
          width={350}
          height={300}
          alt="2"
        />
      </div>
      <div className="flex ml-6 ml-[-380px] mt-[40px]">
        <Image
          className="mr-[90px]"
          src="/3.png"
          width={300}
          height={300}
          alt="3"
        />
        <Image
          className="mr-[90px]"
          src="/4.png"
          width={300}
          height={300}
          alt="4"
        />
        <Image className="" src="/5.png" width={300} height={300} alt="5" />
      </div>
    </section>
  );
}
