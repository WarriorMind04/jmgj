"use client";
import { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("bg-gray-500");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <div
        className={`w-96 h-48  rounded-md shadow-lg transition ${color}`}
      ></div>
      <div className="grid grid-cols-2 gaps-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("bg-blue-500")}
        >
          Color 1
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("bg-green-500")}
        >
          Color 2
        </button>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("bg-orange-500")}
        >
          Color 3
        </button>
        <button
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("bg-purple-500")}
        >
          Color 4
        </button>
      </div>
    </div>
  );
}
