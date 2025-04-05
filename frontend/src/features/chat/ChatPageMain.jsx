import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatPageMain = () => {
  const { id } = useParams();

  useEffect(() => {
   
    console.log("Project ID:", id);
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Project Page for ID: {id}</h1>
    </div>
  );
};

export default ChatPageMain;
