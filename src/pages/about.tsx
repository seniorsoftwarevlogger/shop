import Image from "next/image";

function TermsPage() {
  return (
    <div className="max-w-xl mx-auto prose prose-blue">
      <h2>Welcome</h2>
      <p>
        You&apos;re viewing the{" "}
        <a
          href="https://shop.seniorsoftwarevlogger.com/"
          title="Learn more about Senior Software Vlogger"
          target="_blank"
          rel="noopener noreferrer"
        >
          Senior Software Vlogger Shop
        </a>{" "}
        by Dima Rozhkov.
      </p>
      <p>
        Dima is a software developer, manager, content creator, and a dad. He is passionate
        about software, vlogging, and spending time with his family.
      </p>
      <p>
        You can find more about Dima&apos;s work on his website <a href="https://seniorsoftwarevlogger.com" target="_blank" rel="noopener noreferrer">Senior Software Vlogger</a>.
      </p>
      <p>
        <Image src="/images/dima.jpg" alt="Dima Rozhkov" width={400} height={400} />
      </p>
    </div>
  );
}

export default TermsPage;
