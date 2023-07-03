/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function ProductDetails(props) {
  //
  const {
    cartList,
    handlerDeleteProduct,
    handlerEditProduct,
    editItem,
    isEditing,
    handlerCancelEdit,
    handlerEditName,
    handlerEditPrice,
    handlerEditQuantity,
    handlerEditDiscount,
    handlerEditSubmit,
  } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const product = cartList.find((item) => item.id === id);
  //
  return (
    <div className="rounded-xl group block relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 shadow-2xl shadow-blue-700 flex-row">
      <img
        src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt="food"
        className="h-[100px] w-full object-cover sm:h-[200px] border-black border-2 rounded-lg"
      />

      <div className="mt-3 flex justify-between text-sm">
        <div>
          {isEditing ? (
            <div className="flex flex-col">
              <span>
                Name:
                <Input
                  className="border-2 border-red-600 mb-2"
                  inputType="text"
                  inputValue={editItem.name || ""}
                  inputFunc={handlerEditName}
                />
              </span>
              <span>
                Price:
                <Input
                  className="border-2 border-red-600 mb-2"
                  inputType="number"
                  inputValue={editItem.price || 0}
                  inputFunc={handlerEditPrice}
                />
              </span>
              <span>
                Quantity:
                <Input
                  className="border-2 border-red-600 mb-2"
                  inputType="number"
                  inputValue={editItem.quantity || ""}
                  inputFunc={handlerEditQuantity}
                />
              </span>
              <span>
                Discount:
                <Input
                  className="border-2 border-red-600 mb-2"
                  inputType="number"
                  inputValue={editItem.discount || ""}
                  inputFunc={handlerEditDiscount}
                />
              </span>
            </div>
          ) : (
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                {product.name}
              </h3>

              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Quantity: {product.quantity}
              </p>
              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Discount: {product.discount}%
              </p>
            </div>
          )}
        </div>

        {isEditing || <p className="text-gray-900">${product.price}</p>}
      </div>

      {isEditing ? (
        <div>
          <Button
            className=" w-full block rounded bg-zinc-950 px-5 py-3 text-sm text-slate-50 transition hover:bg-zinc-800 my-5"
            buttonLabel="Submit"
            buttonFunc={() => {
              handlerEditSubmit(), navigate("/view");
            }}
          />
        </div>
      ) : (
        <Button
          className=" w-full block rounded bg-zinc-950 px-5 py-3 text-sm text-slate-50 transition hover:bg-zinc-800 my-5"
          buttonLabel="Edit"
          buttonFunc={() => {
            handlerEditProduct(product.id);
          }}
        />
      )}

      {isEditing ? (
        <div>
          <Button
            className=" w-full block rounded bg-slate-400 px-5 py-3 text-sm text-slate-50 cursor-not-allowed"
            buttonLabel="Delete"
          />
          <Button
            className=" w-full block rounded bg-red-700 px-5 py-3 text-sm text-slate-50 transition hover:bg-red-800 my-5"
            buttonLabel="Cancel"
            buttonFunc={handlerCancelEdit}
          />
        </div>
      ) : (
        <Button
          className=" w-full block rounded bg-red-700 px-5 py-3 text-sm text-slate-50 transition hover:bg-red-800"
          buttonLabel="Delete"
          buttonFunc={() => {
            handlerDeleteProduct(product.id);
            navigate("/view");
          }}
        />
      )}
    </div>
  );
}

export default ProductDetails;
