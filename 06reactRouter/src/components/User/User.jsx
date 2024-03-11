
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams(); //fetch data from the link
  return (
    <div className="bg-gray-500 text-white text-3xl p-3 rounded-md">
      User:{userid}
    </div>
  );
};

export default User;
