/* eslint-disable react/prop-types */
export default function Colors({ color,setData,setColor }) {
  return (
    <div className="text-white">
      <h3 className="capitalize font-medium leading-[150%]">available color</h3>
      <div className=" mt-4 mb-8 flex gap-[17px]">
        {color.length &&
          color.map((single, index) => {
            const style = {
              background: `${single.hexCode}`,
            };
            return (
              <div
                className="flex gap-[13px] align-middle cursor-pointer"
                key={index}
                onClick={()=>setData({type:'color',payload:single.hexCode})}
              >
                <span
                  className={`w-5 h-5 rounded-full outline-2 outline-offset-4 outline-neutral-800 block ${setColor == single.hexCode && 'outline'}`}
                  style={style}
                ></span>
                <p className="leading-[110%] uppercase text-white">{single.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
