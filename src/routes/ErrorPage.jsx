import Button from "../components/Button";
import ErrorSVG from "../components/ErrorSVG";

function ErrorPage() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <ErrorSVG />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        <Button buttonLabel="Go Back Home" path="/" />
      </div>
    </div>
  );
}

export default ErrorPage;
