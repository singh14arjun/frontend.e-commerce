import Container from "../../../../components/common/Container";
import { IoMdArrowForward, IoMdTrash } from "react-icons/io";
import { useEffect, useState } from "react";

import { getCategories } from "../../../auth/api/authService";
import { GiDivergence } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import EditCategory from "./EditCategories";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSeletecdCategory] = useState();
  const [isEditDrawerOpen, setIsEditDrawerOPen] = useState(false);

  const handelEdit = (category) => {
    setSeletecdCategory(category);
    setIsEditDrawerOPen(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();

      console.log("Categories:", response);

      setCategories(response?.data || []);
    } catch (error) {
      console.error(error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Container>
        <div className="py-10">
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-heading font-black text-text-primary">
                Category Management & Taxonomy
              </h1>
              <h3 className=" font-heading  text-text-muted">
                Manage your categories from here for application
              </h3>
            </div>
            <div className="flex  items-center gap-2 bg-primary-light p-2 rounded border text-text-primary font-semibold  border-primary hover:bg-primary cursor-pointer hover:text-text-light">
              <button>Add Category</button>
              <IoMdArrowForward />
            </div>
          </div>
          <div></div>
          <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Name
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Description
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Subcategories
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Total Products
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-text-primary">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr
                    key={category?.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-text-primary">
                      {category?.name || "NA"}
                      <img
                        src={category?.image}
                        className="w-20 h-fit rounded"
                      />
                    </td>

                    <td className="px-6 py-4 text-text-muted">
                      {category?.description || "NA"}
                    </td>

                    <td className="px-6 py-4 text-text-muted">
                      {category?.subCategories?.length || 0}
                    </td>

                    <td className="px-6 py-4 text-text-muted">
                      {category?.totalProducts || 0}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          category?.status
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-danger"
                        }`}
                      >
                        {category?.status ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handelEdit(category)}
                          className="text-sm font-medium text-blue-500 cursor-pointer"
                        >
                          <BiEdit size={20} />
                        </button>

                        <EditCategory
                          isOpen={isEditDrawerOpen}
                          category={selectedCategory}
                          onClose={() => {
                            setIsEditDrawerOPen(false);
                            setSeletecdCategory(null);
                          }}
                        />
                        <button className="text-sm font-medium text-primary ">
                          <GiDivergence size={20} />
                        </button>
                        <button className=" text-danger ">
                          <IoMdTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}
