type Props = {
  text: string;
};

const TitleToken = (props: Props) => {
  return (
    <div className="relative inline-block z-10 px-3 py-1 font-medium text-sm bg-white shadow rounded-xl">
      <h1>{props.text}</h1>
    </div>
  );
};

export default TitleToken;
