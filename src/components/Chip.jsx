export default function Chip({ icon, children }) {
  return (
    <div className={`flex justify-center `}>
      <div className="text-sm bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 py-2.5 rounded-full outline outline-neutral-700 outline-offset-[-5px] outline-2 ">
        <div className="flex items-center gap-2">
          {icon}
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
