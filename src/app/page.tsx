export default function Home() {
  return (
    <>
      <main>
        <p className="font-poppins pb-4 text-base">
          Gustavo Santana. Front-end Developer. Gamer.
        </p>

        <h1 className="font-unbounded text-5xl pb-4">
          Hi— I'm Gustavo. Creating dreams through programming.
        </h1>

        <div className="text-xl">
          <p>
            I'm brazilian, and I'm a front-end developer. I'm currently working
            with React and Next.js.
          </p>

          <p>
            I love to play games, and I'm a big fan of the{" "}
            <span className="text-red-400">Red Dead Redemption 2</span>.
          </p>
        </div>

        <p className="mt-8 ">
          You want chat with me?{" "}
          <a href="mailto:gustavossw@hotmail.com" className="text-cyan-400">
            Send me an email
          </a>
          .
        </p>
      </main>
    </>
  );
}
