import React, { useState } from "react";

const Categories = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, "dis e");
    console.log(e.target, "dis e target");

    console.log(e?.target?.form);
    // setValue(e.target.value);
  };
  console.log(value);
  return (
    <>
      <form onSubmit={handleSubmit} className="pl-2">
        <div>
          <div>
            <input type="checkbox" id="artist_name" />
            <label htmlFor="artist_name" className="px-2">
              Artist Name
            </label>
          </div>
          <div className="checkbox-group">
            Mode:
            <span>
              <input type="checkbox" id="mode-solo" />
              <label htmlFor="mode-solo" className="px-2">
                Solo
              </label>
            </span>
            <span>
              <input type="checkbox" id="mode-duet" />
              <label htmlFor="mode-duet" className="px-2">
                Duet
              </label>
            </span>
            <span>
              <input type="checkbox" id="mode-trio" />
              <label htmlFor="mode-trio" className="px-2">
                Trio
              </label>
            </span>
            <span>
              <input type="checkbox" id="mode-quartet" />
              <label htmlFor="mode-quartet" className="px-2">
                Quartet
              </label>
            </span>
          </div>
          {/* <label htmlFor="mode">Artist Name</label>
          <input type="checkbox" id="artist_name" />
          <label htmlFor="artist_name">Artist Name</label> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Categories;
