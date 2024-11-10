import { useState } from "react";
import { push, set, ref, getDatabase } from "firebase/database";
import app from "../../lib/firebase";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(groupName, groupType);
      const db = getDatabase(app);
      // setGroupName("");
      const docRef = await push(ref(db, "groups"));
      set(docRef, {
        name: groupName,
        type: groupType,
      });
      // console.log("Document written with ID: ", docRef.id);
      // setGroupType("");
      toast.success("Group created successfully !");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-3 md:space-y-6 p-3 md:p-6 rounded-lg max-w-96"
    >
      <h1>Add Group</h1>
      <div className="inputField">
        <label htmlFor="groupName">Group Name</label>
        <input
          type="groupName"
          id="groupName"
          placeholder="ex: Fitness"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
      </div>
      <div className="inputField">
        <label htmlFor="groupType">Group Type</label>
        <input
          type="groupType"
          id="groupType"
          placeholder="ex: Sports"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
          required
        />
      </div>
      <button type="submit">add group</button>
    </form>
  );
};

export default LoginForm;
