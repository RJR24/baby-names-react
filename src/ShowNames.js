import React, { useState } from "react";
import "./ShowNames.css";

const ShowNames = (props) => {
  const [state, setstate] = useState("all")
  const [babyNames, setFilter] = useState(props.BabyNames.sort((a, b) => a.name.localeCompare(b.name)));
  const SearchBabyName = (e) => {
    state === "all" ? setFilter(props.BabyNames.filter(baby => baby.name.toLowerCase().includes(e.target.value.toLowerCase()))) :
      setFilter(props.BabyNames.filter(baby => baby.name.toLowerCase().includes(e.target.value.toLowerCase()) && baby.sex === state ));
  }
  const MaleAndFemaleFilter = () => {
    setstate("all");
    setFilter(props.BabyNames.sort((a, b) => a.name.localeCompare(b.name)));
    document.getElementById("Input_Name_JSX").value = "";
    document.getElementById("I_MaleFilter_JSX").style.animation = "none";
    document.getElementById("I_FemaleFilter_JSX").style.animation = "none";
    document.getElementById("Div_M_F_JSX").style.animation = "Sex_Selected infinite 500ms";
  };
  const MaleFilter = () => {
    setstate("m");
    setFilter(props.BabyNames.filter(baby => baby.sex === "m"));
    document.getElementById("Input_Name_JSX").value = "";
    document.getElementById("Div_M_F_JSX").style.animation = "none";
    document.getElementById("I_FemaleFilter_JSX").style.animation = "none";
    document.getElementById("I_MaleFilter_JSX").style.animation = "Sex_Selected infinite 500ms";
  };
  const FemaleFilter = () => {
    setstate("f");
    setFilter(props.BabyNames.filter(baby => baby.sex === "f"));
    document.getElementById("Input_Name_JSX").value = "";
    document.getElementById("Div_M_F_JSX").style.animation = "none";
    document.getElementById("I_MaleFilter_JSX").style.animation = "none";
    document.getElementById("I_FemaleFilter_JSX").style.animation = "Sex_Selected infinite 500ms";
  };

  return (
    <div>
      <div id="Div_Search_JSX" className="Div_Search_CSS">
        <div>
          <input
            type="text"
            id="Input_Name_JSX"
            className="Input_Name_CSS"
            placeholder="Search Names"
            onChange={(e)=> SearchBabyName(e)}
          />
        </div>
        <div id="Div_M_F_JSX" className="Div_M_F_CSS" onClick={MaleAndFemaleFilter}>
          <i
            className="I_C_M_Filter_CSS fas fa-male"
          ></i>
          <i
            className="I_C_F_Filter_CSS fas fa-female"
          ></i>
        </div>
        <i
          id="I_MaleFilter_JSX"
          className="I_MaleFilter_CSS fas fa-male"
          onClick={MaleFilter}
        ></i>
        <i
          id="I_FemaleFilter_JSX"
          className="I_FemailFilter_CSS fas fa-female"
          onClick={FemaleFilter}
        ></i>
      </div>
      <div id="ShowNames.JSX" className="Div_ShowNames_CSS">
        {babyNames.map(
          (baby, index) => {
            return (
              <div
                key={index}
                className={baby.sex === "m" ? (baby.name === "REZA") ? "Div_Me_CSS" : "Div_Male_CSS" : "Div_Female_CSS"}
              >
                {baby.sex === "m" ? ( baby.name === "REZA" ? (<i className="I_CSS fas fa-user-secret"></i>) : (<i className="I_CSS fas fa-male"></i>)
                ) : (
                  <i className="I_CSS fas fa-female"></i>
                )}
                <p className="P_Name_CSS">{baby.name}</p>
              </div>
            );
          }
        )}
        {console.log(props.BabyNames)}
      </div>
    </div>
  );
};

export default ShowNames;
