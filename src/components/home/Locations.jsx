import React from "react";
import SectionHeads from "./SectionHeads";

const Locations = () => {
  return (
    <div className="Location w-full h-fit py-24" id="locations">
      <div className="LocationWrap w-5/6 mx-auto h-full flex flex-col gap-16">
        <SectionHeads text={"Locations"} color={"primary"} />
        <div className="LocationsInner w-full grid grid-cols-1 justify-center">
          <div className=" w-full flex flex-row gap-12 justify-center text-tet">
            <p className=" w-[20%] mb-4">
              48 Igbinaduwa Street, Off Siluko Road, Ogida junction, Benin City,
              Edo State Nigeria
            </p>
            <hr className="w-0.5 h-[110%] bg-zinc-200" />
            <p className=" w-[20%] mb-4">
              8, Uzzi street, Opposite Amagba town hall, GRA, Benin City, Edo
              State, Nigeria
            </p>
          </div>
          <hr className=" w-[80%] h-0.5 mx-auto bg-zinc-200" />
          <div className=" w-full flex flex-row gap-12 justify-center text-tet">
            <p className="w-[20%] mt-4">
              Nicholas Brown clinic, Anointed way, Peanut Junction Opposite
              Muoka foam, Sapele road, Delta State, Nigeria
            </p>
            <hr className="w-0.5 h-[110%] bg-zinc-200" />
            <p className="w-[20%] mt-4 ">
              122, Old Benin-Agbor Road , Ogbeson Quarter, Benin City, Edo
              State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
