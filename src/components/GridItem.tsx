function GridItem({
  className,
  id,
  text,
  isCompleted,
  onToggleTodo,
  onRemoveTodo,
}) {
  function onRemove(event) {
    event.stopPropagation();
    onRemoveTodo(id);
  }

  return (
    <div
      className={`flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[14px] ${className}`}
      onClick={() => onToggleTodo(id)}
    >
      <span className={isCompleted ? 'text-[#ccc] line-through' : ''}>
        {text}
      </span>
      <button onClick={onRemove}>❌</button>
    </div>
  );
}

export default GridItem;
