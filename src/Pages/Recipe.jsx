

const Recipe = () => {
    return (
        <div>
            <div className="text-center">
                <div className="bg-gray-100 mt-20">
                    <div className="w-1/2 mx-auto mt-8 border-t-2 border-solid border-rose-400"></div>
                </div>
                <h2 className="text-3xl font-semibold mt-5 mb-5">RECIPE CATEGORIES</h2>
                <div className="lg:flex justify-center space-x-10 mt-6">
                    <div className="flex flex-col items-center group">
                        <img 
                            src="https://i.ibb.co/g7Mmkf4/entree-recipes.jpg" 
                            alt="Entrées" 
                            className="w-40 h-40 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
                        />
                        <span className="mt-2 text-lg font-bold transition-colors duration-300 group-hover:text-rose-600">Entrées</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img 
                            src="https://i.ibb.co/9qKbsCd/gluten-free-recipes.jpg" 
                            alt="Quick & Easy" 
                            className="w-40 h-40 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
                        />
                        <span className="mt-2 text-lg font-bold transition-colors duration-300 group-hover:text-rose-600">Quick & Easy</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img 
                            src="https://i.ibb.co/j5Ztz2H/appetizer-recipes.jpg" 
                            alt="Desserts" 
                            className="w-40 h-40 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
                        />
                        <span className="mt-2 text-lg font-bold transition-colors duration-300 group-hover:text-rose-600">Desserts</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img 
                            src="https://i.ibb.co/Cz0KhV3/instant-pot-recipes.jpg" 
                            alt="Soup" 
                            className="w-40 h-40 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
                        />
                        <span className="mt-2 text-lg font-bold transition-colors duration-300 group-hover:text-rose-600">Soup</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
