


const Recipe = () => {
    return (
        <div>
             <div className="text-center">
             <div className="bg-gray-100 mt-20">
    <div className="w-1/2 mx-auto mt-8 border-t-2 border-solid border-rose-400"></div>
</div>
        <h2 className="text-3xl font-semibold mt-5
        mb-5">RECIPE CATEGORIES</h2>
        <div className="lg:flex justify-center space-x-10 mt-6">
          <div
          className="flex flex-col items-center">
            <img src="https://i.ibb.co/g7Mmkf4/entree-recipes.jpg" alt="Entrées" className="w-40 h-40 rounded-full"/>
            <span className="mt-2 text-lg font-bold">Entrées</span>
          
          </div>
          <div  className="flex flex-col items-center">
            <img src="https://i.ibb.co/9qKbsCd/gluten-free-recipes.jpg" alt="Quick & Easy" className="w-40 h-40 rounded-full"/>
            <span className="mt-2 text-lg font-bold">Quick & Easy</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/j5Ztz2H/appetizer-recipes.jpg" alt="Desserts" className="w-40 h-40 rounded-full"/>
            <span className="mt-2 text-lg font-bold">Desserts</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.ibb.co/Cz0KhV3/instant-pot-recipes.jpg" alt="Soup" className="w-40 h-40 rounded-full"/>
            <span className="mt-2 text-lg font-bold">Soup</span>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Recipe;