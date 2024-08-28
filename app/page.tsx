import Navbar from "@/components/navbar";
import { labels } from "../data/labels";
import { ProductList } from "./components/productlist";

export default function HomePage() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <main className="w-[1209px] ">
          <div className="p-20">
            <h1 className="text-center text-[70px] p-4 text-gray-600">
              {labels.productList}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-5 p-2 ">
            <h2>{labels.filterItem}</h2>
            <input
              className="bg-gray-200 border-none w-[250px] p-2 placeholder-gray-500 placeholder-font-syne"
              type="text"
              onChange={handleChange}
              value={filter}
              placeholder={labels.filterByItem}
            />
          </div>
          <ProductList
            productList={productList}
            filter={filter}
            isLoading={isLoading}
            onDelete={handleDelete}
          />
        </main>
      </div>
    </main>
  );
}
