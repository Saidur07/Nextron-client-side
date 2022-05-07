import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../components/Shared/Loader/Loader";
import MyProduct from "../../components/Shared/MyProduct/MyProduct";
import bar from "../../components/Shared/Progress/Progress";
import auth from "../../firebase.init";
// import useProducts from "../../hooks/useProducts";

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
          signOut(auth);
          navigate("/login");
        }
      }
    }
    getProducts();
  }, []);
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
        fetch(`https://still-eyrie-22111.herokuapp.com/productlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = products.filter((user) => user._id !== id);
              setProducts(remaining);
            }
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
                <Loader></Loader>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
