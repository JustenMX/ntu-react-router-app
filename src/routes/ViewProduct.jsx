/* eslint-disable react/prop-types */
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
function ViewProduct(props) {
  const { cartList } = props;
  return (
    <>
      <div className="mx-auto max-w-screen-xl max-h-full mb-20 mt-10  flex flex-row">
        <div
          className="rounded-xl relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 shadow-2xl shadow-blue-700 flex-row"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
            <Link to="/">
              <span className="sr-only">Close cart</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </button>

          <div className="mt-4 space-y-6">
            <div className="mt-4 space-y-6 h-96 overflow-y-auto">
              {cartList.map((item) => (
                <ul className="space-y-4" key={item.id}>
                  <li className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80"
                      alt="food"
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <NavLink
                        to={item.id}
                        className={({ isActive }) =>
                          isActive
                            ? "text-sm text-slate-50 bg-zinc-950 rounded p-1"
                            : "text-sm text-zinc-950 hover:bg-zinc-950 hover:text-slate-50 hover:p-1 rounded"
                        }
                      >
                        {item.name}
                      </NavLink>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Price:</dt>
                          <dd className="inline">$ {item.price}</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              ))}
            </div>

            <div className="space-y-4 text-center">
              <p className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600">
                Total Cart Items: {cartList.length}
              </p>

              <Button
                className=" w-full block rounded bg-zinc-950 px-5 py-3 text-sm text-slate-50 transition hover:bg-zinc-800"
                buttonLabel="Checkout"
                path="/"
              />

              <Button
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                buttonLabel="Continue Shopping"
                path="/"
              />
            </div>
          </div>
        </div>
        <div className="flex-row m-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
