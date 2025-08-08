const SectionHeads = ({ text }) => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center w-full ">
      <h2 className={`text-sky-500 text-center font-medium text-2xl`}>
        {text}
      </h2>
      <hr className=" w-8 h-0.5 bg-tet" />
    </div>
  );
};

export default SectionHeads;
