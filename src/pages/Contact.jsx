import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="container w-full min-h-screen bg-off-white">
      <div className="form-container"></div>
    </div>
  );
};
export default Contact;
