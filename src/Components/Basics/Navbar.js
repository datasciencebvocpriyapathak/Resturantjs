import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group ">
          {menuList.map((element) => {
            return (
              <>
                <button
                  className="btn-group__item "
                  onClick={() => filterItem(element)}
                >
                  {element}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
