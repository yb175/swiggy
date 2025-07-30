export default function DineCards({dineData}){ 
    return (
       <div className="flex flex-col items-center justify-center gap-4 p-4">
            <img 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + dineData.info.mediaFiles[0].url
            }
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-lg"
            ></img>
       </div>
    )
}