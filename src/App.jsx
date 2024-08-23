import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [meal, setmeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");

  useEffect(() => {
    const fetchmeal = async () => {
      try {
        const res = await fetch("https://feedme-api.onrender.com/");
        const data = await res.json();
        setmeal(data);
      } catch (error) {
        console.log("error fetching data");
      }
    };
    fetchmeal();
  }, []);
  const searchMeals = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setNotFoundMessage("Please enter a search term.");
      setmeal([]);
      return;
    }

    setLoading(true);
    setNotFoundMessage("");

    fetch(
      `https://feedme-api.onrender.com/meals/search/${encodeURIComponent(
        searchQuery
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setmeal(data);
        setLoading(false);

        if (data.length === 0) {
          setNotFoundMessage("Meal not available, try finding something else.");
        }
      })
      .catch((error) => {
        console.error("There was an error searching the menu!", error);
        setNotFoundMessage("Meal not available, try finding something else.");
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={searchMeals} className="text-center flex flex-col ">
        <input
          type="text"
          placeholder="Search for meals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="border-gray-800 border-4">
          Search
        </button>
      </form>
      
      {/* for loading  */}

      {loading ? (
        <div className="text-center text-gray-700 text-lg font-medium animate-pulse">
          Loading menu...
        </div>
      ) : (
        <div>
          {notFoundMessage ? (
            <div className="text-center text-red-500 font-semibold mb-4">
              {notFoundMessage}
            </div>
          ) : (
            <ul className="meal">
              {meal.flatMap((food, index) => (
                <li key={index}>{food.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default App;
