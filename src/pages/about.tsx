import Image from "next/image";

function TermsPage() {
  return (
    <div className="max-w-xl mx-auto prose prose-blue">
      <h2>Welcome</h2>
      <p>
        Hey, welcome to my shop! I&apos;m Dima, a software developer, manager, content creator, and a dad.
      </p>
      <p>
        I&apos;ve been creating software for over 17 years and I&apos;ve been vlogging about software development for over 10 years. Here you can find some of my favorite memes around software development that I&apos;ve found and created.
      </p>
      <p>
        You can find more about my work on my website <a href="https://seniorsoftwarevlogger.com" target="_blank" rel="noopener noreferrer">Senior Software Vlogger</a>.
      </p>
      <p className="mt-8 flex justify-center">
        <Image src="/images/dima.jpg" alt="Dima Rozhkov" width={200} height={200} className="rounded-full" />
      </p>
    </div>
  );
}

export default TermsPage;
