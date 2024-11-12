export default function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="flex sm:flex-col justify-between items-center pb-7 border-t-2 pt-5">
        <p className="text-neutral-400 text-sm">
          &copy; 2024 Finament. All Right Reserved
        </p>
        <div className="flex items-center gap-8">
          <p className="text-neutral-400 text-sm">Term & Condition</p>
          <p className="text-neutral-400 text-sm">Privacy Policy</p>
          <p className="text-neutral-400 text-sm">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
