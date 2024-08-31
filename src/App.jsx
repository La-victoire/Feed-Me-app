import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"; 

function Search() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState("");

  useEffect(() => {
   
  }, []);

  const searchMeals = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setNotFoundMessage("Please enter a search term.");
      setMeal([]);
      return;
    }

    setLoading(true);
    setNotFoundMessage("");

    const fetchMeal = async () => {
      try {
        const res = await fetch("/db.json");
        const data = await res.json();
        const filteredMeals = data.filter((food) => {
          const name = food.name.toLowerCase();
          const query = searchQuery.toLowerCase();
          return name.includes(query);
        });

        if (filteredMeals.length === 0) {
          setNotFoundMessage("Meal not available, try finding something else.");
        } else {
          setMeal(filteredMeals);
        }
      } catch (error) {
        console.log("error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  };

  return (
    <>
      <form onSubmit={searchMeals} className=" flex flex-col"> {/* my custom design */}
        <input
          type="text"
          placeholder="Search for meals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="magnificent"
          required
        />
        <button type="submit" className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white text-base py-2 px-4 rounded-md border-none cursor-pointer transition-transform duration-300 ease-in-out hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 hover:scale-105">
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
            <ul className="meal list-none p-0">
              {meal.map((food, index) => (
                <li key={index} className="bg-gray-800 text-center p-4 mb-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-700">
                  <Link to={`/food/${food.id}`}>{food.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
