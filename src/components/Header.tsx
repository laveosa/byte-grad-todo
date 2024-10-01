const Header = ({ todoList }) => {
  const completedTodosAmount = todoList
    ? todoList.filter((item) => item.isCompleted).length
    : 0;

  return (
    <header className="col-[1/3] row-[1/2] flex items-center justify-between border-b border-black/[0.04] bg-[#fbf5ed] px-[20px]">
      <img
        src="https://bytegrad.com/course-assets/react-nextjs/dots.png"
        alt="logo"
      />
      <p>
        <span className="font-bold">{completedTodosAmount}</span> /{' '}
        {todoList.length} todos completed
      </p>
    </header>
  );
};

export default Header;
