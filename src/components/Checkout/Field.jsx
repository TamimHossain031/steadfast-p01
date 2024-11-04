/* eslint-disable react/prop-types */

export default function Field({ children, error, label, htmlFor, hasBtn }) {
   
    
  return (
    <>
      <div className="flex mt-4 gap-4 items-center">
        <div className="text-left w-full flex-1">
          {label && (
            <label
              htmlFor={htmlFor}
              className="font-medium text-[16px] leading-[150%] text-primary capitalize "
            >
              {label}
            </label>
          )}
          {children}
        </div>
        {hasBtn && (
          <button className="min-w-[127px] h-[64px] bg-cardTitle rounded text-accent1">
            Send
          </button>
        )}
      </div>
      {error && <small className="text-red">{error?.message}</small>}
    </>
  );
}
