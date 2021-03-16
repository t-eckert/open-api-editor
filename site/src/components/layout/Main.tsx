import MainLeading from "./MainLeading";
import MainCenter from "./MainCenter";
import MainFollowing from "./MainFollowing";

import Documents from "../Documents";

const Main = (props: any) => {
  return (
    <main className="flex flex-row w-screen">
      <MainLeading className="w-8" />
      <MainCenter>
        <Documents documents={props.documents} />
      </MainCenter>
      <MainFollowing className="w-8" />
    </main>
  );
};

export default Main;
