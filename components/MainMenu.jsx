export function MainMenu({ items }) {
  return (
    <div className="hidden sm:flex">
      {items.map((item) => (
        <a key={item.label} className="px-3 py-2" href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
