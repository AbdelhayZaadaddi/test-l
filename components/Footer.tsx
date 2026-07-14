import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <Logo className="text-white" />

        <p className="text-xs leading-6 text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="text-[11px] font-bold leading-5 text-primary">
          Le passage classique «Lorem ipsum dolor sit amet…» est attribué à un
          remaniage du texte
          <br />
          du philosophe romain Cicéron 45 de C. De Finibus Bonorum
        </p>
      </div>
    </footer>
  );
}
