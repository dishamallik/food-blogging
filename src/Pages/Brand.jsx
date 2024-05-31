import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Brand = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">SEE RECIPES BY BRAND</h1>
                <div className="border-b-2 border-red-600 w-16 mx-auto mt-2"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    {
                        imgSrc: "https://i.ibb.co/6nLhPDR/bon.webp",
                        altText: "Bon Appetit"
                    },
                    {
                        imgSrc: "https://i.ibb.co/zJTsPXP/Gourmet-Square.webp",
                        altText: "Gourmet"
                    },
                    {
                        imgSrc: "https://i.ibb.co/MnL3NZR/Cookbook-Sqaure.webp",
                        altText: "Cookbook"
                    }
                ].map((brand, index) => (
                    <motion.div
                        key={index}
                        className="card w-72 sm:w-96 bg-base-100 shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
                    >
                        <div className="card-body transition-colors duration-300">
                            <h2 className="card-title text-1xl text-rose-800 flex items-center hover:text-rose-600">
                                Explore Recipes <FaArrowRight className="ml-2" />
                            </h2>
                        </div>
                        <figure>
                            <img src={brand.imgSrc} alt={brand.altText} />
                        </figure>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
