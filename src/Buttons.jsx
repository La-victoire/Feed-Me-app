import React, { useState, useEffect } from "react";

function Buttons() {
  const [randomFood, setRandomFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://feedme-api.onrender.com/`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setFood(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  const filterType = async (type) => {
    if (type === "Random") {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://feedme-api.onrender.com/meals/random`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setFilteredFood(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
      setIsLoading(false);
    } else if (type === "") {
      setFilteredFood(food); // Show all food if type is empty
    } else {
      const filtered = food.filter((item) => item.type === type);
      setFilteredFood(filtered);
    }
  };
  const fetchRandomData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://feedme-api.onrender.com/meals/random`
      );
      const result = await response.json();

      if (result && typeof result === "object") {
        setRandomFood(result);
      } else {
        console.error("API response is not an object:", result);
        setRandomFood(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setRandomFood(null);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        {/* Button Section */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-7 xl:gap-8 mt-5">
            {/* this first button is the random button  */}
            <button
              onClick={fetchRandomData}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Random
            </button>
            {["Breakfast", "Lunch", "Dinner", "Dessert"].map((type) => (
              <button
                key={type}
                onClick={() => filterType(type)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div>
          {isLoading && <p>Loading...</p>}

          {!isLoading && filteredFood.length > 0 && filteredFood.map((item) => (
            <div
              key={item.id}
            >
              <div>
                <div>
                  <p className="p-5">
                    {item.name}
                  </p>
                  <br />
                  {item.ingredients && item.ingredients.length > 0 && (
                    <p className="text-black font-semibold">
                      <span className="font-bold">Ingredients:</span>
                      <ul>
                        {item.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {!isLoading && randomFood && (
            <div>
              <h3>Random Food:</h3>
              <p>Name: {randomFood.name}</p>
              <p>Type: {randomFood.type}</p>
              {randomFood.ingredients && randomFood.ingredients.length > 0 && (
                <>
                  <p>Ingredients:</p>
                  <ul>
                    {randomFood.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Buttons;
