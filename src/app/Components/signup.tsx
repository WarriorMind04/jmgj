"use client";
import { useState, createContext, useContext } from "react";

// Creamos el contexto para el usuario registrado
const UserContext = createContext<{ name: string } | null>(null);

export default function Registro() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [registeredUser, setRegisteredUser] = useState<{ name: string } | null>(
    null
  );

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Usuario registrado: ", user);
    setRegisteredUser({ name: user.name });
  };

  return (
    <UserContext.Provider value={registeredUser}>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-12">
        {/* Header con el nombre del usuario en la esquina superior derecha */}
        <div className="absolute top-4 right-4 text-white text-lg font-semibold">
          <Header />
        </div>

        {/* Formulario de registro */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold text-white">
            Create your account
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={user.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 border border-gray-400 focus:outline-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={user.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 border border-gray-400 focus:outline-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={user.password}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 border border-gray-400 focus:outline-indigo-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#558C99] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#DF5669]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </UserContext.Provider>
  );
}

// Componente Header para mostrar el nombre del usuario registrado
function Header() {
  const user = useContext(UserContext);
  return <div>{user ? `Welcome, ${user.name}!` : "Not logged in"}</div>;
}
