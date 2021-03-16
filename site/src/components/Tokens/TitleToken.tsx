type Props = {
  text: string;
};

const TitleToken = (props: Props) => {
  return (
    <div className="px-4 py-2 font-medium text-sm bg-white shadow rounded-xl">
      <h1>{props.text}</h1>
    </div>
  );
};

export default TitleToken;
