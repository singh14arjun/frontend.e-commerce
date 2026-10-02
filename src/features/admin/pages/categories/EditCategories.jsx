import React from "react";

export default function EditCategory({ isOpen, category, onClose }) {
  console.log("Category : ", category);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/30
          transition-opacity duration-300 ease-in-out
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Right Drawer */}
      <div
        className={`
          fixed right-0 top-0 z-50 h-screen w-full max-w-md
          bg-white shadow-2xl

          transform
          transition-transform
          duration-300
          ease-in-out

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-text-primary">
              Edit Category
            </h2>

            <p className="mt-1 text-sm text-text-muted">
              Update category information
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-85px)] overflow-y-auto p-6">
          <form className="flex flex-col gap-5">
            {/* Category Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Category Name
              </label>

              <input
                type="text"
                defaultValue={category?.name || ""}
                className="w-full rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Description
              </label>

              <textarea
                defaultValue={category?.description || ""}
                rows={4}
                className="w-full resize-none rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Status
              </label>

              <select
                defaultValue={category?.status ? "true" : "false"}
                className="w-full rounded border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded border border-gray-300 px-5 py-2 transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded bg-primary px-5 py-2 text-white transition hover:opacity-90"
              >
                Update Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
