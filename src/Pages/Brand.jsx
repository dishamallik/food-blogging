import { HiArrowLongRight } from "react-icons/hi2";


const Brand = () => {
    return (
        <div className="container mx-auto mt-10">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold">SEE RECIPES BY BRAND</h1>
    <div className="border-b-2 border-red-600 w-16 mx-auto mt-2"></div> 
  </div>
  <div className="flex flex-wrap justify-center gap-4">
    <div className="card w-72 sm:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-1xl text-rose-800  ">Explore Recipes</h2>
        
      </div>
      <figure><img src="https://i.ibb.co/6nLhPDR/bon.webp" alt="Shoes" /></figure>
    </div>
    <div className="card w-72 sm:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-rose-800">Explore Recipes</h2>
       
       
      </div>
      <figure><img src="https://i.ibb.co/zJTsPXP/Gourmet-Square.webp" alt="Hats" /></figure>
    </div>
    <div className="card w-72 sm:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-rose-800">Explore Recipes</h2>
       
      </div>
      <figure><img src="https://i.ibb.co/MnL3NZR/Cookbook-Sqaure.webp" alt="Gloves" /></figure>
    </div>
   
  </div>
</div>

    );
};

export default Brand;