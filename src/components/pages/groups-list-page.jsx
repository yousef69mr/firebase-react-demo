import { useEffect, useState } from "react";
import app from "../../lib/firebase";
import { get, getDatabase, ref } from "firebase/database";
import toast from "react-hot-toast";

const GroupsListPage = () => {
  const [groups, setGroups] = useState([]);

  const fetchGroups = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, "groups"); // Create a reference to the "groups" path
      const snapshot = await get(dbRef); // Retrieve data from the reference

      if (snapshot.exists()) {
        console.log(snapshot.val());
        setGroups(Object.values(snapshot.val())); // Convert the snapshot to an array if needed
      } else {
        toast.error("No data available in the database.");
      }
    } catch (error) {
      toast.error("Database error: " + error.message);
      console.error("Database fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <main className="general-padding">
      <button onClick={fetchGroups}>Fetch Groups</button>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {groups?.map((group, index) => (
          <article
            key={index}
            className="flex rounded-lg border border-violet-300 p-3 items-start justify-center gap-3"
          >
            <label htmlFor="groupName">Name :</label>
            <h2 id="groupName" className="text-violet-400 font-bold">
              {group.name}
            </h2>
            <label htmlFor="groupType">Type :</label>
            <p id="groupType" className="text-violet-400 font-bold">
              {group.type}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default GroupsListPage;
