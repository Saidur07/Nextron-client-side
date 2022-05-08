import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Shared/Loader/Loader";
import MyProduct from "../../components/Shared/MyProduct/MyProduct";
import bar from "../../components/Shared/Progress/Progress";
import auth from "../../firebase.init";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  bar();
  useEffect(() => {
    async function getProducts() {
      const url = `https://still-eyrie-22111.herokuapp.com/productlist?email=${user.email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          localStorage.removeItem("token");
          console.log("Error :(");
        }
      }
    }
    getProducts();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      text: "Please don't delete any product if you are here just for visiting. It will also delete from the database. Consider creating you own product and then delete 🥶",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://still-eyrie-22111.herokuapp.com/product/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          });
        Swal.fire(
          "Deleted!",
          "The product delted successfully from the database",
          "success"
        );
      }
    });
  };
  return (
    <div>
      <section className="bg-realBlack pt-4 px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-sky-400 mb-2 block">
                  Your Products
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
                >
                  Products in the Warehouse
                </h2>
                <p className="text-base text-slate-200">
                  There are some of the products provided by you.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="flex flex-wrap -mx-4">
              {products.length === 0 ? (
                <div className="flex flex-col mx-auto">
                  <Loader></Loader>
                  <h1 className="text-white text-center text-xl md:tracking-widest md:text-4xl my-4 font-mono font-extrabold">
                    Nothing Found. Nothing Could Be Found.
                  </h1>
                </div>
              ) : (
                products.map((product) => (
                  <MyProduct
                    key={product._id}
                    data={product}
                    button={handleDelete}
                  ></MyProduct>
                ))
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate("/products")}
                className="w-2/3 mx-auto inline-flex items-center justify-center h-12 px-6 font-medium text-gray-100 transition duration-200 rounded shadow-md bg-darku border-0 hover:bg-opacity-75 focus:shadow-outline focus:outline-none active:scale-90 text-lg md:text-xl md:tracking-wide my-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="white"
              >
                Manage Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
