/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
function AddProduct(props) {
  const {
    isAddingProduct,
    handlerStart,
    addProduct,
    handlerAddProductName,
    handlerAddProductPrice,
    handlerAddProductQuantity,
    handlerAddProductDiscount,
    handlerAddProductCancel,
    handlerAddProductSubmit,
  } = props;
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-white rounded-xl shadow-2xl shadow-blue-700">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Oranges"
                src="https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="lg:pt-12 lg:pb-6">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Grow your Product List
                </h2>

                <p className="mt-4 text-gray-600">
                  With our intuitive interface, you can easily add new products
                  with just a few clicks. Spend more time focusing on growing
                  your business!
                </p>
              </div>

              {isAddingProduct ? (
                <div className="my-2">
                  <div className="flex flex-col mx-2 mt-10 justify-evenly">
                    <p className="bg-gray-950 text-slate-50 rounded w-24 text-center mb-2">
                      Name
                    </p>
                    <Input
                      className="border border-zinc-950 mb-5 w-72"
                      inputType="text"
                      inputValue={addProduct.name}
                      inputFunc={handlerAddProductName}
                    />
                    <p className="bg-gray-950 text-slate-50 rounded w-24 text-center mb-2">
                      Price
                    </p>
                    <Input
                      className="border border-zinc-950 mb-5 w-72"
                      inputType="number"
                      inputValue={addProduct.price}
                      inputFunc={handlerAddProductPrice}
                    />
                    <p className="bg-gray-950 text-slate-50 rounded w-24 text-center mb-2">
                      Quantity
                    </p>
                    <Input
                      className="border border-zinc-950 mb-5 w-72"
                      inputType="number"
                      inputValue={addProduct.quantity}
                      inputFunc={handlerAddProductQuantity}
                    />
                    <p className="bg-gray-950 text-slate-50 rounded w-24 text-center mb-2">
                      Discount
                    </p>
                    <Input
                      className="border border-zinc-950 w-72"
                      inputType="number"
                      inputValue={addProduct.discount}
                      inputFunc={handlerAddProductDiscount}
                    />
                  </div>

                  <div className="flex flex-row">
                    <Button
                      className="mt-8 inline-block rounded bg-zinc-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-yellow-400 mx-2"
                      buttonLabel="Submit"
                      buttonFunc={() => {
                        handlerAddProductSubmit();
                        navigate("/view");
                      }}
                    />
                    <Button
                      className="mt-8 inline-block rounded bg-zinc-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-yellow-400"
                      buttonLabel="Cancel"
                      buttonFunc={handlerAddProductCancel}
                    />
                  </div>
                </div>
              ) : (
                <Button
                  className="mt-8 inline-block rounded bg-zinc-950 px-12 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-yellow-400"
                  buttonLabel="Get Started"
                  buttonFunc={handlerStart}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
